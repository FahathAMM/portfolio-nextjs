"use client"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-p xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 ">Hello I'm <br />
              <span className="text-accents">
                <Typewriter
                  words={['Fahath Mohamed']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 mt-4 mx-2 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase items-center gap-2">
                <span>
                  Download CV
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accents rounded-full flex justify-center items-center text-accents text-base hover:bg-accent hover:text-primary
                 hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-6">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  );
}
