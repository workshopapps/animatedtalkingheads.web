import styles from "./styles.module.css"
// Images
import NewsImg2 from "../../../components/pages/press/assets/news-image2x.png"
import calendar from "../../../components/pages/press/assets/calendar-icon.png"
import Layout from "../../../components/UI/Layout"


export default function PressNewsPage() {
    return (
        <Layout>
            <div className={styles.newspage}>
                <img src={NewsImg2} alt="" />

                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 16, 2022
                </span>

                <h2>Voxclips 1 year anniversary with team bonding</h2>

                <p>
                    Voxclips celebrates it's first anniversary today, November 16, 2022. The team bonding was done as a picnic outdoor theme. Some staffs brought along with them their favourite dishes to share. Three famous employees received accolades for their great work in the organisation during it's inaugural festivites.
                </p><br />
                <p>
                    Each staffs chose seomething they were grateful for and designed a tile based of their theme. Together, the tiles were joined to make a table that will be placed in the office to serve as a daily reminder of how thankful they are
                </p><br />
                <p>
                    William Duke, a well-known business podcaster, joins Voxclip in commemorating the platform's first birthday. In order to produce mindblowing audio series, he advised that podcasters make the most of all the intriguing features in Voxclips. In the minds of the workers, this day has imprinted lovely memories that will never fade.
                </p><br />
            </div>
        </Layout>
    )
}