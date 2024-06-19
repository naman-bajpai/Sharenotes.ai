import { FlipWords } from '@/components/ui/flip-words'
import React from 'react'


const Hero = () => {
    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Share notes
          <FlipWords words={['anywhere','wherever']} /> <br />
        </div>
      </div>
    )
}

export default Hero