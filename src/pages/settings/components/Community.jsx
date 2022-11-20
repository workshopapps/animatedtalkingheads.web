import { ReactComponent as People } from "../assets/people.svg";
import ToggleSwitch from "./ToggleSwitch";

const Community = () => {
    return (
        <section className="">
            <header className="flex mb-6">
                <People />
                <p className="text-[#2563EB]">Community</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Public Visibility</p>
                    <div className="flex gap-12">
                        <p className="text-xs">Make your video publicly available in community</p>
                        <ToggleSwitch />
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Automation: Synchronization</p>
                    <div className="flex gap-12">
                        <p className="text-xs">Automatically refresh feed for new posts</p>
                        <ToggleSwitch />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;