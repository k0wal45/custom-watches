"use client";
import Image from "next/image";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const IMG_SIZE = 480;
const GAP = 40;

const Workshop = () => {
  const [imageMove, setImageMove] = useState(0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center p-4 py-8">
      <div className="flex flex-col gap-4 p-8 lg:pl-12 max-w-xl">
        <h3 className="text-5xl font-semibold font-serif">Pracownia</h3>
        <p>
          Detale, które opowiadają historię każdego projektu i rzemieślniczego
          zaangażowania.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full overflow-hidden">
        <div className="flex" style={{ gap: GAP + "px" }}>
          {images.map((item: string, index: number) => {
            const distance = Math.abs(index - imageMove);
            const scale = Math.pow(0.95, distance);

            return (
              <Image
                key={index}
                width={IMG_SIZE}
                height={IMG_SIZE}
                alt=""
                src={`/img/${item}`}
                className="aspect-square object-cover shadow-xl"
                style={{
                  width: IMG_SIZE + "px",
                  height: IMG_SIZE + "px",
                  transform: `translate(${(IMG_SIZE + 10) * Math.min(index, imageMove) * -1}px) scale(${scale})`,
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            );
          })}
        </div>
        <div className="flex gap-2 items-center text-xl p-6">
          <HiArrowLeft
            className="size-10 border-solid border p-2 border-black rounded-full hover:text-primary hover:border-primary duration-100"
            style={{ opacity: imageMove > 0 ? "100%" : "30%" }}
            onClick={() => {
              if (imageMove > 0) setImageMove(imageMove - 1);
            }}
          />
          <HiArrowRight
            className="size-10 border-solid border p-2 border-black rounded-full hover:text-primary hover:border-primary duration-100"
            style={{ opacity: imageMove < images.length - 1 ? "100%" : "30%" }}
            onClick={() => {
              if (imageMove < images.length - 1) setImageMove(imageMove + 1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Workshop;

const images = [
  "91r1RhubkaL._AC_UY1000_.jpg",
  "DIY+watchmaking+kit.webp",
  "DSC09786-Edit.webp",
  "NovemberRotate-201.webp",
  "P1395178_a42ed1fe-06ef-4b63-a351-a123cbe31a74.webp",
  "phMeschinaIMG_1160.webp",
  "stalwart-specialty-hand-tools-75-wrtk16-1f_600.avif",
  "watchmaking_kit1_1_of_1_1200x1200.webp",
];
