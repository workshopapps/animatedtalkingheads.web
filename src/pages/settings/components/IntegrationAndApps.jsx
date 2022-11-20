import { ReactComponent as Search } from "../assets/search-normal.svg";
import { ReactComponent as YouTube } from "../assets/youtube.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as FaceBook } from "../assets/facebook.svg";
import { ReactComponent as Gdrive } from "../assets/gdrive.svg";
import { ReactComponent as OneDrive } from "../assets/onedrive.svg";
import { ReactComponent as DropBox } from "../assets/dropbox.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Cube } from "../assets/3dcube.svg";
import ToggleSwitch from "./ToggleSwitch";

const IntegrationAndApps = () => {
    return (
        <section className="mt-6">
            <header className="flex gap-2 mb-6">
                <Cube />
                <p className="text-[#2563EB] h-8 text-2xl">Integration & Apps</p>
            </header>
            <p className="text-md w-4/5">You can connect and upload all your videos to your favourite softwares directly from Voxclips</p>
            <div className="grid gap-2 md:flex md:gap-4 mt-6">
                <p className="text-sm self-center">Connect VoxClips to</p>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute top-3 left-2"/>
                        <input type="search" className="bg-[#E1E1E1] border-[#9B9D9F] border pl-10 rounded-md w-52 max-w-[259px] h-14" placeholder="Search for Apps"/>
                    </div>
                    <button className="bg-[#2563EB] px-3 h-14 w-24 rounded-md text-white">Connect</button>
                </div>
            </div>
            <div className="flex gap-x-12 mt-6">
                <div className="grid gap-y-5">
                    <div className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-2">
                            <YouTube className="w-6 h-6" />
                            <p className="self-center text-base">YouTube</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <Twitter  className="w-6 h-6" />
                            <p className="self-center">Twitter</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <FaceBook  className="w-6 h-6" />
                            <p className="self-center">FaceBook</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                    <div className="border-t pt-4 border-b pb-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <Gdrive  className="w-6 h-6" />
                            <p className="self-center">Google Drive</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                </div>
                <div className="grid gap-y-5">
                <div className="border-t pt-4 flex justify-center items-center">
                    <div className="flex gap-3">
                            <OneDrive  className="w-6 h-6" />
                            <p className="self-center">One Drive</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <DropBox className="w-6 h-6" />
                            <p className="self-center">Drop Box</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>                    
                    <div className="border-t pt-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <Instagram  className="w-6 h-6" />
                            <p className="self-center">Instagram</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>                    
                    <div className="border-t pt-4 border-b pb-4 flex justify-between items-center">
                        <div className="flex gap-3">
                            <LinkedIn  className="w-6 h-6" />
                            <p className="self-center">LinkedIn</p>
                        </div>
                        <ToggleSwitch toggledState={true}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntegrationAndApps;