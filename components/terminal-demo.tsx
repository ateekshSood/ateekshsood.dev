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
                    "npx shadcn@latest init",
                    "npm install motion",
                    "npx shadcn@latest add button card",
                    "Term Deez Nuts",
                ]}
                outputs={{
                    0: [
                        "✔ Preflight checks passed.",
                        "✔ Created components.json",
                        "✔ Initialized project.",
                    ],
                    1: ["added 1 package in 2s"],
                    2: ["✔ Done. Installed button, card."],
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
