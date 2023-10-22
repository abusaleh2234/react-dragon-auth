
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";


const LeftSideNav = ({newses}) => {
    const [categoris, setCategori] = useState([])
    // const [newses, setnewsws] = useState([])

    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategori(data))
    },[])

    // useEffect(() => {
    //     fetch("news.json")
    //     .then(res => res.json())
    //     .then(data => setnewsws(data))
    // },[])
    // console.log(categoris)
    // console.log(newses)
    return (
        <div className="">
            <h2 className="text-2xl font-semibold text-[#403F3F] py-6">All Caterogy</h2>
            <div className="mb-5">
            {
                categoris?.map(categori => <Link key={categori.id} 
                className="block pl-8 py-3 transition duration-300 hover:bg-[#E7E7E7]"
                to={``}
                >{categori.name}</Link>)
            }
            </div>
            <div className="">
                {
                    newses.slice(0,3)?.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;