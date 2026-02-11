import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Rules = () => {
  return (
    <section className="p-4 py-12 flex flex-col items-center justify-center gap-8 overflow-hidden bg-white">
      <p>Rzemiosło</p>
      <h2 className="text-5xl font-serif font-bold max-w-xl">
        Trzy filary mojej pracy
      </h2>
      <p className="text-lg max-w-2xl">
        Każdy zegarek powstaje w ciszy warsztatu, gdzie liczą się tylko precyzja
        i czas.
      </p>
      <div className="flex justify-around flex-wrap w-full">
        {/* card 1 */}
        <div className="flex flex-col max-w-120 gap-4 items-center text-center">
          <Image
            width={400}
            height={300}
            src="/img/hero.png"
            alt="Zegarki robione recznie"
            className="w-full"
          />
          <p className="text-2xl font-bold">Precyzja bez kompromisów</p>
          <p>
            Każdy mechanizm jest sprawdzany wielokrotnie, zanim zegarek opuści
            pracownię.
          </p>
        </div>
        {/* card 2 */}
        <div className="flex flex-col max-w-120 gap-4 items-center text-center">
          <Image
            width={400}
            height={300}
            src="/img/hero.png"
            alt="Zegarki robione recznie"
            className="w-full"
          />
          <p className="text-2xl font-bold">Personalizacja od początku</p>
          <p>
            Współpracuję z tobą nad każdym szczegółem, od wyboru materiału po
            ostatnią regulację.
          </p>
        </div>
        {/* card 3 */}
        <div className="flex flex-col max-w-120 gap-4 items-center text-center">
          <Image
            width={400}
            height={300}
            src="/img/hero.png"
            alt="Zegarki robione recznie"
            className="w-full"
          />
          <p className="text-2xl font-bold">Limitowana produkcja zawsze</p>
          <p>
            Nie liczę się w sztukach rocznie. Liczę się w latach, które każdy
            zegarek będzie pracować.
          </p>
        </div>
      </div>

      <div className="flex items-center my-12 gap-8">
        <Link
          href="#"
          className="py-2 px-4 border-2 border-solid outline-black"
        >
          Poznaj proces
        </Link>
        <Link href="#" className="flex items-center">
          Zegarki
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default Rules;
