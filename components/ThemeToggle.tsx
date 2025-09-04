"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState,useEffect } from "react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
   const [ismounted,setismounted]=useState(false)
   useEffect(()=>{
     setismounted(true)
   },[])
   if(!ismounted){
    return (
      <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-1 text-sm opacity-80">
        Loading....
      </button>
      
       
    )
   }
   
  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-1 text-sm opacity-80 hover:opacity-100"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="block dark:hidden" />
      <span className="hidden sm:inline">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
