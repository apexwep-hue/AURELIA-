/* ==========================================================================
   CUSTOMIZATION AREA (SELLER / BUYER CONFIGURATION DRIVER)
   ==========================================================================
   Instructions: Edit the variables below to customize the portfolio template
   for your specific artist client.
   ========================================================================== */

const SITE_CONFIG = {
  // BRAND & PERSONAL INFORMATION
  brandName: "AURELIA VANCE",
  jobTitle: "CONTEMPORARY FINE ARTIST",
  artistName: "Aurelia Vance",
  
  // COLOR PALETTE OVERRIDES (Injected into CSS variables at runtime)
  colors: {
    primaryBg: "#121212",
    secondaryBg: "#191817",
    accentGold: "#c5a059",
    accentGoldHover: "#dfb76c",
    textMain: "#f4f1ea",
    textMuted: "#a39f97"
  },

  // HERO SECTION CONFIGURATION
  hero: {
    tagline: "ORIGINAL WORKS & ATELIER COMMISSIONS",
    title: "Capturing light through timeless texture.",
    description: "Exploring human vulnerability, organic light, and quiet atmospheric textures through oil on Belgian linen and sculptural mixed media.",
    mainImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    badgeTitle: "Ethereal Solitude No. 4",
    badgeMeta: "Oil on Linen, 2025"
  },

  // ABOUT SECTION CONFIGURATION
  about: {
    heading: "Art that evokes quiet contemplation and spatial harmony.",
    bioText: "Based in Paris and New York, Aurelia Vance balances traditional European oil glazing techniques with modern minimalism. Her works explore quiet solitude, natural light phenomena, and layered physical textures.",
    yearsExperience: "12+",
    artistImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "SOLO EXHIBITIONS", value: "18" },
      { label: "PRIVATE COLLECTIONS", value: "140+" },
      { label: "MONOGRAPHS PUBLISHED", value: "3" }
    ]
  },

  // CONTACT & SOCIAL INFORMATION
  contact: {
    email: "contact@aureliavance.art",
    phone: "+33 1 42 68 00 00",
    whatsapp: "33142680000",
    address: "740 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    hours: "By Private Appointment Only (Tue – Sat)",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },

  // ARTWORK GALLERY DATABASE
  artworks: [
    {
      id: "art-1",
      title: "Luminous Abyss No. 12",
      category: "paintings",
      year: 2025,
      medium: "Oil & Gold Leaf on Belgian Linen",
      dimensions: "140 x 180 cm",
      price: "$16,500 USD",
      status: "Available",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      description: "A monumental oil exploration of atmospheric depth, layering twenty-four ultra-thin glazes to create dynamic luminescence under physical light."
    },
    {
      id: "art-2",
      title: "Monolith in Bronze",
      category: "sculpture",
      year: 2024,
      medium: "Patinated Cast Bronze, Edition 1/5",
      dimensions: "45 x 30 x 120 cm",
      price: "$22,000 USD",
      status: "Available",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      description: "An architectural exploration of organic balance and hand-patinated bronze textures."
    },
    {
      id: "art-3",
      title: "Silent Horizon Study",
      category: "photography",
      year: 2025,
      medium: "Archival Pigment Print on Museum Paper",
      dimensions: "100 x 100 cm",
      price: "$4,200 USD",
      status: "Limited Edition (2/10)",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80",
      description: "Minimalist long-exposure photographic study of fog rolling over coastal rock formations."
    },
    {
      id: "art-4",
      title: "Chroma Dynamics in Ochre",
      category: "digital",
      year: 2025,
      medium: "Generative Fine Art & Plotter Pen on Vellum",
      dimensions: "90 x 120 cm",
      price: "$6,800 USD",
      status: "Available",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
      description: "Algorithmic geometry rendered with custom gold leaf inks."
    }
  ],

  // EXHIBITIONS RECORD
  exhibitions: [
    { year: "2025", title: "Atmospheric Glazes (Solo Show)", venue: "Galerie Perrotin, Paris" },
    { year: "2024", title: "Modern Minimalism in Bronze & Linen", venue: "Gagosian Atelier, New York" },
    { year: "2023", title: "Biennale of Fine Art", venue: "Palazzo Ducale, Venice" }
  ],

  // AWARDS & HONORS
  awards: [
    { year: "2024", title: "International Fine Art Fellowship", org: "Fondation des Beaux-Arts Paris" },
    { year: "2022", title: "Master Painter Gold Medal", org: "European Contemporary Art Guild" }
  ],

  // COLLECTOR TESTIMONIALS
  testimonials: [
    {
      quote: "Aurelia Vance's oil work transformed the main atrium of our private residence. The light shifts constantly throughout the day.",
      author: "Baroness Helene von Berg",
      location: "Zurich, Switzerland"
    },
    {
      quote: "One of the most compelling contemporary painters blending master technique with raw minimalist emotion.",
      author: "Marcus Vance",
      location: "Chief Curator, Beaux-Arts Society"
    }
  ]
};