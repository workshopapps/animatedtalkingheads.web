import { ReactComponent as People } from "../assets/people.svg";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Layout from "../../../components/UI/Layout";
import SettingsNav from "../../../components/UI/SettingsNav";
import PageTitle from '../../../components/UI/page-title';


const Community = () => {
    const [community, setCommunity] = useState({
        visible: 'Default',
        auto: 'Default',
    })

    const onChangeSelect = (e) => {
        const { value, name } = e.target
        setCommunity({
            ...community,
            [name]: value
        })
    }

    const [defaultState, setDefaultState] = useState(true);
    const trackDefaultState = () => {
        if (community.visible !== "default" || community.auto !== "default)") {
            setDefaultState(false)
        } else if (community.visible == "default" || community.auto == "default)") {
            setDefaultState(true)
        }
    }
    useEffect(() => {
        trackDefaultState()
    }, [community]);
    return (
        <Layout>
            <PageTitle title="Settings" />
            <SettingsNav />
            <section className=" mt-16 m-auto  w-[350px] lg:w-[460px] border-b-[#D9D9D9] mb-44  grid">
                <header className="flex gap-2 mb-6">
                    <People />
                    <p className="text-[#2563EB] h-8 text-2xl">Community</p>
                </header>
                <div className="grid gap-3">
                    <div className="border-b border-b-[#D9D9D9] pb-4">
                        <p className="text-md">Public Visibility</p>
                        <div className="flex justify-between">
                            <p className="text-xs" name="visible" value={community.visible} onChange={onChangeSelect}>Make your video publicly available in community</p>
                            <ToggleSwitch toggledState={false} />
                        </div>
                    </div>
                    <div className="border-b border-b-[#D9D9D9] pb-4">
                        <p className="text-md">Automation: Synchronization</p>
                        <div className="flex justify-between">
                            <p className="text-xs" name="auto" value={community.auto} onChange={onChangeSelect}>Automatically refresh feed for new posts</p>
                            <ToggleSwitch toggledState={false} />
                        </div>
                    </div>
                </div>
                <button type="button" className="bg-[#2563EB] disabled:bg-[#A8C1F7] px-3 h-14 w-28 rounded-md m-auto mt-8 m-a text-white" disabled={defaultState}>Save</button>
            </section>
        </Layout>
    )
}

export default Community;