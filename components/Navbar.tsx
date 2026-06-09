import Image from 'next/image';
import { BiSearch } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import navImage from "@/public/navImage.jpg"
import { useState } from 'react';

interface NavbarProps {
    onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <nav className="w-full h-16 bg-[#051424]/80 backdrop-blur-xl border-b border-[#494454]/30 px-4 md:px-10 flex items-center justify-between shadow-[0_0_20px_0_rgba(208,188,255,0.15)] select-none">

            {/* Mobile search overlay */}
            {searchOpen && (
                <div className="lg:hidden absolute inset-x-0 top-0 h-16 z-50 bg-[#051424] px-4 flex items-center gap-3">
                    <div className="relative flex-1">
                        <BiSearch
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6b7c]"
                        />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Scrying records..."
                            className="w-full h-9 bg-[#273647]/30 rounded-full text-sm text-white placeholder-slate-500 pl-10 pr-6 focus:outline-none focus:ring-1 focus:ring-[#FFB95F]/50 transition-all"
                        />
                    </div>
                    <button
                        onClick={() => setSearchOpen(false)}
                        className="text-secondary hover:text-white transition-colors cursor-pointer"
                    >
                        <IoMdClose size={22} />
                    </button>
                </div>
            )}

            <div className="flex items-center gap-3">
                <button
                    className="lg:hidden text-secondary hover:text-white transition-colors cursor-pointer"
                    onClick={onMenuClick}
                >
                    <RxHamburgerMenu size={22} />
                </button>
                <span className="text-yellow text-lg lg:text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity">
                    Wizarding Registry
                </span>
            </div>

            {/* Center — desktop search */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
                <div className="relative w-fit group">
                    <BiSearch
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6b7c] group-focus-within:text-[#CBC3D7] transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Scrying records..."
                        className="w-64 h-9 bg-[#273647]/30 rounded-full text-sm text-white placeholder-slate-500 py-1.75 pl-10 pr-6 focus:outline-none focus:ring-1 focus:ring-[#FFB95F]/50 transition-all"
                    />
                </div>
            </div>

            {/* Right — icons */}
            <div className="flex items-center gap-4 lg:gap-6">
                {/* Search icon — mobile only */}
                <button
                    className="lg:hidden relative flex items-center justify-center text-[#CBC3D7] hover:text-white transition-colors focus:outline-none cursor-pointer"
                    onClick={() => setSearchOpen(true)}
                >
                    <BiSearch size={18} />
                </button>

                <button className="relative flex items-center justify-center text-[#CBC3D7] hover:text-white transition-colors focus:outline-none">
                    <FaRegBell size={18} />
                </button>

                <button className="hidden lg:flex items-center justify-center text-[#CBC3D7] hover:text-white transition-colors focus:outline-none">
                    <IoSettingsOutline size={20} />
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