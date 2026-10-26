import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  DM_Sans,
  IBM_Plex_Mono,
  Caveat,
} from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const handwrittenFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-handwritten",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#06080E" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manuelac.xyz"),
  title: {
    default: `${profileData.fullName} (${profileData.handle}) — Full-Stack & Systems Developer`,
    template: `%s | ${profileData.name} (${profileData.handle})`,
  },
  description:
    "Portfolio of John Manuel Alera Cuerdo (John Manuel Cuerdo / manuelAC / manwelAC), a full-stack & systems developer based in Caloocan, Manila, Philippines building web applications, enterprise ERPs, payroll systems, and local-first developer tools.",
  keywords: [
    "John Manuel Alera Cuerdo",
    "John Manuel Cuerdo",
    "manuelAC",
    "manwelAC",
    "JMAC",
    "manuelac.xyz",
    "Full-Stack Developer Philippines",
    "Systems Developer Manila",
    "Junior System Developer Ascendens Asia",
    "University of Caloocan City Computer Science",
    "Intracode IT Solutions",
    "Laravel Developer Philippines",
    "Next.js TypeScript Developer",
    "Imajica Aesthetics ERP",
    "docs-for-me",
    "DemoShield",
    "Balitaan",
    "Check me Up",
  ],
  authors: [
    {
      name: profileData.fullName,
      url: "https://www.manuelac.xyz",
    },
  ],
  creator: profileData.fullName,
  publisher: profileData.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.manuelac.xyz",
  },
  icons: {
    icon: "/assets/drinking-coffee-favicon.webp",
    shortcut: "/assets/drinking-coffee-favicon.webp",
    apple: "/mypfp-page.png",
  },
  openGraph: {
    title: `${profileData.fullName} (${profileData.handle}) — Full-Stack & Systems Developer`,
    description:
      "Full-stack developer architecting dependable systems and clean interfaces across web, desktop, and local-first tools.",
    url: "https://www.manuelac.xyz",
    siteName: `${profileData.handle} — ${profileData.fullName}`,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/mypfp-page.png",
        width: 800,
        height: 800,
        alt: `${profileData.fullName} (${profileData.handle})`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.fullName} (${profileData.handle}) — Full-Stack Developer`,
    description:
      "Portfolio of John Manuel Alera Cuerdo (manuelAC / manwelAC) — building web applications, business systems, and developer tools in Manila, PH.",
    images: ["/mypfp-page.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.manuelac.xyz/#person",
        name: profileData.fullName,
        givenName: "John Manuel",
        additionalName: "Alera",
        familyName: "Cuerdo",
        alternateName: [
          "John Manuel Cuerdo",
          "manuelAC",
          "manwelAC",
          "JMAC",
        ],
        url: "https://www.manuelac.xyz",
        image: "https://www.manuelac.xyz/mypfp-page.png",
        email: `mailto:${profileData.email}`,
        jobTitle: "Full-Stack & Systems Developer",
        description: profileData.bioParagraphs.join(" "),
        homeLocation: {
          "@type": "Place",
          name: "Caloocan / Manila, Philippines",
        },
        worksFor: {
          "@type": "Organization",
          name: "Ascendens Asia",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Caloocan City",
        },
        knowsAbout: [
          "Full-Stack Web Development",
          "PHP",
          "Laravel",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Angular",
          "Python",
          "MySQL",
          "PostgreSQL",
          "Electron",
          "Docker",
          "Enterprise Resource Planning (ERP)",
          "HRIS and Payroll Systems",
          "Local AI Developer Tools",
        ],
        sameAs: [
          "https://github.com/manwelAC",
          "https://www.instagram.com/manwel.ac",
          "https://www.tiktok.com/@manwel.ac",
          "https://www.manuelac.xyz",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.manuelac.xyz/#website",
        url: "https://www.manuelac.xyz",
        name: `${profileData.fullName} (${profileData.handle}) Portfolio`,
        publisher: {
          "@id": "https://www.manuelac.xyz/#person",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.manuelac.xyz/#projects",
        name: "Software Systems & Projects by John Manuel Alera Cuerdo",
        itemListElement: projectsData.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.shortDescription,
            applicationCategory: project.category,
            operatingSystem: "Web, Windows, macOS, Linux, Mobile",
            author: {
              "@id": "https://www.manuelac.xyz/#person",
            },
            url: `https://www.manuelac.xyz/projects/${project.slug}`,
          },
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${displayFont.variable} ${sansFont.variable} ${monoFont.variable} ${handwrittenFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PortfolioProvider>
          <PortfolioShell>{children}</PortfolioShell>
        </PortfolioProvider>
      </body>
    </html>
  );
}
