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

                <h2>Voxclips 1 year anniversary with team bonding</h2>

                <p>
                    Voxclips celebrates it's first anniversary today, November 16, 2022. The team bonding was done as a picnic outdoor theme. Some staffs brought along with them their favourite dishes to share. Three famous employees received accolades for their great work in the organisation during it's inaugural festivites.
                </p><br />
            </div>
        </Layout>
    )
}