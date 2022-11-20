import { useState } from "react";
import people from "../assets/Rectangle 240.png"
import ToggleSwitch from "./ToggleSwitch";

const Accessibility = () => {
    const [accessibilityState] = useState(false);
    console.log(accessibilityState);
    return (
        <section>
            <header className="flex gap-2 mb-6 mt-6">
                <img src={people} alt="people"/>
                <p className="text-[#2563EB] h-8 text-2xl">Accessibility</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Caption</p>
                    <div className="flex justify-between">
                        <p className="text-xs">Live caption</p>
                        <ToggleSwitch toggledState={accessibilityState}/>
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
                    <div className="flex justify-end">
                        <button type="button" className="bg-[#2563EB] px-3 w-20 h-8 rounded-md text-white">Save</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accessibility;