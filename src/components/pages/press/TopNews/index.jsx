import styles from "./styles.module.css"
import newsImg1 from "../Images/news-image1.png"
export default function TopNews() {
    return (
        <div className={styles.topnews_section}>
            <div className={styles.menu}>
                <a href="#" className={styles.active}>In the News</a>
                <a href="#">Company Updates</a>
            </div>

            <div className={styles.topnews}>
                <div className={styles.topnews_image}><img src={newsImg1} alt="showing mic" /></div>
                <div className={styles.topnews_text}>
                    <span className={styles.date}>
                        Nov 12, 2022
                    </span>

                    <h3>Go Pro to get more features</h3>

                    <p>
                        When you sign up for our premium plan, you can take advantage of great features, get access to all the amazing 2D characters and customizing tools, and enjoy ad-free podcast.
                    </p>

                    <div className={styles.btn}>
                        Read now
                    </div>
                </div>
            </div>

        </div>
    )
}