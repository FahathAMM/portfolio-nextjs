"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1, duration: 0.4, ease: "easeIn"
                    },
                }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1.4, duration: 0.4, ease: "easeInOut"
                        },
                    }}
                    className="w-[250px] h-[298px] xl:w-[380px]
                 xl:h-[450px]">
                    <Image
                        src="/assets/a.png"
                        // src="/assets/photo1.png"
                        // width={298}
                        // height={298}
                        priority
                        fill
                        quality={100}
                        alt="Photo"
                        className='object-contasin rounded-xl'
                    />
                </motion.div>

                {/* <motion.svg
                    className="w-[290px] xl:w-[450px] h-[100px] 
                    xl:h-[50px]"

                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="153"
                        r="550"
                        stroke="#00ff99"
                        strokeWidth="10"
                        strokeLinecap="square"
                        strokeLinejoin="square"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360]
                        }}
                    >
                    </motion.circle>
                </motion.svg> */}

            </motion.div>
        </div>
    )
}

export default Photo