"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("opcaity 100");
      setIndex((prev) => (prev + 1) % images.length);
      setOpacity(100);
      setTimeout(() => {
        console.log("opacity 0");
        setOpacity(0);
      }, 4700);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 p-4 transition-opacity duration-300 max-w-6xl gap-8 mx-auto"
      style={{ opacity: opacity + "%" }}
    >
      <div className="overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="Opinia o recznie składanym zegarku"
          src={`/img/${images[index]}`}
          className="size-120"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex gap-2">
          {Array.from({ length: reviews[index].stars }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-xl font-semibold">{reviews[index].content}</p>
        <p className="text-xl font-serif">{reviews[index].author}</p>
      </div>
    </section>
  );
};

export default Reviews;

const images = [
  "Gemini_Generated_Image_utq457utq455234537utq4.png",
  "Gemini_Generated_Image_utq457utq457utq4.png",
  "Gemini_Generated_Image_3wfisv3wfisv3wfi.png",
  "Gemini_Generated_Image_1e9jqb1e9jqb1e9j.png",
];

const reviews = [
  {
    author: "Marek Jankowski",
    content:
      "Zegarek prezentuje się na żywo jeszcze lepiej niż na zdjęciach. Mechanizm działa bez zarzutu, a pasek jest bardzo wygodny.",
    stars: 5,
  },
  {
    author: "Anna Nowak",
    content:
      "Bardzo elegancki design, pasuje zarówno do sukienki, jak i codziennego stroju. Jedyny minus to dość sztywne zapięcie na początku.",
    stars: 4,
  },
  {
    author: "Piotr Zieliński",
    content:
      "Solidne wykonanie. Wodoszczelność sprawdzona na basenie - egzamin zdany celująco. Warty każdej złotówki.",
    stars: 5,
  },
  {
    author: "Katarzyna Wiśniewska",
    content:
      "Zegarek ładny, ale tarcza jest nieco większa, niż się spodziewałam. Mimo to zostawiam, bo robi wrażenie.",
    stars: 4,
  },
];
