import Image from "next/image";
import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

const Workshop = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 place-items-center p-4 py-8">
      <div className="flex flex-col gap-4 p-8 lg:pl-12 max-w-xl">
        <h3 className="text-5xl font-semibold font-serif">Pracownia</h3>
        <p>
          Detale, które opowiadają historię każdego projektu i rzemieślniczego
          zaangażowania.
        </p>
      </div>
      <div className="h-120 w-full">
        <Image
          width={700}
          height={700}
          alt=""
          src="/img/hero.png"
          className="aspect-square size-120 object-cover"
        />
        <div className="flex gap-2 items-center text-4xl p-6">
          <MdOutlineArrowCircleLeft className="hover:text-primary duration-100" />
          <MdOutlineArrowCircleRight className="hover:text-primary duration-100" />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
