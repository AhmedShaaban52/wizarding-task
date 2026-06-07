"use client"

import { wizardRegistry } from "@/data/data";
import { BiFilterAlt, BiShow } from "react-icons/bi";

import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal, { Wizard } from "./Modal";
import { useState } from "react";
const WizardsSpecialtyChart = () => {
    const [selectedWizard, setSelectedWizard] = useState<Wizard | null>(null)

    return (
        <div className="bg-[#061424] border border-[#494454]/30 rounded-2xl overflow-hidden lg:mt-6">
            <div className="p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-[#0b1a29]">
                <h3 className="text-xl lg:text-2xl text-primary font-manrope font-semibold leading-8">Master Wizard Registry</h3>
                <div className="flex items-center w-full lg:w-1/2 xl:max-w-md bg-[#111F31]/40  border border-secondary/10 rounded-xl h-11 px-4 font-manrope">
                    <div className="relative flex-1 flex items-center h-full">
                        <IoIosSearch size={18} className="text-secondary absolute left-0" />
                        <input
                            type="text"
                            placeholder="Search wizards..."
                            className="w-full h-full text-sm pl-4 lg:pl-7 pr-4 text-primary placeholder-secondary/50 focus:outline-none"
                        />
                    </div>

                    <div className="h-5 border-l border-secondary/10 mx-2" />

                    <button className="flex items-center gap-2 h-full px-2 text-sm text-secondary">
                        <BiFilterAlt size={16} className="opacity-80" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr className="border-b border-[#0b1a29] text-secondary bg-[#111F31]/40 uppercase tracking-wider text-[10px] text-left">
                            <th className="lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm text-center lg:text-left">ID</th>
                            <th className="lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm">First Name</th>
                            <th className="lg:pt-[25.5px] py-4 lg:pb-6.75 px-1 lg:px-6 lg:font-semibold text-xs lg:text-sm">Last Name</th>
                            <th className="lg:pt-[25.5px] py-4 lg:pb-6.75 lg:px-6 lg:font-semibold text-xs lg:text-sm">Associated Elixirs</th>
                            <th className="lg:pt-[25.5px] py-4 lg:pb-6.75 pr-8  lg:px-6 lg:font-semibold text-xs lg:text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0b1a29]/60 text-slate-300">
                        {wizardRegistry.map((wizard, i) => (
                            <tr key={i} className="hover:bg-[#091829]/50 transition-colors">
                                <td className="font-manrope font-normal text-therty py-4 px-6 text-xs">{wizard.id}</td>
                                <td className="py-7 lg:px-6 text-secondary text-base">{wizard.first}</td>
                                <td className="py-4 lg:py-7 px-3 lg:px-6 text-primary font-manrope font-semibold text-base">{wizard.last}</td>
                                <td className="py-4 px-6">
                                    <div className="flex flex-wrap gap-1.5">
                                        {wizard.elixirs.length > 0 ? (
                                            wizard.elixirs.map((elixir, eIdx) => (
                                                <span key={eIdx} className={`rounded-full ${wizard.color}`}>
                                                    {elixir}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-[#CBC3D780]/50 text-xs font-medium font-manrope">None registered</span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-4 px-6 flex justify-center lg:justify-end">
                                    <button onClick={() => setSelectedWizard(wizard)} className="focus:outline-none cursor-pointer">
                                        <BiShow size={22} />
                                    </button>
                                </td>
                                <Modal wizard={selectedWizard} onClose={() => setSelectedWizard(null)} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 bg-[#05111f] border-t border-[#0b1a29] flex justify-between items-center text-slate-500 text-[11px]">
                <span className="text-secondary font-manrope text-xs pl-2">Showing 1-4 of 1,248 Records</span>
                <div className="flex items-center gap-1 text-xs">
                    <button className="p-1 px-2 text-slate-600 pointer-events-none cursor-pointer"> <FaChevronLeft /></button>
                    <button className="w-6 h-6 rounded bg-therty text-[#3C0091] font-normal">1</button>
                    <button className="w-6 h-6 rounded hover:bg-[#0b1a29] text-secondary">2</button>
                    <button className="w-6 h-6 rounded hover:bg-[#0b1a29] text-secondary">3</button>
                    <button className="p-1 px-2 text-secondary hover:text-white cursor-pointer"><FaChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default WizardsSpecialtyChart
