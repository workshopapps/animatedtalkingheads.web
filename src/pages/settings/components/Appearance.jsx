import { useEffect, useState } from "react";
import { ReactComponent as Brush } from "../assets/brush.svg"
import Proptypes  from "prop-types";

const Appearance = () => {
    const [defaultState, setDefaultState] = useState(true);
    const [appearance, setAppearance] = useState({
        theme: 'Light',
        fontsize: 'Small(Recommended)',
        language: 'English [en-US)',
        videotemplate: 'Default',
        intromusic: 'None'
    })

    const onChangeSelect = (e) => {
        const { value, name } = e.target
        setAppearance({
            ...appearance,
            [name]: value
        })
    }

    const trackDefaultState = () => {
        if(appearance.theme !== "Light" || appearance.fontsize !== "Small(Recommended)" || appearance.language !== "English [en-US)" || appearance.videotemplate !== "Default" || appearance.intromusic !== "None") {
            setDefaultState(false)
        } else if(appearance.theme === "Light" || appearance.fontsize === "Small(Recommended)" || appearance.language === "English [en-US)" || appearance.videotemplate === "Default" || appearance.intromusic === "None") {
            setDefaultState(true)
        }
    }

    useEffect(() => {
        trackDefaultState()
    }, [appearance]);
    return (
        <section className="mt-8 w-[350px] lg:w-[460px] border-b-[#D9D9D9] border-b pb-4 grid">
            <header className="flex gap-2 mb-6">
                <Brush />
                <p className="text-[#2563EB] h-8 text-2xl">Appearance</p>
            </header>
            <div className="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-40">
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                    <p className="text-sm">Theme</p>
                    <select className="text-xs" name="theme" value={appearance.theme} onChange={onChangeSelect}>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                    <p className="text-sm">Font Size</p>
                    <select className="text-xs" name="fontsize" value={appearance.fontsize} onChange={onChangeSelect}>
                        <option>Small(Recommended)</option>
                        <option>Small(Normal)</option>
                        <option>Big</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                    <p className="text-sm">Language</p>
                    <select className="text-xs" name="language" value={appearance.language} onChange={onChangeSelect}>
                        <option>English [en-US)</option>
                        <option>English [en-CA)</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                    <p className="text-sm">Video Template</p>
                    <select className="text-xs" name="videotemplate" value={appearance.videotemplate} onChange={onChangeSelect}>
                        <option>Default</option>
                        <option>Recommended</option>
                    </select>
                </div>
                <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                    <p className="text-sm">Intro Music</p>
                    <select className="text-xs" name="intromusic" value={appearance.intromusic} onChange={onChangeSelect}>
                        <option>None</option>
                        <option>Solemn</option>
                    </select>
                </div>
            </div>
            <button type="button" className="bg-[#2563EB] disabled:bg-[#A8C1F7] px-3 h-14 w-28 rounded-md mt-8 justify-self-end text-white" disabled={defaultState}>Save</button>
        </section>
    )
}

Appearance.propTypes = {
    defaultState: Proptypes.bool,
    appearance: Proptypes.object
}

export default Appearance;