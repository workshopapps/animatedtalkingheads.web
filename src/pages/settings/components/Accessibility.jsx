import people from "../assets/Rectangle 240.png"
import ToggleSwitch from "./ToggleSwitch";
import Layout from "../../../components/UI/Layout";
import SettingsNav from "../../../components/UI/SettingsNav";
import PageTitle from '../../../components/UI/page-title';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


const Accessibility = () => {
    return (
        <Layout>
            <PageTitle title="Settings" />
            <SettingsNav />
            <ul className={styles.breadcrumb}>
                <li>
                    <Link className={styles.links} to="/settings-appearance">
                        <p >  Appearance</p>
                    </Link></li>
                <li>
                    <Link className={styles.links} to="/settings-integration">
                        <p> Integration & Apps</p>
                    </Link></li>
                <li>

                    <Link className={styles.links} to="/settings-community">
                        <p>Community</p>
                    </Link></li>
                <li>
                    <Link className={styles.links} to="/settings-voxclips">
                        <p>Voxclip Branding</p>
                    </Link></li>
                <li>

                    <Link className={styles.links} to="/settings-appearance">
                        <p >  Accessability</p>
                    </Link></li>
            </ul>
            <section className=" mt-16 m-auto  w-[350px] lg:w-[460px] border-b-[#D9D9D9] mb-44  grid">
                <header className="flex gap-2 mb-6 mt-8 md:mt-0">
                    <img src={people} alt="people" />
                    <p className="text-[#2563EB] h-8 text-2xl">Accessibility</p>
                </header>
                <div className="grid gap-3">
                    <div className="border-b border-b-[#D9D9D9] pb-4">
                        <p className="text-md">Caption</p>
                        <div className="flex justify-between">
                            <p className="text-xs">Live caption</p>
                            <ToggleSwitch toggledState={false} />
                        </div>
                    </div>
                    <div className="border-b border-b-[#D9D9D9] pb-4">
                        <div>
                            <p className="text-md">Caption Size</p>
                            <select className="text-xs">
                                <option>Medium</option>
                                <option>Small</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                        </div>
                    </div>
                </div>
                <button type="button" className="bg-[#2563EB] disabled:bg-[#A8C1F7] px-3 h-14 w-28 rounded-md m-auto mt-8 m-a text-white" >Save</button>
            </section>
        </Layout>
    )
}

export default Accessibility;