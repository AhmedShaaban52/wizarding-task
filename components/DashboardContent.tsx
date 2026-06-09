

import StatsCard from "./StatsCard";
import RegistryActivityChart from "./RegistryActivityChart";
import WizardsSpecialtyChart from "./WizardsSpecialtyChart";
import Title from "./Title";
export default function DashboardContent() {

    return (
        <main className="flex-1 bg-[#030d1a] pt-6 lg:pt-10 px-6 lg:px-10 pb-10 lg:pb-20 space-y-8 text-slate-200">
            <Title />
            <StatsCard />
            <RegistryActivityChart />
            <WizardsSpecialtyChart />
        </main>
    );
}