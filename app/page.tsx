import Block from "@/components/Block";

export default function Home() {
    return (
        <main className="bg-black w-full min-h-screen flex flex-col gap-4 items-center justify-center">
            {/* Equation Display */}
            <section className="text-xl sm:text-5xl text-white mb-8">
                3 - 1
            </section>
            
            {/* Positive Blocks */}
            <section className="flex gap-2">
                <Block />
                <Block />
                <Block />
            </section>

            {/* Negative Blocks */}
            <section className="flex gap-2">
                <Block />
            </section>
        </main>
    );
}
