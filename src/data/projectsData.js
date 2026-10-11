// Portfolio content for the "Our Projects" gallery and dedicated Project Detail pages.
// Images live in /public and are referenced by absolute root path.

const projectsData = [
  {
    id: 'riverside-business-center',
    name: 'Riverside Business Center',
    category: 'Commercial',
    projectType: 'Commercial Construction',
    location: 'Addis Ababa, Ethiopia',
    year: '2026',
    image: '/project-office-tower.jpg',
    description:
      'A 22-story mixed-use office tower featuring a curtain-wall facade, column-free floor plates, and a rooftop sky lounge overlooking the riverfront.',
    overview:
      'A modern commercial development designed to provide flexible, efficient, and durable working spaces. Built to accommodate multinational headquarters, high-density tech operations, and luxury retail concourses, the Riverside Business Center integrates cutting-edge structural engineering, smart building automation, and high-performance climate responsive envelope architecture.',
    info: {
      client: 'ABC Group',
      location: 'Addis Ababa',
      category: 'Commercial',
      duration: '18 Months',
      status: 'Completed',
      area: '12,500 m²',
      value: '$42,500,000',
      contractType: 'Design-Build EPC',
      certification: 'LEED Gold Certified',
    },
    challenges: [
      {
        title: 'Tight Urban Footprint & Traffic Density',
        desc: 'Surrounded by busy urban arterials and municipal transit hubs, site access required continuous off-peak logistics coordination to prevent downtown congestion during peak excavation and concrete pouring.',
      },
      {
        title: 'High-Groundwater Soil Stabilization',
        desc: 'Proximity to the river basin created severe subsurface moisture and hydro-static pressure, requiring specialized deep foundation engineering before structural ascent could safely begin.',
      },
      {
        title: 'Fast-Track Handover Schedule',
        desc: 'The client required early partial occupancy on lower commercial retail levels while upper structural and interior architectural fit-outs were actively continuing.',
      },
    ],
    solutions: [
      {
        title: 'Continuous Flight Auger (CFA) Piling & Secant Walls',
        desc: 'Installed 148 reinforced deep piles and an impermeable secant perimeter wall with continuous digital sensor monitoring to safeguard structural integrity.',
      },
      {
        title: '3D BIM Clash Pre-emption & Offsite Prefabrication',
        desc: 'Used multi-discipline BIM modeling to identify over 340 MEP clashes in advance and prefabricated curtain-wall cassettes off-site, reducing envelope installation time by 28%.',
      },
      {
        title: 'Dual-Core Phased Commissioning',
        desc: 'Implemented isolated vertical egress shafts, temporary dust-isolation seals, and independent MEP branch circuits to achieve safe partial occupancy sign-offs ahead of deadline.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Geotechnical Engineering & Deep Foundations',
        timeline: 'Months 1 – 4',
        desc: 'Site excavation, deep hydro-static dewatering, installation of 148 CFA concrete piles, and pouring of the 2.4-meter thick post-tensioned foundation raft.',
      },
      {
        step: '02',
        title: 'Core & Structural Superstructure',
        timeline: 'Months 5 – 9',
        desc: 'Jump-form reinforced core elevator shafts, structural steel composite framing, and casting of 22 column-free floor slabs at an accelerated 6-day cycle.',
      },
      {
        step: '03',
        title: 'High-Performance Curtain Wall & MEP',
        timeline: 'Months 10 – 14',
        desc: 'Precision unitized double-glazed Low-E facade installation, primary central chiller plant installation, high-speed elevator rigging, and smart BMS integration.',
      },
      {
        step: '04',
        title: 'Architectural Fit-Out & Final Commissioning',
        timeline: 'Months 15 – 18',
        desc: 'Turnkey interior finishes, acoustic ceiling installations, air balance verification, integrated fire-life-safety testing, and final municipal handover.',
      },
    ],
    results: [
      {
        metric: '18 Mo',
        label: 'On-Time Handover',
        desc: 'Completed precisely within the 18-month contractual window without schedule delays.',
      },
      {
        metric: '0',
        label: 'Lost-Time Incidents',
        desc: 'Maintained an unblemished safety record across 430,000 continuous workforce hours.',
      },
      {
        metric: '28%',
        label: 'Energy Consumption Drop',
        desc: 'High-performance Low-E thermal envelope and smart LED systems achieved LEED Gold targets.',
      },
      {
        metric: '100%',
        label: 'Commercial Leased Rate',
        desc: 'Fully leased by premier institutional tenants prior to formal ribbon-cutting ceremony.',
      },
    ],
    gallery: [
      {
        title: 'Completed Facade & Sky Lounge',
        stage: 'Completed Development',
        image: '/project-office-tower.jpg',
        caption: 'Full exterior view of the 22-story tower featuring high-efficiency unitized glass curtain wall.',
      },
      {
        title: 'Groundbreaking & Deep Piling',
        stage: 'Early Substructure Stage',
        image: '/hero-construction.jpg',
        caption: 'Heavy foundation excavation, secant wall drilling, and deep pile cap reinforcement placement.',
      },
      {
        title: 'Structural Steel Superstructure',
        stage: 'Core & Framing Stage',
        image: '/commercial-construction.jpg',
        caption: 'Erection of structural steel beams and column-free composite decking with tower crane support.',
      },
      {
        title: 'Facade Glazing & Envelope',
        stage: 'Enclosure Stage',
        image: '/commercial-hero.jpg',
        caption: 'Precision installation of Low-E double glazed thermal cassettes along the exterior elevation.',
      },
      {
        title: 'Ground Level Retail Concourse',
        stage: 'Completed Interiors',
        image: '/project-retail.jpg',
        caption: 'Spacious high-ceiling commercial atrium welcoming tenant retail and executive visitor traffic.',
      },
      {
        title: 'BIM Spatial Coordination',
        stage: 'Engineering & Planning',
        image: '/engineering-planning.jpg',
        caption: 'High-precision 3D digital model alignment of MEP routing, ductwork, and structural shear walls.',
      },
    ],
  },
  {
    id: 'atlas-logistics-park',
    name: 'Atlas Logistics Park',
    category: 'Industrial',
    projectType: 'Industrial & Logistics Infrastructure',
    location: 'Houston, TX',
    year: '2023',
    image: '/project-warehouse.jpg',
    description:
      'Three distribution warehouses totaling 1.2M sq ft with tilt-up concrete construction, high-bay racking, and automated conveyance systems.',
    overview:
      'A state-of-the-art multi-facility logistics hub master-planned to accommodate tier-1 regional freight, cold-storage, and autonomous warehouse operations. Featuring 40-foot clear ceiling heights, super-flat industrial flooring, and heavy-duty concrete aprons, Atlas Logistics Park sets a high benchmark for industrial endurance.',
    info: {
      client: 'Pinnacle Freight Holdings',
      location: 'Houston, TX',
      category: 'Industrial',
      duration: '14 Months',
      status: 'Completed',
      area: '111,500 m² (1.2M sq ft)',
      value: '$68,000,000',
      contractType: 'General Contracting',
      certification: 'FM Global High-Hazard Spec',
    },
    challenges: [
      {
        title: 'Expansive Coastal Clay Subsoils',
        desc: 'Houston coastal prairie clay required massive lime-stabilization and moisture conditioning to prevent slab deflection under heavy industrial forklift loads.',
      },
      {
        title: 'Extreme Super-Flat Floor Specifications',
        desc: 'Automated Very Narrow Aisle (VNA) robotic wire-guided pickers demanded F-min 100 super-flat tolerances with zero crack allowance.',
      },
      {
        title: 'Accelerated Dry-In Before Hurricane Season',
        desc: 'Structural enclosure had to be completely sealed against severe tropical weather prior to peak late-summer rainfall.',
      },
    ],
    solutions: [
      {
        title: 'Chemical Soil Stabilization & Geogrid Reinforcement',
        desc: 'Treated 45 acres of subgrade with chemical stabilization layers and high-tensile geotextile fabrics to guarantee uniform subgrade support.',
      },
      {
        title: 'Laser-Guided Somero Screed Concrete Pours',
        desc: 'Utilized automated laser screed technology and steel-fiber reinforced concrete blends poured in continuous 30,000 sq ft daily placements.',
      },
      {
        title: 'Synchronized Tilt-Up Wall Panel Erection',
        desc: 'Cast 164 massive insulated tilt-up concrete panels on-site and erected them in record time with tandem 300-ton hydraulic cranes.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Bulk Earthwork & Foundation Soil Engineering',
        timeline: 'Months 1 – 3',
        desc: 'Excavation of retention basins, lime stabilization across 45 acres, and sub-slab underground stormwater detention.',
      },
      {
        step: '02',
        title: 'Tilt-Up Panel Casting & Superstructure',
        timeline: 'Months 4 – 7',
        desc: 'On-slab formwork and casting of heavy concrete panels, crane lifting, bar-joist roof truss erection, and TPO membrane roofing.',
      },
      {
        step: '03',
        title: 'Laser Super-Flat Concrete Floor Slabs',
        timeline: 'Months 8 – 11',
        desc: 'Dust-free enclosed environment slab placement, armored expansion joint installation, and diamond-hardener surface burnishing.',
      },
      {
        step: '04',
        title: 'Dock Levelers, ESFR Sprinklers & Turnkey Handover',
        timeline: 'Months 12 – 14',
        desc: 'Installation of 96 hydraulic dock pit levelers, early suppression fast response (ESFR) fire safety systems, and commissioning.',
      },
    ],
    results: [
      {
        metric: '1.2M',
        label: 'Sq Ft Under Roof',
        desc: 'Constructed three massive distribution warehouses delivered in a rapid 14-month schedule.',
      },
      {
        metric: 'F-min 105',
        label: 'Floor Flatness Achieved',
        desc: 'Exceeded robotics precision guidelines, allowing maximum high-bay storage efficiency.',
      },
      {
        metric: '96',
        label: 'Active Loading Docks',
        desc: 'Fully equipped cross-dock configuration handling up to 400 freight trailers per day.',
      },
      {
        metric: '100%',
        label: 'Storm Resilience',
        desc: 'Engineered to withstand Category 4 wind pressures with independent backup power generation.',
      },
    ],
    gallery: [
      {
        title: 'Completed Distribution Center',
        stage: 'Completed Development',
        image: '/project-warehouse.jpg',
        caption: 'Panoramic perspective of the high-bay distribution facility with dual-sided cross-docking bays.',
      },
      {
        title: 'Industrial Foundation Pouring',
        stage: 'Substructure Stage',
        image: '/industrial-construction.jpg',
        caption: 'Heavy equipment excavating foundational grade beams and pouring heavy-load equipment footings.',
      },
      {
        title: 'Structural Steel Truss Erection',
        stage: 'Framing Stage',
        image: '/industrial-hero.jpg',
        caption: 'High-capacity overhead crane staging structural joists across open column bays.',
      },
      {
        title: 'Super-Flat Floor Finishing',
        stage: 'Interior Execution',
        image: '/about-construction.jpg',
        caption: 'Diamond-burnished concrete flooring prepared for automated guided vehicles and racking systems.',
      },
      {
        title: 'Technical BIM Planning',
        stage: 'Engineering & Planning',
        image: '/engineering-planning.jpg',
        caption: 'Digital mapping of ESFR sprinkler piping, electrical busways, and warehouse management networks.',
      },
      {
        title: 'Logistics Fleet Apron',
        stage: 'Exterior Completion',
        image: '/hero-construction.jpg',
        caption: 'Heavy-duty post-tensioned concrete apron engineered for continuous tractor-trailer staging.',
      },
    ],
  },
  {
    id: 'cedar-grove-residences',
    name: 'Cedar Grove Residences',
    category: 'Residential',
    projectType: 'Multi-Family Residential Development',
    location: 'Austin, TX',
    year: '2024',
    image: '/general-construction.jpg',
    description:
      'A 180-unit garden-style apartment community with resort amenities, structured parking, and energy-efficient LEED Gold construction.',
    overview:
      'Cedar Grove Residences is an environmentally conscious multi-family residential sanctuary that combines modern architectural elegance with sustainable building materials. Designed with landscaped courtyards, community clubhouses, and rooftop solariums, this development delivers an elevated urban living experience with minimal environmental footprint.',
    info: {
      client: 'Summit Urban Living',
      location: 'Austin, TX',
      category: 'Residential',
      duration: '16 Months',
      status: 'Completed',
      area: '24,000 m²',
      value: '$34,200,000',
      contractType: 'Design-Build',
      certification: 'LEED Gold Homes & Energy Star',
    },
    challenges: [
      {
        title: 'Preservation of Century-Old Live Oaks',
        desc: 'The project site was governed by strict municipal tree preservation ordinances requiring non-invasive root protection zones during grading.',
      },
      {
        title: 'Acoustic Sound Isolation Requirements',
        desc: 'Close proximity to an urban arterial required enhanced sound transmission class (STC 58+) wall and floor assembly ratings between units.',
      },
      {
        title: 'Severe Material Lead Times',
        desc: 'National supply-chain backlogs for custom millwork and high-efficiency heat-pump HVAC units threatened completion schedules.',
      },
    ],
    solutions: [
      {
        title: 'Hydro-Excavation & Cantilevered Foundations',
        desc: 'Employed vacuum hydro-excavation around root zones and engineered cantilevered grade beams to avoid root disturbance completely.',
      },
      {
        title: 'Acoustic Decoupling & Sound Mat Assemblies',
        desc: 'Installed resilient sound isolation channels, double-layer gypsum damping, and poured gypsum concrete acoustic floor underlayments.',
      },
      {
        title: 'Early Direct Procurement & Strategic Storage',
        desc: 'Pre-ordered all MEP mechanical units and custom fixtures 8 months in advance, staging them in regional climate-controlled warehouses.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Site Clearing, Root Protection & Grading',
        timeline: 'Months 1 – 3',
        desc: 'Careful tree protection barrier installation, underground storm utilities, and foundation slab forming.',
      },
      {
        step: '02',
        title: 'Advanced Timber Framing & Structural Podiums',
        timeline: 'Months 4 – 7',
        desc: 'Erection of steel podium parking structure and multi-story precision wood framing with shear wall reinforcement.',
      },
      {
        step: '03',
        title: 'Weather Barrier, Siding & High-Efficiency MEP',
        timeline: 'Months 8 – 11',
        desc: 'Installation of high-performance rainscreen facades, triple-pane windows, and variable-refrigerant HVAC ducting.',
      },
      {
        step: '04',
        title: 'Interior Millwork, Landscaping & Handover',
        timeline: 'Months 12 – 16',
        desc: 'Turnkey European-style kitchen cabinetry, resort-style swimming pool construction, native landscaping, and leasing rollout.',
      },
    ],
    results: [
      {
        metric: '180',
        label: 'Luxury Living Units',
        desc: 'Delivered 180 residences ranging from studios to three-bedroom family layouts.',
      },
      {
        metric: 'LEED Gold',
        label: 'Eco Certification',
        desc: 'Certified high-performance rating reflecting 32% lower water and energy usage.',
      },
      {
        metric: 'STC 60',
        label: 'Acoustic Rating',
        desc: 'Exceeded quiet-living benchmark standards across all shared demising partitions.',
      },
      {
        metric: '100%',
        label: 'Heritage Trees Preserved',
        desc: 'Successfully protected all 14 heritage live oak trees throughout heavy construction.',
      },
    ],
    gallery: [
      {
        title: 'Residential Community Architecture',
        stage: 'Completed Development',
        image: '/general-construction.jpg',
        caption: 'Exterior view highlighting the modern facade blending fiber-cement rainscreens with warm natural accents.',
      },
      {
        title: 'Site Preparation & Heritage Tree Shielding',
        stage: 'Site Development',
        image: '/general-hero.jpg',
        caption: 'Careful grading operations respecting environmental boundaries and tree canopy protection zones.',
      },
      {
        title: 'Multi-Story Framing Construction',
        stage: 'Framing Stage',
        image: '/about-us-image.jpg',
        caption: 'Engineered timber framing and subfloor assembly executed with strict quality control.',
      },
      {
        title: 'Architectural Landscaping & Amenities',
        stage: 'Completed Grounds',
        image: '/services-showcase.jpg',
        caption: 'Native xeriscape gardens, walking paths, and community clubhouse courtyard.',
      },
      {
        title: 'Interior Acoustic & Insulation Systems',
        stage: 'Rough-In Stage',
        image: '/project-retail.jpg',
        caption: 'High-density mineral wool insulation and sound isolation channels installed prior to drywalling.',
      },
      {
        title: 'Quality Verification & Handover Inspection',
        stage: 'Inspection & Commissioning',
        image: '/commercial-hero.jpg',
        caption: 'Comprehensive punch-list walk-through with developer and municipal building inspectors.',
      },
    ],
  },
  {
    id: 'sr9-interchange',
    name: 'State Route 9 Interchange',
    category: 'Infrastructure',
    projectType: 'Civil Infrastructure & Transportation',
    location: 'Phoenix, AZ',
    year: '2025',
    image: '/engineering-planning.jpg',
    description:
      'A design-build highway interchange with post-tensioned bridge structures, retaining walls, and staged traffic management over 24 months.',
    overview:
      'A mission-critical municipal infrastructure expansion designed to relieve chronic metropolitan corridor congestion. The project incorporates twin two-lane flyover bridges, extensive mechanically stabilized earth (MSE) retaining walls, upgraded drainage viaducts, and an intelligent traffic management system built to withstand extreme desert heat cycles.',
    info: {
      client: 'Department of Transportation',
      location: 'Phoenix, AZ',
      category: 'Infrastructure',
      duration: '24 Months',
      status: 'Completed',
      area: '8.4 Lane-Miles',
      value: '$89,500,000',
      contractType: 'Design-Build',
      certification: 'FHWA Safety Excellence Award',
    },
    challenges: [
      {
        title: 'Maintaining 75,000 Vehicles/Day Traffic Flow',
        desc: 'All structural bridge construction had to occur above actively moving multi-lane interstate traffic without unplanned road closures.',
      },
      {
        title: 'Extreme Summer Temperatures Exceeding 115°F',
        desc: 'Concrete placement during daytime heat posed severe risks of thermal flash-setting and hydration cracking.',
      },
      {
        title: 'Complex Underground Utility Relocation',
        desc: 'Encountered unmapped high-pressure fuel lines, fiber telecommunications, and municipal water mains in the bridge abutment path.',
      },
    ],
    solutions: [
      {
        title: 'Nighttime Precast Girder Rigging & Phased Detours',
        desc: 'Conducted all overhead girder lifts between 11:00 PM and 5:00 AM using dual high-capacity hydraulic cranes with timed rolling closures.',
      },
      {
        title: 'Liquid Nitrogen Concrete Cooling & Night Pours',
        desc: 'Utilized liquid nitrogen cooling injection at the batch plant and thermal curing blankets to maintain concrete temperatures below 85°F.',
      },
      {
        title: 'Subsurface Utility Engineering (SUE) 3D Radar',
        desc: 'Performed ground-penetrating radar scans and vacuum potholing to accurately map and bypass critical utilities without utility outages.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Utility Relocation & Foundation Drilled Shafts',
        timeline: 'Months 1 – 6',
        desc: 'Drilling 8-foot diameter foundation shafts 60 feet into bedrock and pouring concrete bridge bents.',
      },
      {
        step: '02',
        title: 'MSE Retaining Walls & Abutment Construction',
        timeline: 'Months 7 – 12',
        desc: 'Erection of concrete retaining panels, backfill compaction, and bridge approach embankment grading.',
      },
      {
        step: '03',
        title: 'Prestressed Girder Erection & Bridge Decking',
        timeline: 'Months 13 – 18',
        desc: 'Overnight crane rigging of 48 prestressed concrete tub girders and continuous slip-form bridge deck paving.',
      },
      {
        step: '04',
        title: 'Surface Paving, Sign Gantry & Smart Systems',
        timeline: 'Months 19 – 24',
        desc: 'High-friction polymer asphalt overlay, overhead dynamic message gantries, and fiber optic traffic sensor integration.',
      },
    ],
    results: [
      {
        metric: '35%',
        label: 'Commute Delay Reduction',
        desc: 'Eliminated bottlenecks along the metro interchange, smoothing regional freight throughput.',
      },
      {
        metric: '48',
        label: 'Prestressed Girders Placed',
        desc: 'All overhead crane rigging operations completed zero-incident during strict overnight hours.',
      },
      {
        metric: '75K',
        label: 'Daily Vehicles Handled',
        desc: 'Modernized corridor capacity to support projected metropolitan growth through 2050.',
      },
      {
        metric: '1 Mo',
        label: 'Ahead of Target Schedule',
        desc: 'Delivered early through optimized design-build overlapping and accelerated night shifts.',
      },
    ],
    gallery: [
      {
        title: 'Completed Flyover Bridge Structure',
        stage: 'Completed Development',
        image: '/engineering-planning.jpg',
        caption: 'Sweeping view of the newly opened interchange carrying high-volume commuter traffic safely.',
      },
      {
        title: 'Drilled Shaft Foundation Rigs',
        stage: 'Foundation Stage',
        image: '/engineering-hero.jpg',
        caption: 'Heavy rotary drill rigs boring deep foundation shafts for bridge abutments and piers.',
      },
      {
        title: 'Nighttime Crane Girder Setting',
        stage: 'Superstructure Lift',
        image: '/hero-construction.jpg',
        caption: 'Tandem crane lift placing precast concrete girders during midnight traffic closure windows.',
      },
      {
        title: 'Bridge Deck Steel Reinforcing',
        stage: 'Deck Construction',
        image: '/commercial-construction.jpg',
        caption: 'Epoxy-coated rebar mats secured prior to high-tolerance concrete deck finishing.',
      },
      {
        title: 'MSE Retaining Wall Assembly',
        stage: 'Earthworks Stage',
        image: '/industrial-construction.jpg',
        caption: 'Precision interlocking concrete facade panels with geogrid-reinforced aggregate backfill.',
      },
      {
        title: 'Final Roadway Surfacing & Striping',
        stage: 'Commissioning & Handover',
        image: '/general-construction.jpg',
        caption: 'High-friction polymer asphalt placement and reflective thermoplastic highway striping.',
      },
    ],
  },
  {
    id: 'meridian-corporate-plaza',
    name: 'Meridian Corporate Plaza',
    category: 'Commercial',
    projectType: 'Commercial Corporate Headquarters',
    location: 'Seattle, WA',
    year: '2023',
    image: '/commercial-construction.jpg',
    description:
      'A five-story corporate campus with a glass atrium, structural steel frame, and tenant-ready speculative floors delivered ahead of schedule.',
    overview:
      'Meridian Corporate Plaza represents the next generation of biophilic commercial workplaces. Featuring a soaring 50-foot glass central atrium, exposed architectural mass-timber accents, high-efficiency geothermal heating, and flexible open-plan office plates, the building fosters collaboration while dramatically cutting operating overhead.',
    info: {
      client: 'Cascadia Property Partners',
      location: 'Seattle, WA',
      category: 'Commercial',
      duration: '15 Months',
      status: 'Completed',
      area: '18,200 m²',
      value: '$51,000,000',
      contractType: 'Design-Build',
      certification: 'LEED Platinum & WELL Certified',
    },
    challenges: [
      {
        title: 'Seismic Soil Liquefaction Hazard',
        desc: 'Pacific Northwest seismic zone with alluvial soil strata required rigorous geotechnical remediation to exceed seismic safety codes.',
      },
      {
        title: 'Aesthetic Integration of Structural Glass Atrium',
        desc: 'The architectural design featured a 50-foot unsupported glass atrium facade requiring specialized point-supported structural spider fittings.',
      },
      {
        title: 'Strict Carbon Footprint Cap',
        desc: 'The developer committed to a low-embodied carbon rating requiring stringent material tracking across all concrete, steel, and timber suppliers.',
      },
    ],
    solutions: [
      {
        title: 'Stone Column Ground Improvement & Seismic Damping',
        desc: 'Installed 450 vibro-replacement stone columns and high-capacity seismic viscous dampers throughout the primary steel moment frames.',
      },
      {
        title: 'Tension Cable Truss Atrium Engineering',
        desc: 'Engineered stainless steel prestressed tension cable trusses to support the multi-story glass wall with feather-light visual mass.',
      },
      {
        title: 'Low-Carbon Geopolymer Concrete & Local Timber',
        desc: 'Specified fly-ash concrete mixes reducing cement content by 45% alongside regionally certified Douglas fir timber beams.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Vibro-Replacement & Foundation Casting',
        timeline: 'Months 1 – 3',
        desc: 'Ground improvement, continuous seismic foundation raft, and basement grade level waterproofing.',
      },
      {
        step: '02',
        title: 'Structural Steel Moment Framing & Mass Timber',
        timeline: 'Months 4 – 8',
        desc: 'Erection of primary structural steel framework, composite metal decking, and decorative timber glulam roof trusses.',
      },
      {
        step: '03',
        title: 'Cable-Truss Glass Atrium & Thermal Envelope',
        timeline: 'Months 9 – 12',
        desc: 'Specialist installation of tension-supported glass atrium, insulated rainscreen cladding, and solar PV rooftop panels.',
      },
      {
        step: '04',
        title: 'WELL-Standard Interiors & Handover',
        timeline: 'Months 13 – 15',
        desc: 'Acoustic ceiling baffles, circadian dynamic LED lighting, living plant walls, and clean indoor air validation.',
      },
    ],
    results: [
      {
        metric: 'LEED Plat.',
        label: 'Top Sustainability Tier',
        desc: 'Achieved the highest environmental tier for energy conservation and sustainable material sourcing.',
      },
      {
        metric: '3 Wks',
        label: 'Delivered Early',
        desc: 'Accelerated steel prefabrication allowed tenant handovers nearly a full month ahead of schedule.',
      },
      {
        metric: '45%',
        label: 'Embodied Carbon Drop',
        desc: 'Innovative geopolymer concrete and timber integration significantly mitigated greenhouse impact.',
      },
      {
        metric: '100%',
        label: 'Pre-Leased Occupancy',
        desc: 'Anchored by high-profile regional technology and medical research corporate tenants.',
      },
    ],
    gallery: [
      {
        title: 'Corporate Headquarters Exterior',
        stage: 'Completed Development',
        image: '/commercial-construction.jpg',
        caption: 'Finished elevation demonstrating seamless fusion of structural steel, timber fins, and architectural glazing.',
      },
      {
        title: 'Glass Atrium Cable-Truss Assembly',
        stage: 'Architectural Feature',
        image: '/commercial-hero.jpg',
        caption: 'High-tension stainless steel cable system holding structural glass wall with minimal framing.',
      },
      {
        title: 'Structural Frame Erection',
        stage: 'Framing Stage',
        image: '/hero-construction.jpg',
        caption: 'Crane rigging wide-flange structural steel beams connected with seismic moment splices.',
      },
      {
        title: 'Open-Plan Column-Free Interiors',
        stage: 'Interior Completion',
        image: '/project-office-tower.jpg',
        caption: 'Generous floor-to-ceiling glass allowing natural daylight to illuminate flexible tenant office configurations.',
      },
      {
        title: 'BIM 3D MEP Clash Detection',
        stage: 'Planning & Engineering',
        image: '/engineering-planning.jpg',
        caption: 'Digital coordinating of complex geothermal radiant loops and active chilled-beam air systems.',
      },
      {
        title: 'Landscaped Biophilic Plaza',
        stage: 'Exterior Grounds',
        image: '/services-showcase.jpg',
        caption: 'Outdoor terrace spaces and permeable paving connecting corporate staff directly with nature.',
      },
    ],
  },
  {
    id: 'northgate-manufacturing',
    name: 'Northgate Manufacturing Plant',
    category: 'Industrial',
    projectType: 'Heavy Industrial & Advanced Manufacturing',
    location: 'Detroit, MI',
    year: '2022',
    image: '/industrial-construction.jpg',
    description:
      'A heavy manufacturing facility with crane-capable bays, vibration-isolated foundations, and integrated process utility corridors.',
    overview:
      'Engineered for high-precision automotive component manufacturing, the Northgate Plant encompasses 450,000 square feet of heavy-duty industrial floor space. Built with 50-ton overhead gantry crane bays, deep isolated machine inertial foundations, and comprehensive process piping trenches, this facility is built for round-the-clock industrial output.',
    info: {
      client: 'Apex Automotive Systems',
      location: 'Detroit, MI',
      category: 'Industrial',
      duration: '17 Months',
      status: 'Completed',
      area: '41,800 m²',
      value: '$62,400,000',
      contractType: 'EPC Turnkey',
      certification: 'ISO 14001 Compliant Industrial Spec',
    },
    challenges: [
      {
        title: 'Sub-Millimeter Vibration Tolerances for CNC Machines',
        desc: 'High-speed stamping presses and robotic milling cells required isolated concrete foundations that eliminate vibrational crosstalk.',
      },
      {
        title: 'High-Capacity Electrical & Industrial Gas Corridors',
        desc: 'Plant operations required 25 MVA electrical substations, compressed air ring mains, and heavy liquid coolant recycling systems.',
      },
      {
        title: 'Harsh Winter Construction Conditions',
        desc: 'Severe Michigan sub-zero freeze cycles threatened ground thaw and concrete curing schedules.',
      },
    ],
    solutions: [
      {
        title: 'Inertia Block Foundations on Elastomeric Isolators',
        desc: 'Engineered 18 separate monolithic concrete inertia pits resting on specialized multi-layer neoprene isolation springs.',
      },
      {
        title: 'Walk-Through Subterranean Utility Trenches',
        desc: 'Constructed an integrated 1,200-linear-foot underground utility tunnel network allowing maintenance without disrupting production floors.',
      },
      {
        title: 'Hydronic Ground Thawing & Enclosed Heating',
        desc: 'Deployed mobile hydronic heating systems to thaw frozen subgrade and erected temporary tent enclosures for winter concrete pours.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Site Preparation & Heavy Foundation Pits',
        timeline: 'Months 1 – 4',
        desc: 'Excavation of machine inertia pits, utility trench forms, and high-load foundation pilings.',
      },
      {
        step: '02',
        title: 'Heavy Structural Steel & Crane Runway Bays',
        timeline: 'Months 5 – 9',
        desc: 'Erection of heavy wide-flange structural steel columns and runway girders supporting 50-ton overhead cranes.',
      },
      {
        step: '03',
        title: 'Insulated Metal Panels & Process Mechanicals',
        timeline: 'Months 10 – 13',
        desc: 'Building envelope enclosure, industrial substation energization, and process piping header installation.',
      },
      {
        step: '04',
        title: 'Precision Equipment Alignment & Commissioning',
        timeline: 'Months 14 – 17',
        desc: 'Laser alignment of stamping press beds, ventilation scrubbers, and industrial safety sign-offs.',
      },
    ],
    results: [
      {
        metric: '50-Ton',
        label: 'Overhead Crane Rating',
        desc: 'Multiple bays equipped with synchronized dual-trolley heavy overhead gantry lifting.',
      },
      {
        metric: 'Zero',
        label: 'Vibration Interference',
        desc: 'Independent inertia blocks isolate high-precision robotic milling from stamping press shock.',
      },
      {
        metric: '25 MVA',
        label: 'Power Capacity',
        desc: 'Redundant dual-feed electrical substation designed for 24/7 continuous manufacturing.',
      },
      {
        metric: '100%',
        label: 'Regulatory Sign-Off',
        desc: 'Achieved complete environmental and occupational safety certifications on initial inspection.',
      },
    ],
    gallery: [
      {
        title: 'Completed Manufacturing Facility',
        stage: 'Completed Development',
        image: '/industrial-construction.jpg',
        caption: 'High-clearance manufacturing facility showing integrated logistics loading docks and insulated facades.',
      },
      {
        title: 'Heavy Machine Foundation Pits',
        stage: 'Substructure Stage',
        image: '/hero-construction.jpg',
        caption: 'Deep reinforced concrete pits engineered with vibration dampeners for heavy stamping machinery.',
      },
      {
        title: 'Crane Runway Girder Erection',
        stage: 'Structural Steel Stage',
        image: '/industrial-hero.jpg',
        caption: 'High-capacity structural steel columns framed to support 50-ton traveling bridge cranes.',
      },
      {
        title: 'Process Mechanical & Electrical Fit-Out',
        stage: 'MEP Installation',
        image: '/engineering-hero.jpg',
        caption: 'Industrial piping manifolds, high-voltage bus ducts, and automated ventilation scrubbers.',
      },
      {
        title: 'Plant Floor Layout & Laser Leveling',
        stage: 'Interior Flooring',
        image: '/project-warehouse.jpg',
        caption: 'Hardened epoxy floor coating applied over fiber-reinforced monolithic concrete slab.',
      },
      {
        title: 'Quality Testing & Plant Launch',
        stage: 'Commissioning Stage',
        image: '/commercial-construction.jpg',
        caption: 'Engineering teams conducting test cycles on overhead cranes and building environmental systems.',
      },
    ],
  },
  {
    id: 'the-foundry-lofts',
    name: 'The Foundry Lofts',
    category: 'Renovation',
    projectType: 'Adaptive-Reuse & Historic Renovation',
    location: 'Nashville, TN',
    year: '2024',
    image: '/project-retail.jpg',
    description:
      'An adaptive-reuse conversion of a historic foundry into 96 industrial-chic loft units, preserving original steel trusses and brickwork.',
    overview:
      'The Foundry Lofts is a benchmark in historic adaptive reuse. Breathing vibrant residential and retail life into a decommissioned 1920s cast-iron foundry, the project preserved centuries-old exposed brickwork and riveted steel trusses while installing modern seismic bracing, soundproofing, and energy-efficient systems.',
    info: {
      client: 'Heritage Urban Reinvestment',
      location: 'Nashville, TN',
      category: 'Renovation',
      duration: '16 Months',
      status: 'Completed',
      area: '14,800 m²',
      value: '$28,900,000',
      contractType: 'Construction Management',
      certification: 'National Historic Registry Recognized',
    },
    challenges: [
      {
        title: 'Preserving Historic Brick & Riveted Steel Fabric',
        desc: 'Century-old unreinforced masonry walls required extensive stabilization without altering character-defining historic facades.',
      },
      {
        title: 'Environmental Remediation of Industrial Byproducts',
        desc: 'Historic foundry operations left heavy metal residue and casting sands requiring specialized abatement.',
      },
      {
        title: 'Routing Modern MEP Through Historic Envelopes',
        desc: 'Inserting modern central air, fire sprinklers, and fiber communications without obscuring exposed timber and steel ceilings.',
      },
    ],
    solutions: [
      {
        title: 'Internal Structural Steel Exoskeleton & Helical Ties',
        desc: 'Installed seismic steel moment frames inside the structure and tied historical brick wythes with stainless steel helical ties.',
      },
      {
        title: 'EPA-Certified Environmental Remediation',
        desc: 'Safely excavated and remediated 3,500 cubic yards of casting fill under strict environmental containment.',
      },
      {
        title: 'Spiral Architectural Ductwork & Raised Access Flooring',
        desc: 'Designed custom exposed spiral copper and matte-black MEP distribution that turned mechanical systems into architectural art.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Hazard Abatement & Masonry Restoration',
        timeline: 'Months 1 – 4',
        desc: 'Removal of hazardous materials, structural shoring of exterior walls, and historic lime-mortar repointing.',
      },
      {
        step: '02',
        title: 'Seismic Retrofitting & Structural Reinforcement',
        timeline: 'Months 5 – 8',
        desc: 'Installation of interior steel moment frames, timber floor stabilization, and carbon-fiber beam wrapping.',
      },
      {
        step: '03',
        title: 'Enclosure Restoration & Custom Replica Fenestration',
        timeline: 'Months 9 – 12',
        desc: 'Refurbishing original industrial steel-sash windows with high-efficiency double-pane thermal glazing replicas.',
      },
      {
        step: '04',
        title: 'Loft Unit Fit-Out & Retail Concourse',
        timeline: 'Months 13 – 16',
        desc: 'Custom industrial kitchens, soundproof floor assemblies, ground-floor artisan retail, and residential leasing.',
      },
    ],
    results: [
      {
        metric: '96',
        label: 'Historic Lofts Created',
        desc: 'Transformed an abandoned industrial shell into 96 high-demand residential apartments.',
      },
      {
        metric: '100%',
        label: 'Historic Fabric Saved',
        desc: 'Successfully retained all original exterior brick facades and riveted roof trusses.',
      },
      {
        metric: '20%',
        label: 'Federal Tax Credit Achieved',
        desc: 'Strict historic compliance secured critical historic tax credits for developer financing.',
      },
      {
        metric: '100%',
        label: 'Leased Within 45 Days',
        desc: 'Achieved rapid occupancy record driven by unique architectural heritage aesthetic.',
      },
    ],
    gallery: [
      {
        title: 'Restored Exterior Facade',
        stage: 'Completed Development',
        image: '/project-retail.jpg',
        caption: 'Historic brick exterior with replica industrial windows and vibrant ground-floor pedestrian streetscape.',
      },
      {
        title: 'Masonry Restoration & Shoring',
        stage: 'Stabilization Stage',
        image: '/general-hero.jpg',
        caption: 'Temporary shoring towers and meticulous mortar tuck-pointing along historic perimeter walls.',
      },
      {
        title: 'Exposed Steel Truss Preservation',
        stage: 'Structural Integration',
        image: '/commercial-hero.jpg',
        caption: 'Original 1920s riveted steel trusses sandblasted, sealed, and integrated into modern loft living.',
      },
      {
        title: 'Modern Loft Living Space',
        stage: 'Interior Completion',
        image: '/about-us-image.jpg',
        caption: 'Finished residential loft featuring 16-foot ceilings, polished concrete floors, and exposed brick.',
      },
      {
        title: 'BIM Spatial Model of Historic Structure',
        stage: 'Planning & Engineering',
        image: '/engineering-planning.jpg',
        caption: 'Laser point-cloud 3D scan enabling millimeter-accurate placement of modern mechanical ducts.',
      },
      {
        title: 'Ground Floor Artisan Retail Market',
        stage: 'Completed Concourse',
        image: '/project-office-tower.jpg',
        caption: 'Community gathering space featuring local cafes and boutique retail beneath original timber beams.',
      },
    ],
  },
  {
    id: 'union-station-district',
    name: 'Union Station District',
    category: 'Infrastructure',
    projectType: 'Civic & Urban Transit Infrastructure',
    location: 'Chicago, IL',
    year: '2022',
    image: '/hero-construction.jpg',
    description:
      'A transit-oriented public plaza and pedestrian concourse connecting rail, bus, and bike networks with seismic-rated canopy structures.',
    overview:
      'The Union Station District project modernized one of the country’s most heavily utilized multimodal transportation centers. Encompassing a new subterranean pedestrian concourse, cantilevered structural glass transit canopies, integrated stormwater bioswales, and accessible public plazas, this project delivers world-class urban mobility.',
    info: {
      client: 'Regional Transportation Authority',
      location: 'Chicago, IL',
      category: 'Infrastructure',
      duration: '20 Months',
      status: 'Completed',
      area: '32,000 m²',
      value: '$76,000,000',
      contractType: 'Design-Build',
      certification: 'Envision Platinum Infrastructure Award',
    },
    challenges: [
      {
        title: 'Constructing Above Active Heavy Rail Tracks',
        desc: 'Over 120,000 daily commuter rail passengers passed through active platforms directly beneath the construction staging zone.',
      },
      {
        title: 'Cantilevered Glass Canopy Wind Dynamics',
        desc: 'Chicago’s extreme wind shear required advanced aerodynamic engineering for the 40-foot cantilevered glass transit canopies.',
      },
      {
        title: 'Complex Below-Grade Waterproofing',
        desc: 'Existing 100-year-old subterranean tunnel vaults suffered historical water ingress requiring complete envelope sealing.',
      },
    ],
    solutions: [
      {
        title: 'Overhead Protective Shielding & Night Shifts',
        desc: 'Constructed full blast-rated overhead protective decking allowing heavy crane lifts without interrupting train departures.',
      },
      {
        title: 'Wind-Tunnel Tuned Mass Dampers',
        desc: 'Integrated hidden tuned mass dampers into canopy armatures to prevent resonant vortex-induced vibrations.',
      },
      {
        title: 'Crystalline Waterproofing & Bentonite Membranes',
        desc: 'Injected high-pressure polyurethane grouts and enveloped subsurface retaining walls in self-healing bentonite liners.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Track Shielding & Subterranean Vault Restoration',
        timeline: 'Months 1 – 5',
        desc: 'Erection of protective passenger canopies, tunnel dewatering, and concrete vault structural repair.',
      },
      {
        step: '02',
        title: 'Deep Foundations & Cantilever Mast Anchors',
        timeline: 'Months 6 – 10',
        desc: 'Micropile foundation drilling between existing tracks and casting of high-strength anchor bents.',
      },
      {
        step: '03',
        title: 'Canopy Steel Erection & Glass Roof Enclosure',
        timeline: 'Months 11 – 15',
        desc: 'Rigging of sculptural cantilever masts, tension rods, and laminated photovoltaic glass canopies.',
      },
      {
        step: '04',
        title: 'Plaza Granite Paving & Smart Transit Wayfinding',
        timeline: 'Months 16 – 20',
        desc: 'Thermal-finished granite paving, interactive passenger wayfinding kiosks, and public opening.',
      },
    ],
    results: [
      {
        metric: '120K+',
        label: 'Daily Passengers Served',
        desc: 'Drastically improved circulation and multimodal connection for regional transit commuters.',
      },
      {
        metric: 'Zero',
        label: 'Train Schedule Delays',
        desc: 'Executed complex overhead construction without causing a single rail departure delay.',
      },
      {
        metric: 'Envision',
        label: 'Platinum Infrastructure',
        desc: 'Awarded top civil engineering sustainability honor for public realm longevity.',
      },
      {
        metric: '100%',
        label: 'ADA Accessibility',
        desc: 'Delivered barrier-free accessibility connecting street level with deep rail platforms.',
      },
    ],
    gallery: [
      {
        title: 'Completed Transit Concourse & Plaza',
        stage: 'Completed Development',
        image: '/hero-construction.jpg',
        caption: 'Vibrant public plaza with sculptural glass canopies providing sheltered commuter transit connections.',
      },
      {
        title: 'Subterranean Foundation Micropiling',
        stage: 'Substructure Stage',
        image: '/engineering-planning.jpg',
        caption: 'Specialized low-overhead drill rigs installing micropiles between active train tracks.',
      },
      {
        title: 'Cantilever Steel Mast Assembly',
        stage: 'Structural Steel Stage',
        image: '/industrial-construction.jpg',
        caption: 'Heavy structural steel masts fabricated to support long-span glass canopy arms.',
      },
      {
        title: 'Underground Concourse Renovation',
        stage: 'Interior Transit Concourse',
        image: '/project-office-tower.jpg',
        caption: 'High-illumination subterranean pedestrian walkway with modern acoustic wall paneling.',
      },
      {
        title: 'Structural Glass Canopy Installation',
        stage: 'Envelope Stage',
        image: '/commercial-hero.jpg',
        caption: 'Suction-lifter crane installing laminated tempered glass panels with integrated solar cells.',
      },
      {
        title: 'Final Public Dedication Ceremony',
        stage: 'Completed Infrastructure',
        image: '/general-construction.jpg',
        caption: 'Civic leaders and transit officials celebrating the grand opening of the modernized district.',
      },
    ],
  },
  {
    id: 'harborview-townhomes',
    name: 'Harborview Townhomes',
    category: 'Residential',
    projectType: 'Coastal Residential Community',
    location: 'San Diego, CA',
    year: '2023',
    image: '/general-hero.jpg',
    description:
      'A 42-unit waterfront townhome development with elevated decks, underground utilities, and salt-resistant envelope detailing.',
    overview:
      'Harborview Townhomes is a premier coastal residential enclaved offering panoramic bay vistas and resort-style living. Engineered to withstand aggressive coastal marine environments, the homes feature marine-grade 316 stainless steel hardware, salt-resistant rainscreen facades, subterranean parking garages, and private rooftop entertainment terraces.',
    info: {
      client: 'Pacific Crest Development',
      location: 'San Diego, CA',
      category: 'Residential',
      duration: '15 Months',
      status: 'Completed',
      area: '9,200 m²',
      value: '$24,600,000',
      contractType: 'General Contracting',
      certification: 'Title 24 Net-Zero Ready',
    },
    challenges: [
      {
        title: 'High-Salinity Coastal Marine Air Corrosion',
        desc: 'Proximity to the ocean produces intense salt-fog corrosion that rapidly degrades standard building hardware and exterior stucco.',
      },
      {
        title: 'Coastal Bluff Slope Stability',
        desc: 'Construction on a terraced coastal bluff required retaining system engineering to prevent soil creep during rainy periods.',
      },
      {
        title: 'Subterranean Garage Waterfront Water Table',
        desc: 'Underground parking structures sat below tidal sea levels requiring permanent hydro-static envelope protection.',
      },
    ],
    solutions: [
      {
        title: 'Marine-Grade 316 Stainless Steel & Ventilated Rainscreens',
        desc: 'Specified marine-grade structural connections, non-corrosive fasteners, and high-density composite siding with air gaps.',
      },
      {
        title: 'Soldier-Pile Tieback Retaining Systems',
        desc: 'Installed tied-back soldier piles with rock anchors drilled deep into stable coastal sandstone.',
      },
      {
        title: 'White-Tank Monolithic Waterproof Concrete',
        desc: 'Poured integral crystalline waterproof concrete with dual waterstops and sub-slab drainage relief pumps.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Bluff Stabilization & Subterranean Foundation',
        timeline: 'Months 1 – 4',
        desc: 'Tieback retaining wall installation, deep excavation, and waterproof basement garage slab casting.',
      },
      {
        step: '02',
        title: 'Concrete Podium & Hybrid Steel/Wood Framing',
        timeline: 'Months 5 – 8',
        desc: 'Post-tensioned concrete podium slab construction followed by multi-level precision framing.',
      },
      {
        step: '03',
        title: 'Marine Envelope, Glass Balustrades & Solar Arrays',
        timeline: 'Months 9 – 12',
        desc: 'Rainscreen facade installation, frameless hurricane-rated glass deck railings, and rooftop solar arrays.',
      },
      {
        step: '04',
        title: 'Luxury Coastal Fit-Out & Landscape Delivery',
        timeline: 'Months 13 – 15',
        desc: 'High-end coastal interior finishes, custom millwork, indigenous succulent gardens, and client move-in.',
      },
    ],
    results: [
      {
        metric: '42',
        label: 'Luxury Residences',
        desc: 'Each home featuring private elevator access and uninterrupted coastal panoramic views.',
      },
      {
        metric: '100%',
        label: 'Marine Resilience Spec',
        desc: 'Corrosion-resistant exterior design engineered for multi-decade oceanfront durability.',
      },
      {
        metric: 'Net-Zero',
        label: 'Energy Efficiency Ready',
        desc: 'Rooftop solar and high-SEER heat pump HVAC systems achieve self-sustaining energy performance.',
      },
      {
        metric: 'Sold Out',
        label: 'Pre-Construction Sales',
        desc: 'Entire luxury development sold out prior to final structural frame completion.',
      },
    ],
    gallery: [
      {
        title: 'Harborview Waterfront Facade',
        stage: 'Completed Development',
        image: '/general-hero.jpg',
        caption: 'Completed residences featuring modern coastal lines, expansive glass, and private rooftop decks.',
      },
      {
        title: 'Coastal Bluff Excavation & Shoring',
        stage: 'Substructure Stage',
        image: '/hero-construction.jpg',
        caption: 'Deep tieback retaining wall installation securing the terraced hillside for basement parking.',
      },
      {
        title: 'Concrete Podium Slab Construction',
        stage: 'Podium Stage',
        image: '/general-construction.jpg',
        caption: 'Post-tensioned concrete slab providing seismic foundation for multi-story townhome residences.',
      },
      {
        title: 'Rooftop Solarium & Terrace Views',
        stage: 'Completed Terrace',
        image: '/services-showcase.jpg',
        caption: 'Private entertaining terraces with panoramic water views and frameless safety glass balustrades.',
      },
      {
        title: 'Marine Rainscreen Facade Detailing',
        stage: 'Envelope Stage',
        image: '/commercial-hero.jpg',
        caption: 'Salt-resistant composite panels installed with ventilated drainage cavities behind facade.',
      },
      {
        title: 'Interior High-End Coastal Finishes',
        stage: 'Interior Completion',
        image: '/about-us-image.jpg',
        caption: 'Open-concept living room and gourmet kitchen with floor-to-ceiling glass sliding doors.',
      },
    ],
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
