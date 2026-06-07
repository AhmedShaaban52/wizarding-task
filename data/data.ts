import dashboardIcon from "@/public/dashboardIcon.png";
import wizzardsIcon from "@/public/wizzardsIcon.png";
import elixirsIcon from "@/public/elixirsIcon.png";
import archivesIcon from "@/public/archivesIcon.png";

import boxIcon from "@/public/boxIcon.svg";
import boxIcon2 from "@/public/boxIcon2.svg";
import boxIcon3 from "@/public/boxIcon3.svg";

export const navItems = [
  { href: "#", label: "Dashboard", icon: dashboardIcon, active: true },
  { href: "#", label: "Wizards", icon: wizzardsIcon, active: false },
  { href: "#", label: "Elixirs", icon: elixirsIcon, active: false },
  { href: "#", label: "Archives", icon: archivesIcon, active: false },
];

export const stats = [
  {
    label: "Total Registered Wizards",
    value: "1,248",
    valueColor: "text-therty",
    icon: boxIcon,
    iconWidth: 11.6,
    iconHeight: 7,
    footerColor: "text-[#FBB040]",
    footerText: "+4% from last moon",
    border: "border border-[#494454]/30",
    special: false,
  },
  {
    label: "Active Elixirs",
    value: "856",
    valueColor: "text-yellow",
    icon: boxIcon2,
    iconWidth: 10.5,
    iconHeight: 10.53,
    footerColor: "text-yellow",
    footerText: "24 new formulas registered",
    border: "border border-[#494454]/30",
    special: false,
  },
  {
    label: "Pending Verifications",
    value: "12",
    valueColor: "text-[#FFB4AB]",
    icon: boxIcon3,
    iconWidth: 2.3,
    iconHeight: 10.5,
    footerColor: "text-[#FFB4AB]",
    footerText: "Requires High-Council approval",
    border: "",
    special: true,
  },
];

export const bars = [
  39, 60, 35, 75, 40, 80, 50, 90, 65, 40, 78, 50, 40, 60, 66, 35, 40, 45, 80,
];
export const gridLines = [25, 50, 75, 100];
export const labels = ["Moon Start", "Full Moon", "Moon End"];

export const specialties = [
  { label: "Alchemists", color: "bg-therty", percent: "45%" },
  { label: "Transmuters", color: "bg-yellow", percent: "30%" },
  { label: "Conjurers", color: "bg-[#BCC7DE]", percent: "25%" },
];

export const tableHeaders = [
    { label: "ID", className: "lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm text-center lg:text-left" },
    { label: "First Name", className: "lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm" },
    { label: "Last Name", className: "lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm" },
    { label: "Associated Elixirs", className: "lg:pt-[25.5px] py-4 lg:pb-6.75 lg:px-6 lg:font-semibold text-xs lg:text-sm" },
    { label: "Actions", className: "lg:pt-[25.5px] py-4 lg:pb-6.75 pr-8 lg:px-6 lg:font-semibold text-xs lg:text-sm text-right" },
]

export const wizardRegistry = [
  {
    id: "03ca5597...a04457",
    first: "(None)",
    last: "Mrs Skower",
    elixirs: ["Mrs Skower's All-Purpose Magical Mess Remover"],
    color:
      "py-3 px-2 bg-[#EE9800]/10 text-[#FFB95F] text-xs border border-[#EE9800]/20",
  },
  {
    id: "f47ac10b...89c0a1",
    first: "Severus",
    last: "Snape",
    elixirs: ["Veritaserum", "Wolfsbane Potion"],
    color: "py-1 px-3 bg-therty/10 text-therty border border-therty/20",
  },
  {
    id: "92de431f...b23d9a",
    first: "Nicolas",
    last: "Flamel",
    elixirs: ["Elixir of Life"],
    color:
      "py-1 px-3 bg-[#EE9800]/10 text-[#FFB95F] border border-[#EE9800]/20 ",
  },
  {
    id: "6b208922...f00e12",
    first: "Luna",
    last: "Lovegood",
    elixirs: [],
    color: "",
  },
];
