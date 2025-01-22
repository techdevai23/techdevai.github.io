import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "TechDevAi",
  DESCRIPTION: "Bienvenidos al portfolio de Oscar Racero aka TechDevAi, un lugar donde muestro mi relación con la programacion, ciberseguridad, IA y UX.",
  AUTHOR: "Oscar Racero",
}

// Work Page
export const WORK: Page = {
  TITLE: "Formación",
  DESCRIPTION: "El lugar donde indico la formación reglada, cursos y certificaciones.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Artículos",
  DESCRIPTION: "El lugar donde publico artículos sobre diferentes temáticas: Programación, IA, Tecnología, Ciberseguridad, educación, etc.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Aquí puedes ver los proyectos que he ido llevando a cabo.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Búsqueda",
  DESCRIPTION: "Buscar en todas las publicaciones, trabajos y proyectos por palabra clave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Formación", 
    HREF: "/work", 
  },
  { 
    TEXT: "Artículos", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "enviar correo",
    HREF: "mailto:oscar@techdevai.es",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "TechDevAI",
    HREF: "https://github.com/TechDevAI-es/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/oscar-racero-techdevai/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/productor_23",
  },
]

