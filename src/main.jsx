import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "Grid: Binary Puzzle",
    type: "Oyun",
    summary:
      "Mantık yürütme odaklı, cihaz içinde çalışan ve ilerlemesini yerel olarak saklayan binary puzzle oyunu.",
    status: "Yayında",
    policy: "#grid-policy"
  },
  {
    name: "VoltTest",
    type: "Araç",
    summary:
      "Pil sağlığı hesaplamaları ve kısa süreli stres testi sonuçlarını cihaz üzerinde işleyen yardımcı uygulama.",
    status: "Yayında",
    policy: "#volttest-policy"
  },
  {
    name: "Slide Golf",
    type: "Oyun",
    summary:
      "Kaydırma mekaniğiyle oynanan, ilerleme ve ayarlarını cihazda saklayan sade ve erişilebilir golf bulmaca oyunu.",
    status: "Yayında",
    policy: "#slide-golf-policy"
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
          <a href="#downloads">İndir</a>
          <a href="#terms">Şartlar</a>
          <a href="#privacy">Gizlilik</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Uygulama ve oyun geliştiricisi</p>
          <h1>Mircasoft uygulama ve oyunları</h1>
          <p>
            Bu sitede Mircasoft tarafından geliştirilen oyunlar ve yardımcı
            uygulamalar hakkında kısa bilgiler, indirme yönlendirmeleri, yasal
            şartlar ve uygulama bazlı gizlilik politikaları yer alır.
          </p>
          <div className="actions">
            <a className="button primary" href="#apps">
              Ürünleri İncele
            </a>
            <a className="button secondary" href="#privacy">
              Gizlilik Politikası
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Mircasoft ürün özeti">
          <div>
            <span>3</span>
            <p>yayındaki uygulama ve oyun</p>
          </div>
          <div>
            <span>0</span>
            <p>kişisel veri toplama hedefi</p>
          </div>
          <div>
            <span>TR</span>
            <p>Türkçe bilgilendirme sayfaları</p>
          </div>
        </div>
      </section>

      <section id="apps" className="section">
        <div className="section-heading">
          <p className="eyebrow">Katalog</p>
          <h2>Uygulamalar ve oyunlar</h2>
        </div>
        <div className="product-grid compact-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="card-topline">
                <span>{product.type}</span>
                <strong>{product.status}</strong>
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <a href={product.policy}>Gizlilik politikasını oku</a>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="section split">
        <div>
          <p className="eyebrow">İndirme</p>
          <h2>Bağlantılar</h2>
          <p>
            Yayındaki sürümler için resmi mağaza ve dosya bağlantıları bu
            alanda listelenecektir. Bağlantılar aktif olduğunda yalnızca
            Mircasoft'un duyurduğu resmi kaynaklardan indirme yapılmalıdır.
          </p>
        </div>
        <div className="download-list">
          <a href="#" aria-disabled="true">
            Grid: Binary Puzzle - Google Play bağlantısı hazırlanıyor
          </a>
          <a href="#" aria-disabled="true">
            VoltTest - Google Play bağlantısı hazırlanıyor
          </a>
          <a href="#" aria-disabled="true">
            Slide Golf - Google Play bağlantısı hazırlanıyor
          </a>
        </div>
      </section>

      <section id="terms" className="section legal">
        <p className="eyebrow">Yasal</p>
        <h2>Kullanım şartları</h2>
        <p>
          Mircasoft ürünleri eğlence, üretkenlik ve deneme amaçlı sunulur.
          Ürünleri kullanarak yerel yasalara, platform kurallarına ve adil
          kullanım ilkelerine uymayı kabul edersiniz.
        </p>
        <p>
          Uygulamalardaki hesaplama, test veya oyun sonuçları bilgilendirme ve
          deneyim amaçlıdır. Kritik kararlar için sonuçları doğrulamak
          kullanıcının sorumluluğundadır. Mircasoft, ürünleri önceden haber
          vermeden güncelleyebilir, değiştirebilir veya kaldırabilir.
        </p>
      </section>

      <section id="privacy" className="section legal">
        <p className="eyebrow">Gizlilik</p>
        <h2>Gizlilik politikası</h2>
        <p>
          Mircasoft uygulamalarında temel yaklaşım, kişisel verileri toplamadan
          çalışmak ve uygulama verilerini cihaz üzerinde tutmaktır. Aşağıdaki
          bölümlerde her uygulama için geçerli gizlilik notları yer alır.
        </p>
        <div className="policy-list">
          <article id="grid-policy" className="policy-card">
            <h3>Grid: Binary Puzzle</h3>
            <p className="updated">Son güncelleme: 19 Temmuz 2026</p>
            <p>
              Grid: Binary Puzzle kişisel kimlik bilgisi, cihaz tanımlayıcısı,
              konum verisi, kullanım analitiği, rehber veya dosya erişimi
              toplamaz, işlemez ve saklamaz.
            </p>
            <p>
              Oyun ilerlemesi, ses, titreşim, tema tercihleri ve tamamlanan
              seviye sayaçları Android SharedPreferences ile yalnızca cihazda
              saklanır. Bu bilgiler harici sunuculara aktarılmaz.
            </p>
            <p>
              Uygulamada Google Analytics, Firebase, sosyal eklenti veya harici
              veri toplayan SDK bulunmaz. Uygulama her yaştan kullanıcı için
              tasarlanmıştır ve çocuklardan kişisel bilgi talep etmez.
            </p>
          </article>

          <article id="volttest-policy" className="policy-card">
            <h3>VoltTest</h3>
            <p className="updated">Son güncelleme: Haziran 2026</p>
            <p>
              VoltTest kişisel veri veya cihaz ölçümlerini harici sunuculara
              toplamaz, depolamaz veya iletmez. Pil sağlığı hesaplamaları ve
              stres testi sonuçları cihaz üzerinde yerel olarak işlenir.
            </p>
            <p>
              Ön plan hizmeti izni, 3 dakikalık stres testinin uygulama arka
              plandayken kesintisiz devam edebilmesi için kullanılır.
              Bildirimler, pil testi tamamlandığında kullanıcıyı bilgilendirmek
              için kullanılır.
            </p>
            <p>
              Uygulama Google AdMob tarafından sunulan reklamlar içerebilir.
              AdMob, kişiselleştirilmiş reklam sunmak amacıyla cihaz
              tanımlayıcıları işleyebilir.
            </p>
          </article>

          <article id="slide-golf-policy" className="policy-card">
            <h3>Slide Golf</h3>
            <p className="updated">Son güncelleme: 11 Ağustos 2026</p>
            <p>
              Slide Golf kişisel kimlik bilgisi, e-posta adresi, telefon
              numarası, konum verisi, rehber, dosya veya benzeri kişisel
              içerikleri toplamaz, işlemez ve saklamaz.
            </p>
            <p>
              Oyun içi ilerleme, seviye durumu, ses ve titreşim gibi kullanıcı
              tercihleri yalnızca cihaz üzerinde yerel olarak saklanabilir. Bu
              bilgiler Mircasoft sunucularına veya harici bir veritabanına
              aktarılmaz.
            </p>
            <p>
              Slide Golf, temel oyun deneyimi için üçüncü taraf analitik veya
              sosyal medya eklentisi kullanmayı hedeflemez. Uygulamanın ileride
              reklam veya mağaza hizmetleri içeren bir sürümünde, ilgili
              platformun kendi veri işleme şartları geçerli olabilir.
            </p>
            <p>
              Uygulama çocuklardan veya yetişkinlerden kişisel bilgi talep
              etmez. Uygulama verileri temizlendiğinde veya uygulama
              kaldırıldığında yerel kayıtlar cihazdan silinebilir.
            </p>
          </article>
        </div>
        <p>
          Gizlilik politikalarıyla ilgili sorularınız için Mircasoft ile
          <a href="mailto:abonemapp@hotmail.com"> abonemapp@hotmail.com</a>
          adresinden iletişime geçebilirsiniz.
        </p>
      </section>

      <footer>
        <strong>Mircasoft</strong>
        <span>© 2026 Mircasoft. Tüm hakları saklıdır.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
