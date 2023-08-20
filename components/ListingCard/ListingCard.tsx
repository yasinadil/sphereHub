"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import room1 from "../../public/assets/images/listings/1.jpg";
import room2 from "../../public/assets/images/listings/2.jpg";
import room3 from "../../public/assets/images/listings/3.jpg";
import { RxDotFilled } from "react-icons/rx";
import { Badge } from "@/components/ui/badge";

const rooms = [room1, room2, room3];

export default function ListingCard(props: any) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? rooms.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === rooms.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      {isClient && (
        <Card>
          <CardHeader>
            <div className="m-auto relative">
              <div className="w-full h-full md:w-[274px] md:h-[182px] rounded-2xl bg-center bg-cover aspect-video">
                <Image
                  className="w-full h-full rounded-md object-cover duration-700"
                  src={rooms[currentIndex]}
                  alt="ImageDescription"
                />
              </div>
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <svg
                  onClick={prevSlide}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                {" "}
                <svg
                  onClick={nextSlide}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>

            <CardTitle className="">
              <div className="flex justify-between mt-2 pl-2">
                <h1 className="">{props.title}</h1>
                <div className="flex gap-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                      fill="#1339b1"
                    ></path>
                  </svg>
                  4.51
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              {props.ameneties.slice(0, 3).map((amenity: any, index: any) => {
                return (
                  <Badge className="w-fit mx-1" key={index} variant="outline">
                    {amenity}
                  </Badge>
                );
              })}
              {props.ameneties && props.ameneties.length > 3 && (
                <Badge className="w-fit" variant="outline">
                  +{props.ameneties.length - 3} more
                </Badge>
              )}
              <p className="font-black text-sm mt-4 pl-2">
                ${props.price} / mo
              </p>
            </CardDescription>
          </CardHeader>
          {/* <CardContent>

 </CardContent> */}
          {/* <CardFooter>
   <p className="font-semibold text-sm">${props.price} / mo</p>
 </CardFooter> */}
        </Card>
      )}
    </div>
  );
}
