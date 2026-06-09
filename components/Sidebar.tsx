import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import margainImage from "@/public/margin.png"
import Image from "next/image";
import { MdOutlineSettings } from "react-icons/md";
import { navItems } from "@/data/data";
import Link from "next/link";

type SidebarProps = {
    isOpen: boolean
    onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 bg-black/60 lg:hidden backdrop-blur-xs"
                    onClick={onClose}
                />
            )}

            <aside className={`fixed left-0 z-50 top-0 lg:top-16  w-64 bg-[#0D1C2D] border-r border-[#494454]/20 flex flex-col justify-between p-4 h-screen lg:h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 select-none shrink-0 shadow-[0_8px_10px_-6px_rgba(208,188,255,0.05)]`}
            >
                <div>
                    <div className="flex items-start justify-between pt-2 pb-10 relative">
                        <div className="flex flex-col items-center justify-center flex-1">
                            <Image src={margainImage} alt="Margain" className="mb-1" />
                            <span className="font-manrope font-black text-base text-yellow">Registry</span>
                            <span className="text-secondary text-[10px] font-medium tracking-[0.6px] text-center">
                                Ministry of Alchemical Records
                            </span>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-secondary hover:text-white absolute right-0 top-2 p-1 rounded-lg hover:bg-[#112336]/50 transition-colors cursor-pointer lg:hidden"
                            aria-label="Close Sidebar"
                        >
                            <IoMdClose size={22} />
                        </button>
                    </div>

                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-4 px-6 py-3 text-sm transition-all relative ${item.active
                                    ? "bg-[#EE9800]/10 border-yellow text-yellow font-medium rounded-lg"
                                    : "text-secondary hover:text-white hover:bg-[#112336]/50 rounded-lg group"
                                    }`}
                            >
                                {item.active && (
                                    <span className="absolute right-px top-2 bottom-2 w-0.5 bg-[#fbb040] rounded-r-sm" />
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

                <div>
                    <button className="w-full py-2.5 px-4 bg-therty hover:opacity-90 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10 shadow-[0_4px_6px_-4px_rgba(208,188,255,0.10)] cursor-pointer mb-4">
                        <span className="font-manrope font-semibold text-[14px] text-[#3C0091] leading-5 tracking-[0.28px] text-center flex items-center">
                            <span className="mr-2 text-base font-bold">+</span> New Elixir
                        </span>
                    </button>

                    <div className="space-y-0.5 pt-4 border-t border-[#112336]">
                        <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-secondary hover:text-white text-sm rounded-lg hover:bg-[#112336]/30 transition-colors">
                            <MdOutlineSettings size={18} />
                            Settings
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-secondary hover:text-white text-sm rounded-lg hover:bg-[#112336]/30 transition-colors">
                            <IoHelpCircleOutline size={18} />
                            Support
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}