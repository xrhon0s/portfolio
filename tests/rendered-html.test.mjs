import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders David's portfolio and featured case studies", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>David Sanchez — Full Stack Developer<\/title>/i);
  assert.match(html, /Odissey Technology/);
  assert.match(html, /Eter Perfume Catalog/);
  assert.match(html, /NoirVault/);
  assert.match(html, /\/projects\/noirvault\/noirvault-home\.webp/);
  assert.match(html, /NoirVault screenshots/);
  assert.match(html, /Show Catalog/);
  assert.match(html, /Private source · Available to discuss/);
  assert.match(html, /NutriEdu/);
  assert.match(html, /Task Manager API/);
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
  assert.match(page, /Código privado · Disponible para conversar/);
  assert.match(page, /Checkout idempotente con reservas transaccionales/);
  assert.match(page, /noirvault-admin\.webp/);
  assert.match(page, /setActiveGallery/);
  assert.match(layout, /David Sanchez — Full Stack Developer/);
  assert.match(css, /:root\[data-theme="dark"\]/);
  assert.match(css, /@media \(max-width: 920px\)/);
  assert.match(css, /@media \(max-width: 540px\)/);
  assert.match(css, /overflow-x:\s*clip/);
  assert.match(css, /\.media-controls button\s*\{[^}]*width:\s*44px;[^}]*height:\s*44px;/s);
});
