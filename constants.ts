import { 
  Building2, 
  Landmark, 
  Database, 
  Gamepad2, 
  HeartPulse, 
  ShieldCheck, 
  FileText, 
  Search, 
  Coins, 
  Server, 
  Code2, 
  Cpu, 
  Lock, 
  Scale, 
  Globe 
} from 'lucide-react';
import { NavItem, EcosystemCardProps, SystemCardProps, ValueProp } from './types';

// Used for mapping, labels are now translation keys
export const NAV_ITEMS: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/about' },
  { label: 'nav.systems', path: '/systems' },
  { label: 'nav.security', path: '/security' },
  { label: 'nav.contact', path: '/contact' },
];

export const ECOSYSTEMS: EcosystemCardProps[] = [
  { title: 'ecosystems.gov', icon: Building2 },
  { title: 'ecosystems.fin', icon: Landmark },
  { title: 'ecosystems.data', icon: Database },
  { title: 'ecosystems.games', icon: Gamepad2 },
  { title: 'ecosystems.health', icon: HeartPulse },
];

export const SYSTEMS: SystemCardProps[] = [
  {
    id: 'core',
    title: 'systems.core.title',
    subtitle: 'systems.core.subtitle',
    description: 'systems.core.desc',
    icon: ShieldCheck
  },
  {
    id: 'reg',
    title: 'systems.reg.title',
    subtitle: 'systems.reg.subtitle',
    description: 'systems.reg.desc',
    icon: FileText
  },
  {
    id: 'sibavec',
    title: 'systems.sibavec.title',
    subtitle: 'systems.sibavec.subtitle',
    description: 'systems.sibavec.desc',
    icon: Scale
  },
  {
    id: 'drope',
    title: 'systems.drope.title',
    subtitle: 'systems.drope.subtitle',
    description: 'systems.drope.desc',
    icon: Search
  },
  {
    id: 'captagov',
    title: 'systems.captagov.title',
    subtitle: 'systems.captagov.subtitle',
    description: 'systems.captagov.desc',
    icon: Coins
  },
  {
    id: 'govdoc',
    title: 'systems.govdoc.title',
    subtitle: 'systems.govdoc.subtitle',
    description: 'systems.govdoc.desc',
    icon: FileText
  },
  {
    id: 'game',
    title: 'systems.game.title',
    subtitle: 'systems.game.subtitle',
    description: 'systems.game.desc',
    icon: Gamepad2
  },
  {
    id: 'custom',
    title: 'systems.custom.title',
    subtitle: 'systems.custom.subtitle',
    description: 'systems.custom.desc',
    icon: Code2
  }
];

export const DIFFERENTIALS: ValueProp[] = [
  { title: 'differentials.modular.title', description: 'differentials.modular.desc', icon: Server },
  { title: 'differentials.api.title', description: 'differentials.api.desc', icon: Code2 },
  { title: 'differentials.lgpd.title', description: 'differentials.lgpd.desc', icon: Lock },
  { title: 'differentials.ai.title', description: 'differentials.ai.desc', icon: Cpu },
  { title: 'differentials.gov.title', description: 'differentials.gov.desc', icon: Building2 },
  { title: 'differentials.uptime.title', description: 'differentials.uptime.desc', icon: Globe },
];