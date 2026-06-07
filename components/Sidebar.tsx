import { IoHelpCircleOutline } from "react-icons/io5";
import margainImage from "@/public/margin.png"
import Image from "next/image";
import { MdOutlineSettings } from "react-icons/md";
import { navItems } from "@/data/data";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#0D1C2D] border-r border-[#494454]/20 flex flex-col justify-between p-4 h-[calc(100vh-61px)] shadow-[0_8px_10px_-6px_rgba(208,188,255,0.05),0_20px_25px_-5px_rgba(208,188,255,0.05)]">

            <div>
                <div className="flex flex-col items-center justify-center pt-6 pb-20">
                    <Image src={margainImage} alt="Margain" />
                    <span className="font-manrope font-black text-base text-yellow">Registry</span>
                    <span className="text-secondary text-xs font-medium  tracking-[0.6px]">Ministry of Alchemical Records</span>
                </div>

                <nav>
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-4 px-6 py-3 text-sm transition-colors relative ${item.active
                                ? "bg-[#EE980033] border-yellow text-yellow font-medium rounded-lg"
                                : "text-secondary hover:text-white hover:bg-[#091b2e] rounded-lg group"}`}
                        >
                            {item.active && (
                                <span className="absolute right-px top-0.5 bottom-0.5 w-0.5 bg-[#fbb040] rounded-r-sm" />
                            )}
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={18}
                                height={18}
                                className={`object-contain ${!item.active && "opacity-70 group-hover:opacity-100 transition-opacity"}`}
                            />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div >
                <button className="w-full py-2.5 px-4 bg-linear-to-r bg-therty hover:opacity-90 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 transition-all border border-white/20 shadow-[0_4px_6px_-4px_rgba(208,188,255,0.20),0_10px_15px_-3px_rgba(208,188,255,0.20)] cursor-pointer">
                    <span className="font-manrope font-semibold text-[14px] text-[#3C0091] leading-5 tracking-[0.28px] text-center flex items-center">
                        <span className="mr-2">+</span> New Elixir
                    </span>
                </button>

                <div className="space-y-1 pt-6 border-t border-[#0b1a29]">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-white text-sm transition-colors">
                        <MdOutlineSettings size={20} />
                        Settings
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-white text-sm transition-colors">
                        <IoHelpCircleOutline size={20} />
                        Support
                    </a>
                </div>
            </div>
        </aside>
    );
}