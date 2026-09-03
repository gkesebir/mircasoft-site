import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    id: "volttest-app",
    policyId: "volttest-policy",
    icon: "/icons/volttest.png",
    isLive: true,
    links: {
      android: "https://play.google.com/store/apps/details?id=com.volttest.batteryhealthbenchmark",
      appStore: null
    },
    updated: { tr: "17 Ağustos 2026", en: "August 17, 2026" },
    tr: {
      name: "VoltTest",
      type: "Android Araç Uygulaması",
      tagline: "Pil sağlığı ve kısa stres testi yardımcısı.",
      summary:
        "VoltTest, Android cihazlarda pil durumu hakkında hızlı bilgi almak ve kısa süreli stres testi yapmak için hazırlanmış bir yardımcı uygulamadır.",
      details:
        "Pil sağlığı hesaplamaları ve test sonuçları cihaz üzerinde işlenir. Ön plan hizmeti testin kesintisiz sürmesi, bildirim izni ise test tamamlandığında kullanıcıyı bilgilendirmek için kullanılır.",
      privacy:
        "Kişisel veri veya cihaz ölçümleri Mircasoft sunucularına gönderilmez. Uygulama Google AdMob reklamları içerebilir.",
      extra: [
        "Pil sağlığı hesaplamaları ve stres testi sonuçları cihaz üzerinde yerel olarak işlenir. Ön plan hizmeti ve bildirimler yalnızca test deneyimini tamamlamak için kullanılır.",
        "Google AdMob, kişiselleştirilmiş reklam sunmak amacıyla cihaz tanımlayıcılarını işleyebilir."
      ]
    },
    en: {
      name: "VoltTest",
      type: "Android Utility App",
      tagline: "A battery health and quick stress-test helper.",
      summary:
        "VoltTest is a utility app for quickly checking battery status and running a short stress test on Android devices.",
      details:
        "Battery health calculations and test results are processed on the device. The foreground service keeps the test running uninterrupted, and the notification permission is used only to alert the user when the test finishes.",
      privacy:
        "No personal data or device measurements are sent to Mircasoft servers. The app may include Google AdMob ads.",
      extra: [
        "Battery health calculations and stress-test results are processed locally on the device. The foreground service and notifications are used solely to complete the test experience.",
        "Google AdMob may process device identifiers in order to serve personalized ads."
      ]
    }
  },
  {
    id: "logic-loom-app",
    policyId: "logic-loom-policy",
    icon: "/icons/logicloom.png",
    isLive: false,
    links: {
      android: null,
      appStore: null
    },
    updated: { tr: "31 Ağustos 2026", en: "August 31, 2026" },
    tr: {
      name: "Logic Loom: Bulmaca Oyunları",
      type: "Bulmaca Oyunu Koleksiyonu",
      tagline: "Altı günlük mantık bulmacası, tek uygulamada.",
      summary:
        "Logic Loom, Zip, Tango, Patches, Queens, Mini Sudoku ve Pipes bulmacalarını tek bir uygulamada bir araya getiren bir mantık oyunu koleksiyonudur.",
      details:
        "Hub, Journey ve Practice bölümleriyle 200 seviyelik bir kampanya sunar; ilerleme, ustalık (mastery) puanları ve ekonomi verileri yalnızca cihazda saklanır.",
      privacy:
        "Kişisel veri toplanmaz; ilerleme, ustalık puanları ve tercihler yalnızca cihazda yerel olarak saklanır.",
      extra: [
        "Oyun ilerlemesi, ekonomi (coin), ustalık puanları ve tema tercihi yalnızca cihaz üzerindeki yerel depoda saklanır; Mircasoft sunucularına veya üçüncü taraflara aktarılmaz.",
        "Uygulamada şu an reklam SDK'sı veya analitik/izleme entegrasyonu bulunmaz. Android izin listesinde yalnızca yazı tiplerini yüklemek için İnternet izni vardır; reklam kimliği (AD_ID) izni istenmez. Uygulama çocuklardan veya yetişkinlerden kişisel bilgi talep etmez."
      ]
    },
    en: {
      name: "Logic Loom: Puzzle Games",
      type: "Puzzle Game Collection",
      tagline: "Six daily logic puzzles, one app.",
      summary:
        "Logic Loom brings together the Zip, Tango, Patches, Queens, Mini Sudoku, and Pipes puzzles in a single logic-game collection.",
      details:
        "It offers a 200-level campaign across Hub, Journey, and Practice sections; progress, mastery scores, and economy data are stored only on the device.",
      privacy:
        "No personal data is collected; progress, mastery scores, and preferences are stored locally on the device only.",
      extra: [
        "Game progress, economy (coins), mastery scores, and theme preference are stored only in local storage on the device; they are not transmitted to Mircasoft servers or third parties.",
        "The app currently has no ad SDK or analytics/tracking integration. The Android permission list includes only Internet access for loading fonts; no advertising ID (AD_ID) permission is requested. The app does not request personal information from children or adults."
      ]
    }
  }
];

const strings = {
  tr: {
    htmlLang: "tr",
    pageTitle: "Mircasoft | AI Destekli Uygulama ve Oyunlar",
    metaDescription:
      "Mircasoft tarafından hazırlanan yapay zeka destekli uygulama ve oyunlar için bilgiler, indirme bağlantıları, yasal şartlar ve gizlilik politikası.",
    brandHome: "Mircasoft ana sayfa",
    mainMenu: "Ana menu",
    navApps: "Uygulamalar",
    navPrivacy: "Gizlilik",
    navContact: "İletişim",
    langToggle: "EN",
    langToggleLabel: "Switch to English",
    heroEyebrow: "Bağımsız uygulama ve oyun üreticisi",
    heroTitle: "Mircasoft mobil oyunlar ve pratik Android araçları üretir.",
    heroParagraph:
      "Kısa sürede anlaşılabilen, cihazda çalışan ve kullanıcı gizliliğini sade tutan uygulamalar geliştiriyoruz. Aşağıdaki ikonlara tıklayarak her ürünün ne işe yaradığını, hangi platformda olduğunu ve gizlilik politikasını görebilirsiniz.",
    dockLabel: "Mircasoft uygulamaları",
    productsEyebrow: "Ürünler",
    productsTitle: "Uygulamalar ve oyunlar",
    live: "Yayında",
    android: "Android",
    appStore: "App Store",
    comingSoon: "Yakında",
    goToPolicy: "Gizlilik politikasına git",
    privacyEyebrow: "Gizlilik",
    privacyTitle: "Gizlilik politikaları",
    privacyIntro:
      "Mircasoft uygulamalarında temel yaklaşım, kişisel verileri toplamadan çalışmak ve uygulama verilerini cihaz üzerinde tutmaktır. Aşağıdaki bağlantı adresleri korunmuştur; mevcut politika linkleri aynı şekilde çalışmaya devam eder.",
    lastUpdated: "Son güncelleme:",
    contactEyebrow: "İletişim",
    contactTitle: "Mircasoft ile iletişime geçin",
    contactParagraph:
      "Uygulamalar, oyunlar, gizlilik politikaları veya destek talepleri için bize e-posta gönderebilirsiniz.",
    sendEmail: "E-posta gönder",
    rights: "Tüm hakları saklıdır.",
    iconAlt: (name) => `${name} ikonu`,
    appIconAlt: (name) => `${name} uygulama ikonu`
  },
  en: {
    htmlLang: "en",
    pageTitle: "Mircasoft | AI-Powered Apps and Games",
    metaDescription:
      "Information, download links, legal terms, and privacy policy for AI-assisted apps and games built by Mircasoft.",
    brandHome: "Mircasoft home",
    mainMenu: "Main menu",
    navApps: "Apps",
    navPrivacy: "Privacy",
    navContact: "Contact",
    langToggle: "TR",
    langToggleLabel: "Türkçeye geç",
    heroEyebrow: "Independent app and game studio",
    heroTitle: "Mircasoft builds mobile games and practical Android utilities.",
    heroParagraph:
      "We build apps that are easy to understand in minutes, run on-device, and keep user privacy simple. Click the icons below to see what each product does, which platform it's on, and its privacy policy.",
    dockLabel: "Mircasoft apps",
    productsEyebrow: "Products",
    productsTitle: "Apps and games",
    live: "Live",
    android: "Android",
    appStore: "App Store",
    comingSoon: "Coming soon",
    goToPolicy: "Go to privacy policy",
    privacyEyebrow: "Privacy",
    privacyTitle: "Privacy policies",
    privacyIntro:
      "Mircasoft's core approach across its apps is to operate without collecting personal data and to keep app data on the device. The links below are preserved; existing policy links continue to work the same way.",
    lastUpdated: "Last updated:",
    contactEyebrow: "Contact",
    contactTitle: "Get in touch with Mircasoft",
    contactParagraph:
      "For apps, games, privacy policies, or support requests, you can email us.",
    sendEmail: "Send email",
    rights: "All rights reserved.",
    iconAlt: (name) => `${name} icon`,
    appIconAlt: (name) => `${name} app icon`
  }
};

function PlatformButtons({ t, links }) {
  return (
    <div className="platform-buttons" aria-label={`${t.android} / ${t.appStore}`}>
      {links?.android ? (
        <a
          className="platform-button android active"
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.android}
        </a>
      ) : (
        <button
          className="platform-button android disabled"
          type="button"
          aria-disabled="true"
          title={t.comingSoon}
          data-soon={t.comingSoon}
        >
          {t.android}
        </button>
      )}
      {links?.appStore ? (
        <a
          className="platform-button appstore active"
          href={links.appStore}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.appStore}
        </a>
      ) : (
        <button
          className="platform-button appstore"
          type="button"
          aria-disabled="true"
          title={t.comingSoon}
          data-soon={t.comingSoon}
        >
          {t.appStore}
        </button>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("tr");
  const t = strings[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);
  }, [lang, t]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.brandHome}>
          <span className="brand-mark">M</span>
          <span>Mircasoft</span>
        </a>
        <nav aria-label={t.mainMenu}>
          <a href="#apps">{t.navApps}</a>
          <a href="#privacy">{t.navPrivacy}</a>
          <a href="#contact">{t.navContact}</a>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            aria-label={t.langToggleLabel}
          >
            {t.langToggle}
          </button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroParagraph}</p>
        </div>

        <div className="app-dock" aria-label={t.dockLabel}>
          {products.map((product) => (
            <a className="dock-item" href={`#${product.id}`} key={product.id}>
              <img src={product.icon} alt={t.iconAlt(product[lang].name)} />
              <span>{product[lang].name}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="apps" className="section apps-section">
        <div className="section-heading">
          <p className="eyebrow">{t.productsEyebrow}</p>
          <h2>{t.productsTitle}</h2>
        </div>

        <div className="showcase-list">
          {products.map((product) => (
            <article id={product.id} className="showcase-card" key={product.id}>
              <div className="showcase-media">
                <img src={product.icon} alt={t.appIconAlt(product[lang].name)} />
              </div>
              <div className="showcase-copy">
                <div className="card-topline">
                  <span>{product[lang].type}</span>
                  <strong className={product.isLive ? "status-live" : "status-soon"}>
                    {product.isLive ? t.live : t.comingSoon}
                  </strong>
                </div>
                <h3>{product[lang].name}</h3>
                <p className="tagline">{product[lang].tagline}</p>
                <p>{product[lang].summary}</p>
                <p>{product[lang].details}</p>
                <div className="showcase-actions">
                  <PlatformButtons t={t} links={product.links} />
                  <a className="text-link" href={`#${product.policyId}`}>
                    {t.goToPolicy}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="section legal">
        <p className="eyebrow">{t.privacyEyebrow}</p>
        <h2>{t.privacyTitle}</h2>
        <p>{t.privacyIntro}</p>

        <div className="policy-list">
          {products.map((product) => (
            <article id={product.policyId} className="policy-card" key={product.policyId}>
              <div className="policy-heading">
                <img src={product.icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{product[lang].name}</h3>
                  <p className="updated">
                    {t.lastUpdated} {product.updated[lang]}
                  </p>
                </div>
              </div>
              <p>{product[lang].privacy}</p>
              {product[lang].extra.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactParagraph}</p>
        </div>
        <a className="mail-card" href="mailto:abonemapp@hotmail.com">
          <span>{t.sendEmail}</span>
          <strong>abonemapp@hotmail.com</strong>
        </a>
      </section>

      <footer>
        <strong>Mircasoft</strong>
        <span>© 2026 Mircasoft. {t.rights}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
