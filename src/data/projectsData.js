// Portfolio content for the "Our Projects" gallery section.
// Images live in /public and are referenced by absolute root path.

const projectsData = [
  {
    id: 'riverside-business-center',
    name: 'Riverside Business Center',
    category: 'Commercial',
    location: 'Portland, OR',
    year: '2024',
    image: '/project-office-tower.jpg',
    description:
      'A 22-story mixed-use office tower featuring a curtain-wall facade, column-free floor plates, and a rooftop sky lounge overlooking the riverfront.',
  },
  {
    id: 'atlas-logistics-park',
    name: 'Atlas Logistics Park',
    category: 'Industrial',
    location: 'Houston, TX',
    year: '2023',
    image: '/project-warehouse.jpg',
    description:
      'Three distribution warehouses totaling 1.2M sq ft with tilt-up concrete construction, high-bay racking, and automated conveyance systems.',
  },
  {
    id: 'cedar-grove-residences',
    name: 'Cedar Grove Residences',
    category: 'Residential',
    location: 'Austin, TX',
    year: '2024',
    image: '/general-construction.jpg',
    description:
      'A 180-unit garden-style apartment community with resort amenities, structured parking, and energy-efficient LEED Gold construction.',
  },
  {
    id: 'sr9-interchange',
    name: 'State Route 9 Interchange',
    category: 'Infrastructure',
    location: 'Phoenix, AZ',
    year: '2025',
    image: '/engineering-planning.jpg',
    description:
      'A design-build highway interchange with post-tensioned bridge structures, retaining walls, and staged traffic management over 24 months.',
  },
  {
    id: 'meridian-corporate-plaza',
    name: 'Meridian Corporate Plaza',
    category: 'Commercial',
    location: 'Seattle, WA',
    year: '2023',
    image: '/commercial-construction.jpg',
    description:
      'A five-story corporate campus with a glass atrium, structural steel frame, and tenant-ready speculative floors delivered ahead of schedule.',
  },
  {
    id: 'northgate-manufacturing',
    name: 'Northgate Manufacturing Plant',
    category: 'Industrial',
    location: 'Detroit, MI',
    year: '2022',
    image: '/industrial-construction.jpg',
    description:
      'A heavy manufacturing facility with crane-capable bays, vibration-isolated foundations, and integrated process utility corridors.',
  },
  {
    id: 'the-foundry-lofts',
    name: 'The Foundry Lofts',
    category: 'Renovation',
    location: 'Nashville, TN',
    year: '2024',
    image: '/project-retail.jpg',
    description:
      'An adaptive-reuse conversion of a historic foundry into 96 industrial-chic loft units, preserving original steel trusses and brickwork.',
  },
  {
    id: 'union-station-district',
    name: 'Union Station District',
    category: 'Infrastructure',
    location: 'Chicago, IL',
    year: '2022',
    image: '/hero-construction.jpg',
    description:
      'A transit-oriented public plaza and pedestrian concourse connecting rail, bus, and bike networks with seismic-rated canopy structures.',
  },
  {
    id: 'harborview-townhomes',
    name: 'Harborview Townhomes',
    category: 'Residential',
    location: 'San Diego, CA',
    year: '2023',
    image: '/general-hero.jpg',
    description:
      'A 42-unit waterfront townhome development with elevated decks, underground utilities, and salt-resistant envelope detailing.',
  },
];

export const PROJECT_CATEGORIES = [
  'All',
  'Commercial',
  'Residential',
  'Industrial',
  'Infrastructure',
  'Renovation',
];

export default projectsData;
