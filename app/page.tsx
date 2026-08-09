"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "en" | "es";
type Theme = "light" | "dark";

const projects = [
  {
    number: "01",
    title: "Odissey Technology",
    type: { en: "Full-stack commerce platform", es: "Plataforma ecommerce full-stack" },
    description: {
      en: "A Spanish-first ecommerce system for a Colombian technology retailer, covering the journey from product discovery to payment review and fulfillment.",
      es: "Un sistema de ecommerce en español para una tienda de tecnología colombiana, desde el descubrimiento del producto hasta la verificación del pago y el despacho.",
    },
    highlights: {
      en: ["Idempotent checkout with transactional inventory reservations", "Protected operations for catalog, orders, payments, and shipping", "Customer accounts, API protection, transactional email, and technical SEO"],
      es: ["Checkout idempotente con reservas transaccionales de inventario", "Operación protegida de catálogo, pedidos, pagos y envíos", "Cuentas, protección de APIs, correo transaccional y SEO técnico"],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Supabase", "Playwright"],
    gallery: [
      {
        src: "/projects/odissey/odissey-home.webp",
        label: { en: "Storefront", es: "Tienda" },
        alt: { en: "Odissey Technology storefront featuring mobile accessories and nationwide shipping", es: "Tienda Odissey Technology con accesorios móviles y envíos nacionales" },
      },
      {
        src: "/projects/odissey/odissey-catalog.webp",
        label: { en: "Catalog", es: "Catálogo" },
        alt: { en: "Odissey Technology product catalog with availability and pricing", es: "Catálogo de Odissey Technology con disponibilidad y precios" },
      },
      {
        src: "/projects/odissey/odissey-account.webp",
        label: { en: "Customer account", es: "Cuenta cliente" },
        alt: { en: "Odissey Technology sign-in and optional customer account registration", es: "Inicio de sesión y registro opcional de clientes en Odissey Technology" },
      },
      {
        src: "/projects/odissey/odissey-product.webp",
        label: { en: "Product detail", es: "Detalle producto" },
        alt: { en: "Odissey Technology product page with variants, inventory, pricing, and cart controls", es: "Producto Odissey Technology con variantes, inventario, precios y controles de carrito" },
      },
      {
        src: "/projects/odissey/odissey-cart.webp",
        label: { en: "Cart", es: "Carrito" },
        alt: { en: "Odissey Technology cart with item details and checkout summary", es: "Carrito de Odissey Technology con detalle de artículos y resumen del checkout" },
      },
      {
        src: "/projects/odissey/odissey-admin.webp",
        label: { en: "Operations", es: "Operación" },
        alt: { en: "Odissey Technology administration dashboard for orders, payments, inventory, and products", es: "Panel administrativo de Odissey Technology para pedidos, pagos, inventario y productos" },
      },
    ],
    evidence: { en: "29 test files · 14 migrations", es: "29 archivos de pruebas · 14 migraciones" },
    links: [],
    private: true,
    accent: "acid",
  },
  {
    number: "02",
    title: "Eter Perfume Catalog",
    type: { en: "Interactive retail application", es: "Aplicación comercial interactiva" },
    description: {
      en: "A digital-magazine fragrance experience connected to real catalog, inventory, order, image, and administrative operations.",
      es: "Una experiencia de perfumería tipo revista digital conectada con operaciones reales de catálogo, inventario, pedidos, imágenes y administración.",
    },
    highlights: {
      en: ["Responsive flipbook with real-time search and fragrance filters", "Supabase inventory, order requests, admin access, and Row Level Security", "Product-text interpreter and authenticated WebP image optimization"],
      es: ["Flipbook responsive con búsqueda en tiempo real y filtros olfativos", "Inventario, pedidos, administración y RLS sobre Supabase", "Intérprete de fichas y optimización autenticada de imágenes WebP"],
    },
    stack: ["React", "TypeScript", "Supabase", "Zustand", "Framer Motion", "Sharp"],
    gallery: [
      {
        src: "/projects/eter/eter-catalog.webp",
        label: { en: "Catalog", es: "Catálogo" },
        alt: { en: "Eter fragrance catalog presenting two perfumes in an interactive editorial layout", es: "Catálogo de fragancias Eter con dos perfumes en una composición editorial interactiva" },
      },
      {
        src: "/projects/eter/eter-details.webp",
        label: { en: "Details", es: "Detalles" },
        alt: { en: "Eter perfume detail dialog with inventory, fragrance notes, attributes, and cart action", es: "Detalle de perfume Eter con inventario, notas olfativas, atributos y acción de carrito" },
      },
      {
        src: "/projects/eter/eter-order.webp",
        label: { en: "Order flow", es: "Pedido" },
        alt: { en: "Eter customer order drawer with contact, delivery address, and WhatsApp checkout", es: "Panel de pedido Eter con contacto, dirección de entrega y checkout por WhatsApp" },
      },
      {
        src: "/projects/eter/eter-admin-products.webp",
        label: { en: "Products admin", es: "Admin productos" },
        alt: { en: "Eter product administration with inventory controls and a perfume data interpreter", es: "Administración de productos Eter con controles de inventario e intérprete de fichas de perfume" },
      },
      {
        src: "/projects/eter/eter-admin-orders.webp",
        label: { en: "Orders admin", es: "Admin pedidos" },
        alt: { en: "Eter order management dashboard with customer request status and WhatsApp actions", es: "Panel de pedidos Eter con estado de solicitudes y acciones por WhatsApp" },
      },
    ],
    evidence: { en: "21 test files · 6 migrations", es: "21 archivos de pruebas · 6 migraciones" },
    links: [],
    private: true,
    accent: "violet",
  },
  {
    number: "03",
    title: "NoirVault",
    type: { en: "Custom commerce system", es: "Sistema de comercio personalizado" },
    description: {
      en: "A premium streetwear storefront backed by persistent customer, cart, catalog, payment, order, inventory, and administrative workflows.",
      es: "Una tienda premium de streetwear respaldada por flujos persistentes de clientes, carrito, catálogo, pagos, pedidos, inventario y administración.",
    },
    highlights: {
      en: ["Signed Wompi checkout and timing-safe webhook verification", "Transactional, idempotent paid-order creation and inventory updates", "Secure customer sessions, wishlists, order history, and localized admin"],
      es: ["Checkout firmado con Wompi y verificación segura de webhooks", "Creación transaccional e idempotente de pedidos e inventario", "Sesiones seguras, favoritos, historial y administración localizada"],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Wompi", "Node.js Crypto"],
    gallery: [
      {
        src: "/projects/noirvault/noirvault-home.webp",
        label: { en: "Storefront", es: "Tienda" },
        alt: { en: "NoirVault storefront with a streetwear hero and featured collections", es: "Tienda NoirVault con portada de streetwear y colecciones destacadas" },
      },
      {
        src: "/projects/noirvault/noirvault-catalog.webp",
        label: { en: "Catalog", es: "Catálogo" },
        alt: { en: "NoirVault product catalog with prices, ratings, variants, and wishlists", es: "Catálogo NoirVault con precios, calificaciones, variantes y favoritos" },
      },
      {
        src: "/projects/noirvault/noirvault-cart.webp",
        label: { en: "Cart", es: "Carrito" },
        alt: { en: "NoirVault cart with product variants, quantities, discount code, and order summary", es: "Carrito NoirVault con variantes, cantidades, descuento y resumen del pedido" },
      },
      {
        src: "/projects/noirvault/noirvault-admin.webp",
        label: { en: "Operations", es: "Operación" },
        alt: { en: "NoirVault administration dashboard showing orders, inventory risk, and launch readiness", es: "Panel administrativo NoirVault con pedidos, riesgo de inventario y preparación de lanzamiento" },
      },
      {
        src: "/projects/noirvault/noirvault-account.webp",
        label: { en: "Account", es: "Cuenta" },
        alt: { en: "NoirVault customer account with secure login, orders, preferences, and delivery features", es: "Cuenta de cliente NoirVault con acceso seguro, pedidos, preferencias y entregas" },
      },
    ],
    evidence: { en: "7 passing tests · Prisma migration", es: "7 pruebas aprobadas · Migración Prisma" },
    links: [],
    private: true,
    accent: "cyan",
  },
  {
    number: "04",
    title: "NutriEdu",
    type: { en: "Full-stack product", es: "Producto full-stack" },
    description: {
      en: "A nutrition platform that turns dietary restrictions into safe recipes, weekly meal plans, and practical shopping lists.",
      es: "Una plataforma de nutrición que transforma restricciones alimentarias en recetas seguras, planes semanales y listas de compras prácticas.",
    },
    highlights: {
      en: ["JWT authentication and role-based admin flows", "Personalized recipe and ingredient filtering", "Password recovery and transactional email"],
      es: ["Autenticación JWT y flujos administrativos por roles", "Filtros personalizados de recetas e ingredientes", "Recuperación de contraseña y correo transaccional"],
    },
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind"],
    gallery: [
      {
        src: "/projects/nutriedu/nutriedu-home.webp",
        label: { en: "Landing", es: "Inicio" },
        alt: { en: "NutriEdu landing page introducing personalized recipes for dietary restrictions", es: "Página de inicio de NutriEdu con recetas personalizadas para restricciones alimentarias" },
      },
      {
        src: "/projects/nutriedu/nutriedu-content.webp",
        label: { en: "Nutrition guide", es: "Guía nutricional" },
        alt: { en: "NutriEdu meal categories, practical nutrition tips, and community testimonials", es: "Categorías de comida, consejos nutricionales y testimonios de la comunidad NutriEdu" },
      },
      {
        src: "/projects/nutriedu/nutriedu-login.webp",
        label: { en: "Authentication", es: "Autenticación" },
        alt: { en: "NutriEdu secure sign-in screen for personalized nutrition profiles", es: "Inicio de sesión seguro de NutriEdu para perfiles nutricionales personalizados" },
      },
      {
        src: "/projects/nutriedu/nutriedu-recipes.webp",
        label: { en: "Safe recipes", es: "Recetas seguras" },
        alt: { en: "NutriEdu recipe catalog filtered by health score and calorie range", es: "Catálogo de recetas NutriEdu filtrado por nivel de salud y rango de calorías" },
      },
      {
        src: "/projects/nutriedu/nutriedu-profile.webp",
        label: { en: "Clinical profile", es: "Perfil clínico" },
        alt: { en: "NutriEdu clinical profile for selecting and saving dietary restrictions", es: "Perfil clínico de NutriEdu para seleccionar y guardar restricciones alimentarias" },
      },
      {
        src: "/projects/nutriedu/nutriedu-planner.webp",
        label: { en: "Weekly planner", es: "Plan semanal" },
        alt: { en: "NutriEdu weekly meal planner with safe recipes and progress tracking", es: "Planificador semanal de NutriEdu con recetas seguras y seguimiento del progreso" },
      },
      {
        src: "/projects/nutriedu/nutriedu-admin.webp",
        label: { en: "Administration", es: "Administración" },
        alt: { en: "NutriEdu administration panel for managing recipes and ingredients", es: "Panel administrativo de NutriEdu para gestionar recetas e ingredientes" },
      },
    ],
    links: [
      { label: { en: "Backend", es: "Backend" }, href: "https://github.com/xrhon0s/NutriEdu" },
      { label: { en: "Frontend", es: "Frontend" }, href: "https://github.com/xrhon0s/NutriEdu-frontend" },
    ],
    evidence: { en: "Public full-stack source", es: "Código full-stack público" },
    private: false,
    accent: "amber",
  },
];

const copy = {
  en: {
    nav: { work: "Work", profile: "Profile", contact: "Let’s talk" },
    status: "Medellín, Colombia · Open to opportunities",
    kicker: "FULL-STACK DEVELOPER / AI-FIRST BUILDER",
    heroA: "I turn",
    heroB: "complex ideas",
    heroC: "into useful",
    heroD: "digital products.",
    intro: "I’m David Sanchez. I design and build responsive interfaces, reliable APIs, real-time products, and practical AI experiences.",
    explore: "Explore selected work",
    github: "GitHub profile",
    photo: "David Sanchez · Full-stack developer",
    system: "Available",
    capabilities: ["React interfaces", "Node.js APIs", "AI integration", "Real-time products", "Clean architecture", "Responsive design"],
    workEyebrow: "Selected work · Proof over promises",
    workTitle: "Products with a pulse.",
    workIntro: "A selection of projects where product thinking, maintainable engineering, and careful interface decisions meet.",
    profileEyebrow: "Operating principles",
    profileTitleA: "Move fast.",
    profileTitleB: "Think in systems.",
    profileText: "I use AI to shorten feedback loops—not to replace judgment. Every iteration still answers to maintainability, architecture, accessibility, and the real user problem.",
    experience: "Experience",
    years: "2+ years",
    cofounder: "Co-Founder & Full Stack Developer",
    cofounderDetail: "Built real-time financial dashboards, reusable analytics systems, and backend services for client products.",
    freelance: "Freelance Full Stack Developer",
    independent: "Independent projects",
    freelanceDetail: "Developing APIs, responsive interfaces, and conversational AI experiences from concept through delivery.",
    stack: "Core stack",
    learning: "Also working with",
    languages: "Languages",
    spanish: "Spanish — Native",
    english: "English — Intermediate",
    contactEyebrow: "Have a role or product in mind?",
    contactTitle: "Let’s create the next signal.",
    back: "Back to top",
    theme: "Toggle color theme",
    language: "Change language",
  },
  es: {
    nav: { work: "Proyectos", profile: "Perfil", contact: "Hablemos" },
    status: "Medellín, Colombia · Disponible para oportunidades",
    kicker: "DESARROLLADOR FULL-STACK / AI-FIRST BUILDER",
    heroA: "Transformo",
    heroB: "ideas complejas",
    heroC: "en productos",
    heroD: "digitales útiles.",
    intro: "Soy David Sanchez. Diseño y desarrollo interfaces responsive, APIs confiables, productos en tiempo real y experiencias prácticas con IA.",
    explore: "Explorar proyectos",
    github: "Perfil de GitHub",
    photo: "David Sanchez · Desarrollador full-stack",
    system: "Disponible",
    capabilities: ["Interfaces React", "APIs con Node.js", "Integración de IA", "Productos en tiempo real", "Arquitectura limpia", "Diseño responsive"],
    workEyebrow: "Proyectos seleccionados · Evidencia sobre promesas",
    workTitle: "Productos con pulso.",
    workIntro: "Una selección de proyectos donde convergen el pensamiento de producto, la ingeniería mantenible y decisiones de interfaz cuidadosas.",
    profileEyebrow: "Principios de trabajo",
    profileTitleA: "Avanzar rápido.",
    profileTitleB: "Pensar en sistemas.",
    profileText: "Uso IA para acortar ciclos de feedback, no para reemplazar el criterio. Cada iteración responde a la mantenibilidad, arquitectura, accesibilidad y al problema real del usuario.",
    experience: "Experiencia",
    years: "2+ años",
    cofounder: "Co-Fundador y Desarrollador Full Stack",
    cofounderDetail: "Construí dashboards financieros en tiempo real, sistemas de analítica reutilizables y servicios backend para productos de clientes.",
    freelance: "Desarrollador Full Stack Freelance",
    independent: "Proyectos independientes",
    freelanceDetail: "Desarrollo de APIs, interfaces responsive y experiencias conversacionales con IA desde el concepto hasta la entrega.",
    stack: "Stack principal",
    learning: "También trabajo con",
    languages: "Idiomas",
    spanish: "Español — Nativo",
    english: "Inglés — Intermedio",
    contactEyebrow: "¿Tienes un rol o producto en mente?",
    contactTitle: "Creemos la próxima señal.",
    back: "Volver arriba",
    theme: "Cambiar tema de color",
    language: "Cambiar idioma",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [activeGallery, setActiveGallery] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language | null;
    const initialLanguage = savedLanguage ?? (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
    const initialTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    // Browser preferences are intentionally synchronized after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(initialLanguage);
    setTheme(initialTheme);
    document.documentElement.lang = initialLanguage;
  }, []);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.dataset.theme = next;
  };

  const t = copy[language];

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="David Sanchez, home">D<span>↗</span>S</a>
        <div className="nav-center" aria-hidden="true"><i /> DAVID.SYS <i /></div>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label={t.language}>
            <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <button className={language === "es" ? "active" : ""} onClick={() => changeLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
            <span aria-hidden="true">{theme === "light" ? "◒" : "◐"}</span>
          </button>
          <a className="nav-cta" href="mailto:dsancheztaba66@gmail.com">{t.nav.contact}</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-coordinates" aria-hidden="true"><span>06.2442° N</span><span>75.5812° W</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {t.status}</p>
          <p className="hero-kicker">{t.kicker}</p>
          <h1><span>{t.heroA}</span><span className="outline-word">{t.heroB}</span><span>{t.heroC}</span><span className="serif-word">{t.heroD}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{t.explore} <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="https://github.com/xrhon0s" target="_blank" rel="noreferrer">{t.github} ↗</a>
          </div>
        </div>

        <div className="signal-card" aria-label={t.photo}>
          <div className="signal-header"><span>PORTRAIT_INPUT</span><span className="blink">● REC</span></div>
          <div className="portrait-stage">
            <Image className="portrait-photo" src="/profile/david-sanchez.webp" alt={t.photo} width={1023} height={1537} priority sizes="(max-width: 920px) 80vw, 385px" />
            <div className="scanner" aria-hidden="true" />
            <span className="portrait-note">{t.photo}</span>
          </div>
          <div className="signal-footer"><span>{t.system}</span><span>© 2026</span></div>
        </div>
      </section>

      <div className="capability-strip" aria-label="Core capabilities">
        <div className="capability-track">
          {[...t.capabilities, ...t.capabilities].map((item, index) => <span key={`${item}-${index}`}>{item} <b aria-hidden="true">✳</b></span>)}
        </div>
      </div>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
          <p>{t.workIntro}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const gallery = "gallery" in project ? project.gallery : [];
            const activeScreen = activeGallery[project.title] ?? 0;
            const screen = gallery[activeScreen];

            return (
            <article className={`project-card ${project.accent} ${gallery.length ? "with-gallery" : ""}`} key={project.title}>
              <div className="project-index"><span>{project.number}</span><small>CASE_STUDY</small></div>
              {screen ? (
                <div className="project-visual project-media">
                  <Image src={screen.src} alt={screen.alt[language]} width={1600} height={923} loading="lazy" sizes="(max-width: 920px) calc(100vw - 90px), 46vw" />
                  <div className="media-toolbar">
                    <span className="media-caption">{screen.label[language]} <b>{String(activeScreen + 1).padStart(2, "0")}/{String(gallery.length).padStart(2, "0")}</b></span>
                    <div className="media-controls" role="group" aria-label={language === "en" ? `${project.title} screenshots` : `Capturas de ${project.title}`}>
                      {gallery.map((item, index) => (
                        <button
                          type="button"
                          className={index === activeScreen ? "active" : ""}
                          key={item.src}
                          onClick={() => setActiveGallery((current) => ({ ...current, [project.title]: index }))}
                          aria-label={`${language === "en" ? "Show" : "Mostrar"} ${item.label[language]}`}
                          aria-pressed={index === activeScreen}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-grid" />
                  <div className="visual-window"><div className="window-bar"><i /><i /><i /></div><div className="window-body"><span /><span /><span /><span /></div></div>
                </div>
              )}
              <div className="project-content">
                <p className="project-type">{project.type[language]}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description[language]}</p>
                <ul className="project-highlights">{project.highlights[language].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                <div className="stack-list" aria-label={`${project.title} technologies`}>{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <p className="project-evidence"><span aria-hidden="true">✓</span> {project.evidence[language]}</p>
                <div className="project-links">
                  {project.private ? (
                    <span className="private-repository"><span aria-hidden="true">⌁</span> {language === "en" ? "Private source · Available to discuss" : "Código privado · Disponible para conversar"}</span>
                  ) : project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label[language]} <span aria-hidden="true">↗</span></a>)}
                </div>
              </div>
            </article>
          )})}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-orb" aria-hidden="true" />
        <div className="shell about-grid">
          <div className="about-statement">
            <p className="eyebrow">{t.profileEyebrow}</p>
            <h2>{t.profileTitleA}<br /><span>{t.profileTitleB}</span></h2>
            <p>{t.profileText}</p>
          </div>
          <div className="experience-card">
            <div className="experience-topline"><span>{t.experience}</span><span>{t.years}</span></div>
            <div className="role"><span className="role-year">2024—26</span><div><h3>{t.cofounder}</h3><p>WillDevp</p><p className="role-detail">{t.cofounderDetail}</p></div></div>
            <div className="role"><span className="role-year">2024—NOW</span><div><h3>{t.freelance}</h3><p>{t.independent}</p><p className="role-detail">{t.freelanceDetail}</p></div></div>
          </div>
        </div>
      </section>

      <section className="details-section shell">
        <div className="detail-block"><p className="detail-label">01 / {t.stack}</p><p>React · JavaScript · TypeScript · Node.js · Next.js · Express · PostgreSQL · Convex</p></div>
        <div className="detail-block"><p className="detail-label">02 / {t.learning}</p><p>Java · Spring Boot · Playwright · Selenium · Anthropic Claude API · OpenAI Codex</p></div>
        <div className="detail-block"><p className="detail-label">03 / {t.languages}</p><p>{t.spanish}<br />{t.english}</p></div>
      </section>

      <section className="contact-section">
        <div className="contact-radar" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell contact-inner">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <a className="contact-link" href="mailto:dsancheztaba66@gmail.com">dsancheztaba66@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-footer"><span>David Sanchez Tabarez © 2026</span><div><a href="https://github.com/xrhon0s" target="_blank" rel="noreferrer">GitHub</a><a href="#top">{t.back} ↑</a></div></div>
        </div>
      </section>
    </main>
  );
}
