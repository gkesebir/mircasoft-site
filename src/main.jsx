import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "AI Puzzle Studio",
    type: "Oyun",
    summary:
      "Oyuncunun seçimlerine göre yeni bölümler, ipuçları ve zorluk eğrisi oluşturan yapay zeka destekli bulmaca deneyimi.",
    status: "Yakında"
  },
  {
    name: "Quest Maker AI",
    type: "Uygulama",
    summary:
      "Kısa fikirlerden görev akışları, karakter notları ve oyun içi metinler tasarlamaya yardımcı üretken araç.",
    status: "Beta"
  },
  {
    name: "Arcade Bot Arena",
    type: "Oyun",
    summary:
      "Kendi davranış stilini öğrenen rakiplerle hızlı maçlar sunan, erişilebilir arcade savaş oyunu.",
    status: "Geliştiriliyor"
  }
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mircasoft ana sayfa">
          <span className="brand-mark">M</span>
          <span>Mircasoft</span>
        </a>
        <nav aria-label="Ana menu">
          <a href="#apps">Oyunlar</a>
          <a href="#downloads">Indir</a>
          <a href="#terms">Sartlar</a>
          <a href="#privacy">Gizlilik</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Sifir kodla hazirlanan AI deneyimleri</p>
          <h1>Mircasoft yapay zeka destekli uygulama ve oyunlari</h1>
          <p>
            Bu sitede Mircasoft tarafindan gelistirilen oyunlar ve yardimci
            uygulamalar hakkinda kisa bilgiler, indirme yonlendirmeleri, yasal
            sartlar ve gizlilik politikasi yer alir.
          </p>
          <div className="actions">
            <a className="button primary" href="#apps">
              Urunleri Incele
            </a>
            <a className="button secondary" href="#privacy">
              Gizlilik Politikasi
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Mircasoft urun ozeti">
          <div>
            <span>3</span>
            <p>aktif urun alani</p>
          </div>
          <div>
            <span>AI</span>
            <p>destekli icerik ve oyun akisi</p>
          </div>
          <div>
            <span>TR</span>
            <p>Turkce bilgilendirme sayfalari</p>
          </div>
        </div>
      </section>

      <section id="apps" className="section">
        <div className="section-heading">
          <p className="eyebrow">Katalog</p>
          <h2>Uygulamalar ve oyunlar</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="card-topline">
                <span>{product.type}</span>
                <strong>{product.status}</strong>
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <a href="#downloads">Indirme bilgisi</a>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="section split">
        <div>
          <p className="eyebrow">Indirme</p>
          <h2>Baglantilar</h2>
          <p>
            Yayindaki surumler icin resmi magaza ve dosya baglantilari bu
            alanda listelenecektir. Baglantilar aktif oldugunda yalnizca
            Mircasoft'un duyurdugu resmi kaynaklardan indirme yapilmalidir.
          </p>
        </div>
        <div className="download-list">
          <a href="#" aria-disabled="true">
            Google Play baglantisi hazirlaniyor
          </a>
          <a href="#" aria-disabled="true">
            App Store baglantisi hazirlaniyor
          </a>
          <a href="#" aria-disabled="true">
            Windows indirme baglantisi hazirlaniyor
          </a>
        </div>
      </section>

      <section id="terms" className="section legal">
        <p className="eyebrow">Yasal</p>
        <h2>Kullanim sartlari</h2>
        <p>
          Mircasoft urunleri eglence, uretkenlik ve deneme amacli sunulur.
          Urunleri kullanarak yerel yasalara, platform kurallarina ve adil
          kullanim ilkelerine uymayi kabul edersiniz.
        </p>
        <p>
          Urunlerdeki yapay zeka ciktilari hatali, eksik veya beklenmedik
          olabilir. Kritik kararlar icin ciktilari dogrulamak kullanicinin
          sorumlulugundadir. Mircasoft, urunleri onceden haber vermeden
          guncelleyebilir, degistirebilir veya kaldirabilir.
        </p>
      </section>

      <section id="privacy" className="section legal">
        <p className="eyebrow">Gizlilik</p>
        <h2>Gizlilik politikasi</h2>
        <p>
          Mircasoft, urun deneyimini saglamak, guvenligi korumak ve hatalari
          gidermek icin gerekli olan sinirli teknik verileri isleyebilir.
          Indirilen uygulamalarin kendi magaza sayfalarinda ek veri kullanimi
          ayrintilari yayinlanabilir.
        </p>
        <p>
          Kisisel veriler, gecerli mevzuata uygun olarak ve yalnizca belirtilen
          amaclarla kullanilir. Gizlilik talepleri ve veri konularindaki sorular
          icin gelistirici iletisim kanali yayinlandiginda bu sayfaya
          eklenecektir.
        </p>
      </section>

      <footer>
        <strong>Mircasoft</strong>
        <span>© 2026 Mircasoft. Tum haklari saklidir.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
