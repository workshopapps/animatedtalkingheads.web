import { Link } from "react-router-dom";
import styles from './press-header.module.scss'
// Images
import calendar from "../../../components/pages/press/assets/calendar-icon.png"
import video from "../../../components/pages/press/assets/video-icon.png"

const Header = () => {
    return (
        <div className={styles.press_header}>
            <div className={styles.header_img}>
                <div className={styles.overlay}>

                    <div className={styles.overlay2}>
                        <h1>Press Room</h1>

                        <div className={styles.container}>
                            <span className={styles.date}>
                                <img src={calendar} alt="" />
                                Nov 12, 2022</span>
                            <h3>How this company is making Podcasts way interesting</h3>

                            <p>
                                Voxclips is a unique web based site which helps Podcasters to enhance their recorded audio series with 2D talking head characters to be engaging, interesting and time spending.
                            </p>

                            <Link to={'watch-now'} className={styles.btn}>
                                <img src={video} alt="video-icon" />
                                Watch now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;