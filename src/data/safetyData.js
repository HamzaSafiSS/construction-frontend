import {
  ShieldAlert,
  CheckCircle2,
  Layers,
  Leaf,
  GraduationCap,
  FileCheck,
} from 'lucide-react';

const safetyFocusAreas = [
  {
    id: 'workplace-safety',
    title: 'Workplace Safety',
    description:
      'Promoting safe working environments and responsible construction practices.',
    icon: ShieldAlert,
    tag: 'Zero-Harm Policy',
    highlight: 'Mandatory daily safety briefings & PPE enforcement on all sites',
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    description:
      'Maintaining consistent quality through inspections and careful project supervision.',
    icon: CheckCircle2,
    tag: 'Multi-Tier QA',
    highlight: 'Independent structural audits & rigorous tolerance verification',
  },
  {
    id: 'material-standards',
    title: 'Material Standards',
    description:
      'Using suitable construction materials that meet project specifications and applicable standards.',
    icon: Layers,
    tag: 'Certified Sourcing',
    highlight: 'Mill-certified steel, batch-tested concrete & vetted suppliers',
  },
  {
    id: 'environmental-responsibility',
    title: 'Environmental Responsibility',
    description:
      'Encouraging responsible resource use and minimizing construction-related environmental impacts.',
    icon: Leaf,
    tag: 'Eco-Stewardship',
    highlight: 'Waste diversion programs & low-carbon material integration',
  },
  {
    id: 'professional-training',
    title: 'Professional Training',
    description:
      'Supporting skilled teams through appropriate training and safety awareness.',
    icon: GraduationCap,
    tag: 'Skilled Workforce',
    highlight: 'Continuous OSHA training, equipment certification & skill mentorship',
  },
  {
    id: 'compliance',
    title: 'Compliance',
    description:
      'Following applicable building regulations, safety requirements, and industry standards.',
    icon: FileCheck,
    tag: '100% Regulatory',
    highlight: 'Full adherence to municipal codes, IBC standards & statutory guidelines',
  },
];

export default safetyFocusAreas;
