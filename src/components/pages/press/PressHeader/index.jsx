import "./styles.css"
import calendar from "../Images/calendar-icon.png"
import video from "../Images/video-icon.png"


export default function Header() {
    return (
        <div className="press-header">
            <div className="header-img">
                <div className="overlay">

                    <div className="overlay2">
                        <h1>Press Room</h1>

                        <div className="container">
                            <span className="date"> <img src={calendar} alt="" />
                            Nov 12, 2022</span>
                            <h3>How this company is making Podcasts way interesting</h3>

                            <p>
                                Voxclips is a unique web based site which helps Podcasters to enhance their recorded audio series with 2D talking head characters to be engaging, interesting and time spending.
                            </p>

                            <div className="btn"><img src={video} alt="" />
                                Watch now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}