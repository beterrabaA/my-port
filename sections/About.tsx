import Image from "next/image";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

import {
  NextIcon,
  JavacriptIcon,
  CSS3Icon,
  GithubIcon,
  HTMLIcon,
  ReactIcon,
} from "@/assets/icons";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import HobbyBox from "@/components/HobbyBox";

const toolBoxItems = [
  { title: "Javascript", iconType: JavacriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSS3Icon },
  { title: "React", iconType: ReactIcon },
  { title: "Next", iconType: NextIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🏃🏼‍➡️", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎸", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋🏼‍♂️", left: "5%", top: "60%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image alt="book cover" src={bookImage} />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
                title="My Toolbox"
              />
              <ToolBoxItems
                items={toolBoxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                className="mt-6"
                items={toolBoxItems}
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <HobbyBox hobbies={hobbies} />
            </Card>
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                alt="map"
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  alt="smiling memoji"
                  className="size-20"
                  src={smileMemoji}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
