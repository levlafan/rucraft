import Link from "next/link";
import { BackendStatus } from "./components/BackendStatus";
import { HeroSlider } from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <BackendStatus />
      </main>

      {/* Блок Постройки: 86px от слайдера, заголовок ПОСТРОЙКИ, 3 картинки, кнопка БОЛЬШЕ >>> */}
      <section className="builds-block">
        <h2 className="builds-title">ПОСТРОЙКИ</h2>
        <div className="builds-gallery">
          <div className="builds-img-wrap builds-img-1">
            <div className="builds-img-placeholder">Постройка 1</div>
            <div className="builds-more-wrap">
              <Link href="/builds" className="builds-more-btn">
                БОЛЬШЕ &gt;&gt;&gt;
              </Link>
            </div>
          </div>
          <div className="builds-img-wrap builds-img-2">
            <div className="builds-img-placeholder">Постройка 2</div>
          </div>
          <div className="builds-img-wrap builds-img-3">
            <div className="builds-img-placeholder">Постройка 3</div>
          </div>
        </div>
      </section>

      {/* Блок cRbys: 70px от построек, 4 карточки 305×440, 2 кнопки в ряд */}
      <section className="skins-block">
        <h2 className="section-title-cyan">cRbys</h2>
        <div className="skins-cards-row">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skin-card-main">
              <div className="builds-img-placeholder">Скин {i}</div>
            </div>
          ))}
        </div>
        <div className="skins-buttons-row">
          <Link href="/skins" className="skins-btn-more">
            БОЛЬШЕ &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
          </Link>
          <Link href="/skins" className="skins-btn-all">
            ВСЕ СКИНЫ &gt;&gt;&gt;&gt;&gt;
          </Link>
        </div>
      </section>

      {/* Блок СИДЫ: 108px от скинов, слайдер 1283×474, инфо о сиде, кнопка БОЛЬШЕ >>> */}
      <section className="seeds-block">
        <h2 className="section-title-cyan">СИДЫ</h2>
        <div className="seeds-slider-wrap">
          <div className="seeds-slider-track">
            <div className="seeds-slide">
              <div className="builds-img-placeholder seeds-slide-bg">Слайд сида</div>
              <div className="seeds-slide-info">
                <div className="seeds-slide-number">−1234567890123456789</div>
                <div className="seeds-slide-name">Название сида</div>
              </div>
              <div className="seeds-more-wrap">
                <Link href="/seeds" className="builds-more-btn">
                  БОЛЬШЕ &gt;&gt;&gt;
                </Link>
              </div>
            </div>
          </div>
          <button type="button" className="seeds-nav-btn prev" aria-label="Предыдущий" />
          <button type="button" className="seeds-nav-btn next" aria-label="Следующий" />
        </div>
      </section>

      {/* Блок моДЫ: 84px от сидов, 2 картинки 1286×393, кнопка на всю ширину */}
      <section className="mods-block-home">
        <h2 className="section-title-cyan">моДЫ</h2>
        <div className="mods-images-row">
          <div className="mods-img-wrap">
            <div className="builds-img-placeholder mods-img-fill">Картинка 1</div>
            <span className="mods-img-label-left">ХОРРОРЫ</span>
          </div>
          <div className="mods-img-wrap">
            <div className="builds-img-placeholder mods-img-fill">Картинка 2</div>
            <span className="mods-img-label-right">
              ИНДУСТР<br />иаль<br />ные
            </span>
          </div>
          <Link href="/mods" className="mods-more-full">
            БОЛЬШЕ &gt;&gt;&gt;
          </Link>
        </div>
      </section>
    </>
  );
}
