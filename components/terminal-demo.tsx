"use client";
import { Terminal } from "@/components/ui/terminal";
import { useState } from "react";
import { motion } from "motion/react";

export default function TerminalDemo() {
    const [done, setDone] = useState(false);

    return (
        <section className="relative flex min-h-svh w-full items-center justify-center">
            <Terminal
                commands={[
                    "whoami",
                    "ls",
                    "cat education.txt",
                    "ls skills/",
                    "cat links.txt",
                ]}
                outputs={{
                    0: ["Ateeksh Sood"],
                    1: ["education.txt  skills/  links.txt"],
                    2: [
                        "B.Tech @ UPES",
                        "BS in Data Science @ IIT Madras",
                    ],
                    3: [
                        "python  pytorch  scikit-learn  pandas  fastapi  flask",
                        "react  vue2  docker  java  c",
                    ],
                    4: [
                        "github    github.com/ateekshSood",
                        "linkedin  linkedin.com/in/ateeksh-sood-62b5aa2a3",
                        "email     ateekshsood@gmail.com",
                    ],
                }}
                typingSpeed={45}
                delayBetweenCommands={1000}
                onComplete={() => setDone(true)}
                enableSound={false}
            />
            {done && (
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" px-4 py-2 absolute bottom-12 font-mono text-lg text-neutral-400 transition-colors hover:text-neutral-200"
                >
                   <span className="inline-block motion-safe:animate-bounce">↓</span> Projects
                </motion.a>
            )}
        </section>
    );
}
