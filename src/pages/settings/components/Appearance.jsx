import { useEffect, useState } from "react";
import { ReactComponent as Brush } from "../assets/brush.svg"
import Proptypes from "prop-types";
import Layout from "../../../components/UI/Layout";
import SettingsNav from "../../../components/UI/SettingsNav";
import PageTitle from '../../../components/UI/page-title';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


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
        if (appearance.theme !== "Light" || appearance.fontsize !== "Small(Recommended)" || appearance.language !== "English [en-US)" || appearance.videotemplate !== "Default" || appearance.intromusic !== "None") {
            setDefaultState(false)
        } else if (appearance.theme === "Light" || appearance.fontsize === "Small(Recommended)" || appearance.language === "English [en-US)" || appearance.videotemplate === "Default" || appearance.intromusic === "None") {
            setDefaultState(true)
        }
    }

    useEffect(() => {
        trackDefaultState()
    }, [appearance]);
    return (
        <Layout>
            <PageTitle title="Settings" />
            <SettingsNav />
            <ul className={styles.breadcrumb}>
                <li>   <Link className={styles.links} to="/settings-appearance">
                    <p >  Appearance</p>
                </Link></li>
                <li><a href="#">Integration & Apps</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Voxclip Branding</a></li>
                <li>   <Link className={styles.links} to="/settings-appearance">
                    <p >  Accessibility</p>
                </Link></li>
            </ul>
            <section className=" mt-16 m-auto  w-[350px] lg:w-[460px] border-b-[#D9D9D9] mb-44  grid">

                <div className="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-40">
                    <div className="border-b-[#D9D9D9]  border-b w-[150px] pb-4 mb-4">
                        <p className=" text-base pb-3">Theme</p>
                        <select className="text-xs" name="theme" value={appearance.theme} onChange={onChangeSelect}>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>
                    <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                        <p className="text-base pb-3">Font Size</p>
                        <select className="text-xs" name="fontsize" value={appearance.fontsize} onChange={onChangeSelect}>
                            <option>Small(Recommended)</option>
                            <option>Small(Normal)</option>
                            <option>Big</option>
                        </select>
                    </div>
                    <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                        <p className="text-base pb-3">Language</p>
                        <select className="text-xs" name="language" value={appearance.language} onChange={onChangeSelect}>
                            <option>English [en-US)</option>
                            <option>English [en-CA)</option>
                        </select>
                    </div>
                    <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                        <p className="text-base pb-3">Video Template</p>
                        <select className="text-base pb-3" name="videotemplate" value={appearance.videotemplate} onChange={onChangeSelect}>
                            <option>Default</option>
                            <option>Recommended</option>
                        </select>
                    </div>
                    <div className="border-b-[#D9D9D9] border-b w-[150px] pb-4 mb-4">
                        <p className="text-base pb-3">Intro Music</p>
                        <select className="text-xs" name="intromusic" value={appearance.intromusic} onChange={onChangeSelect}>
                            <option>None</option>
                            <option>Solemn</option>
                        </select>
                    </div>
                </div>
                <button type="button" className="bg-[#2563EB] disabled:bg-[#A8C1F7] px-3 h-14 w-28 rounded-md m-auto mt-8 m-a text-white" disabled={defaultState}>Save</button>
            </section>
        </Layout>
    )
}


Appearance.propTypes = {
    defaultState: Proptypes.bool,
    appearance: Proptypes.object
}

export default Appearance;