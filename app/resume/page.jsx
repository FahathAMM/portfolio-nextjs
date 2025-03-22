"use client"

import { icons } from 'lucide-react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNode, } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { animate, motion } from "framer-motion";


const about = {
  title: "About me",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt rerum vel. Deserunt, nemo voluptatum corporis tenetur maxime sed qui voluptates esse. Aperiam quae facilis sint debitis nemo blanditiis aspernatur!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Fahath Mohamed",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+971) 502 848 071",
    },
    {
      fieldName: "Expeirence",
      fieldValue: "5+ Year",
    },
    {
      fieldName: "Skype",
      fieldValue: "fahath66",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "fahathammex90@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Tamil",
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat esse libero natus reprehenderit consequuntur consectetur magni unde ad quia, placeat tempora qui, velit molestiae ratione enim, neque distinctio optio!',
  items: [
    {
      company: "ideaGeek",
      position: "Software developer",
      duration: "2020 - 2021"
    },
    {
      company: "Elegant Media",
      position: "Associate Software Engineer",
      duration: "2021 - 2022"
    },
    {
      company: "Akil security & alarm system",
      position: "Fullstacak developer",
      duration: "2022 - 2023"
    },
    {
      company: "Akil security & alarm system",
      position: "Fullstacak developer",
      duration: "2023 - Prensent"
    },
    {
      company: "Akil security & alarm system",
      position: "Fullstacak developer",
      duration: "2023 - Prensent"
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My experience',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat esse libero natus reprehenderit consequuntur consectetur magni unde ad quia, placeat tempora qui, velit molestiae ratione enim, neque distinctio optio!',
  items: [
    {
      institution: "London Business Academy",
      Qualification: "Diploma In Information Technology",
      duration: "Jan 2020 - Dec 2020"
    },
    {
      institution: "SRILANKA INSTITUTE OF ADVANCE TECHNOLOGICAL EDUCATION",
      Qualification: "Higher National Diploma",
      duration: "Feb 2018 - Feb 2020"
    },
    {
      institution: "LINCOLN UNIVERSITY COLLEGE MALAYSIA",
      Qualification: "Bachelor of Information Technology (Hons)",
      duration: "Dec 2022 - Dec 2023"
    },
  ]
}

const skills = {
  title: "My skils",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto est error dolorum rerum facere quidem, fuga, eius corrupti expedita enim doloribus voluptate qui illum necessitatibus soluta quo eum officia!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}

      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto px-3'>
        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold '>
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 px-3 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                        >
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
