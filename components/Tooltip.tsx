import FakeBlock from "./FakeBlock";

export default function Tooltip() {
    return (
        <section className="sm:w-[320px] flex flex-col gap-5 mt-10 p-6 bg-gray-800 sm:p-8 rounded-sm sm:h-[560px] mb-10">
            <h2 className="text-xl font-semibold">Tool Tips</h2>
            <ul className="list-disc">
                <li className="text-blue-400">Blue blocks are positive.</li>
                <li className="text-red-400">Red blocks are negative.</li>
                <li>
                    <span className="font-semibold">
                        Switch between positive and negative integers
                    </span>{" "}
                    by clicking on this button above each field:{" "}
                    <button
                        type="button"
                        className={
                            "bg-blue-600 px-2 rounded-full hover:bg-blue-500"
                        }
                    >
                        0
                    </button>
                </li>
                <li>
                    <span className="font-semibold">Drag and drop</span> blocks
                    or use <span className="font-semibold">add buttons</span> to
                    add blocks for each field.
                </li>
                <li>
                    <span className="font-semibold">Cross out</span> blocks by
                    clicking on them
                </li>
                <li>
                    A{" "}
                    <span className="font-semibold text-blue-400">
                        positive block
                    </span>{" "}
                    and a{" "}
                    <span className="font-semibold text-red-400">
                        negative block
                    </span>{" "}
                    cancel each other out:
                </li>
                <li>
                    <span className="font-semibold">Check your answer</span> by
                    entering a total at the bottom
                </li>
            </ul>
            <div className="flex justify-center items-center text-lg gap-2">
                <FakeBlock positive={true} /> +
                <FakeBlock positive={false} /> = 0
            </div>
        </section>
    );
}
