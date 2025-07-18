"use client";

import CountUp from "react-countup";

const stats = [
    { num: 12, text: "Years of experience" },
    { num: 15, text: "Project completed" },
    { num: 12, text: "Technologies mastered" },
    { num: 260, text: "Code commits" },
]

const Stats = () => {
    return (
        <section className="mt-4 mb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:dmax-w-none justify-center">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 max-w-[80vw] items-center justify-center xl:justify-start">
                                <CountUp end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-7xl font-extrabold"
                                >
                                </CountUp>
                                <p className={`${item.text.length > 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats;