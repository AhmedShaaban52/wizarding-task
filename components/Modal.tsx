"use client"

import Image from "next/image"
import imageModal from "@/public/imageModal.png"
import pencilIcon from "@/public/pencilIcon.svg"
import injectionIcon from "@/public/injectionIcon.svg"
import flaskIcon from "@/public/flaskIcon.svg"
import { FaChevronRight } from "react-icons/fa6"
import { Wizard } from "@/types/types"

type ModalProps = {
    wizard: Wizard | null
    onClose: () => void
}

const Modal = ({ wizard, onClose }: ModalProps) => {
    if (!wizard) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#051424B2]/70 backdrop-blur-md px-4"
            onClick={onClose}
        >
            <div
                className="relative w-11/12 sm:w-[85%] lg:max-w-5xl lg:w-11/12 h-3/4 md:h-5/6 lg:max-h-[921.6px] bg-[#0D1C2D] rounded-2xl border border-[#494454] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-[#49445433]">
                    <div>
                        <p className="text-therty font-manrope font-normal uppercase leading-6 tracking-[1.6px] mb-1 text-xs sm:text-sm">
                            Member Profile
                        </p>
                        <h2 className="text-primary font-manrope font-semibold md:text-2xl leading-tight tracking-[-0.32px]">
                            {[wizard.firstName, wizard.lastName].filter(Boolean).join(" ") || "—"}
                        </h2>
                    </div>
                    <div className="text-right">
                        <p className="text-secondary font-manrope tracking-widest mb-2 text-xs sm:text-sm">
                            Registry ID
                        </p>
                        <p className="text-yellow font-manrope font-semibold text-xs sm:text-lg tracking-wide">
                            {wizard.id.slice(0, 12).toUpperCase()}
                        </p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin">
                    <div className="grid grid-cols-12 lg:gap-x-12 gap-y-6">

                        <div className="col-span-4 hidden lg:flex flex-col gap-6 relative pt-8 lg:pl-6">
                            <div
                                className="absolute top-0 left-0 w-56 h-56 rounded-full opacity-50 blur-2xl pointer-events-none"
                                style={{
                                    background: "linear-gradient(135deg, #D0BCFF33, #FFB95F33)"
                                }}
                            />
                            <div className="relative w-48 h-48 rounded-full border-2 border-therty/30 bg-[#0D1C2D] p-2 shrink-0 shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={imageModal}
                                        alt="Wizard Avatar"
                                        width={192}
                                        height={192}
                                        className="object-cover w-full h-full rounded-full drop-shadow-[0_0_15px_rgba(208,188,255,0.4)]"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs xl:text-base font-manrope font-normal text-therty/90 px-3 py-1.5 bg-therty/10 border border-therty/30 rounded-full">
                                    Class A Citizen
                                </span>
                                <span className="text-xs xl:text-base font-manrope font-normal text-[#FFB95F]/90 px-3 py-1.5 bg-[#FFB95F]/10 border border-[#FFB95F]/30 rounded-full">
                                    High Council
                                </span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-8 flex flex-col rounded-2xl self-start mx-auto w-full max-w-2xl lg:max-w-none">
                            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#081727] rounded-xl mt-6 lg:mt-8">
                                <div className="p-4 sm:p-5">
                                    <p className="text-secondary font-manrope text-xs sm:text-sm mb-1 sm:mb-2">First Name</p>
                                    <p className="text-primary font-manrope font-semibold text-sm sm:text-base">
                                        {wizard.firstName ?? "Unknown"}
                                    </p>
                                </div>
                                <div className="p-4 sm:p-5 border-t sm:border-t-0 border-[#4944541A]">
                                    <p className="text-secondary font-manrope text-xs sm:text-sm mb-1 sm:mb-2">Last Name</p>
                                    <p className="text-primary font-manrope font-semibold text-sm sm:text-base">{wizard.lastName ?? "Unknown"}</p>
                                </div>
                                <div className="p-4 sm:p-5 border-t border-[#4944541A]">
                                    <p className="text-secondary font-manrope text-xs sm:text-sm mb-1 sm:mb-2">Registry Status</p>
                                    <p className="flex items-center gap-1.5 font-manrope font-semibold text-yellow text-sm sm:text-base">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#EE9800]" />
                                        Active
                                    </p>
                                </div>
                                <div className="p-4 sm:p-5 border-t border-[#4944541A]">
                                    <p className="text-secondary font-manrope text-xs sm:text-sm mb-1 sm:mb-2">Primary Specialty</p>
                                    <p className="text-primary font-manrope font-semibold text-sm sm:text-base leading-snug">
                                        Domestic Alchemy & Cleaning Charms
                                    </p>
                                </div>
                            </div>

                            <div className="h-px" />

                            <div className="pt-6">
                                <h4 className="flex items-center gap-2 text-secondary font-manrope font-normal text-base sm:text-lg mb-4 pb-4 sm:pb-5 border-b border-[#49445433]">
                                    <Image src={flaskIcon} alt="flaskIcon" />
                                    Associated Elixirs
                                </h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between rounded-xl group transition-colors">
                                        <div className="flex flex-col gap-3 w-full">
                                            {wizard.elixirs.length > 0 ? (
                                                wizard.elixirs.map((elixir) => (
                                                    <div key={elixir.id} className="group flex items-center justify-between p-3 sm:p-4 bg-[#1C2B3C66] border border-[#0b1a29]/60 rounded-xl transition-all cursor-pointer hover:border-[#494454]/40">
                                                        <div className="flex items-center gap-3 min-w-0">
                                                            <div className="w-9 h-9 rounded-lg bg-[#1C2B3C66] border border-[#494454]/30 flex items-center justify-center shrink-0">
                                                                <Image src={injectionIcon} alt="injectionIcon" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-primary font-manrope font-normal text-sm sm:text-base truncate">{elixir.name}</p>
                                                            </div>
                                                        </div>
                                                        <FaChevronRight size={12} className="text-secondary group-hover:text-primary transition-colors shrink-0 ml-2" />
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-[#CBC3D780]/50 text-xs font-medium font-manrope p-2">No elixirs registered</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-end items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 border-t border-[#494454]/30 bg-[#0D1C2D]">
                    <button
                        onClick={onClose}
                        className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-manrope text-secondary hover:text-primary transition-colors rounded-xl hover:bg-white/5 border border-transparent hover:border-[#494454]/30 cursor-pointer"
                    >
                        Close
                    </button>
                    <button className="py-2 sm:py-2.5 px-6 sm:px-8 bg-therty hover:opacity-90 active:scale-[0.98] rounded-xl border border-white/20 shadow-[0_4px_6px_-4px_rgba(208,188,255,0.20),0_10px_15px_-3px_rgba(208,188,255,0.20)] cursor-pointer">
                        <span className="font-manrope font-bold text-xs sm:text-sm text-[#3C0091] leading-5 tracking-[0.28px] text-center flex items-center gap-1.5">
                            <Image src={pencilIcon} alt="edit icon" className="size-3" />
                            Edit Record
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal