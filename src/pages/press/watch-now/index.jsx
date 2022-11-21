import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
// Images
import VideoImg from "../../../components/pages/press/assets/video2x.png"
import calendar from "../../../components/pages/press/assets/calendar-icon.png"
import Layout from "../../../components/UI/Layout"


export default function Watchnow() {
    return (
        <Layout>
            <div className={styles.watchnow}>
                <div className={styles.breadcrumb}>
                    <Link to={'/press'} className={styles.breadcrumb}>Press</Link> {`>`} <span>Voxclips 1 year anniversary with team bonding</span>
                </div>
                <img src={VideoImg} alt="" />

                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 16, 2022
                </span>

                <h2>How This Company is Making Podcasts Way Interesting</h2>

                <p>
                Voxclips is a unique web based site which helps Podcasters to enhance their recorded audio series to be engaging, interesting and time spending.
                </p><br />
            </div>
        </Layout>
    )
}