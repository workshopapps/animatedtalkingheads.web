import { ReactComponent as Accesibility } from "./assets/Accessibility.svg";

const Accessibility = () => {
    return (
        <section>
            <header className="flex mb-6 mt-6">
                <Accesibility />
                <p className="text-[#2563EB]">Accesibility</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Caption</p>
                    <div>
                        <p className="text-xs">Live caption</p>
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <div>
                        <p className="text-md">Caption Size</p>
                        <select className="text-xs">
                            <option>Medium</option>
                            <option>Small</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xs">Automatically refresh feed for new posts</p>
                        <button type="button" className="bg-[#2563EB] px-3 h-10 w-28 rounded">Save</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accessibility;