import NewsCard from "../../components/pages/press/NewsCard";
import Header from "../../components/pages/press/PressHeader";
import TopNews from "../../components/pages/press/TopNews";
import Layout from "../../components/UI/Layout"
import "./styles.module.scss"

const Press = () => {
    return (
        <Layout>
            <Header />
            <TopNews />
            <NewsCard />
        </Layout>
    )
}

export default Press;