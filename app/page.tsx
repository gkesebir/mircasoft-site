const products = [
  {
    name: "AI Puzzle Studio",
    type: "Oyun",
    summary:
      "Oyuncunun seçimlerine göre yeni bölümler, ipuçları ve zorluk eğrisi oluşturan yapay zeka destekli bulmaca deneyimi.",
    status: "Yakında",
    download: "#downloads"
  },
  {
    name: "Quest Maker AI",
    type: "Uygulama",
    summary:
      "Kısa fikirlerden görev akışları, karakter notları ve oyun içi metinler tasarlamaya yardımcı üretken araç.",
    status: "Beta",
    download: "#downloads"
  },
  {
    name: "Arcade Bot Arena",
    type: "Oyun",
    summary:
      "Kendi davranış stilini öğrenen rakiplerle hızlı maçlar sunan, erişilebilir arcade savaş oyunu.",
    status: "Geliştiriliyor",
    download: "#downloads"
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mircasoft ana sayfa">
          <span className="brand-mark">M</span>
          <span>Mircasoft</span>
        </a>
        <nav aria-label="Ana menü">
          <a href="#apps">Oyunlar</a>
          <a href="#downloads">İndir</a>
          <a href="#terms">Şartlar</a>
          <a href="#privacy">Gizlilik</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Sıfır kodla hazırlanan AI deneyimleri</p>
          <h1>Mircasoft yapay zeka destekli uygulama ve oyunları</h1>
          <p>
            Bu sitede Mircasoft tarafından geliştirilen oyunlar ve yardımcı
            uygulamalar hakkında kısa bilgiler, indirme yönlendirmeleri, yasal
            şartlar ve gizlilik politikası yer alır.
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
            <p>aktif ürün alanı</p>
          </div>
          <div>
            <span>AI</span>
            <p>destekli içerik ve oyun akışı</p>
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
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="card-topline">
                <span>{product.type}</span>
                <strong>{product.status}</strong>
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <a href={product.download}>İndirme bilgisi</a>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="section split">
        <div>
          <p className="eyebrow">İndirme</p>
          <h2>Bağlantılar</h2>
          <p>
            Yayındaki sürümler için resmi mağaza ve dosya bağlantıları bu alanda
            listelenecektir. Bağlantılar aktif olduğunda yalnızca Mircasoft'un
            duyurduğu resmi kaynaklardan indirme yapılmalıdır.
          </p>
        </div>
        <div className="download-list">
          <a href="#" aria-disabled="true">Google Play bağlantısı hazırlanıyor</a>
          <a href="#" aria-disabled="true">App Store bağlantısı hazırlanıyor</a>
          <a href="#" aria-disabled="true">Windows indirme bağlantısı hazırlanıyor</a>
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
          Ürünlerdeki yapay zeka çıktıları hatalı, eksik veya beklenmedik
          olabilir. Kritik kararlar için çıktıları doğrulamak kullanıcının
          sorumluluğundadır. Mircasoft, ürünleri önceden haber vermeden
          güncelleyebilir, değiştirebilir veya kaldırabilir.
        </p>
      </section>

      <section id="privacy" className="section legal">
        <p className="eyebrow">Gizlilik</p>
        <h2>Gizlilik politikası</h2>
        <p>
          Mircasoft, ürün deneyimini sağlamak, güvenliği korumak ve hataları
          gidermek için gerekli olan sınırlı teknik verileri işleyebilir.
          İndirilen uygulamaların kendi mağaza sayfalarında ek veri kullanımı
          ayrıntıları yayınlanabilir.
        </p>
        <p>
          Kişisel veriler, geçerli mevzuata uygun olarak ve yalnızca belirtilen
          amaçlarla kullanılır. Gizlilik talepleri ve veri konularındaki
          sorular için geliştirici iletişim kanalı yayınlandığında bu sayfaya
          eklenecektir.
        </p>
      </section>

      <footer>
        <strong>Mircasoft</strong>
        <span>© 2026 Mircasoft. Tüm hakları saklıdır.</span>
      </footer>
    </main>
  );
}
