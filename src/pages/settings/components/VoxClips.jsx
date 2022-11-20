import { ReactComponent as Tag2 } from "../assets/tag-2.svg";

const VoxClips = () => {
    return (
        <section className="mt-6">
            <header className="flex mb-6">
                <Tag2 />
                <p className="text-[#2563EB]">VoxClips</p>
            </header>
            <div className="grid gap-3">
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Water Mark</p>
                    <div>
                        <p className="text-xs">Remove voxclips watermark in exported videos</p>
                    </div>
                </div>
                <div className="border-b border-b-[#D9D9D9] pb-4">
                    <p className="text-md">Customize</p>
                    <p className="text-xs">Automatically refresh feed for new posts</p>
                </div>
            </div>
        </section>
    )
}

export default VoxClips;