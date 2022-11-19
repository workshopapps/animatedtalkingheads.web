import { ReactComponent as Search } from "./assets/search-normal.svg";

const IntegrationAndApps = () => {
    return (
        <section>
            <header className="flex mb-6">
                <p className="text-[#2563EB]">Integration & Apps</p>
            </header>
            <p className="text-md w-4/5">You can connect and upload all your videos to your favourite softwares directly from Voxclips</p>
            <div className="flex gap-4">
                <p className="text-sm self-center">Connect VoxClips to</p>
                <div className="relative flex">
                    <Search className="absolute"/>
                    <input type="search" className="bg-[#949698] h-14" placeholder="Search for Apps"/>
                </div>
                <button className="bg-[#2563EB] px-3 h-14 w-28 rounded-md text-white">Connect</button>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default IntegrationAndApps;