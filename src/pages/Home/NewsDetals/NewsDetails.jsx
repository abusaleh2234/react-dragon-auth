import { useParams } from "react-router-dom";
import PageHeader from "../../../component/PageHeader/PageHeader";
import RightSideNav from "../../../shared/RightSideNav/RightSideNav";
import Navbar from "../../../shared/Navbar/Navbar";


const NewsDetails = () => {

    const {id} = useParams()
    return (
        <div>
            <PageHeader></PageHeader>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3">
                <h2 className="text-2xl font-semibold text-[#403F3F] py-6">Dragon News</h2>
                <p>{id}</p>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;