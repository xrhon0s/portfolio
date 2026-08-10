import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const html = await readFile(
    new URL("../.next/server/app/index.html", import.meta.url),
    "utf8",
  );

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

test("server-renders David's portfolio and featured case studies", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>David Sanchez — Full Stack Developer<\/title>/i);
  assert.match(html, /rel="icon" href="\/icon\?[^\"]+" type="image\/png"/i);
  assert.match(html, /rel="apple-touch-icon" href="\/apple-icon\?[^\"]+"/i);
  assert.match(html, /Odissey Technology/);
  assert.match(html, /odissey-home\.webp/);
  assert.match(html, /Odissey Technology screenshots/);
  assert.match(html, /Show Product detail/);
  assert.match(html, /david-sanchez\.webp/);
  assert.match(html, /David Sanchez · Full-stack developer/);
  assert.match(html, /Eter Perfume Catalog/);
  assert.match(html, /eter-catalog\.webp/);
  assert.match(html, /Eter Perfume Catalog screenshots/);
  assert.match(html, /Show Products admin/);
  assert.match(html, /NoirVault/);
  assert.match(html, /noirvault-home\.webp/);
  assert.match(html, /NoirVault screenshots/);
  assert.match(html, /Show Catalog/);
  assert.match(html, /Private source · Available to discuss/);
  assert.match(html, /NutriEdu/);
  assert.match(html, /nutriedu-home\.webp/);
  assert.match(html, /NutriEdu screenshots/);
  assert.match(html, /Show Weekly planner/);
  assert.match(html, /href="tel:\+573126485885"/);
  assert.match(html, /David-Sanchez-Tabarez-CV\.pdf/);
  assert.match(html, /linkedin\.com\/in\/david-sanchez-tabarez-a25b7b1a8/);
  assert.doesNotMatch(html, /Task Manager API|task-manager-api/i);
  assert.doesNotMatch(
    html,
    /github\.com\/xrhon0s\/(?:Odissey_Technology|Perfume_Catalog|noirvault)/i,
  );
});

test("keeps bilingual, theme, and responsive portfolio behavior", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type Language = "en" \| "es"/);
  assert.match(page, /portfolio-language/);
  assert.match(page, /portfolio-theme/);
  assert.match(page, /odissey-admin\.webp/);
  assert.match(page, /className="portrait-photo"/);
  assert.match(page, /Código privado · Disponible para conversar/);
  assert.match(page, /Checkout idempotente con reservas transaccionales/);
  assert.match(page, /noirvault-admin\.webp/);
  assert.match(page, /eter-admin-orders\.webp/);
  assert.match(page, /nutriedu-admin\.webp/);
  assert.match(page, /setActiveGallery/);
  assert.match(page, /phoneDisplay: "\+57 312 648 5885"/);
  assert.match(page, /cv: "\/David-Sanchez-Tabarez-CV\.pdf"/);
  assert.match(layout, /David Sanchez — Full Stack Developer/);
  assert.match(css, /:root\[data-theme="dark"\]/);
  assert.match(css, /@media \(max-width: 920px\)/);
  assert.match(css, /@media \(max-width: 540px\)/);
  assert.match(css, /overflow-x:\s*clip/);
  assert.match(css, /\.media-controls button\s*\{[^}]*width:\s*44px;[^}]*height:\s*44px;/s);
});
