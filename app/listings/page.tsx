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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import ListingCard from "@/components/ListingCard/ListingCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface UniversityData {
  institution: string;
}

export default function Listings() {
  // Sorting function
  const [open, setOpen] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [beds, setBeds] = React.useState(1);
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
      className="md:grid md:grid-rows-3 md:grid-flow-col md:grid-cols-4 gap-4 text-black dark:text-white min-h-screen md:h-screen px-5"
      suppressHydrationWarning={true}
    >
      <div className="row-span-3 mt-32 flex-col gap-8 hidden md:flex">
        {/* <Command className="rounded-lg shadow-md h-fit">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className="">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Universities">
              {sortedAndFilteredData.map((university, index) => {
                return (
                  // <li key={index}>{university.institution}</li>
                  <CommandItem key={index} className="list-none cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={university.institution}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {university.institution}
                      </label>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command> */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between z-10"
            >
              {value ? value : "Select University..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className=" h-80">
                  {sortedAndFilteredData.map((uni, index) => (
                    <CommandItem
                      key={index}
                      onSelect={(currentValue) => {
                        setValue(currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === uni.institution
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {uni.institution}
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="px-2">
          <h1 className="mb-2">Beds</h1>
          <div className="flex gap-x-2">
            <Slider
              className="mb-2 cursor-pointer"
              defaultValue={[1]}
              min={1}
              max={5}
              step={1}
              onValueChange={(value: number[]) => setBeds(value[0])}
            />
          </div>
          <span className="float-right">{beds == 5 ? "5+" : beds}</span>
        </div>
        <div className="px-2">
          <h1 className="mb-2">Ameneties</h1>
          <div className="flex flex-col gap-2">
            {ameneties.map((amenity: any, index: number) => {
              return (
                <div key={index} className="items-top flex space-x-2 z-10">
                  <Checkbox id={amenity.amenity} />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={amenity.amenity}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenity.amenity}
                    </label>
                    {/* <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>

      <div className="block md:hidden">
        <div className="pt-28 flex flex-col gap-y-4">
          <Popover open={openMobile} onOpenChange={setOpenMobile}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openMobile}
                className="w-full justify-between"
              >
                {value ? value : "Select University..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  <ScrollArea className="h-80">
                    {sortedAndFilteredData.map((uni, index) => (
                      <CommandItem
                        key={index}
                        onSelect={(currentValue) => {
                          setValue(currentValue);
                          setOpenMobile(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === uni.institution
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {uni.institution}
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <div className="px-2">
            <h1 className="mb-2">
              Beds{" "}
              <span className="float-right">{beds == 5 ? "5+" : beds}</span>
            </h1>

            <Slider
              className="mb-2 cursor-pointer"
              defaultValue={[1]}
              min={1}
              max={5}
              step={1}
              onValueChange={(value: number[]) => setBeds(value[0])}
            />
          </div>
          <div className="px-2">
            <h1 className="mb-2">Ameneties</h1>
            <div className="flex flex-col gap-2">
              {ameneties.map((amenity: any, index: number) => {
                return (
                  <div key={index} className="items-top flex space-x-2">
                    <Checkbox id={amenity.amenity} />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor={amenity.amenity}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {amenity.amenity}
                      </label>
                      {/* <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>{" "}
        </div>
      </div>

      <ScrollArea className="md:row-span-3 md:col-span-3 pt-10 md:pt-32 px-2">
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
