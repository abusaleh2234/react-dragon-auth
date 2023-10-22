import img from "../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const PageHeader = () => {
    return (
        <div>
            <div className="text-center py-6">
                <div className="flex justify-center mb-4">
                    <img src={img} alt="" />
                </div>
                <p className="text-lg font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
                <p className="text-xl font-medium text-[#706F6F] mt-[6px]">
                    {/* <span className="text-[#403F3F]">Sunday,</span> */}
                    {moment().format(`dddd, MMMM D, YYYY`)}
                </p>
            </div>
            <div className="flex gap-4 items-center px-4 py-2 bg-stone-100">
                <button className="btn btn-error">Latest</button>
                <Marquee speed={80} pauseOnHover={true} >
                    <Link className="mr-6" to="/">I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-6" to="/">I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-6" to="/">I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default PageHeader;