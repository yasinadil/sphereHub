"use client";
import React from "react";
import universities from "../../data/universities.json";
import listings from "../../data/listings.json";
import ameneties from "../../data/ameneties.json";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import ListingCard from "@/components/ListingCard/ListingCard";

interface UniversityData {
  institution: string;
}

export default function Listings() {
  // Sorting function
  const sortDataAlphabetically = (data: UniversityData[]): UniversityData[] => {
    return data.slice().sort((a, b) => {
      const institutionA = a.institution.toLowerCase();
      const institutionB = b.institution.toLowerCase();
      return institutionA.localeCompare(institutionB);
    });
  };

  // Sort and filter the data
  const sortedAndFilteredData = sortDataAlphabetically(universities);

  return (
    <div
      className="grid grid-rows-3 grid-flow-col grid-cols-4 gap-4 bg-white dark:bg-neutral-900 text-black dark:text-white h-screen px-5"
      suppressHydrationWarning={true}
    >
      <div className="row-span-3 mt-32 flex flex-col gap-8">
        <Command className="rounded-lg shadow-md h-fit">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Universities">
              {sortedAndFilteredData.map((university, index) => {
                return (
                  // <li key={index}>{university.institution}</li>
                  <CommandItem key={index} className="list-none">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={university.institution} />
                      <label
                        htmlFor={university.institution}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {university.institution}
                      </label>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="px-2">
          <h1 className="mb-2">Beds</h1>
          <input type="range" min={0} max="100" className="range" step="25" />
          <div className="w-full flex justify-between text-xs px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5+</span>
          </div>
        </div>
        <div className="px-2">
          <h1 className="mb-2">Ameneties</h1>
          <div className="flex flex-col gap-2">
            {ameneties.map((amenity: any, index: number) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm border-slate-500"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {amenity.amenity}
                  </label>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>

      <ScrollArea className="row-span-3 col-span-3 mt-32 px-2">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-2">
          {listings.map((house, index) => {
            return (
              <ListingCard
                key={index}
                title={house.title}
                price={house.price}
                ameneties={house.badges}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
