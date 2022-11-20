import styles from "./styles.module.css"
import newsImg2 from "../Images/news-image2.png"
import newsImg3 from "../Images/news-image3.png"
import newsImg4 from "../Images/news-image4.png"
import newsImg5 from "../Images/news-image5.png"
import newsImg6 from "../Images/news-image6.png"
import newsImg7 from "../Images/news-image7.png"
import calendar from "../Images/calendar-icon.png"

export default function NewsCard() {
    return (
        <div className={styles.newscard_box}>
            <News1 />
            <News2 />
            <News3 />
            <News4 />
            <News5 />
            <News6 />
        </div>
    )
}

// Created 6 components to be replace with propTypes
const News1 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg2} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Voxclips 1 year anniversary with team bonding</h4>

                <p>
                    Some two lines blurb could go here about the press release
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}

const News2 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg3} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Roundable discussion with
                    fashion podcaster Favour</h4>

                <p>
                    One of the top fashion podcasters on Voxclip, the
                    CEO of Fav designsco, will be speaking with us t...
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}
const News3 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg4} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Punch News interview with CEO
                    on Voxclips's uprising</h4>

                <p>
                    The CEO of Voxclips, Mark Essien, was interviwed
                    on Friday 5th October, 2022 on the uprising of V...
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}
const News4 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg5} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Voxclips features in Blooming
                    business</h4>

                <p>
                    The number of podcasters in Nigeria could essentially be counted ten years ago; the mediu...
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}
const News5 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg6} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Voxclips celebrates all staffs that
                    are fathers</h4>

                <p>
                    Voxclip hosts a special event to honor all fathers in
                    the company, and presentations by well-known...
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}
const News6 = () => {
    return (
        <div className={styles.newscard}>
            <div className={styles.newscard_image}><img src={newsImg7} alt="" /></div>
            <div className={styles.newscard_text}>
                <span className={styles.date}>
                    <img src={calendar} alt="" /> Nov 12, 2022
                </span>

                <h4>Why is Voxclips reinventing
                    itself?</h4>

                <p>
                    Voxclip is redefining itself as a result of the podcast industry's explosive expansion, which h...
                </p>

                <a href="#">Read now</a>
            </div>
        </div>
    )
}
