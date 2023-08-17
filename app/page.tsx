"use client";
import { useEffect, useState } from "react";
import Block from "@/components/Block";
import Tooltip from "@/components/Tooltip";
import DropBlockSection from "@/components/DropBlockSection";

interface BlockObject {
    isCrossed: boolean;
}

export default function Home() {
    const [firstInteger, setFirstInteger] = useState<number | null>(null);
    const [secondInteger, setSecondInteger] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const [firstIntegerBlocks, setFirstIntegerBlocks] = useState<BlockObject[]>(
        []
    );
    const [secondIntegerBlocks, setSecondIntegerBlocks] = useState<
        BlockObject[]
    >([]);

    const [isFirstIntegerPositive, setIsFirstIntegerPositive] =
        useState<boolean>(true);
    const [isSecondIntegerPositive, setIsSecondIntegerPositive] =
        useState<boolean>(false);

    const [total, setTotal] = useState<number | "">("");

    const answer =
        operator === "+"
            ? firstInteger! + secondInteger!
            : firstInteger! - secondInteger!;
    const totalIsAnswer = total == answer;

    useEffect(() => {
        randomizeEquation();
    }, []);

    const generateRandomBoolean = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        return randomNum > 5 ? true : false;
    };

    const generateRandomInteger = () => {
        return Math.floor(Math.random() * 10) + 1;
    };

    const randomizeIntegers = () => {
        const randomInteger = generateRandomInteger();

        if (randomInteger > 5) {
            const num1 = generateRandomInteger();
            const num2 = -1 * generateRandomInteger();

            setFirstInteger(num1);
            setSecondInteger(num2);
        } else {
            const num1 = -1 * generateRandomInteger();
            const num2 = generateRandomInteger();

            setFirstInteger(num1);
            setSecondInteger(num2);
        }
    };

    const randomizeOperator = () => {
        const randomOperator = generateRandomBoolean() ? "+" : "-";
        setOperator(randomOperator);
    };

    const clearFirstIntegerBlocks = () => {
        setFirstIntegerBlocks([]);
    };

    const clearSecondIntegerBlocks = () => {
        setSecondIntegerBlocks([]);
    };

    const clearBlocks = () => {
        clearFirstIntegerBlocks();
        clearSecondIntegerBlocks();
    };

    const randomizeEquation = () => {
        randomizeOperator();
        randomizeIntegers();
        clearBlocks();
        setTotal("");
    };

    const handleKeepChangeChange = () => {
        setOperator((prev) => (prev === "+" ? "-" : "+"));
        setSecondInteger((prev) => prev! * -1);
    };

    const handleOnDrop = (e: React.DragEvent) => {
        const blockColor = e.currentTarget.id;
        const blockType = e.dataTransfer.getData("blockType") as string;

        if (blockColor === "first" && blockType === "origin") {
            setFirstIntegerBlocks((prev) => [...prev, { isCrossed: false }]);
        } else if (blockColor === "second" && blockType === "origin") {
            setSecondIntegerBlocks((prev) => [...prev, { isCrossed: false }]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleAddBlock = (field: string) => {
        const targetField = field === "positive" ? "positive" : "negative";

        if (targetField === "positive") {
            setFirstIntegerBlocks((prev) => [...prev, { isCrossed: false }]);
        } else {
            setSecondIntegerBlocks((prev) => [...prev, { isCrossed: false }]);
        }
    };

    const handleCrossBlock = (targetBlockIndex: number) => {
        if (
            secondIntegerBlocks[targetBlockIndex] &&
            firstIntegerBlocks[targetBlockIndex]
        ) {
            setFirstIntegerBlocks((prev) =>
                prev.map((block, index) =>
                    index === targetBlockIndex
                        ? { ...block, isCrossed: !block.isCrossed }
                        : block
                )
            );

            setSecondIntegerBlocks((prev) =>
                prev.map((block, index) =>
                    index === targetBlockIndex
                        ? { ...block, isCrossed: !block.isCrossed }
                        : block
                )
            );
        }
    };

    return (
        <main className="bg-black text-white w-full min-h-screen flex flex-col sm:flex-row sm:gap-10 items-center sm:justify-center">
            <div className="w-full sm:w-[320px] flex flex-col items-center gap-8">
                <section className="flex flex-col gap-4 items-center sm:min-w-[200px] w-full">
                    {/* Top Section */}
                    <DropBlockSection />

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
                        <header className="w-full flex gap-10 justify-between sm:px-2">
                            <h2 className="text-lg font-semibold flex gap-2">
                                <button
                                    onClick={() =>
                                        setIsFirstIntegerPositive(
                                            (prev) => !prev
                                        )
                                    }
                                    type="button"
                                    className={
                                        isFirstIntegerPositive
                                            ? "bg-blue-600 px-2 rounded-full hover:bg-blue-500"
                                            : "bg-red-600 px-2 rounded-full hover:bg-red-500"
                                    }
                                >
                                    {firstIntegerBlocks.length}
                                </button>
                                First Integer
                            </h2>

                            <section className="text-sm flex gap-4">
                                <button
                                    className="px-2 py-1 bg-indigo-600 rounded-sm hover:bg-indigo-500"
                                    onClick={() => handleAddBlock("positive")}
                                    type="button"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={clearFirstIntegerBlocks}
                                    type="button"
                                    className="text-sm underline hover:text-gray-200"
                                >
                                    Clear
                                </button>
                            </section>
                        </header>

                        <section
                            id="first"
                            onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleOnDrop(e)}
                            className="w-[320px] min-h-[80px] flex-wrap px-4 flex gap-2 border-y-2 items-center border-gray-200 py-2 justify-start bg-gray-800"
                        >
                            {firstIntegerBlocks.length > 0 ? (
                                firstIntegerBlocks.map((block, idx) => (
                                    <Block
                                        key={idx}
                                        positive={isFirstIntegerPositive}
                                        handleClick={() =>
                                            handleCrossBlock(idx)
                                        }
                                        isCrossed={block.isCrossed}
                                    />
                                ))
                            ) : (
                                <span className="w-full text-center text-gray-200">
                                    Add Blocks Here!
                                </span>
                            )}
                        </section>
                    </section>

                    {/* Negative Blocks */}
                    <section className="flex flex-col gap-2 items-center">
                        <header className="w-full flex gap-10 justify-between sm:px-2">
                            <h2 className="text-lg font-semibold flex gap-2">
                                <button
                                    onClick={() =>
                                        setIsSecondIntegerPositive(
                                            (prev) => !prev
                                        )
                                    }
                                    type="button"
                                    className={
                                        isSecondIntegerPositive
                                            ? "bg-blue-600 px-2 rounded-full hover:bg-blue-500"
                                            : "bg-red-600 px-2 rounded-full hover:bg-red-500"
                                    }
                                >
                                    {secondIntegerBlocks.length}
                                </button>
                                Second Integer
                            </h2>

                            <section className="text-sm flex gap-4">
                                <button
                                    className="px-2 py-1 bg-indigo-600 rounded-sm hover:bg-indigo-500"
                                    onClick={() => handleAddBlock("negative")}
                                    type="button"
                                >
                                    Add
                                </button>
                                <button
                                    onClick={clearSecondIntegerBlocks}
                                    type="button"
                                    className="text-sm underline hover:text-gray-200"
                                >
                                    Clear
                                </button>
                            </section>
                        </header>

                        <section
                            id="second"
                            onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleOnDrop(e)}
                            className="w-[320px] min-h-[80px] flex-wrap px-4 flex gap-2 border-y-2 items-center border-gray-200 py-2 justify-start bg-gray-800"
                        >
                            {secondIntegerBlocks.length > 0 ? (
                                secondIntegerBlocks.map((block, idx) => (
                                    <Block
                                        key={idx}
                                        positive={isSecondIntegerPositive}
                                        handleClick={() =>
                                            handleCrossBlock(idx)
                                        }
                                        isCrossed={block.isCrossed}
                                    />
                                ))
                            ) : (
                                <span className="w-full text-center text-gray-200">
                                    Add Blocks Here!
                                </span>
                            )}
                        </section>
                    </section>

                    <section className="flex gap-4 justify-between items-center w-full px-3">
                        <section className="flex gap-4 items-center">
                            <label
                                htmlFor="total"
                                className="text-lg font-bold text-left text-amber-300"
                            >
                                Enter Total:
                            </label>
                            <input
                                id="total"
                                onChange={(e: any) => setTotal(e.target.value)}
                                value={total}
                                className="w-12 px-2 py-1 rounded-sm bg-gray-700"
                            />
                        </section>

                        <span
                            className={
                                totalIsAnswer
                                    ? "text-lg text-green-400"
                                    : "text-lg text-red-400"
                            }
                        >
                            {totalIsAnswer ? "Correct" : "Incorrect"}
                        </span>
                    </section>
                </section>
            </div>
            <Tooltip />
        </main>
    );
}
