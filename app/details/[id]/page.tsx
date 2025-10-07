"use client"
import React, { useEffect, useState } from 'react'
import { projects } from '@/content/site'
import { useParams } from 'next/navigation'
type Prop={
  id:string
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  image?:string;
}

function page() {
  const [project,setproject]=useState<Prop | null>()
  const params=useParams()
  const id=params.id;
  useEffect(()=>{ 
    console.log(params)
   const data=projects.find((project)=>project.id.toString() === id)|| null
     setproject(data)
     console.log(data)
  },[id])
  return (
    <div>
       {project && (
          <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="rounded-xl shadow-lg max-w-full h-auto"
                src={project.image}
                alt={project.title}
              />
            </div>
    
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-gray-400 text-sm">{project.description}</p>
    
              {/* GitHub Button */}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
       )}
    </div>
  )
}

export default page
