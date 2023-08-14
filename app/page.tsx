"use client";
import { useEffect, useState } from "react";
import Block from "@/components/Block";
import BlockOrigin from "@/components/BlockOrigin";

export default function Home() {
    const [firstInteger, setFirstInteger] = useState<number | null>(null);
    const [secondInteger, setSecondInteger] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const [positiveBlocks, setPositiveBlocks] = useState<string[]>([]);
    const [negativeBlocks, setNegativeBlocks] = useState<string[]>([]);

    useEffect(() => {
        randomizeEquation();
    }, []);

    const generateRandomBoolean = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        return randomNum > 5 ? true : false;
    };

    const generateRandomInteger = () => {
        const randomOperator = generateRandomBoolean() ? "+" : "-";
        const multiplier = Number(`${randomOperator}1`);
        return (Math.floor(Math.random() * 10) + 1) * multiplier;
    };

    const randomizeIntegers = () => {
        const num1 = generateRandomInteger();
        const num2 = generateRandomInteger();
        setFirstInteger(num1);
        setSecondInteger(num2);
    };

    const randomizeOperator = () => {
        const randomOperator = generateRandomBoolean() ? "+" : "-";
        setOperator(randomOperator);
    };

    const clearPositiveBlocks = () => {
        setPositiveBlocks([]);
    };

    const clearNegativeBlocks = () => {
        setNegativeBlocks([]);
    };

    const clearBlocks = () => {
        clearPositiveBlocks();
        clearNegativeBlocks();
    };

    const randomizeEquation = () => {
        randomizeOperator();
        randomizeIntegers();
        clearBlocks();
    };

    const handleKeepChangeChange = () => {
        setOperator((prev) => (prev === "+" ? "-" : "+"));
        setSecondInteger((prev) => prev! * -1);
    };

    const handleOnDrop = (e: React.DragEvent) => {
        const blockColor = e.currentTarget.id;
        const blockType = e.dataTransfer.getData("blockType") as string;

        if (blockColor === "red" && blockType === "origin") {
            setNegativeBlocks((prev) => [...prev, "red"]);
        } else if (blockColor === "green" && blockType === "origin") {
            setPositiveBlocks((prev) => [...prev, "green"]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleAddBlock = (field: string) => {
        const targetField = field === "positive" ? "positive" : "negative";

        if (targetField === "positive") {
            setPositiveBlocks((prev) => [...prev, "green"]);
        } else {
            setNegativeBlocks((prev) => [...prev, "red"]);
        }
    };

    return (
        <main className="bg-black text-white w-full min-h-screen flex flex-col gap-8 items-center sm:justify-center">
            {/* Sidebar */}
            <section className="sm:w-[300px] bg-gray-800 rounded-sm py-4 w-full flex gap-4 items-center justify-center">
                <h2 className="font-semibold text-lg">Block Creator</h2>
                <BlockOrigin />
            </section>

            {/* Main App */}
            <section className="flex flex-col gap-4 items-center sm:min-w-[200px]">
                {/* Equation Display */}
                <section className="text-4xl mb-8 flex items-center gap-2 h-12">
                    <span>{firstInteger}</span>
                    <button
                        type="button"
                        onClick={handleKeepChangeChange}
                        className="hover:bg-gray-800 rounded-md px-2"
                    >
                        {operator}
                    </button>
                    <span>{secondInteger}</span>
                </section>

                <section>
                    {/* Randomizer Button */}
                    <button
                        onClick={randomizeEquation}
                        type="button"
                        className="text-amber-300 px-4 py-2 hover:text-amber-100"
                    >
                        Randomize
                    </button>
                    <button
                        onClick={clearBlocks}
                        type="button"
                        className="text-indigo-400 px-4 py-2 hover:text-indigo-100"
                    >
                        Clear All
                    </button>
                </section>

                {/* Positive Blocks */}
                <section className="flex flex-col gap-2 items-center">
                    <header className="flex gap-10">
                        <h2 className="text-lg font-bold">Positive Blocks</h2>

                        <section className="text-sm flex gap-4">
                            <button
                                className="px-2 py-1 bg-indigo-600 rounded-sm hover:bg-indigo-500"
                                onClick={() => handleAddBlock("positive")}
                                type="button"
                            >
                                Add
                            </button>
                            <button
                                onClick={clearPositiveBlocks}
                                type="button"
                                className="text-sm underline hover:text-gray-200"
                            >
                                Clear
                            </button>
                        </section>
                    </header>

                    <section
                        id="green"
                        onDragOver={(e) => handleDragOver(e)}
                        onDrop={(e) => handleOnDrop(e)}
                        className="w-[320px] min-h-[80px] flex-wrap px-4 flex gap-2 border-y-2 items-center border-gray-200 py-2 justify-start bg-gray-800"
                    >
                        {positiveBlocks.map((block, idx) => (
                            <Block key={idx} color={"green"} />
                        ))}
                    </section>
                </section>

                {/* Negative Blocks */}
                <section className="flex flex-col gap-2 items-center">
                    <header className="flex gap-10">
                        <h2 className="text-lg font-bold">Negative Blocks</h2>

                        <section className="text-sm flex gap-4">
                            <button
                                className="px-2 py-1 bg-indigo-600 rounded-sm hover:bg-indigo-500"
                                onClick={() => handleAddBlock("negative")}
                                type="button"
                            >
                                Add
                            </button>
                            <button
                                onClick={clearNegativeBlocks}
                                type="button"
                                className="text-sm underline hover:text-gray-200"
                            >
                                Clear
                            </button>
                        </section>
                    </header>

                    <section
                        id="red"
                        onDragOver={(e) => handleDragOver(e)}
                        onDrop={(e) => handleOnDrop(e)}
                        className="w-[320px] min-h-[80px] flex-wrap px-4 flex gap-2 border-y-2 items-center border-gray-200 py-2 justify-start bg-gray-800"
                    >
                        {negativeBlocks.map((block, idx) => (
                            <Block key={idx} color={"red"} />
                        ))}
                    </section>
                </section>
            </section>
        </main>
    );
}
