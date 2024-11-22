import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Stories from "../../components/Stories/Stories";


export default function HomePage(){
    return (
        <div>
            <Header />
            <Stories />
            <Posts />
        </div>
    )
}