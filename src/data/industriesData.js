import {
  Building,
  Home,
  Factory,
  Landmark,
  Hotel,
  GraduationCap,
} from 'lucide-react';

const industriesData = [
  {
    id: 'commercial',
    title: 'Commercial',
    description:
      'Office buildings, retail spaces, and modern business facilities.',
    icon: Building,
    image: '/project-office-tower.jpg',
    tag: 'Corporate & Retail',
    examples: 'Office Towers • Retail Malls • Business Parks',
  },
  {
    id: 'residential',
    title: 'Residential',
    description:
      'Private homes, apartment buildings, and large-scale residential developments.',
    icon: Home,
    image: '/general-construction.jpg',
    tag: 'Living Environments',
    examples: 'Multi-Family Complexes • Estates • Urban Lofts',
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description:
      'Factories, warehouses, and specialized industrial facilities.',
    icon: Factory,
    image: '/project-warehouse.jpg',
    tag: 'Manufacturing & Logistics',
    examples: 'High-Bay Warehouses • Manufacturing Plants • Distribution Hubs',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description:
      'Roads, public facilities, and essential infrastructure projects.',
    icon: Landmark,
    image: '/hero-construction.jpg',
    tag: 'Civil & Public Works',
    examples: 'Highways & Bridges • Transit Plazas • Public Utilities',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description:
      'Hotels, resorts, and hospitality developments designed for comfort and functionality.',
    icon: Hotel,
    image: '/project-retail.jpg',
    tag: 'Hotels & Leisure',
    examples: 'Luxury Hotels • Eco Resorts • Conference Centers',
  },
  {
    id: 'institutional',
    title: 'Institutional',
    description:
      'Schools, healthcare facilities, and public institutions.',
    icon: GraduationCap,
    image: '/commercial-construction.jpg',
    tag: 'Education & Healthcare',
    examples: 'Medical Centers • University Campuses • Civic Centers',
  },
];

export default industriesData;
