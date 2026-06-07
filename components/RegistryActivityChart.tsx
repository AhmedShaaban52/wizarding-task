import { bars, gridLines, labels, specialties } from "@/data/data"

const RegistryActivityChart = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-x-6 lg:pt-6">
            <div className="lg:col-span-2 bg-[#061424] border border-[#494454]/30 p-6 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl lg:text-2xl text-primary font-manrope font-semibold leading-8">
                        Registry Activity
                    </h3>
                    <span className="font-manrope text-primary text-sm leading-5 font-semibold bg-[#273647] px-3 py-1 text-center rounded-lg tracking-[0.28px]">
                        Last 30 Days
                    </span>
                </div>
                <div className="relative">
                    <div className="relative h-40 flex items-end justify-between gap-2 px-1">
                        {gridLines.map((v) => (
                            <div
                                key={v}
                                className="absolute left-0 right-0 h-px bg-white/8 pointer-events-none"
                                style={{ bottom: `${v}%` }}
                            />
                        ))}
                        <div className="flex items-end gap-2 h-48 w-full">
                            {bars.map((height, idx) => (
                                <div
                                    key={idx}
                                    className="w-full md:w-9.75 bg-therty/20 rounded-t-xs hover:bg-therty/40 transition-colors relative z-10"
                                    style={{ height: `${height}%` }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between font-manrope font-medium text-[12px] text-secondary mt-3">
                        {labels.map((label) => (
                            <span key={label}>{label}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#061424] border border-[#494454]/30 p-6 rounded-2xl flex flex-col justify-between">
                <h3 className="text-xl lg:text-2xl text-primary font-manrope font-semibold mb-4">
                    Wizards by Specialty
                </h3>
                <div className="relative flex items-center justify-center my-2">
                    <div className="w-32 h-32 rounded-full border-16 border-[#273647] flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-xl font-bold text-white block">1.2k</span>
                            <span className="text-[10px] text-slate-500 uppercase">Total</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-1.5 text-sm text-primary font-manrope mt-2">
                    {specialties.map((s) => (
                        <div key={s.label} className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${s.color}`} />
                                {s.label}
                            </span>
                            <span className="text-secondary text-sm">{s.percent}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RegistryActivityChart