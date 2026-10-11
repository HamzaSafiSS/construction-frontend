import {
  Users,
  Target,
  Compass,
  HardHat,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description:
      "Understanding the client's vision, project requirements, expectations, and goals.",
    icon: Users,
    tag: 'Vision & Scope',
    deliverable: 'Initial Project Charter',
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Developing project plans, budgets, schedules, and resource requirements.',
    icon: Target,
    tag: 'Budget & Schedule',
    deliverable: 'Feasibility & GMP Estimate',
  },
  {
    step: '03',
    title: 'Design & Engineering',
    description:
      'Coordinating architectural designs, engineering requirements, technical specifications, and construction preparations.',
    icon: Compass,
    tag: 'BIM & Permitting',
    deliverable: 'Approved Working Drawings',
  },
  {
    step: '04',
    title: 'Construction',
    description:
      'Executing the project through skilled professionals, effective coordination, and consistent quality control.',
    icon: HardHat,
    tag: 'Active Build',
    deliverable: 'Milestone Stage Completion',
  },
  {
    step: '05',
    title: 'Quality & Safety',
    description:
      'Conducting regular inspections, monitoring construction standards, and maintaining safety throughout the project.',
    icon: ShieldCheck,
    tag: 'OSHA & Code QA',
    deliverable: 'Zero-Defect Audit Logs',
  },
  {
    step: '06',
    title: 'Handover',
    description:
      'Completing final inspections, addressing outstanding details, and delivering the finished project to the client.',
    icon: FileCheck,
    tag: 'Turnkey Delivery',
    deliverable: 'Occupancy & Warranty Pack',
  },
];

export default processSteps;
