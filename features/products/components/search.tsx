"use client"
import { Search as SearchScope } from 'lucide-react';
import { Input } from "@/components/ui/input";

const Search = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-white text-5xl font-normal leading-12 text-center">Industrial Solutions for Every <br /> Challenge</h1>
            <div className="max-w-[672px] h-auto relative">
                <Input aria-label="Search for products, solutions, or applications" className="w-full h-[56px] bg-white placeholder:text-base pl-6" placeholder="Search for products, solutions, or applications" />
                <SearchScope className='absolute top-1/2 -translate-y-1/2 right-4 text-accent z-2 size-6' />
            </div>
        </div>
    )
};

export default Search;