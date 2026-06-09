"use client"

import { BiFilterAlt, BiShow } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Wizard } from "@/types/types";
import { tableHeaders } from "@/data/data";
import { fetchWizards } from "@/bloc/getWizards";

const ROWS_PER_PAGE = 10;

const WizardsSpecialtyChart = () => {
    const [selectedWizard, setSelectedWizard] = useState<Wizard | null>(null);
    const [searchInput, setSearchInput] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["wizards"],
        queryFn: fetchWizards,
        staleTime: 1000 * 60 * 5, // cache for 5 minutes
    });

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setDebouncedSearch(searchInput);
            setCurrentPage(1);
        }, 400);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [searchInput]);

    // Filter client-side by firstName or lastName
    const filtered = debouncedSearch.trim() === ""
        ? data ?? []
        : (data ?? []).filter((wizard) => {
            const q = debouncedSearch.toLowerCase();
            return (
                wizard.firstName?.toLowerCase().includes(q) ||
                wizard.lastName?.toLowerCase().includes(q)
            );
        });

    const totalRecords = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalRecords / ROWS_PER_PAGE));
    const paginatedData = filtered.slice(
        (currentPage - 1) * ROWS_PER_PAGE,
        currentPage * ROWS_PER_PAGE
    );
    const startRecord = totalRecords === 0 ? 0 : (currentPage - 1) * ROWS_PER_PAGE + 1;
    const endRecord = Math.min(currentPage * ROWS_PER_PAGE, totalRecords);

    const displayName = (val: string | null) => val ?? "—";

    const getPageNumbers = () => {
        const pages: number[] = [];
        const start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
        const end = Math.min(start + 2, totalPages);
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <div className="bg-[#061424] border border-[#494454]/30 rounded-2xl overflow-hidden lg:mt-6">
            <div className="p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-[#0b1a29]">
                <h3 className="text-xl lg:text-2xl text-primary font-manrope font-semibold leading-8">
                    Master Wizard Registry
                </h3>
                <div className="flex items-center w-full lg:w-1/2 xl:max-w-md bg-[#111F31]/40 border border-secondary/10 rounded-xl h-11 px-4 font-manrope">
                    <div className="relative flex-1 flex items-center h-full">
                        <IoIosSearch size={18} className="text-secondary absolute left-0" />
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Search wizards..."
                            className="w-full h-full text-sm pl-4 lg:pl-7 pr-4 text-primary placeholder-secondary/50 focus:outline-none bg-transparent"
                        />
                    </div>
                    <div className="h-5 border-l border-secondary/10 mx-2" />
                    <button className="flex items-center gap-2 h-full px-2 text-sm text-secondary">
                        <BiFilterAlt size={16} className="opacity-80" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div className="w-full overflow-x-auto scrollbar-thin">
                <table className="w-full text-left border-collapse text-xs min-w-200">
                    <thead>
                        <tr className="border-b border-[#0b1a29] text-secondary bg-[#111F31]/40 uppercase tracking-wider text-[10px] text-left">
                            {tableHeaders.map((header) => (
                                <th key={header.label} className={header.className}>
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0b1a29]/60 text-slate-300">
                        {isLoading ? (
                            Array.from({ length: ROWS_PER_PAGE }).map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="py-4 px-1"><div className="h-3 bg-[#111F31] rounded w-24" /></td>
                                    <td className="py-4 px-1"><div className="h-3 bg-[#111F31] rounded w-20" /></td>
                                    <td className="py-4 px-1"><div className="h-3 bg-[#111F31] rounded w-24" /></td>
                                    <td className="py-4 px-1"><div className="h-3 bg-[#111F31] rounded w-40" /></td>
                                    <td className="py-4 px-1"><div className="h-3 bg-[#111F31] rounded w-8 ml-auto" /></td>
                                </tr>
                            ))
                        ) : isError ? (
                            <tr>
                                <td colSpan={5} className="py-16 text-center text-secondary font-manrope text-sm">
                                    Failed to load wizards. Please try again.
                                </td>
                            </tr>
                        ) : paginatedData.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="py-16 text-center text-secondary font-manrope text-sm">
                                    No wizards found{debouncedSearch ? ` for "${debouncedSearch}"` : ""}.
                                </td>
                            </tr>
                        ) : (
                            paginatedData.map((wizard) => (
                                <tr key={wizard.id} className="hover:bg-[#091829]/50 transition-colors">
                                    <td className="font-manrope font-normal text-therty py-4 px-6 text-xs">
                                        {wizard.id.slice(0, 18)}...
                                    </td>
                                    <td className="py-4 px-6 text-secondary text-base">
                                        {displayName(wizard.firstName)}
                                    </td>
                                    <td className="py-4 px-6 text-primary font-manrope font-semibold text-base">
                                        {displayName(wizard.lastName)}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex flex-wrap gap-1.5">
                                            {wizard.elixirs.length > 0 ? (
                                                wizard.elixirs.map((elixir) => (
                                                    <span key={elixir.id} className={`rounded-full ${wizard.color}`}>
                                                        {elixir.name}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-[#CBC3D780]/50 text-xs font-medium font-manrope">
                                                    None registered
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 flex justify-center lg:justify-end">
                                        <button
                                            onClick={() => setSelectedWizard(wizard)}
                                            className="focus:outline-none cursor-pointer"
                                        >
                                            <BiShow size={22} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 bg-[#05111f] border-t border-[#0b1a29] flex justify-between items-center text-slate-500 text-[11px]">
                <span className="text-secondary font-manrope text-xs pl-2">
                    {totalRecords === 0
                        ? "No records found"
                        : `Showing ${startRecord}–${endRecord} of ${totalRecords} Records`}
                </span>
                <div className="flex items-center gap-1 text-xs">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-1 px-2 text-slate-600 disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
                    >
                        <FaChevronLeft />
                    </button>
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-6 h-6 rounded ${currentPage === page
                                ? "bg-therty text-[#3C0091] font-normal"
                                : "hover:bg-[#0b1a29] text-secondary"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1 px-2 text-secondary hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <Modal wizard={selectedWizard} onClose={() => setSelectedWizard(null)} />
        </div>
    );
};

export default WizardsSpecialtyChart;