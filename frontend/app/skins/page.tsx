import Link from "next/link";
import { PageSection } from "../components/PageSection";
import { skinsApi, type SkinPost } from "@/lib/api";
import { SkinsToolbar } from "./SkinsToolbar";

export const metadata = {
  title: "Скины — RuCraft",
  description: "Скины для Minecraft: смешные, для девочек, для мальчиков, аниме. Фото и развёртка для скачивания.",
};

const apiErrorMessage = (
  <p className="form-error">
    Не удалось загрузить данные. Убедитесь, что бэкенд запущен (<code>php artisan serve</code>) и в <code>.env.local</code> указан <code>NEXT_PUBLIC_API_URL</code> (например, http://localhost:8000/api).
  </p>
);

async function getSkins(params: {
  page?: number;
  category?: string;
}): Promise<
  | { data: SkinPost[]; current_page: number; last_page: number; total: number; error?: false }
  | { data: []; error: true }
> {
  try {
    const res = await skinsApi.index({
      page: params.page ?? 1,
      category: params.category || undefined,
    });
    return {
      data: res.data,
      current_page: res.current_page,
      last_page: res.last_page,
      total: res.total,
    };
  } catch (err) {
    console.error("Skins fetch failed:", err);
    return { data: [], error: true as const };
  }
}

export default async function SkinsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(String(params?.page ?? "1"), 10) || 1);
  const category = params?.category ?? "";

  const result = await getSkins({ page, category: category || undefined });
  const fetchFailed = "error" in result && result.error;
  const skins = result.data;
  const currentPage = fetchFailed ? 1 : result.current_page;
  const lastPage = fetchFailed ? 1 : result.last_page;
  const total = fetchFailed ? 0 : result.total;

  return (
    <div className="page-content">
      <PageSection title="Скины">
        <SkinsToolbar />

        {fetchFailed ? (
          apiErrorMessage
        ) : skins.length === 0 ? (
          <p>Скинов пока нет.</p>
        ) : (
          <>
            <div className="skins-page-grid">
              {skins.map((skin) => (
                <article key={skin.id} className="skins-page-card">
                  <div className="skins-page-card-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skin.image ?? skin.image_url ?? "/placeholder-skin.png"}
                      alt={skin.title}
                    />
                  </div>
                  <h3 className="skins-page-card-title">{skin.title}</h3>
                  <p className="skins-page-card-category">{skin.category}</p>
                  <div className="skins-page-card-footer">
                    {skin.file_url ? (
                      <a
                        href={skin.file_url}
                        className="skins-download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Скачать
                      </a>
                    ) : (
                      <Link href={`/skins/${skin.id}`} className="skins-download-btn">
                        Подробнее
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {lastPage > 1 && (
              <nav className="skins-pagination" aria-label="Пагинация">
                {currentPage > 1 && (
                  <Link
                    href={
                      category
                        ? `/skins?category=${encodeURIComponent(category)}&page=${currentPage - 1}`
                        : `/skins?page=${currentPage - 1}`
                    }
                    className="skins-pagination-link"
                  >
                    ← Назад
                  </Link>
                )}
                <span className="skins-pagination-info">
                  Страница {currentPage} из {lastPage} (всего {total})
                </span>
                {currentPage < lastPage && (
                  <Link
                    href={
                      category
                        ? `/skins?category=${encodeURIComponent(category)}&page=${currentPage + 1}`
                        : `/skins?page=${currentPage + 1}`
                    }
                    className="skins-pagination-link"
                  >
                    Вперёд →
                  </Link>
                )}
              </nav>
            )}
          </>
        )}
      </PageSection>
    </div>
  );
}
