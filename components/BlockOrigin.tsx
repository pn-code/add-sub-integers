import React from "react";

export default function BlockOrigin({ color }: { color: string }) {
    const blockStyles = color === "green" ? "w-12 h-12 bg-green-500 border-white border-2 rounded-sm" : "w-12 h-12 bg-red-500 border-white border-2 rounded-sm"
    return (
        <div draggable className={blockStyles}></div>
    );
}

