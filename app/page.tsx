"use client";
import { Button } from "@/components/Button";
 
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { AnimatedText } from "@/components/AnimatedText";
import { Github, Mail, MapPin } from "lucide-react";
import { projects, site, skills, experience } from "@/content/site";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        router.push("/success")
        e.currentTarget.reset(); // optional: clear the form
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Hero */}
      <section className="relative mx-auto max-w-5xl py-20">
        <div className="absolute inset-0 -z-10 bg-grid dark:bg-grid-dark bg-grid [background-size:var(--size,24px)_var(--size,24px)]" />
        <div className="absolute -z-20 inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent dark:from-brand/15" />
        <div className="flex flex-col gap-6 items-start">
          <p className="inline-flex items-center gap-2 text-sm opacity-80"><MapPin size={16}/> {site.location} • {site.availability}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            <AnimatedText>Hello, I'm {site.owner}.</AnimatedText><br/>
            <AnimatedText>I build fast, elegant web apps.</AnimatedText>
          </h1>
          <p className="max-w-2xl opacity-80">
            {site.tagline}
          </p>
          <div className="flex items-center gap-3">
            <Button ><a href="#projects">View Projects</a></Button>
            <Button href="#contact" variant="outline"><Mail size={16}/> <a href="#contact">Contact</a></Button>
            <Button ><Github size={16}/> <a href="https://github.com/vk60">GitHub</a></Button>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p>I’m a full‑stack developer focused on performance, accessibility, and delightful UX. I love shipping clean, type‑safe code and collaborating closely with designers and product folks.</p>
            <p>When I’m not coding, I explore new UI patterns, contribute to open‑source, and mentor newer devs.</p>
          </div>
          <div>
            <div className="rounded-2xl h-56 bg-gradient-to-br from-brand/30 to-transparent border border-neutral-200/60 dark:border-neutral-800/60 shadow-soft" />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold mb-3 text-3xl">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => <span key={s} className="text-sm px-3 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-800/60">{s}</span>)}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A few things I’ve built recently">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experience.map((e) => (
            <motion.div key={e.role} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{e.role} </h3>
                <p className="text-sm opacity-70"></p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {e.bullets.map(b => <li key={b} className="opacity-90">{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <form method="post" onSubmit={handleSubmit} name="contact" data-netlify="true" action="/api/contact"  className="max-w-xl space-y-4">
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-transparent" />
            <input required type="email" name="email" placeholder="Your email" className="px-4 py-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-transparent" />
          </div>
          <input name="subject" placeholder="Subject (optional)" className="w-full px-4 py-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-transparent" />
          <textarea required name="message" placeholder="Tell me about your project..." rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-transparent" />
          <button type="submit"><Button > {loading ? "Sending..." : "Send"} </Button></button>
          
     
 
        </form>
      </Section>
    </div>
  );
}
