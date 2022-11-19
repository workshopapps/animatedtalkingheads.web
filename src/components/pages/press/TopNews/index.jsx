import "./styles.css"
import newsImg1 from "../Images/news-image1.png"
export default function TopNews() {
    return (
        <div className="topnews-section">
            <div className="menu">
                <a href="#" className="active">In the News</a>
                <a href="#">Company Updates</a>
            </div>

            <div className="topnews">
                <div className="topnews-image"><img src={newsImg1} alt="showing mic" /></div>
                <div className="topnews-text">
                    <span className="date">
                        Nov 12, 2022
                    </span>

                    <h3>Go Pro to get more features</h3>

                    <p>
                        When you sign up for our premium plan, you can take advantage of great features, get access to all the amazing 2D characters and customizing tools, and enjoy ad-free podcast.
                    </p>

                    <div className="btn">
                        Read now
                    </div>
                </div>
            </div>

        </div>
    )
}