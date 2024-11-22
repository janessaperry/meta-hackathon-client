import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Stories from "../../components/Stories/Stories";
import postImage1 from "../../assets/images/home-image-1.webp";
import postImage2 from "../../assets/images/home-image-2.webp";



export default function HomePage(){
    return (
        <div style={{position: "relative"}}>
            <Header />
            <Stories />
            <Posts postImage={postImage2}/>
            <Posts postImage={postImage1}/>
            <Footer />
        </div>
    )
}