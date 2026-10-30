import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface EcosystemCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface SystemCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  url?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}