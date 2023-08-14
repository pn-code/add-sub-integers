import React from "react";

export default function BlockOrigin() {
    const handleOnDragOrigin = (e: React.DragEvent) => {
        e.dataTransfer.setData("blockType", "origin");
    };

    return (
        <div
            onDragStart={(e) => handleOnDragOrigin(e)}
            draggable
            className="w-12 h-12 bg-gray-400 border-white border-2 rounded-sm"
        ></div>
    );
}
