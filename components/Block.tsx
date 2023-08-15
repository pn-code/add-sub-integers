import React from "react";

export default function Block({ positive }: { positive: boolean }) {
    const blockStyles = positive
        ? "w-12 h-12 bg-blue-500 border-white border-2 rounded-sm"
        : "w-12 h-12 bg-red-500 border-white border-2 rounded-sm";
    return <div draggable className={blockStyles}></div>;
}
