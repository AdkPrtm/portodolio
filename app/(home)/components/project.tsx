import Title from './title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { projects } from '@/constants/constants'

function Project() {

    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text="Project 🎨" className='flex flex-col items-center justify-center rotate-6' />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className='size-5' key={index} />
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Project