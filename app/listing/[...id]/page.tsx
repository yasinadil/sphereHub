import React from "react";
import Image from "next/image";
import house1 from "../../../public/assets/images/listing/house1.png";
import house2 from "../../../public/assets/images/listing/house2.jpeg";
import house3 from "../../../public/assets/images/listing/house3.jpeg";
import house4 from "../../../public/assets/images/listing/house4.jpeg";
import house5 from "../../../public/assets/images/listing/house5.jpeg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

export default function page() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[95vw] max-w-[1200px] pt-32">
        <div>
          <h1 className="text-2xl font-semibold text-white py-2">
            Cozy 1 Bedroom
          </h1>
          <div className="flex items-center text-white gap-1 pb-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                fill="white"
              ></path>
            </svg>
            4.51 <span>·</span> 123 reviews <span>·</span>{" "}
            <span className="underline">Columbia, Maryland</span>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="w-full h-full col-span-2 row-span-2 ">
            <Image
              className="rounded-2xl w-full h-full object-cover"
              src={house1}
              placeholder="blur"
              blurDataURL="/assets/images/listing/249.jpg"
              priority
              alt="house1"
            />
          </div>
          <div className="w-full h-full col-span-1 row-span-1">
            <Image
              className="rounded-2xl w-full h-full object-cover"
              src={house2}
              placeholder="blur"
              blurDataURL="/assets/images/listing/249.jpg"
              priority
              alt="house1"
            />
          </div>
          <div className="w-full h-full col-span-1 row-span-1">
            <Image
              className="rounded-2xl w-full h-full object-cover"
              src={house3}
              placeholder="blur"
              blurDataURL="/assets/images/listing/249.jpg"
              priority
              alt="house1"
            />
          </div>
          <div className="w-full h-full col-span-1 row-span-1">
            <Image
              className="rounded-2xl w-full h-full object-cover"
              src={house4}
              placeholder="blur"
              blurDataURL="/assets/images/listing/249.jpg"
              priority
              alt="house1"
            />
          </div>
          <div className="w-full h-full col-span-1 row-span-1">
            <Image
              className="rounded-2xl w-full h-full object-cover"
              src={house5}
              placeholder="blur"
              blurDataURL="/assets/images/listing/249.jpg"
              priority
              alt="house1"
            />
          </div>
        </div>
        <div className="text-white pt-10">
          <div className="mb-5">
            <h1 className="text-xl font-bold pb-2">About Us</h1>
            <p className="text-lg font-light">
              Stay in a vegan home, where we have artisanal factory, shop,
              restaurant, spa and lodging. The room is large, with a new soft
              single bed, comfortable sofa, table and chair. There&apos;s a
              shared minibar in the hallway. The neighborhood is one of the most
              lively in the city. The subway is very close. The company operates
              from 11am to 7pm, Monday to Saturday. In the same place, Eloy
              lives in another room. How about feeding yourself, doing a spa and
              climbing up to rest in your bed, taking a few steps?
            </p>
          </div>
          <Dialog>
            <DialogTrigger className="flex items-center gap-x-2">
              <span className="underline">Show more</span>{" "}
              <span className="text-xl no-underline">{">"}</span>
            </DialogTrigger>
            <DialogContent>
              <ScrollArea className="h-[80vh] mt-5">
                <article className="prose lg:prose-xl text-white">
                  <h3 className="text-white">About this place</h3>
                  <p className="text-base">
                    Stay in a vegan home, where we have artisanal factory, shop,
                    restaurant, spa and lodging. The room is large, with a new
                    soft single bed, comfortable sofa, table and chair.
                    There&apos;s a shared minibar in the hallway. The
                    neighborhood is one of the most lively in the city. The
                    subway is very close. The company operates from 11am to 7pm,
                    Monday to Saturday. In the same place, Eloy lives in another
                    room. How about feeding yourself, doing a spa and climbing
                    up to rest in your bed, taking a few steps?
                  </p>
                  <h3 className="text-white">The space</h3>
                  <p className="text-base">
                    The house has more than 150 meters, with several nice and
                    cozy corners. The first floor and backyard bring together
                    the shop, restaurant and energizing spa. The region is busy,
                    very functional and safe. The bedroom is on the second
                    floor, with two keys, from the bedroom door and the street
                    door. The entire room and bathrooms are cleaned daily, and
                    the room is delivered to the guest in hotel standard.
                  </p>
                  <h3 className="text-white">Guest access</h3>
                  <p className="text-base">
                    The entire store and spa areas are for free use, respecting
                    any services that are taking place. The guest has their
                    bedroom and bathroom shared with other guests on the second
                    floor. The automatic gate has a side door, for free access,
                    outside the company&apos;s office hours. Good stay.
                  </p>
                  <h3 className="text-white"> During your stay</h3>
                  <p className="text-base">
                    We will be completely concerned about better service and
                    support, throughout the stay. I have lived almost 30 years
                    as a resident of São Paulo, and I love to give suggestions
                    and collaborate.
                  </p>
                  <h3 className="text-white">Other things to note</h3>
                  <p className="text-base">
                    The region is very lively, with hundreds of bars and clubs,
                    restaurants and coffee shops, pharmacies and supermarkets,
                    gyms and shops, clinics and schools, all very close by, made
                    on foot. There&apos;s no slope, it&apos;s nice to walk. The
                    Yellow Line metro (Fradique Coutinho Station) is two blocks
                    away and connects with the entire city&apos;s transportation
                    system. It&apos;s very clean, safe and efficient. The two
                    cross streets, Teodoro Sampaio and Cardeal Arcoverde, one on
                    each side, there are several bus lines all day. Nearby there
                    is Avenida Faria Lima and Shopping Iguatemi, the friendly
                    Rua dos Pinheiros, the vibrant Vila Madalena, the charming
                    Pôr-do-Sol and Praça das Corujas, Parque Villa-Lobos and
                    Parque do Povo, on Saturdays at Benedito Calixto&apos;s
                    fair, the trendy Guaicuí Street, etc. The Jardins
                    neighborhood is next door and beyond Paulista Avenue,
                    Ibirapuera Park and several bike paths. It&apos;s hard to
                    find a place full of options, practical and so functional.
                  </p>
                </article>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
        <div className="divider before:bg-slate-600 after:bg-slate-600"></div>
        <div className="text-white pt-5">
          <div className="flex items-center text-white gap-1 pb-4 text-xl font-bold">
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                fill="white"
              ></path>
            </svg>
            4.51 <span>·</span> 123 reviews
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-y-1">
              <div className="grid grid-cols-2 items-center gap-x-5">
                <h3>Cleanliness</h3>
                <Progress value={90} />
              </div>
              <div className="grid grid-cols-2 items-center gap-x-5">
                <h3>Communication</h3>
                <Progress value={80} />
              </div>
              <div className="grid grid-cols-2 items-center gap-x-5">
                <h3>Location</h3>
                <Progress value={85} />
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="grid grid-cols-2 items-center gap-x-5">
                <h3>Environment</h3>
                <Progress value={100} />
              </div>
              <div className="grid grid-cols-2 items-center gap-x-5">
                <h3>Value</h3>
                <Progress value={75} />
              </div>
              {/* <div className="flex items-center justify-between gap-x-5">
                <h3>Cleanliness</h3>
                <Progress value={90} />
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16 pt-10">
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold">Steven Smith</h3>
                  <h3 className="font-light text-slate-400 text-sm">
                    August 2023
                  </h3>
                </div>
              </div>
              <p className="pt-5">
                Great place to stay. Eloy and staff are friendly and helpful.
                Great place for coffee before you head out or when you get back.
              </p>
            </div>
          </div>
          <Button className="text-white mt-16 text-lg p-6" variant={"default"}>
            Show all 123 reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
