import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <header className="relative grid place-items-center min-h-[80vh] p-4 w-full text-white">
      <div className="flex flex-col gap-4 max-w-2xl text-center items-center">
        <h1 className="text-8xl font-bold font-serif">
          Zegarki składane ręcznie test
        </h1>
        <p className="text-lg">
          Każdy zegarek to opowieść. Każda sekunda liczy się w mojej pracowni,
          gdzie tradycja spotyka się z obsesją na punkcie szczegółów. Nie robię
          zegarków dla wszystkich. Robię je dla tych, którzy rozumieją różnicę.
        </p>
        <div className="flex items-center gap-2"></div>

        <div className="flex items-center my-12 gap-8">
          <Link
            href="#"
            className="py-2 px-4 border-2 border-solid outline-black"
          >
            Zegarki
          </Link>
          <Link href="#" className="flex items-center">
            Napisz
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
      {/* <Image
        width={1920}
        height={1080}
        src="/img/hero.png"
        alt="Customowy zegarek"
        className="absolute w-full h-full top-0 left-0 object-cover -z-10 brightness-50"
      /> */}
      <video
        src="/video/slow-motion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full top-0 left-0 object-cover -z-10 brightness-50"
      />
    </header>
  );
};

export default Hero;
