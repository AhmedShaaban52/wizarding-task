import Image from "next/image";
import { stats } from "@/data/data";

const StatsCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6 lg:pt-7">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className={`relative bg-[#051424]/80 p-6 rounded-xl backdrop-blur-md flex flex-col justify-between lg:h-39.75 ${stat.border}`}
                >
                    {stat.special && (
                        <>
                            <span className="absolute top-0 left-4 right-4 h-px bg-[#494454]/30" />
                            <span className="absolute bottom-0 left-4 right-4 h-px bg-[#494454]/30" />
                            <span className="absolute right-0 top-1 bottom-1 w-px bg-[#494454]/30" />
                            <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#494454]/30 rounded-r-sm" />
                        </>
                    )}

                    <div className="flex flex-col gap-[8.5px] relative">
                        <p className="font-manrope font-semibold text-xs lg:text-[14px] text-secondary leading-5 tracking-[1.4px] uppercase">
                            {stat.label}
                        </p>
                        <p className={`font-manrope font-semibold text-2xl lg:text-[32px] leading-10 tracking-[-0.32px] ${stat.valueColor}`}>
                            {stat.value}
                        </p>
                    </div>

                    <div className={`pt-6 flex items-center gap-1.5 text-xs relative ${stat.footerColor}`}>
                        <Image
                            src={stat.icon}
                            alt="Icon"
                            width={stat.iconWidth}
                            height={stat.iconHeight}
                            className="object-contain shrink-0"
                        />
                        <span className="font-manrope font-medium">{stat.footerText}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatsCard