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

export const timeline = [
  {
    year: "2024",
    title: "Lighthouse Studio",
    role: "Founder & CEO",
    description:
      "Started Lighthouse to make compliance software that doesn't feel like punishment. Now used by 400+ small finance teams.",
  },
  {
    year: "2021",
    title: "Tideline",
    role: "Co-founder, Product",
    description:
      "Built and sold a scheduling tool for independent clinics. Learned the hard way that simple problems hide complicated humans.",
  },
  {
    year: "2018",
    title: "Anchor & Co.",
    role: "Founding engineer",
    description:
      "First hire at a logistics startup. Wrote the routing engine that's still running, mostly untouched, six years later.",
  },
  {
    year: "2016",
    title: "University of Edinburgh",
    role: "MSc, Informatics",
    description:
      "Spent most of it in the library arguing about whether software could ever be boring in a good way.",
  },
];


export const work = [
  {
    name: "GreenWorld",
    description:
      "Compliance and audit trails for finance teams who'd rather be doing anything else. Built so the software disappears into the work.",
    year: "2013-present",
    href: "https://granoinfra.com/",

    
  },
  {
    name: "GranoInfra",
    description:
      "Appointment scheduling for clinics with three staff and one overworked office manager. Acquired in 2023.",
    year: "2021 — 2023",
    href: "https://greenworldncr.com/",
  },
  {
    name: "Moyo_International",
    description:
      "A small, slow newsletter on building things that last longer than a funding cycle. Sent monthly, read by 6,000 people.",
    year: "2020 — present",
    href: "https://www.moyointernational.com/",
  },
];

export const philosophy = [
  {
    title: "Boring is a feature",
    body:
      "The best infrastructure is invisible. If people are talking about your tool, something's usually wrong with it.",
  },
  {
    title: "Slow is a speed",
    body:
      "Most startups die of indigestion, not starvation. I'd rather ship the right thing in March than the wrong thing in January.",
  },
  {
    title: "Write it down",
    body:
      "Every decision I can't explain in writing is a decision I don't understand yet.",
  },
];

export const writing = [
  {
    title: "Why your roadmap is a rumor",
    date: "May 2026",
    readTime: "6 min",
  },
  {
    title: "The cost of a second opinion",
    date: "Feb 2026",
    readTime: "4 min",
  },
  {
    title: "On hiring your first ten people twice",
    date: "Nov 2025",
    readTime: "8 min",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Greenworld", href: "#greenworld" },
  { label: "Grano Infra", href: "#granoinfra" },
  { label: "Moyo", href: "#moyo" },
  { label: "About Me", href: "#philosophy" },
];
type ComponentMapType = {
  [key: string]: React.ElementType;
};

// Create the object holding your components
export const componentRegistry: ComponentMapType = {
  GreenWorld:AboutGreenworld,
  GranoInfra:AboutGrano,
  Moyo_International:AboutMoyo
  // Add as many as you need here...
};