import { ReactComponent as People } from "./assets/people.svg";

const Community = () => {
    return (
        <section>
            <header className="flex mb-6">
                <People />
                <p className="text-[#2563EB]">Community</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Public Visibility</p>
                    <div>
                        <p className="text-xs">Make your video publicly available in community</p>
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Automation: Synchronization</p>
                    <div>
                        <p className="text-xs">Automatically refresh feed for new posts</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;