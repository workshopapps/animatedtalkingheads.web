import "./styles.css"
import newsImg2 from "../Images/news-image2.png"
import calendar from "../Images/calendar-icon.png"

export default function NewsCard() {
    return (
        <div className="newscard-box">
                <News />
                <News />
                <News />
                <News />
                <News />
                <News />
        </div>
    )
}

const News = () => {
    return (
        <div className="newscard">
             <div className="newscard-image"><img src={newsImg2} alt="" /></div>
            <div className="newscard-text">
                <span className="date">
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