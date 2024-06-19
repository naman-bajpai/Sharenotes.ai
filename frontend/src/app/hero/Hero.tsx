import { FlipWords } from '@/components/ui/flip-words'
import { useRouter } from 'next/router'
import React from 'react'

const Hero = () => {

    return (
        <div className="h-[40rem] flex flex-col justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
                Share notes
                <FlipWords words={['anywhere', 'wherever']} /> <br />
            </div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] mt-8 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white-950 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                    Get Started
                </span>
            </button>
        </div>
    )
}

export default Hero
