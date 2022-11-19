import Accessibility from "./Accessibility";
import Community from "./Community"
import VoxClips from "./VoxClips";

const RightSection = () => {
    return (
        <section className="grid">
            <Community/>
            <VoxClips />
            <Accessibility/>
        </section>

    )
}

export default RightSection;