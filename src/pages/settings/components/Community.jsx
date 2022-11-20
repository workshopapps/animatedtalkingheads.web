import { ReactComponent as People } from "../assets/people.svg";
import ToggleSwitch from "./ToggleSwitch";

const Community = () => {
    return (
        <section className="mt-8">
            <header className="flex gap-2 mb-6">
                <People />
                <p className="text-[#2563EB] h-8 text-2xl">Community</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Public Visibility</p>
                    <div className="flex justify-between">
                        <p className="text-xs">Make your video publicly available in community</p>
                        <ToggleSwitch toggledState={false}/>
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Automation: Synchronization</p>
                    <div className="flex justify-between">
                        <p className="text-xs">Automatically refresh feed for new posts</p>
                        <ToggleSwitch toggledState={false}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;