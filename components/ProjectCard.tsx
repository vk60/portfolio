import Image from "next/image";
import { Button } from "./Button";
import { Github, Globe } from "lucide-react";
 

type Props = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  image?:string;
};

export function ProjectCard({ title, description, stack, href, repo,image}: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 p-6 bg-gradient-to-br from-white/80 to-white/40 dark:from-neutral-950/80 dark:to-neutral-900/40 shadow-soft">
      {image && (
        <div className={`relative w-full h-48 ${title === "Javascript Basic Projects" ? "object-contain aspect-video": ""}`}>
        
             <Image
             src={image}
             quality={100}
             fill={true}
             alt={title}
              
             className="object-cover rounded-md "
           
           />
         
        </div>
      )}
      {/* <div className="h-36 w-full rounded-xl bg-[radial-gradient(ellipse_at_top,#6C63FF_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,#6C63FF,transparent_60%)] mb-4" /> */}
      <h3 className="text-lg mt-2 font-semibold">{title}</h3>
      <p className="mt-1 text-sm opacity-80">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="text-xs px-3 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-800/60">{s}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {href && <Button href={href} variant="outline"><Globe size={16}/> Live</Button>}
        {repo && <Button href={repo} className="border-black border" variant="ghost"><Github size={16}/> Code</Button>}
      </div>
    </div>
  );
}
