import AboutGreenworld from "@/components/greenworld";
import AboutGrano from "@/components/granoinfra";
import AboutMoyo from "@/components/moyoint";
export const profile = {
  name: "Kapil Kumar Sharma",
  role: "Founder,Grano Infra,Green-World,Moyo International",
  tagline: "Scaling infrastructure. Sustaining the planet. Shipping software.",
  location: "Greater Noida, India",
  email: "yashpratap291@gmail.com",
  website: "https://yourcompany.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://x.com/yourhandle",
  instagram: "https://instagram.com/yourhandle"
};

export const stats = [
  { value: 20, suffix: "+", label: "years building" },
  { value: 3, suffix: "", label: "companies founded" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Market Served" },
];




export const work = [
  {
    name: "GreenWorld",
    description:
      "Compliance and audit trails for finance teams who'd rather be doing anything else. Built so the software disappears into the work.",
    year: "2013-present",
    logo:"/logo_greenworld.png",
    href: "https://granoinfra.com/",

    
  },
  {
    name: "GranoInfra",
    description:
      "Appointment scheduling for clinics with three staff and one overworked office manager. Acquired in 2023.",
    year: "2021 — 2023",
    logo:"/logo_grano.png",
    href: "https://greenworldncr.com/",
  },
  {
    name: "MOYO",
    description:
      "A small, slow newsletter on building things that last longer than a funding cycle. Sent monthly, read by 6,000 people.",
    year: "2020 — present",
    logo:"/logo_moyo.png",
    href: "https://www.moyointernational.com/",
  },
];


export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Greenworld", href: "#greenworld" },
  { label: "Grano Infra", href: "#granoinfra" },
  { label: "Moyo", href: "#moyo" },
];
type ComponentMapType = {
  [key: string]: React.ElementType;
};

// Create the object holding your components
export const componentRegistry: ComponentMapType = {
  GreenWorld:AboutGreenworld,
  GranoInfra:AboutGrano,
  MOYO:AboutMoyo
  // Add as many as you need here...
};