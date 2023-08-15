import React from "react";

export default function FakeBlock({ positive }: { positive: boolean }) {
    const blockStyles = positive
        ? "cursor-pointer w-12 h-12 bg-blue-500 border-white border-2 rounded-sm text-5xl flex items-center justify-center"
        : "cursor-pointer w-12 h-12 bg-red-500 border-white border-2 rounded-sm text-5xl flex items-center justify-center";

    return <div className={blockStyles}></div>;
}
