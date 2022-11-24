import { ReactComponent as Tag2 } from "../assets/tag-2.svg";
import { ReactComponent as PRO } from "../assets/Pro.svg";
import ToggleSwitch from "./ToggleSwitch";

const VoxClips = () => {
    return (
        <section className="mt-6 md:mt-0">
            <header className="flex gap-2 mb-6">
                <Tag2 />
                <p className="text-[#2563EB] h-8 text-2xl">VoxClip Branding</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <div className="flex gap-2">
                        <p className="text-md">Water Mark</p>
                        <PRO />
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <p className="text-xs">Remove voxclips watermark in exported videos</p>
                        <button type="button" className="w-20 h-6 bg-[#2563EB] px-3 text-white rounded-md">Upgrade</button>
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Customize</p>
                    <div className="flex justify-between">
                        <p className="text-xs">Automatically add your name as watermark</p>
                        <ToggleSwitch />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VoxClips;