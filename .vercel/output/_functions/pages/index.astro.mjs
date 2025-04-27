import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderSlot, f as renderTemplate, g as renderComponent, u as unescapeHTML, h as renderHead } from '../chunks/astro/server_CaTGl-qI.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const mockData3 = {
  header: {
    storeName: "MultiStore RD",
    logoUrl: "/logo.png",
    categories: [
      "Home",
      "Servicios",
      "Suscriopciones",
      "Nosotros"
    ]},
  hero: {
    backgroundImage: "/bg-imagen.webp",
    title: "MultiStore RD te da la bienvenida",
    subtitle: "Muestra tus productos sin complicaciones"
  }};

const $$Astro$3 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} `, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/SectionContainer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { logoUrl, name, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "id": "hero", "class": "relative h-[30vh] md:h-[30vh] flex items-center justify-center text-center text-white overflow-hidden mt-18" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img${addAttribute(logoUrl, "src")} alt="Hero" class="absolute inset-0 w-full h-full object-contain"> <div class="absolute inset-0 bg-black/30 backdrop-blur-none mix-blend-multiply"></div>  <div class="relative z-10 px-4"> <h1 class="text-3xl md:text-5xl font-bold mb-4 drop-shadow">${name}</h1> <p class="text-lg md:text-xl drop-shadow-sm">${description}</p> </div> ` })}`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/sections/Hero.astro", void 0);

const Header = ({
  storeName,
  logoUrl,
  categories,
  onSearch,
  onFilterByCategory,
  selectStyle
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos los productos");
  const [scrolled, setScrolled] = useState(false);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: `fixed top-0 w-full p-4 flex items-center justify-between z-50 shadow-md transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-sm " : "bg-white opacity-100"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("img", { src: logoUrl, alt: "Logo", className: "w-10 h-10 object-contain" }),
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold text-gray-800", children: storeName })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center ", children: categories.map((cat) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: `flex-1 text-center px-4 py-2 mx-2 rounded-md transition ${activeCategory === cat ? selectStyle : "hover:bg-blue-100 text-gray-700"}`,
              onClick: () => {
                setActiveCategory(cat);
                if (typeof onFilterByCategory === "function") {
                  onFilterByCategory(cat);
                }
                setDrawerOpen(false);
              },
              children: cat.length > 15 ? `${cat.slice(0, 10)}` : cat
            },
            cat
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar productos...",
              value: search,
              onChange: handleSearch,
              className: "border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          ) }),
          /* @__PURE__ */ jsx("button", { className: "md:hidden text-gray-700", onClick: () => setDrawerOpen(!drawerOpen), children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 flex justify-between items-center border-b border-gray-300", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Categorías" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setDrawerOpen(false), children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-gray-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-4 space-y-2 overflow-y-auto h-full animate-fade-in", children: categories.map((cat) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: `block w-full text-left px-4 py-2 rounded-md transition ${activeCategory === cat ? selectStyle : "hover:bg-blue-100 text-gray-700"}`,
              onClick: () => {
                setActiveCategory(cat);
                if (typeof onFilterByCategory === "function") {
                  onFilterByCategory(cat);
                }
                setDrawerOpen(false);
              },
              children: cat
            },
            cat
          )) })
        ]
      }
    ),
    drawerOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0  bg-black opacity-70 z-40",
        onClick: () => setDrawerOpen(false)
      }
    )
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://eldertavarez.vercel.app/",
    image: "https://eldertavarez.vercel.app/elderTavarezLink.jpg",
    sameAs: [
      "https://www.instagram.com/moisestavarezgo",
      "https://x.com/moisestavarez3",
      "https://github.com/Mobile-Craft/mobileCraft"
    ],
    logo: "https://eldertavarez.vercel.app/elderTavarezLink.jpg",
    name: "Portafolio Elder Tavarez",
    alternateName: "Elder Tavarez",
    description: "Contrata a Elder Tavarez para Desarrollador tus aplicaciones Mobile y Web, con mas de 5 a\xF1os de experiencia especializado en tecnolog\xEDas modernas como React Natieve, Expo, React, Flutter y Node.js, Frontend"
  };
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Portafolio Elder Tavarez",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    // https://schema.org/EventAttendanceModeEnumeration
    eventStatus: "https://schema.org/EventScheduled",
    // https://schema.org/EventStatusType
    location: {
      "@type": "Place",
      name: "Santo Domingo Rep\xFAblica Dominicana",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Santo Domingo",
        addressLocality: "Distrito Nacional",
        postalCode: "11901",
        addressRegion: "Distrito Nacional",
        addressCountry: "ES"
      }
    },
    image: ["https://eldertavarez.vercel.app/elderTavarezLink.jpg"],
    description: "Portafolio de Elder Tav\xE1rez - Desarrollador y Programador Mobile y Web donde muestra su esperiencia y proyectos realizados",
    /* "offers": {}, // Añadir cuando las entradas estén disponibles https://schema.org/Offer */
    organizer: {
      "@type": "Person",
      name: "Elder Tavarez",
      url: "https://www.instagram.com/moisestavarezgo"
    }
  };
  const FAQs = [
    {
      question: "\xBFDesarrollador mobile en santo domingo?"
    },
    {
      question: "\xBFDesarrolldor frontend en santo domingo?",
      answer: "Elder Tavarez <strong>+5 a\xF1os de experiencia</strong> en el desarrollo de aplicaciones web y m\xF3viles"
    },
    {
      question: "\xBFDesarrollador mobile?",
      answer: "Elder Tavarez <strong>+5 a\xF1os de experiencia</strong> en el desarrollo de aplicaciones web y m\xF3viles"
    },
    {
      question: "\xBFNecesito crear una aplicacion mobil?",
      answer: "Elder Tavarez <strong>+5 a\xF1os de experiencia</strong> en el desarrollo de aplicaciones web y m\xF3viles"
    }
  ];
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      FAQs.map(({ answer, question }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    ]
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(eventSchema)), unescapeHTML(JSON.stringify(FAQSchema)));
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/RichResults.astro", void 0);

const $$Astro$1 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    canonical,
    image = "https://eldertavarez.vercel.app/elderTavarezLink.jpg"
  } = Astro2.props;
  const determineCanonicalURL = () => {
    if (Astro2.url.host.includes("localhost")) return "http://localhost:4321";
    return canonical || Astro2.url.pathname;
  };
  const canonicalURL = new URL(determineCanonicalURL(), Astro2.site);
  return renderTemplate`<title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://eldertavarez.vercel.app/"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#1E1E1E"><meta name="keywords" content="developer, desarrollador, mobile, santo domingo, elder, tavarez, react native, react, contratar, frontend, web"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@moisestavarez3"><meta name="twitter:creator" content="@moisestavarez3"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:site_name" content="Portafolio Elder Tavarez"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/svg+xml" href="/icon.svg"><link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png"><link rel="icon" type="image/svg+xml" href="/icon.svg"><meta name="msapplication-config" content="/browserconfig.xml">${renderComponent($$result, "RichResults", $$RichResults, {})}`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/SEO.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonical, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "title": title })}${renderHead()}</head> <body class="relative text-black"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-white"></div> ${renderSlot($$result, $$slots["default"])} <!-- <Footer /> --> </body></html>`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { header, hero} = mockData3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Tienda Online", "title": "MultiStore", "canonical": "./favicon.svg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "logoUrl": header.logoUrl, "storeName": header.storeName, "categories": header.categories, "onSearch": (query) => console.log("Search query:", query), "onFilterByCategory": (category) => console.log("Filter by category:", category), "selectStyle": "default", "client:component-hydration": "load", "client:component-path": "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/Header", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, { "logoUrl": hero.backgroundImage, "name": hero.title, "description": hero.subtitle })}  ` })}`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/index.astro", void 0);

const $$file = "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
