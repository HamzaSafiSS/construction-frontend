// Footer configuration and link registries for BuildCraft Construction
export const FOOTER_COLUMNS = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about', isAnchor: true },
      { label: 'Our Team', href: '#team', isAnchor: true },
      { label: 'Careers', href: '#contact', isAnchor: true },
      { label: 'News & Insights', href: '#news', isAnchor: true },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'General Construction', path: '/services/general-construction' },
      { label: 'Commercial Construction', path: '/services/commercial-construction' },
      { label: 'Residential Construction', path: '/services/commercial-construction' },
      { label: 'Industrial Construction', path: '/services/industrial-construction' },
      { label: 'Infrastructure', path: '/services/engineering-planning' },
    ],
  },
  projects: {
    title: 'Projects',
    links: [
      { label: 'All Projects', href: '#projects', isAnchor: true },
      { label: 'Commercial Projects', href: '#projects', isAnchor: true },
      { label: 'Residential Projects', href: '#projects', isAnchor: true },
      { label: 'Industrial Projects', href: '#projects', isAnchor: true },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'FAQs', href: '#faqs', isAnchor: true },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Request a Quote', action: 'quote' },
    ],
  },
};

export const FOOTER_CONTACT = {
  address: {
    line1: 'Atlas Commercial Tower, 5th Floor',
    line2: 'Namibia Street, Bole, Addis Ababa, Ethiopia',
  },
  phone: {
    primary: '+251 11 667 8900',
    secondary: '+251 91 123 4567',
  },
  email: 'info@buildcraft.com',
  hours: 'Monday–Friday, 8:00 AM–5:00 PM',
};

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    ariaLabel: 'Follow BuildCraft on LinkedIn',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    ariaLabel: 'Follow BuildCraft on Facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    ariaLabel: 'Follow BuildCraft on Instagram',
  },
];
