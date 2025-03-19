"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Building modern, scalable, and high-performance web applications using Laravel, Vue.js, and Next.js.',
    href: ""
  },
  {
    num: '02',
    title: 'AI-Powered Solutions',
    desc: 'Developing AI-driven applications, including voice recognition and customer support automation using Python.',
    href: ""
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    desc: 'Creating end-to-end web solutions, handling both frontend and backend development seamlessly.',
    href: ""
  },
  {
    num: '04',
    title: 'API Development & Integration',
    desc: 'Designing RESTful APIs and integrating third-party services for efficient and secure data exchange.',
    href: ""
  },
  {
    num: '05',
    title: 'UI/UX Design with Tailwind CSS',
    desc: 'Crafting visually appealing and user-friendly interfaces using Tailwind CSS in Next.js applications.',
    href: ""
  },
  {
    num: '06',
    title: 'Database Design & Optimization',
    desc: 'Structuring efficient database schemas and optimizing queries for better performance.',
    href: ""
  },
];

<div class="row">
  <div clasclasssName="col-3 col-md-3 col-sm-6 col-xl-2"></div>
  <div clasclasssName="col-3 col-md-3 col-sm-6 col-xl-2"></div>
</div>

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mx-4 xl:mx-5">

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className="text-5xl font-extrabold">
                    {item.num}
                  </div>
                  <Link href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accents transition-all duration-500 flex
                  justify-center items-center group-hover:-rotate-45 "
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"> {item.title} </h2>

                {/* description */}
                <p>{item.desc}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>

              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
