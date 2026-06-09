import { StaticImageData } from "next/image";

export interface Elixir {
  id: string;
  name: string;
}

export interface Wizard {
  id: string;
  firstName: string | null;
  lastName: string | null;
  elixirs: Elixir[];
  color?: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon: StaticImageData;
  active: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  valueColor: string;
  icon: StaticImageData;
  iconWidth: number;
  iconHeight: number;
  footerColor: string;
  footerText: string;
  border: string;
  special: boolean;
}

export interface Specialty {
  label: string;
  color: string;
  percent: string;
}

export interface TableHeader {
  label: string;
  className: string;
}

export interface LocalWizardRegistry {
  id: string;
  first: string;
  last: string;
  elixirs: string[];
  color: string;
}

export interface PieDataItem {
  name: string;
  value: number;
  color: string;
}
