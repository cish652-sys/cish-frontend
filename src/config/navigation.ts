export type LinkItem = { href: string; label: string };
export type NavItem =
  | { type: "link"; label: string; href: string; active?: boolean }
  | { type: "dropdown"; label: string; links: LinkItem[] };

export const navigation: NavItem[] = [
  { type: "link", label: "HOME", href: "/", active: true },

  {
    type: "dropdown",
    label: "ABOUT US",
    links: [
      { href: "https://cish.in/introduction.php", label: "About Institute" },
      { href: "/about/field-gene-bank", label: "Field Gene Bank" },
      { href: "/Division", label: "Divisions" },
      { href: "/about/pme", label: "PME" },
      { href: "/about/itmu-jpr", label: "ITMU/JPR Cells" },
      { href: "/Abi", label: "Agri Business Incubation Center (ABI)" },
      { href: "/about/akmu", label: "AKMU" },
      { href: "https://cish.in/cib_n.php", label: "Regional Research Station" },
      { href: "/RssKvk", label: "Krishi Vigyan Kendra" },
      { href: "/about/cadres-strength", label: "Cadres Strength" },
      { href: "/staff", label: "Staff" },
      { href: "/about/citizen-charter", label: "Citizen Charter" },
    ],
  },

  {
    type: "dropdown",
    label: "RESEARCH",
    links: [
      { href: "/research/projects", label: "Projects" },
      { href: "/research/publications", label: "Research Papers" },
      { href: "/research/collaborations", label: "Collaborations" },
    ],
  },

  {
    type: "dropdown",
    label: "PUBLICATIONS",
    links: [
      { href: "/publications/journals", label: "Journals" },
      { href: "/publications/reports", label: "Reports" },
      { href: "/Newsletter", label: "Newsletters" },
      { href: "/publications/vision2050", label: "Vision 2050" },
    ],
  },

  { type: "link", label: "TECHNOLOGIES", href: "/technologies" },

  {
    type: "dropdown",
    label: "FOR FARMERS",
    links: [
      { href: "/farmers/resources", label: "Resources" },
      { href: "/farmers/training", label: "Training Programs" },
    ],
  },

  {
    type: "dropdown",
    label: "VARIETIES",
    links: [
      { href: "/varieties/mango", label: "Mango Varieties" },
      { href: "/varieties/guava", label: "Guava Varieties" },
    ],
  },

  { type: "link", label: "NURSERY", href: "/Nursery" },

  {
    type: "dropdown",
    label: "MEDIA",
    links: [
      { href: "/Gallery", label: "Photos" },
      { href: "/Gallery", label: "Videos" },
      { href: "/Events", label: "Events" },
    ],
  },

  { type: "link", label: "CONTACT US", href: "/contact" },
];
