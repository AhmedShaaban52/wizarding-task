
import Image from 'next/image';
import { BiSearch } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import navImage from "@/public/navImage.jpg"

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-[#051424]/80 backdrop-blur-xl border-b border-[#494454]/30 px-10 flex items-center justify-between shadow-[0_0_20px_0_rgba(208,188,255,0.15)] select-none">
            <div className="flex items-center">
                <span className="text-yellow text-lg lg:text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity">
                    Wizarding Registry
                </span>
            </div>
        
            <div className="flex-1 w-20 max-w-md mx-8">
                <div className="relative w-fit group">
                    <BiSearch
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6b7c] group-focus-within:text-[#CBC3D7] transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Scrying records..."
                        className="lg:w-64 h-9 bg-[#273647]/30 rounded-full text-sm text-white placeholder-slate-500 py-1.75 pl-10 pr-6 focus:outline-none focus:ring-1 focus:ring-[#FFB95F]/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative flex items-center justify-center text-[#CBC3D7] hover:text-white transition-colors focus:outline-none">
                    <FaRegBell
                        width={16}
                        height={20}
                        strokeWidth={2}
                        className="overflow-visible"
                    />
                </button>

                <button className="flex items-center justify-center text-[#CBC3D7] hover:text-white transition-colors focus:outline-none">
                    <IoSettingsOutline
                        size={20}
                        strokeWidth={2}
                    />
                </button>


                <div className="relative p-[1.5px] rounded-full bg-linear-to-b from-[#4e3b70] to-[#201635] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden border border-[#120a24]">
                        <Image
                            src={navImage}
                            alt="User Avatar"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
