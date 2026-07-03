import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Menu,
  X,
  Layers,
  Monitor,
  Search,
  Hammer,
  Edit3,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";

const LOGO_URL =
  "/projects/emara-logo.jpeg";

// --- HARDCODED DEMO PROJECTS (5 projects, 7 images each) ---
const PROJECTS = [
  {
    id: "one-knock-real-estate",
    title: "One Knock Real Estate",
    category: "Web Development",
    client: "One Knock Real Estate LLC, Dubai, UAE",
    date: "2025",
    link: "https://oneknockrealestate.com/",
    description:
      "A complete digital platform for One Knock Real Estate LLC — Dubai property experts specialising in luxury homes, high-ROI investments, and off-plan projects across JVC, Business Bay, Downtown, Dubai Marina and beyond.\n\nWe delivered an immersive, conversion-focused website with rich property listings (for sale & rent), advanced search, developer partnerships, and a seamless 'Book a Meeting' booking flow — all wrapped in a refined, trust-building experience.",
    images: [
      "/projects/one-knock-1.png",
      "/projects/one-knock-2.png",
      "/projects/one-knock-3.png",
      "/projects/one-knock-4.png",
      "/projects/one-knock-5.png",
      "/projects/one-knock-6.png",
    ],
  },
  {
    id: "expora",
    title: "Expora Insights",
    category: "Web Development",
    client: "Expora Insights, Dubai, UAE",
    date: "2026",
    link: "https://www.exporainsights.com/",
    description:
      "Expora Insights is a data-driven property analytics platform specializing in the deep study and processing of complex Dubai real estate data. Built with a clean, user-focused interface, the platform simplifies intricate property market trends and large volumes of historical data into highly accurate graphical data displays and interactive charts. Designed for technical precision, Expora Insights allows investors and market analysts to effortlessly navigate real estate market analytics, making data-heavy property research, trend forecasting, and market studies straightforward and accessible.",
    images: [
     "/projects/expora8.jpeg",
     "/projects/expora7.jpeg",
     "/projects/expora1.png",
     "/projects/expora2.png",
     "/projects/expora3.png",
     "/projects/expora4.png",
     "/projects/expora5.png",
     "/projects/expora6.png",
     
    ],
  },
  {
    id: "one-knock-jewellery",
    title: "One Knock Jewellery Trading",
    category: "Web Development",
    client: "One Knock Jewellery Trading, Dubai, UAE",
    date: "2025",
    link: "https://oneknockjewellerytrading.com/",
    description:
      "The One Knock Jewellery Trading website is a streamlined, user-friendly digital resource platform dedicated to gold investment insights and market information. Featuring a clean and highly responsive user interface, the site allows users to easily navigate educational content, expert data studies, and essential market guides for buying and trading precious metals. Optimized for fast loading speeds and mobile devices, the platform delivers a secure and accessible browsing experience designed to help both new and seasoned investors stay informed on gold trading essentials.",
    images: [
     "/projects/okj1.png",
     "/projects/okj2.png",
     "/projects/okj3.png",
     "/projects/okj4.png",
     "/projects/okj5.png",
     "/projects/okj6.png",
     "/projects/okj7.png",
     
    ],
  },
   {
    id: "one-knock-petro",
    title: "One Knock Petro Chemicals",
    category: "Web Development",
    client: "One Knock Petro Chemicals, Dubai, UAE",
    date: "2025",
    link: "https://oneknockjewellerytrading.com/petro-chemicals/",
    description:
      "The One Knock Petro Chemicals landing page is a streamlined, single-page business profile integrated within the One Knock domain. Designed as a straightforward B2B informational portal, this landing page provides a clean and clear overview of the company's petrochemical trading services and core business details. Featuring an intuitive user interface and a direct Contact Us call to action, the page is fully optimized for speed and mobile responsiveness, making it incredibly easy for global trade clients and industry partners to quickly review essential business information and get in touch directly.",
    images: [
     "/projects/okp1.png",
     "/projects/okp2.png",
     "/projects/okp3.png",
     
    ],
  },
  {
    id: "seven-kings",
    title: "Seven Kings Builders",
    category: "Web Development",
    client: "Seven Kings Builders, London, United Kingdom",
    date: "2026",
    link: "https://sevenkingsbuilders.co.uk/",
    description:
      "The Seven Kings Builders website is a professional digital portfolio and business profile showcasing the company’s premier building and construction services. Designed with a clean, responsive layout, the platform allows clients to easily explore a diverse range of completed projects, including domestic building work, property extensions, and modern home renovations. Fully optimized for fast loading speeds and mobile devices, the site offers seamless navigation for residential and commercial clients across the UK to view project quality, explore building expertise, and easily request consultations or structural quotes.",
    images: [
     "/projects/sk1.png",
     "/projects/sk2.png",
     "/projects/sk3.png",
     "/projects/sk4.png",
     "/projects/sk5.png",
     "/projects/sk6.png",
     "/projects/sk7.png",
     "/projects/sk8.png",
     
    ],
  },
  {
    id: "caravaa",
    title: "Caravaa Resto N' Cafe",
    category: "Web Development",
    client: "Caravaa Cafe",
    date: "2025",
    link: "https://caravaarestoncafe.com/",
    description:
      "The Caravaa Reston Cafe website is a vibrant, mobile-friendly digital storefront designed to bring the warm atmosphere and unique flavors of Turkish and Middle Eastern dining online. Featuring a clean, responsive user interface, the platform allows guests to effortlessly explore a rich food and beverage menu featuring traditional Middle Eastern dishes, Turkish specialties, and unique cafe offerings. Fully optimized for fast loading speeds on all devices, the site makes it incredibly simple for local food lovers to view authentic menu items, check location details, and plan their next dining experience.",
    images: [
     "/projects/c1.png",
     "/projects/c2.png",
     "/projects/c3.png",
     "/projects/c4.png",
     "/projects/c5.png",
     "/projects/c6.png",
     
    ],
  },
  {
    id: "motoriq",
    title: "MotorIQ",
    category: "SEO",
    client: "Motor IQ",
    date: "2026",
    link: "https://motoriq.in/",
    description:
      "Emara delivered a comprehensive search engine optimization (SEO) and technical architecture strategy for MotorIQ, a premier automotive dealer operating system and verified used-car marketplace in India. To drive organic growth in a highly competitive sector, we implemented a robust SEO framework focusing on technical site health, optimized search indexation, and targeted keyword positioning. The strategy successfully aligned the platform's dual functionalities—B2B dealership inventory management software and B2C used-car directories—maximizing search visibility for local dealer queries and high-intent car buyers while driving sustainable organic traffic",
    images: [
     "/projects/motoriq.png",
     
    ],
  },
];

const SERVICES = [
  {
    id: "design",
    title: "UI UX Design",
    icon: <Layers className="w-8 h-8 text-[#D4AF37]" />,
    desc: "Exceptional digital blueprints crafted to absolute premium standards. Refined wireframes, crystal interactive high-fidelity user journeys, and elite aesthetics.",
  },
  {
    id: "brand",
    title: "Brand Redesign",
    icon: <Edit3 className="w-8 h-8 text-[#D4AF37]" />,
    desc: "Complete visual and strategic brand overhauls. We reimagine identities with timeless logotypes, rich palettes, and a refined editorial presence.",
  },
  {
    id: "webdev",
    title: "Web Development",
    icon: <Monitor className="w-8 h-8 text-[#D4AF37]" />,
    desc: "Next-generation, responsive websites configured with elite performance, smooth motions, pixel-perfect layout precision, and resilient frameworks.",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: <Search className="w-8 h-8 text-[#D4AF37]" />,
    desc: "Strategic search dominance. Elevating organic engagement, optimizing technical schemas, and placing your venture at the pinnacle of discoverability.",
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    icon: <Hammer className="w-8 h-8 text-[#D4AF37]" />,
    desc: "Impeccable service maintenance. Real-time diagnostic sweeps, security audits, database cleanups, and regular feature updates for ongoing peace of mind.",
  },
];

const CATEGORIES = [
  "All",
  "UI UX Design",
  "Brand Redesign",
  "Web Development",
  "SEO",
  "Website Maintenance",
];

const REVIEWS = [
   {
    id: "r1",
    name: "Mr. Azim Haju",
    role: "Founder, One Knock Group",
    quote:
      "A luxury brand requires a premium digital presence, and Emara delivered exactly that for our jewellery trading website. The attention to detail in the design is incredible, and the site is fast. On top of that, they easily added a great landing page for our other business, One Knock Petro Chemicals, right into the same website. They are professional,skilled and great at handling everything we need in one place.",
  },
  {
    id: "r2",
    name: "Yasin Khan",
    role: "Founder, Expora Insights",
    quote:
      "We partnered with Emara to develop our corporate website. They built a clean, modern interface that functions smoothly and looks highly professional. Their technical execution was solid, and the communication was reliable from start to finish.",
  },
  {
    id: "r3",
    name: "Mohammad Saad",
    role: "Director, One Knock Real Estate",
    quote:
      "Emara built our real estate website, and we are really happy with the outcome. In our industry, having a clean layout and easy property filters is essential, and they delivered exactly that. The site is responsive and very user-friendly. They listened to our requirements and were easy to work with throughout the project.",
  },
  {
    id: "r4",
    name: "Sharmeen Shaikh",
    role: "Owner, Caravaa Resto N' Cafe",
    quote:
      "Emara really understood the vibe we wanted for our cafe's website. They created a simple, nice-looking layout that makes it easy for customers to look at our menu and find our location on their phones. They were patient with our feedback and made the updates quickly.",
  },
   {
    id: "r5",
    name: "Mr. Muzaffar",
    role: "Founder, Seven Kings Builders",
    quote:
      "The team did a great job with the design and development of our construction website. It looks professional, works perfectly, and clearly displays our portfolio of past work. They stuck to the agreed timeline and made the entire process straightforward and stress-free.",
  },
  {
    id: "r6",
    name: "Anas Shaikh",
    role: "Founder, Motor IQ",
    quote:
      "We've been working with Emara for our SEO, and the results have been very steady. They helped fix our technical site issues and improved our content layout, which has noticeably increased our organic search traffic. They know what they're doing and keep things straightforward.",
  },

];

function ImageCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  if (total === 0) return null;
  const go = (d) => setIdx((p) => (p + d + total) % total);
  return (
    <div className="space-y-4" data-testid="project-carousel">
      <div className="relative h-80 sm:h-[28rem] overflow-hidden border border-[#3A302D] bg-[#120E0D]">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} — view ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#120E0D]/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] p-3 hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300"
              data-testid="carousel-prev-btn"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#120E0D]/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] p-3 hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300"
              data-testid="carousel-next-btn"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-[#120E0D]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-xs tracking-[0.2em] px-3 py-1.5">
              {idx + 1} / {total}
            </div>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2" data-testid="carousel-thumbnails">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`shrink-0 w-20 h-16 sm:w-24 sm:h-16 overflow-hidden border-2 transition-all duration-300 ${
                i === idx ? "border-[#D4AF37]" : "border-[#3A302D] opacity-60 hover:opacity-100"
              }`}
              data-testid={`carousel-thumb-${i}`}
            >
              <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Testimonials({ reviews }) {
  const [active, setActive] = useState(0);
  const total = reviews.length;
  const rev = reviews[active];
  const go = (d) => setActive((p) => (p + d + total) % total);
  const initials = (name) =>
    name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" data-testid="testimonials">
      {/* Left: oversized index + controls */}
      <div className="lg:col-span-4 space-y-8">
        <div className="flex items-end gap-3">
          <span className="font-serif-luxury text-7xl sm:text-8xl text-gold-gradient leading-none">
            0{active + 1}
          </span>
          <span className="text-[#A6948F] text-lg tracking-[0.2em] pb-3">/ 0{total}</span>
        </div>
        <p className="text-[#A6948F] font-light leading-relaxed text-sm max-w-xs">
          Every engagement is a partnership. These are the voices of the brands we have had the honour to serve.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(-1)}
            className="p-3 border border-[#3A302D] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300"
            data-testid="review-prev-btn"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="p-3 border border-[#3A302D] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300"
            data-testid="review-next-btn"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: featured quote */}
      <div className="lg:col-span-8 relative">
        <Quote className="absolute -top-6 -left-2 w-20 h-20 text-[#D4AF37]/10" />
        <div
          key={rev.id}
          className="relative backdrop-blur-xl bg-[#1A1514]/60 border border-[#D4AF37]/20 p-10 sm:p-14 animate-fade-in shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          data-testid={`review-active-${rev.id}`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent" />
          <div className="flex items-center gap-1 mb-8" aria-label={`${rev.rating} star rating`}>
            {Array.from({ length: rev.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            ))}
          </div>
          <p className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-[#FDFBF7] italic">
            “{rev.quote}”
          </p>
          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-[#3A302D]">
            <div className="w-14 h-14 shrink-0 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#120E0D]">
              <span className="font-serif-luxury text-[#D4AF37] text-lg">{initials(rev.name)}</span>
            </div>
            <div>
              <p className="font-serif-luxury text-xl text-[#FDFBF7]">{rev.name}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-[#A6948F] mt-1">{rev.role}</p>
            </div>
          </div>
        </div>

        {/* Reviewer tabs */}
        <div className="flex flex-wrap gap-3 mt-8">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              className={`text-xs px-4 py-2 uppercase tracking-[0.15em] border transition-all duration-300 ${
                i === active
                  ? "bg-[#D4AF37] text-[#120E0D] border-[#D4AF37]"
                  : "border-[#3A302D] text-[#A6948F] hover:border-[#D4AF37]/50 hover:text-[#FDFBF7]"
              }`}
              data-testid={`review-tab-${r.id}`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectDetail, setActiveProjectDetail] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProjectDetail ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProjectDetail]);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#120E0D] text-[#FDFBF7] selection:bg-[#D4AF37] selection:text-[#120E0D]">
      {/* --- NAV BAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#120E0D]/80 border-b border-[#3A302D]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-24 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-4 cursor-pointer group" data-testid="navbar-logo-container">
            <img
              src={LOGO_URL}
              alt="Emara Logo"
              className="h-12 w-12 rounded-sm object-cover border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-500"
            />
            <div className="hidden sm:block">
              <span className="font-serif-luxury text-xl tracking-[0.15em] text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors duration-300">
                EMARA
              </span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#A6948F]">SOFTWARE</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm tracking-[0.15em] uppercase hover:text-[#D4AF37] text-[#F7E7CE] transition-all" data-testid="nav-link-about">
              About Us
            </a>
            <a href="#services" className="text-sm tracking-[0.15em] uppercase hover:text-[#D4AF37] text-[#F7E7CE] transition-all" data-testid="nav-link-services">
              Expertise
            </a>
            <a href="#portfolio" className="text-sm tracking-[0.15em] uppercase hover:text-[#D4AF37] text-[#F7E7CE] transition-all" data-testid="nav-link-portfolio">
              Showcase
            </a>
            <a href="#reviews" className="text-sm tracking-[0.15em] uppercase hover:text-[#D4AF37] text-[#F7E7CE] transition-all" data-testid="nav-link-reviews">
              Acclaim
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-[#3A302D] text-[#FDFBF7]" data-testid="mobile-menu-trigger">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#1A1514] border-b border-[#3A302D] py-8 px-6 animate-fade-in">
            <div className="flex flex-col gap-6">
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-md tracking-[0.2em] uppercase text-[#F7E7CE] hover:text-[#D4AF37]" data-testid="mobile-link-about">
                About Us
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-md tracking-[0.2em] uppercase text-[#F7E7CE] hover:text-[#D4AF37]" data-testid="mobile-link-services">
                Expertise
              </a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-md tracking-[0.2em] uppercase text-[#F7E7CE] hover:text-[#D4AF37]" data-testid="mobile-link-portfolio">
                Showcase
              </a>
            </div>
          </div>
        )}
      </nav>

      <span id="top" />

      {/* --- HERO --- */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-6 sm:px-12 overflow-hidden border-b border-[#3A302D]">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale saturate-50" style={{ backgroundImage: `url('https://images.pexels.com/photos/31622917/pexels-photo-31622917.jpeg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E0D] via-[#120E0D]/90 to-transparent z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-3 bg-[#1A1514] border border-[#D4AF37]/30 px-4 py-2 text-[#D4AF37] tracking-[0.25em] text-xs uppercase">
              <Sparkles className="w-4 h-4 animate-pulse" /> Luxury Digital Architectures
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
              Unveiling Digital <span className="text-gold-gradient block italic font-normal">Prestige &amp; Beauty</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A6948F] font-light max-w-2xl leading-relaxed">
              We formulate stunning brand identities, elite web architectures, premium UI/UX interfaces, and high-impact search strategies for visionaries who command distinction.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href="#portfolio" className="bg-[#D4AF37] text-[#120E0D] px-10 py-5 uppercase tracking-[0.15em] text-sm font-semibold text-center hover:bg-[#FDFBF7] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]" data-testid="hero-cta-portfolio">
                Our Masterpieces
              </a>
              <a href="#services" className="border border-[#D4AF37] text-[#D4AF37] px-10 py-5 uppercase tracking-[0.15em] text-sm font-semibold text-center hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300" data-testid="hero-cta-services">
                Our Expertise
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-8 border border-[#3A302D] bg-[#1A1514]/40 backdrop-blur-xl space-y-6 relative group">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37] opacity-60 group-hover:w-full group-hover:h-full transition-all duration-500 pointer-events-none" />
              <img src={LOGO_URL} alt="Emara Logo Display" className="w-full h-64 object-cover border border-[#3A302D] filter grayscale saturate-50 hover:grayscale-0 transition-all duration-700" />
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">Est. 2025</p>
                <h3 className="text-xl font-light text-[#FDFBF7]">The Emara Aesthetic</h3>
               { /*<p className="text-xs text-[#A6948F] font-light leading-relaxed">
                  Symmetrical layouts, rich champagne tones, and metallic gold accents defining structural software systems.
                </p>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#3A302D] bg-[#1A1514]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-[#3A302D] p-3 bg-[#120E0D]">
              <img src="https://images.pexels.com/photos/8135119/pexels-photo-8135119.jpeg" alt="Premium workspace" className="w-full h-[450px] object-cover filter grayscale contrast-125" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37]/30 -z-0 hidden sm:block" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-snug">
              Where Refined Restraint <br />
              <span className="italic text-gold-gradient font-normal">Meets Resilient Technology</span>
            </h2>
            <p className="text-[#A6948F] leading-relaxed font-light text-base sm:text-lg">
              At Emara Software Solutions, we refuse the mundane. We reject standard grids and overused designs. Our boutique digital agency builds bespoke digital environments engineered for rapid scalability, striking visual impact, and supreme security.
            </p>
            <p className="text-[#A6948F] leading-relaxed font-light text-base sm:text-lg">
              Founded on a passion for craftsmanship, our multidisciplinary team of designers, engineers, and strategists partners with ambitious brands across fashion, real estate, hospitality, and technology. From the first concept to the final pixel, every project is treated as a signature work — meticulously detailed, performance-obsessed, and unmistakably premium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="border border-[#3A302D] p-5 space-y-1.5 bg-[#120E0D]/40">
                <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">Our Mission</p>
                <p className="text-sm text-[#A6948F] font-light leading-relaxed">Craft digital experiences that elevate brands beyond the ordinary.</p>
              </div>
              <div className="border border-[#3A302D] p-5 space-y-1.5 bg-[#120E0D]/40">
                <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">Our Approach</p>
                <p className="text-sm text-[#A6948F] font-light leading-relaxed">Bespoke, detail-obsessed, and built on lasting client partnerships.</p>
              </div>
              <div className="border border-[#3A302D] p-5 space-y-1.5 bg-[#120E0D]/40">
                <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">Our Promise</p>
                <p className="text-sm text-[#A6948F] font-light leading-relaxed">Uncompromising quality, security, and timeless aesthetics.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
                <span className="font-serif-luxury text-3xl text-[#FDFBF7]">100%</span>
                <p className="text-xs tracking-[0.15em] uppercase text-[#A6948F]">Tailored Solutions</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
                <span className="font-serif-luxury text-3xl text-[#FDFBF7]">100%</span>
                <p className="text-xs tracking-[0.15em] uppercase text-[#A6948F]">Client Satisfaction</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
                <span className="font-serif-luxury text-3xl text-[#FDFBF7]">5+</span>
                <p className="text-xs tracking-[0.15em] uppercase text-[#A6948F]">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#3A302D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Our Curated Capabilities</h2>
            <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => (
              <div key={srv.id} className="bg-[#1A1514] border border-[#3A302D] p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37]/60 group relative overflow-hidden hover:-translate-y-2" data-testid={`service-card-${srv.id}`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="space-y-6">
                  <div className="p-4 bg-[#120E0D] border border-[#3A302D] inline-block">{srv.icon}</div>
                  <h3 className="text-2xl font-light text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors duration-300">{srv.title}</h3>
                  <p className="text-[#A6948F] text-sm leading-relaxed font-light">{srv.desc}</p>
                </div>
                <div className="pt-8 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                  <span>Phase 0{idx + 1}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#3A302D] bg-[#1A1514]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Archives</span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Our Masterpieces</h2>
            </div>

            <div className="flex flex-wrap gap-3" data-testid="portfolio-filter-container">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-5 py-2.5 uppercase tracking-[0.15em] border transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#D4AF37] text-[#120E0D] border-[#D4AF37]"
                      : "border-[#3A302D] text-[#A6948F] hover:border-[#D4AF37]/50 hover:text-[#FDFBF7]"
                  }`}
                  data-testid={`portfolio-filter-btn-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.length === 0 ? (
              <div className="col-span-2 text-center py-20 border border-dashed border-[#3A302D] text-[#A6948F]">
                Our vault is presently being upgraded. Please return soon.
              </div>
            ) : (
              filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectDetail(proj)}
                  className="group bg-[#1A1514] border border-[#3A302D] overflow-hidden cursor-pointer hover:border-[#D4AF37]/40 transition-all duration-500"
                  data-testid={`project-item-${proj.id}`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img src={proj.images[0]} alt={proj.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D] to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 bg-[#120E0D]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] px-4 py-2">
                      {proj.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-[#120E0D]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] px-3 py-2">
                      {proj.images.length} Views
                    </span>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#A6948F]">
                      <span>{proj.client}</span>
                      <span>{proj.date}</span>
                    </div>
                    <h3 className="text-2xl font-light text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors duration-300">{proj.title}</h3>
                    <p className="text-sm text-[#A6948F] line-clamp-2 font-light leading-relaxed">{proj.description}</p>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] pt-2">
                      <span>Explore Chronicles</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* --- CLIENT REVIEWS --- */}
      <section id="reviews" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-[#3A302D]" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Client Acclaim</span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
              Whispers of <span className="italic text-gold-gradient font-normal">Distinction</span>
            </h2>
            <p className="text-[#A6948F] font-light leading-relaxed text-base sm:text-lg">
              The truest measure of our craft lives in the words of those we serve. Hear from the visionaries who entrusted us with their legacy.
            </p>
            <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6" />
          </div>

          <Testimonials reviews={REVIEWS} />
        </div>
      </section>

      {/* --- ABOUT THE OWNER --- */}
     {/*--- <section id="owner" className="py-16 px-6 sm:px-12 border-b border-[#3A302D] bg-[#1A1514]/20" data-testid="owner-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         
          <div className="lg:col-span-4 relative max-w-xs mx-auto lg:mx-0 group">
            <div className="relative z-10 border border-[#D4AF37]/30 p-2.5 bg-[#120E0D] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
                alt="Zubiya Fatema — Founder of Emara Software Solutions"
                className="w-full h-[340px] object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                data-testid="owner-portrait"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-28 h-28 border-t border-l border-[#D4AF37]/40 -z-0 hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border-b border-r border-[#D4AF37]/40 -z-0 hidden sm:block" />
          </div>

          
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block">Meet the Founder</span>
            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-snug">
                Zubiya <span className="italic text-gold-gradient font-normal">Fatema</span>
              </h2>
              <p className="text-sm tracking-[0.25em] uppercase text-[#A6948F]">Founder</p>
            </div>

            <div className="space-y-4 text-[#A6948F] leading-relaxed font-light text-base max-w-2xl">
              <p>
                Zubiya founded Emara Software Solutions with a singular conviction — that exceptional design and resilient technology should never be a compromise. What began as a passion for crafting beautiful, purposeful digital experiences has grown into a boutique studio trusted by ambitious brands.
              </p>
              <p>
                With a meticulous eye for detail and a deep respect for each client's vision, she leads every project from first sketch to final pixel — ensuring the result is as elegant as it is enduring.
              </p>
            </div>

            <div className="pt-1">
              <p className="font-serif-luxury text-2xl text-[#FDFBF7] italic">Zubiya Fatema</p>
              <div className="w-28 h-0.5 bg-[#D4AF37] mt-2" />
            </div>
          </div>
        </div>

        
        
      </section>
      
        ---*/}

      {/* --- FOOTER --- */}
      <footer className="bg-[#0E0B0A] border-t border-[#3A302D]" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Emara Logo" className="w-12 h-12 object-cover border border-[#3A302D]" />
                <div className="leading-tight">
                  <p className="font-serif-luxury text-xl text-[#FDFBF7] tracking-wide">EMARA</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#A6948F]">Software</p>
                </div>
              </div>
              <p className="text-sm text-[#A6948F] font-light leading-relaxed max-w-sm">
                A boutique digital studio crafting luxurious brand identities, elite web architectures, and high-impact digital experiences for visionaries.
              </p>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Expertise", href: "#services" },
                  { label: "Showcase", href: "#portfolio" },
                  { label: "Acclaim", href: "#reviews" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#A6948F] font-light hover:text-[#D4AF37] transition-colors duration-300 inline-flex items-center gap-2 group" data-testid={`footer-link-${link.label.replace(/\s+/g, "-").toLowerCase()}`}>
                      <ChevronRight className="w-3 h-3 text-[#D4AF37] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((srv) => (
                  <li key={srv.id}>
                    <a href="#services" className="text-sm text-[#A6948F] font-light hover:text-[#D4AF37] transition-colors duration-300" data-testid={`footer-service-${srv.id}`}>
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@emarasoftware.com" className="flex items-start gap-3 text-sm text-[#A6948F] font-light hover:text-[#D4AF37] transition-colors duration-300 group" data-testid="footer-contact-email">
                    <Mail className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="break-all">info@emarasoftware.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919822070363" className="flex items-start gap-3 text-sm text-[#A6948F] font-light hover:text-[#D4AF37] transition-colors duration-300" data-testid="footer-contact-phone">
                    <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>+91 98220 70363</span>
                  </a>
                </li>
              </ul>
              <div className="pt-2 space-y-3">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#A6948F]">Follow Us</p>
                <a
                  href="https://www.instagram.com/emarasoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#120E0D] transition-all duration-300"
                  aria-label="Instagram"
                  data-testid="footer-instagram-link"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#3A302D] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#A6948F]">
              © {new Date().getFullYear()} Emara Software Solutions. All Rights Reserved.
            </p>
            <p className="text-sm text-[#A6948F] font-light">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.instagram.com/emarasoftware/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif-luxury text-base text-[#D4AF37] hover:text-[#F7E7CE] transition-colors duration-300"
                data-testid="footer-emara-credit-link"
              >
                Emara
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* --- PROJECT DETAIL MODAL --- */}
      {activeProjectDetail && (
        <div className="fixed inset-0 z-50 bg-[#120E0D]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in" data-testid="project-detail-modal">
          <div className="bg-[#1A1514] border border-[#D4AF37]/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 relative">
            <button onClick={() => setActiveProjectDetail(null)} className="absolute top-4 right-4 text-[#A6948F] hover:text-[#D4AF37] p-2 border border-[#3A302D] hover:border-[#D4AF37]" data-testid="close-project-modal-btn">
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] bg-[#120E0D] px-4 py-2 border border-[#3A302D] inline-block">
                {activeProjectDetail.category}
              </span>

              <h2 className="text-3xl sm:text-5xl font-light text-[#FDFBF7]">{activeProjectDetail.title}</h2>

              <ImageCarousel key={activeProjectDetail.id} images={activeProjectDetail.images} title={activeProjectDetail.title} />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[#3A302D]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Patron / Client</p>
                  <p className="text-md text-[#F7E7CE] font-light mt-1">{activeProjectDetail.client || "Bespoke Portfolio Creation"}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Preservation Date</p>
                  <p className="text-md text-[#F7E7CE] font-light mt-1">{activeProjectDetail.date || "Curated"}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">Marque URL</p>
                  {activeProjectDetail.link ? (
                    <a href={activeProjectDetail.link} target="_blank" rel="noopener noreferrer" className="text-md text-[#D4AF37] font-light mt-1 flex items-center gap-1 hover:underline">
                      Visit Site <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className="text-md text-[#A6948F] font-light mt-1">Private Marque</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg uppercase tracking-[0.1em] text-[#D4AF37] font-light">Narrative &amp; Solution</h4>
                <p className="text-[#F7E7CE] leading-relaxed font-light text-md whitespace-pre-line">{activeProjectDetail.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
