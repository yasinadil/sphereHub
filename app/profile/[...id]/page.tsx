"use client";
import * as z from "zod";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  gender: z.string(),
  personality: z.string(),
  socialLife: z.string(),
  vegan: z.boolean().default(false).optional(),
  vegetarian: z.boolean().default(false).optional(),
  carnivore: z.boolean().default(false).optional(),
  halal: z.boolean().default(false).optional(),
  studyHabit: z.string(),
  education: z.string(),
});

export default function Profile() {
  const [vegan, isVegan] = useState(false);
  const [vegetarian, isVegetarian] = useState(false);
  const [carnivore, isCarnivore] = useState(false);
  const [halal, isHalal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      gender: "",
      personality: "",
      socialLife: "",
      vegan: false,
      vegetarian: false,
      carnivore: false,
      halal: false,
      studyHabit: "",
      education: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="min-h-screen pt-32 2xl:pt-32 flex justify-center text-white pb-20">
      <div className=" w-[90vw] max-w-[400px]">
        <h1 className="text-2xl font-semibold mb-10">Update your profile</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="" placeholder="Hamza Umar" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education Level</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={"undergrad"}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="undergrad">Undergraduate</SelectItem>
                        <SelectItem value="postgrad">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select your education level.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={"male"}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Select your gender.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="personality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personality</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue="introvert"
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="introvert" id="introvert" />
                        <Label htmlFor="introvert">Introverted</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ambivert" id="ambivert" />
                        <Label htmlFor="ambivert">Ambivert</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extrovert" id="extrovert" />
                        <Label htmlFor="extrovert">Extroverted</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    Select your personality type.{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="socialLife"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Life</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue="stay-in"
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="stay-in" id="stay-in" />
                        <Label htmlFor="stay-in">Prefer to stay in</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="once-a-week" id="once-a-week" />
                        <Label htmlFor="once-a-week">Go out once a week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="more-than-once"
                          id="more-than-once"
                        />
                        <Label htmlFor="more-than-once">
                          Go out more than once a week
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    What is your social life like?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h2 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Select your preffered foods.
            </h2>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  onChange={() => isVegan(!vegan)}
                  checked={vegan}
                  className="checkbox"
                />
                <label
                  htmlFor="vegan"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Vegan
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  onChange={() => isVegetarian(!vegetarian)}
                  checked={vegetarian}
                  className="checkbox"
                />
                <label
                  htmlFor="vegetarian"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Vegetarian
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  onChange={() => isCarnivore(!carnivore)}
                  checked={carnivore}
                  className="checkbox"
                />
                <label
                  htmlFor="carnivore"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Carnivore
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  onChange={() => isHalal(!halal)}
                  checked={halal}
                  className="checkbox"
                />
                <label
                  htmlFor="halal"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Halal
                </label>
              </div>
            </div>

            <FormField
              control={form.control}
              name="studyHabit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Study Habits</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue="room"
                      onValueChange={field.onChange}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="room" id="room" />
                        <Label htmlFor="room">Prefer to study in room</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="library" id="library" />
                        <Label htmlFor="library">
                          Prefer to study in a library
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No preference</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>What is your study habit?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
