import { useLoaderData } from "react-router-dom";
import PageHeader from "../../component/PageHeader/PageHeader";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import DragonNewsCard from "./DragonNewsCard";
import Footer from "../../component/Footer/Footer";

const Home = () => {

    const newses = useLoaderData()
    // console.log(newses)
    // const nn= useLocation()
    // const hh = useParams()
    // console.log(hh)
    // console.log(nn)
    return (
        <div>
            <PageHeader></PageHeader>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav newses={newses}></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-[#403F3F] py-6">Dragon News</h2>
                    {
                        newses?.slice(1,4)?.map(news => <DragonNewsCard key={news.id} news={news}></DragonNewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;