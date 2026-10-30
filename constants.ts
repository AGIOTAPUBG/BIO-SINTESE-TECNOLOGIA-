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
    id: 'sigcr',
    title: 'systems.sigcr.title',
    subtitle: 'systems.sigcr.subtitle',
    description: 'systems.sigcr.desc',
    icon: ShieldCheck,
    url: 'https://sigcr.com.br/',
    logo: '/assets/sigcr-logo.jpeg'
  },
  {
    id: 'tropa',
    title: 'systems.tropa.title',
    subtitle: 'systems.tropa.subtitle',
    description: 'systems.tropa.desc',
    icon: Gamepad2,
    url: 'https://tropadorush.com/'
  },
  {
    id: 'setor-seis',
    title: 'systems.setorSeis.title',
    subtitle: 'systems.setorSeis.subtitle',
    description: 'systems.setorSeis.desc',
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