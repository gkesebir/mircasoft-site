import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    id: "grid-app",
    policyId: "grid-policy",
    icon: "/icons/grid.jpg",
    name: "Grid: Binary Puzzle",
    type: "Mantık Oyunu",
    tagline: "Ateş ve su dengesinde ikili bulmaca.",
    summary:
      "Grid: Binary Puzzle, kısa oturumlarda oynanabilen, dikkat ve mantık yürütme becerisini öne çıkaran bir mobil bulmaca oyunudur.",
    details:
      "Oyuncu, grid üzerindeki kuralları takip ederek doğru dizilimi bulmaya çalışır. İlerleme, tema ve ses tercihleri cihazda saklanır; oyun çevrimdışı ve sade bir deneyim hedefler.",
    privacy:
      "Kişisel veri, konum, cihaz tanımlayıcısı, analitik veya dosya/rehber erişimi toplanmaz.",
    updated: "19 Temmuz 2026"
  },
  {
    id: "volttest-app",
    policyId: "volttest-policy",
    icon: "/icons/volttest.png",
    name: "VoltTest",
    type: "Android Araç Uygulaması",
    tagline: "Pil sağlığı ve kısa stres testi yardımcısı.",
    summary:
      "VoltTest, Android cihazlarda pil durumu hakkında hızlı bilgi almak ve kısa süreli stres testi yapmak için hazırlanmış bir yardımcı uygulamadır.",
    details:
      "Pil sağlığı hesaplamaları ve test sonuçları cihaz üzerinde işlenir. Ön plan hizmeti testin kesintisiz sürmesi, bildirim izni ise test tamamlandığında kullanıcıyı bilgilendirmek için kullanılır.",
    privacy:
      "Kişisel veri veya cihaz ölçümleri Mircasoft sunucularına gönderilmez. Uygulama Google AdMob reklamları içerebilir.",
    updated: "Haziran 2026"
  },
  {
    id: "slide-golf-app",
    policyId: "slide-golf-policy",
    icon: "/icons/slidegolf.png",
    name: "Slide Golf",
    type: "Golf Bulmaca Oyunu",
    tagline: "Kaydır, planla, deliğe ulaş.",
    summary:
      "Slide Golf, basit kaydırma hareketleriyle topu hedefe ulaştırmaya çalışan, rahat tempolu bir golf bulmaca oyunudur.",
    details:
      "Oyun; kısa bölümler, anlaşılır kontroller ve cihazda saklanan yerel ilerleme mantığı üzerine kurulur. Amaç, karmaşık menüler yerine hızlı ve temiz bir oyun döngüsü sunmaktır.",
    privacy:
      "Kişisel kimlik bilgisi, e-posta, telefon, konum, rehber veya dosya içeriği toplanmaz.",
    updated: "11 Ağustos 2026"
  }
];

function PlatformButtons() {
  return (
    <div className="platform-buttons" aria-label="Platform seçenekleri">
      <button className="platform-button android" type="button">
        Android
      </button>
      <button
        className="platform-button appstore"
        type="button"
        aria-disabled="true"
        title="Yakında"
      >
        App Store
      </button>
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mircasoft ana sayfa">
          <span className="brand-mark">M</span>
          <span>Mircasoft</span>
        </a>
        <nav aria-label="Ana menu">
          <a href="#apps">Uygulamalar</a>
          <a href="#privacy">Gizlilik</a>
          <a href="#contact">İletişim</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Bağımsız uygulama ve oyun üreticisi</p>
          <h1>Mircasoft mobil oyunlar ve pratik Android araçları üretir.</h1>
          <p>
            Kısa sürede anlaşılabilen, cihazda çalışan ve kullanıcı gizliliğini
            sade tutan uygulamalar geliştiriyoruz. Aşağıdaki ikonlara tıklayarak
            her ürünün ne işe yaradığını, hangi platformda olduğunu ve gizlilik
            politikasını görebilirsiniz.
          </p>
        </div>

        <div className="app-dock" aria-label="Mircasoft uygulamaları">
          {products.map((product) => (
            <a className="dock-item" href={`#${product.id}`} key={product.name}>
              <img src={product.icon} alt={`${product.name} ikonu`} />
              <span>{product.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="apps" className="section apps-section">
        <div className="section-heading">
          <p className="eyebrow">Ürünler</p>
          <h2>Uygulamalar ve oyunlar</h2>
        </div>

        <div className="showcase-list">
          {products.map((product) => (
            <article id={product.id} className="showcase-card" key={product.name}>
              <div className="showcase-media">
                <img src={product.icon} alt={`${product.name} uygulama ikonu`} />
              </div>
              <div className="showcase-copy">
                <div className="card-topline">
                  <span>{product.type}</span>
                  <strong>Yayında</strong>
                </div>
                <h3>{product.name}</h3>
                <p className="tagline">{product.tagline}</p>
                <p>{product.summary}</p>
                <p>{product.details}</p>
                <div className="showcase-actions">
                  <PlatformButtons />
                  <a className="text-link" href={`#${product.policyId}`}>
                    Gizlilik politikasına git
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="section legal">
        <p className="eyebrow">Gizlilik</p>
        <h2>Gizlilik politikaları</h2>
        <p>
          Mircasoft uygulamalarında temel yaklaşım, kişisel verileri toplamadan
          çalışmak ve uygulama verilerini cihaz üzerinde tutmaktır. Aşağıdaki
          bağlantı adresleri korunmuştur; mevcut politika linkleri aynı şekilde
          çalışmaya devam eder.
        </p>

        <div className="policy-list">
          {products.map((product) => (
            <article id={product.policyId} className="policy-card" key={product.policyId}>
              <div className="policy-heading">
                <img src={product.icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{product.name}</h3>
                  <p className="updated">Son güncelleme: {product.updated}</p>
                </div>
              </div>
              <p>{product.privacy}</p>
              {product.name === "Grid: Binary Puzzle" && (
                <>
                  <p>
                    Oyun ilerlemesi, ses, titreşim, tema tercihleri ve
                    tamamlanan seviye sayaçları Android SharedPreferences ile
                    yalnızca cihazda saklanır. Bu bilgiler harici sunuculara
                    aktarılmaz.
                  </p>
                  <p>
                    Uygulamada Google Analytics, Firebase, sosyal eklenti veya
                    harici veri toplayan SDK bulunmaz. Uygulama her yaştan
                    kullanıcı için tasarlanmıştır ve çocuklardan kişisel bilgi
                    talep etmez.
                  </p>
                </>
              )}
              {product.name === "VoltTest" && (
                <>
                  <p>
                    Pil sağlığı hesaplamaları ve stres testi sonuçları cihaz
                    üzerinde yerel olarak işlenir. Ön plan hizmeti ve
                    bildirimler yalnızca test deneyimini tamamlamak için
                    kullanılır.
                  </p>
                  <p>
                    Google AdMob, kişiselleştirilmiş reklam sunmak amacıyla
                    cihaz tanımlayıcıları işleyebilir.
                  </p>
                </>
              )}
              {product.name === "Slide Golf" && (
                <>
                  <p>
                    Oyun içi ilerleme, seviye durumu, ses ve titreşim gibi
                    kullanıcı tercihleri yalnızca cihaz üzerinde yerel olarak
                    saklanabilir. Bu bilgiler Mircasoft sunucularına veya harici
                    bir veritabanına aktarılmaz.
                  </p>
                  <p>
                    Uygulama çocuklardan veya yetişkinlerden kişisel bilgi talep
                    etmez. Uygulama verileri temizlendiğinde veya uygulama
                    kaldırıldığında yerel kayıtlar cihazdan silinebilir.
                  </p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="eyebrow">İletişim</p>
          <h2>Mircasoft ile iletişime geçin</h2>
          <p>
            Uygulamalar, oyunlar, gizlilik politikaları veya destek talepleri
            için bize e-posta gönderebilirsiniz.
          </p>
        </div>
        <a className="mail-card" href="mailto:abonemapp@hotmail.com">
          <span>E-posta gönder</span>
          <strong>abonemapp@hotmail.com</strong>
        </a>
      </section>

      <footer>
        <strong>Mircasoft</strong>
        <span>© 2026 Mircasoft. Tüm hakları saklıdır.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
