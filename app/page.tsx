import TerminalDemo from "@/components/terminal-demo";

export default function Home() {
    return (
        <main className="bg-black grow">
            <TerminalDemo />
            <section
                id="projects"
                className="min-h-svh px-4 py-20 text-neutral-300"
            >
                <h2 className="text-2xl font-bold">Projects</h2>
                <p>coming soon...</p>
            </section>
        </main>
    );
}
