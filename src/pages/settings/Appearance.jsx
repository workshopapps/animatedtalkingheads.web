import { ReactComponent as Brush } from "./assets/brush.svg"

const Appearance = () => {
    return (
        <section className="mt-8 ml-2 w-[50vw] border-b-[#D9D9D9] border-b pb-4">
            <header className="flex mb-6">
                <Brush />
                <p className="text-[#2563EB]">Appearance</p>
            </header>
            <div className="flex flex-wrap gap-x-10">
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4">
                    <p className="text-sm">Theme</p>
                    <select className="text-xs">
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4">
                    <p className="text-sm">Font Size</p>
                    <select className="text-xs">
                        <option>Small(Recommended)</option>
                        <option>Small(Normal)</option>
                        <option>Big</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4">
                    <p className="text-sm">Language</p>
                    <select className="text-xs">
                        <option>English [en-US)</option>
                        <option>English [en-CA)</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4">
                    <p className="text-sm">Video Template</p>
                    <select className="text-xs">
                        <option>Default</option>
                        <option>Recommended</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4">
                    <p className="text-sm">Intro Music</p>
                    <select className="text-xs">
                        <option>None</option>
                        <option>Solemn</option>
                    </select>
                </div>
            </div>
            <button type="button" className="bg-[#2563EB] px-3 h-14 w-28 rounded-md mt-8">Save</button>
        </section>
    )
}

export default Appearance;