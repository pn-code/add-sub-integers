import BlockOrigin from "./BlockOrigin";

export default function DropBlockSection() {
    return (
        <section className="bg-blue-900 rounded-sm py-4 w-full flex gap-4 items-center justify-center mb-8">
            <h2 className="font-semibold text-lg">Drag and Drop Block</h2>
            <BlockOrigin />
        </section>
    );
}
