import React, { useState } from "react";

export default function Block({ positive }: { positive: boolean }) {
    const [crossedOut, setCrossedOut] = useState(false);

    const blockStyles = positive
        ? "hover:bg-indigo-600 cursor-pointer w-12 h-12 bg-blue-500 border-white border-2 rounded-sm text-5xl flex items-center justify-center"
        : "hover:bg-indigo-600 cursor-pointer w-12 h-12 bg-red-500 border-white border-2 rounded-sm text-5xl flex items-center justify-center";
    return (
        <div
            onClick={() => setCrossedOut((prev) => !prev)}
            className={blockStyles}
        >
            {crossedOut ? "X" : ""}
        </div>
    );
}
