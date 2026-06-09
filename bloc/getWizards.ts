import api from "@/lib/axios";
import { Wizard } from "@/types/types";

const WIZARD_COLORS = [
  "py-3 px-2 bg-[#EE9800]/10 text-yellow text-xs border border-[#EE9800]/20",
  "py-1 px-3 bg-therty/10 text-therty border border-therty/20",
  "py-1 px-3 bg-[#EE9800]/10 text-yellow border border-[#EE9800]/20",
];

export const fetchWizards = async (): Promise<Wizard[]> => {
  const { data } = await api.get("/Wizards");
  return data.map((wizard: Wizard, i: number) => ({
    ...wizard,
    color: WIZARD_COLORS[i % WIZARD_COLORS.length],
  }));
};
