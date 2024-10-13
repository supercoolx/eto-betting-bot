import { useEffect, useState } from "react";
import MyImage from "@/components/ui/Image";
import Link from "@/components/Link";

const Home = () => {
    const bgUrl = '/imgs/pages/splash.png';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = bgUrl;

        img.onload = () => {
            setLoading(false);
        };
    });


    return (
        <div
            style={{ backgroundImage: loading ? 'none' : `url(${bgUrl})` }}
            className="w-screen flex flex-col items-center justify-between h-screen bg-cover bg-no-repeat bg-center bg-fixed pt-[10vh] pb-8 px-[21px] transition-all duration-300">
            <MyImage width={235} height={141} src="/imgs/logo.png" />
            <Link to="/game" className="flex items-center justify-center font-bold text-[20px] w-[350px] h-[79px] bg-gradient-to-r from-[#054D7D] to-[#D75070] rounded-[25px] btn-anim">TAP TO CONTINUE</Link>
        </div>
    )
}

export default Home;