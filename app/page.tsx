import Block from "@/components/Block";
import BlockOrigin from "@/components/BlockOrigin";

export default function Home() {
    return (
        <main className="bg-black text-white w-full min-h-screen flex flex-col sm:flex-row gap-8 items-center sm:justify-center">
            {/* Sidebar */}
            <section className="sm:h-[340px] bg-gray-800 rounded-sm sm:ml-4 py-4 w-full sm:w-44 flex sm:flex-col gap-4 items-center justify-center">
                <h2 className="font-semibold text-lg">Block Creator</h2>
                <BlockOrigin color="green" />
                <BlockOrigin color="red" />
            </section>

            {/* Main App */}
            <section className="flex flex-col gap-4 items-center">
                {/* Equation Display */}
                <section className="text-5xl mb-8">3 - 1</section>

                {/* Positive Blocks */}
                <section className="flex flex-col gap-2 items-center">
                    <header className="flex gap-2 items-center">
                        <h2 className="text-lg font-bold">Positive Blocks</h2>
                        <button className="rounded-full bg-green-600 flex items-center justify-center px-2 py-1 text-sm">
                            Add block
                        </button>
                    </header>
                    <section className="flex gap-2 border-y-2 items-center border-gray-200 w-full py-2 justify-center">
                        <Block color={"green"} />
                        <Block color={"green"} />
                        <Block color={"green"} />
                    </section>
                </section>

                {/* Negative Blocks */}
                <section className="flex flex-col gap-2 items-center">
                    <header className="flex gap-2 items-center">
                        <h2 className="text-lg font-bold">Negative Blocks</h2>
                    </header>
                    <section className="flex gap-2 border-y-2 items-center border-gray-200 w-full py-2 justify-center">
                        <Block color={"red"} />
                    </section>
                </section>
            </section>
        </main>
    );
}
