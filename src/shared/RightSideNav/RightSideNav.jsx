import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import qZoon1 from "../../assets/qZone1.png"
import qZoon2 from "../../assets/qZone2.png"
import qZoon3 from "../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div className='space-y-6'>
            <div className="p-4 space-y-3">
                <h2 className="text-2xl font-semibold text-[#403F3F]">Login With</h2>
                <button className='btn btn-outline w-full flex items-center gap-2 text-xl font-medium'>
                    <FaGoogle></FaGoogle>
                    Google</button>
                <button className='btn btn-outline w-full flex items-center gap-2 text-xl font-medium'>
                    <FaGithub></FaGithub>
                    Github</button>

            </div> 
            <div className="p-4 space-y-3">
                <h2 className="text-2xl font-semibold text-[#403F3F]">Find Us On</h2>
                <div className="">
                    <a className='text-lg font-medium flex items-center gap-4 border rounded-t-lg p-4' href="" ><FaFacebook></FaFacebook> Facebook </a>
                    <a className='text-lg font-medium flex items-center gap-4  border-x p-4' href="" ><FaTwitter></FaTwitter> Twitter </a>
                    <a className='text-lg font-medium flex items-center gap-4 border rounded-b-lg p-4' href="" ><FaInstagram></FaInstagram> Instagram </a>
                </div>

            </div>
            <div className="p-4 space-y-3 bg-[#F3F3F3]">
                <h2 className="text-2xl font-semibold text-[#403F3F]">Q-Zone</h2>
                <div className="">
                    <img src={qZoon1} alt="" />
                    <img src={qZoon2} alt="" />
                    <img src={qZoon3} alt="" />
                </div>

            </div>
        </div>
    );
};

export default RightSideNav;