"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Language = "en" | "es";
type Theme = "light" | "dark";

const CREDLY_URL =
  "https://www.credly.com/badges/3aa1c966-742b-4cf1-b155-eb5ca014d5b7/linked_in?t=tcae7h";

const credentials = [
  {
    id: "aws",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services Training and Certification",
    progress: 100,
    image: "/credentials/aws-cloud-foundations.png",
    width: 672,
    height: 352,
    href: CREDLY_URL,
  },
  {
    id: "google",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google Career Certificates",
    progress: 32,
    image: "/credentials/google-cybersecurity.png",
    width: 680,
    height: 680,
    href: null,
  },
] as const;

const copy = {
  en: {
    back: "Portfolio",
    page: "Credentials",
    theme: "Toggle color theme",
    language: "Change language",
    eyebrow: "VERIFIED LEARNING / ACTIVE PATH",
    titleA: "Credentials &",
    titleB: "continuous learning.",
    intro:
      "A transparent record of completed credentials and the skills I am actively developing next.",
    completed: "Completed",
    inProgress: "In progress",
    verified: "Verify on Credly",
    current: "Current progress",
    pending: "Credential pending completion",
    note: "Full color shows completed progress. The faded area is still in progress.",
    home: "Back to portfolio",
  },
  es: {
    back: "Portafolio",
    page: "Certificaciones",
    theme: "Cambiar tema de color",
    language: "Cambiar idioma",
    eyebrow: "APRENDIZAJE VERIFICADO / RUTA ACTIVA",
    titleA: "Certificaciones y",
    titleB: "aprendizaje continuo.",
    intro:
      "Un registro transparente de credenciales completadas y de las habilidades que estoy desarrollando actualmente.",
    completed: "Completado",
    inProgress: "En progreso",
    verified: "Verificar en Credly",
    current: "Progreso actual",
    pending: "Credencial pendiente de finalización",
    note: "El color completo muestra el avance finalizado. El área tenue sigue en proceso.",
    home: "Volver al portafolio",
  },
};

export default function CredentialsPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language | null;
    const initialLanguage =
      savedLanguage ?? (navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
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
    <main className="credentials-page">
      <div className="noise" aria-hidden="true" />
      <nav className="nav shell" aria-label={language === "en" ? "Credentials navigation" : "Navegación de certificaciones"}>
        <Link className="wordmark" href="/" aria-label="David Sanchez, home">
          D<span>↗</span>S
        </Link>
        <div className="credential-nav-title"><span>{t.back}</span><i /> <strong>{t.page}</strong></div>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label={t.language}>
            <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <button className={language === "es" ? "active" : ""} onClick={() => changeLanguage("es")} aria-pressed={language === "es"}>ES</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
            <span aria-hidden="true">{theme === "light" ? "◒" : "◐"}</span>
          </button>
        </div>
      </nav>

      <header className="credentials-hero shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.titleA} <span>{t.titleB}</span></h1>
        <p className="credentials-intro">{t.intro}</p>
        <p className="credentials-legend"><i aria-hidden="true" /> {t.note}</p>
      </header>

      <section className="credential-showcase shell" aria-label={t.page}>
        {credentials.map((credential) => {
          const isComplete = credential.progress === 100;
          const progressStyle = { "--badge-progress": `${credential.progress}%` } as CSSProperties;

          return (
            <article className={`credential-tile credential-${credential.id}`} key={credential.id}>
              <div className="credential-badge-stage">
                <div
                  className="badge-progress"
                  style={progressStyle}
                  role="progressbar"
                  aria-label={`${credential.title}: ${credential.progress}%`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={credential.progress}
                >
                  <Image className="badge-layer badge-muted" src={credential.image} alt="" width={credential.width} height={credential.height} sizes="(max-width: 720px) 78vw, 360px" />
                  <div className="badge-fill" aria-hidden="true">
                    <Image className="badge-layer" src={credential.image} alt="" width={credential.width} height={credential.height} sizes="(max-width: 720px) 78vw, 360px" />
                  </div>
                </div>
              </div>

              <div className="credential-summary">
                <div className="credential-status"><span className={isComplete ? "complete" : "active"}>{isComplete ? t.completed : t.inProgress}</span><b>{credential.progress}%</b></div>
                <p className="credential-issuer">{credential.issuer}</p>
                <h2>{credential.title}</h2>
                <p className="credential-progress-copy">{isComplete ? t.completed : `${t.current}: ${credential.progress}% · ${t.pending}`}</p>
                {credential.href ? (
                  <a className="credential-link" href={credential.href} target="_blank" rel="noreferrer">{t.verified} <span aria-hidden="true">↗</span></a>
                ) : (
                  <span className="credential-pending"><i aria-hidden="true" /> {t.pending}</span>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <footer className="credentials-footer shell">
        <span>LEARNING_LOG © 2026</span>
        <Link href="/">{t.home} <span aria-hidden="true">↗</span></Link>
      </footer>
    </main>
  );
}
