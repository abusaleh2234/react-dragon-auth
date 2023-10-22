import { FaRegCalendarMinus } from "react-icons/fa";

const NewsCard = ({news}) => {

    const {thumbnail_url, image_url, author, title} = news
    // console.log(news)
    return (
        <div>
            <div className=" w-full bg-base-100 mb-4">
                <figure><img className="rounded-lg mb-2" src={image_url} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-base font-semibold">{title}</h2>
                    <div className="card-actions justify-end">
                        <span><FaRegCalendarMinus></FaRegCalendarMinus></span>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;