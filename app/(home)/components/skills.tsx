"use client"

import Title from '@/app/(home)/components/title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { skillsData } from '@/constants/constants'

function Skills() {
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text="Skills 🔪" className='flex flex-col items-center justify-center -rotate-6' />
            <HoverEffect items={skillsData} />
        </div>
    )
}

export default Skills