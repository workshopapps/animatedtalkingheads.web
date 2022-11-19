import { ReactComponent as Search } from "./assets/search-normal.svg";
import { ReactComponent as YouTube } from "./assets/youtube.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as FaceBook } from "./assets/facebook.svg";
import { ReactComponent as Gdrive } from "./assets/gdrive.svg";
import { ReactComponent as OneDrive } from "./assets/onedrive.svg";
import { ReactComponent as DropBox } from "./assets/dropbox.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";

const IntegrationAndApps = () => {
    return (
        <section className="mt-6">
            <header className="flex mb-6">
                <p className="text-[#2563EB]">Integration & Apps</p>
            </header>
            <p className="text-md w-4/5">You can connect and upload all your videos to your favourite softwares directly from Voxclips</p>
            <div className="flex gap-4 mt-6">
                <p className="text-sm self-center">Connect VoxClips to</p>
                <div className="relative flex">
                    <Search className="absolute"/>
                    <input type="search" className="bg-[#949698] h-14" placeholder="Search for Apps"/>
                </div>
                <button className="bg-[#2563EB] px-3 h-14 w-24 rounded-md text-white">Connect</button>
            </div>
            <div className="flex gap-x-20 mt-6">
                <div className="grid gap-y-5">
                    <div className="border-t pt-4">
                        <div className="flex gap-3">
                            <YouTube />
                            <p>YouTube</p>
                        </div>

                    </div>
                    <div className="border-t pt-4">
                        <div className="flex gap-3">
                            <Twitter />
                            <p>Twitter</p>
                        </div>
                        
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex gap-3">
                            <FaceBook />
                            <p>FaceBook</p>
                        </div>
                        
                    </div>
                    <div className="border-t pt-4 border-b pb-4">
                        <div className="flex gap-3">
                            <Gdrive />
                            <p>Google Drive</p>
                        </div>
                        
                    </div>
                </div>
                <div className="grid gap-y-5">
                <div className="border-t pt-4">
                    <div className="flex gap-3">
                            <OneDrive />
                            <p>One Drive</p>
                        </div>
                        
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex gap-3">
                            <DropBox />
                            <p>Drop Box</p>
                        </div>
                        
                    </div>                    
                    <div className="border-t pt-4">
                        <div className="flex gap-3">
                            <Instagram />
                            <p>Instagram</p>
                        </div>
                        
                    </div>                    
                    <div className="border-t pt-4 border-b pb-4">
                        <div className="flex gap-3">
                            <LinkedIn />
                            <p>LinkedIn</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default IntegrationAndApps;