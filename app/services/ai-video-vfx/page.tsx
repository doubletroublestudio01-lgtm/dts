import AIVideoVFXBenefits from "@/components/AIVideoVFX/AIVideoVFXBenefits";
import AIVideoVFXCampaignGoals from "@/components/AIVideoVFX/AIVideoVFXCampaignGoals";
import AIVideoVFXCTA from "@/components/AIVideoVFX/AIVideoVFXCTA";
import AIVideoVFXFAQ from "@/components/AIVideoVFX/AIVideoVFXFAQ";
import AIVideoVFXFormats from "@/components/AIVideoVFX/AIVideoVFXFormats";
import AIVideoVFXHero from "@/components/AIVideoVFX/AIVideoVFXHero";
import AIVideoVFXHighlights from "@/components/AIVideoVFX/AIVideoVFXHighlights";
import AIVideoVFXIndiaLocations from "@/components/AIVideoVFX/AIVideoVFXIndiaLocations";
import AIVideoVFXIndustries from "@/components/AIVideoVFX/AIVideoVFXIndustries";
import AIVideoVFXIntro from "@/components/AIVideoVFX/AIVideoVFXIntro";
import AIVideoVFXPortfolio from "@/components/AIVideoVFX/AIVideoVFXPortfolio";
import AIVideoVFXProcess from "@/components/AIVideoVFX/AIVideoVFXProcess";
import AIVideoVFXRequirements from "@/components/AIVideoVFX/AIVideoVFXRequirements";
import AIVideoVFXServices from "@/components/AIVideoVFX/AIVideoVFXServices";
import AIVideoVFXUseCases from "@/components/AIVideoVFX/AIVideoVFXUseCases";
import AIVideoVFXVideoTypes from "@/components/AIVideoVFX/AIVideoVFXVideoTypes";
import WhatAreVFXServices from "@/components/AIVideoVFX/WhatAreVFXServices";
import WhatIsAIVideoProduction from "@/components/AIVideoVFX/WhatIsAIVideoProduction";
import WhyChooseAIVideoVFX from "@/components/AIVideoVFX/WhyChooseAIVideoVFX";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";


import type { Metadata } from "next";

export const metadata: Metadata = {
title: {
  absolute:
    "AI Video Production, CGI Ads & VFX Services India | Double Trouble Studio",
},

  description:
    "AI video production, CGI ads, VFX, motion graphics and cinematic brand films for product launches, reels, events and digital campaigns across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
    },
  ],

  creator: "Double Trouble Studio",

  publisher: "Double Trouble Studio",

  category:
    "AI Video Production, CGI Advertising and VFX Services",

  keywords: [
    "AI video production company India",
    "AI video production services",
    "AI video agency India",
    "AI video production Mumbai",
    "AI generated video production",
    "AI commercial video production",
    "AI advertising video agency",
    "CGI advertising agency India",
    "CGI ads production",
    "CGI product advertising",
    "CGI product video",
    "CGI commercial production",
    "VFX company in India",
    "VFX services India",
    "VFX for advertising",
    "visual effects production",
    "motion graphics services",
    "3D animation services",
    "AI product video production",
    "product launch video production",
    "brand launch film production",
    "cinematic brand film",
    "luxury brand video production",
    "social media video production",
    "Instagram Reels production",
    "YouTube video production",
    "vertical video ads",
    "event teaser video production",
    "event launch video",
    "website hero video production",
    "AI fashion video production",
    "AI hospitality video production",
    "music video VFX",
    "video editing and post production",
    "AI video production Delhi",
    "AI video production Chandigarh",
    "AI video production Bangalore",
    "AI video production across India",
  ],

  alternates: {
    canonical:
      "https://www.dtsworld.in/services/ai-video-vfx",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/ai-video-vfx",

    siteName: "Double Trouble Studio",

    title:
      "AI Video Production, CGI Ads & VFX Services in India",

    description:
      "Create premium AI videos, CGI product ads, cinematic VFX, motion graphics, brand films, event teasers and social media campaigns with Double Trouble Studio.",

    images: [
      {
        url:
          "https://www.dtsworld.in/ai-video-vfx-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "AI Video Production, CGI Advertising and VFX Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Video Production, CGI Ads & VFX Services India",

    description:
      "AI videos, CGI ads, VFX, motion graphics, product launch films, reels and cinematic digital campaigns for modern brands across India.",

    images: [
      "https://www.dtsworld.in/ai-video-vfx-og.jpg",
    ],
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
};

const aiVideoVFXSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
       sameAs: [
        "https://www.linkedin.com/company/doubletrouble-studio/",
        "https://www.instagram.com/doubletrouble_studio/",
        "https://www.facebook.com/profile.php?id=61585435434487",
        "https://x.com/trouble90100",
      ],
      logo: "https://www.dtsworld.in/logo.png",
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based creative agency offering AI video production, CGI ads, VFX services, brand films, product launch videos, social media videos, digital marketing, website development, PR and event marketing services.",
      email: "info@dtsworld.in",
      telephone: "+918000006021",
     address: {
  "@type": "PostalAddress",
  streetAddress:
    "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",
  addressLocality: "Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "400061",
  addressCountry: "IN",
},
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      contactPoint: {
  "@type": "ContactPoint",
  "@id": "https://www.dtsworld.in/#contact-point",
  telephone: "+918000006021",
  email: "info@dtsworld.in",
  contactType: "customer service",
  areaServed: "IN",
  availableLanguage: ["English", "Hindi"],
},
      knowsAbout: [
        "AI Video Production",
        "CGI Ads",
        "VFX Services",
        "Visual Effects",
        "AI Product Videos",
        "Brand Launch Films",
        "Event Teaser Videos",
        "Social Media Video Production",
        "Motion Graphics",
        "3D Animation",
        "Video Editing",
        "Post Production",
        "Instagram Reels",
        "YouTube Videos",
        "Website Hero Videos",
        "Luxury Brand Films",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      url: "https://www.dtsworld.in/",
      name: "Double Trouble Studio",
      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service",
      name: "AI Video Production and VFX Services",
      serviceType: "AI Video Production, CGI Ads and VFX Production",
      url: "https://www.dtsworld.in/services/ai-video-vfx",
      description:
        "Double Trouble Studio creates AI videos, CGI ads, VFX-led brand films, product launch videos, event teasers, Instagram reels, YouTube videos, website hero videos and cinematic visual campaigns for brands across India.",
      provider: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    
{
  "@type": "BreadcrumbList",
  "@id": "https://www.dtsworld.in/services/ai-video-vfx#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dtsworld.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Video & VFX",
      item: "https://www.dtsworld.in/services/ai-video-vfx",
    },
  ],
},

    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#process",
      name: "AI Video and VFX Production Process",
      description:
        "A structured AI video, CGI ad and VFX production process from brief understanding to final platform-ready export.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Requirement Understanding",
          text: "Understanding the brand, campaign goal, target audience, product, service, platform requirement and final video purpose.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Creative Concept Planning",
          text: "Defining the video idea, mood, visual direction, reference style, storytelling angle and campaign message.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Script and Shot Breakdown",
          text: "Preparing the video flow, scene structure, text direction, visual prompts, shot ideas and edit sequence.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "AI Visual Creation",
          text: "Generating or designing AI visuals, CGI-style scenes, product environments and visual assets.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "VFX and Motion Design",
          text: "Adding compositing, motion graphics, transitions, effects, clean-up, animated text and visual enhancements.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Editing and Sound Design",
          text: "Editing the video with pacing, music, sound effects, color tone, subtitles and platform-specific energy.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Final Export and Adaptation",
          text: "Exporting videos in formats such as 9:16, 4:5, 1:1 and 16:9 for reels, ads, websites, YouTube and campaigns.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#services-list",
      name: "AI Video and VFX Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Video Production" },
        { "@type": "ListItem", position: 2, name: "CGI Advertising Videos" },
        { "@type": "ListItem", position: 3, name: "VFX for Advertising" },
        { "@type": "ListItem", position: 4, name: "AI Product Videos" },
        { "@type": "ListItem", position: 5, name: "Brand Launch Films" },
        { "@type": "ListItem", position: 6, name: "Event Teaser Videos" },
        {
          "@type": "ListItem",
          position: 7,
          name: "Social Media Video Production",
        },
        { "@type": "ListItem", position: 8, name: "Motion Graphics" },
        {
          "@type": "ListItem",
          position: 9,
          name: "3D Animation and Visual Concepts",
        },
        { "@type": "ListItem", position: 10, name: "AI Fashion Videos" },
        { "@type": "ListItem", position: 11, name: "AI Hospitality Videos" },
        { "@type": "ListItem", position: 12, name: "Music Video VFX" },
        {
          "@type": "ListItem",
          position: 13,
          name: "Video Editing and Post-Production",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#video-types",
      name: "Types of AI, CGI and VFX Videos",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Brand Films" },
        { "@type": "ListItem", position: 2, name: "CGI Product Ads" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Instagram Reels and Shorts",
        },
        { "@type": "ListItem", position: 4, name: "Event Launch Videos" },
        {
          "@type": "ListItem",
          position: 5,
          name: "Luxury Commercial Videos",
        },
        { "@type": "ListItem", position: 6, name: "Music Video Visuals" },
        { "@type": "ListItem", position: 7, name: "Website Hero Videos" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Explainer and Service Videos",
        },
        { "@type": "ListItem", position: 9, name: "Motion Graphic Videos" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#campaign-goals",
      name: "AI Video and VFX Campaign Goals",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Product Launch" },
        { "@type": "ListItem", position: 2, name: "Brand Awareness" },
        { "@type": "ListItem", position: 3, name: "Social Media Growth" },
        { "@type": "ListItem", position: 4, name: "Event Promotion" },
        { "@type": "ListItem", position: 5, name: "Luxury Positioning" },
        { "@type": "ListItem", position: 6, name: "Lead Generation" },
        { "@type": "ListItem", position: 7, name: "Product Demonstration" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Storytelling and Brand Identity",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#industries",
      name: "Industries Served by AI Video and VFX Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fashion and Apparel" },
        { "@type": "ListItem", position: 2, name: "Jewellery and Luxury" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hospitality and Restaurants",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Events and Entertainment",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Real Estate and Architecture",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Automotive and Mobility",
        },
        { "@type": "ListItem", position: 7, name: "Beauty and Wellness" },
        { "@type": "ListItem", position: 8, name: "Corporate and Startups" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#formats",
      name: "AI Video and VFX Output Formats",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "9:16 Vertical Reels" },
        {
          "@type": "ListItem",
          position: 2,
          name: "4:5 Premium Feed Videos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "1:1 Square Campaign Edits",
        },
        { "@type": "ListItem", position: 4, name: "16:9 Wide Brand Films" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#locations",
      name: "AI Video and VFX Service Locations",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Mumbai" },
        { "@type": "ListItem", position: 2, name: "Delhi NCR" },
        { "@type": "ListItem", position: 3, name: "Chandigarh" },
        { "@type": "ListItem", position: 4, name: "Punjab" },
        { "@type": "ListItem", position: 5, name: "Bengaluru" },
        { "@type": "ListItem", position: 6, name: "Hyderabad" },
        { "@type": "ListItem", position: 7, name: "Pune" },
        { "@type": "ListItem", position: 8, name: "Pan India" },
      ],
    },
   
       
  
  ],
};

export default function AIVideoProductionVFXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiVideoVFXSchema),
        }}
      />

      <main className="bg-[#F7FAFF] text-[#0D2444]">
        <Navbar />
        <AIVideoVFXHero />
        <AIVideoVFXHighlights />
        <AIVideoVFXIntro />
        <WhatIsAIVideoProduction />
        <WhatAreVFXServices />
        <AIVideoVFXServices />
        <AIVideoVFXCampaignGoals />
        <AIVideoVFXVideoTypes />
        <AIVideoVFXIndustries />
        <AIVideoVFXBenefits />
        <AIVideoVFXProcess />
        <AIVideoVFXFormats />
        <AIVideoVFXIndiaLocations />
        <AIVideoVFXUseCases />
        <AIVideoVFXRequirements />
        <WhyChooseAIVideoVFX />
        <AIVideoVFXPortfolio />
        <AIVideoVFXFAQ />
        <AIVideoVFXCTA />
        <ServiceCityLinks serviceSlug="ai-video-vfx" />
        <Footer />
      </main>
    </>
  );
}