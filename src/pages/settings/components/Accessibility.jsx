import { ReactComponent as Accesibility } from "../assets/Access.svg";
import ToggleSwitch from "./ToggleSwitch";

const Accessibility = () => {
    return (
        <section>
            <header className="flex mb-6 mt-6">
                <Accesibility />
                <p className="text-[#2563EB]">Accessibility</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Caption</p>
                    <div className="flex gap-72">
                        <p className="text-xs">Live caption</p>
                        <ToggleSwitch />
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
                        <button type="button" className="bg-[#2563EB] px-3 h-10 w-28 rounded text-white">Save</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accessibility;