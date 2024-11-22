import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Stories from "../../components/Stories/Stories";


export default function HomePage(){
    return (
        <div style={{position: "relative"}}>
            <Header />
            <Stories />
            <Posts />
            <Posts />
            <Footer />
        </div>
    )
}