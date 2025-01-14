import Image from "next/image";

import { HeroOrbit } from "@/components/HeroOrbit";

import { StarIcon, ArrowDown, SparkleIcon } from "@/assets/icons";

import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <section className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />
        <HeroOrbit orbitDuration="30s" rotation={-14} size={430} shouldOrbit>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="32s" rotation={79} size={440} shouldOrbit>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="34s" rotation={-41} size={520} shouldOrbit>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="36s" rotation={178} size={530} shouldOrbit>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbitDuration="38s"
          rotation={20}
          size={550}
          shouldOrbit
          shouldSpin
          spinDuration="15s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          orbitDuration="40s"
          rotation={98}
          size={590}
          shouldOrbit
          shouldSpin
          spinDuration="15s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="42s" rotation={-5} size={650} shouldOrbit>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="44s" rotation={144} size={710} shouldOrbit>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbitDuration="46s" rotation={85} size={720} shouldOrbit>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbitDuration="48s"
          rotation={-72}
          size={800}
          shouldOrbit
          shouldSpin
          spinDuration="15s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="person using laptop"
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="animate-ping-large absolute inset-0 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <button
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6"
            type="button"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900"
            type="button"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
