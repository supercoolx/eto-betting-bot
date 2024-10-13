import Image from "@/components/ui/Image";
import Link from "@/components/Link";

const Home = () => {

    return (
        <div className="w-screen flex flex-col items-center justify-between h-screen bg-[url('/imgs/pages/splash.png')] bg-cover bg-no-repeat bg-center bg-fixed pt-[10vh] pb-8 px-[21px]">
            <Image width={235} height={141} src="/imgs/logo.png" />
            <Link to="/game" className="flex items-center justify-center font-bold text-[20px] w-[350px] h-[79px] bg-gradient-to-r from-[#054D7D] to-[#D75070] rounded-[25px] btn-anim">TAP TO CONTINUE</Link>
        </div>
    )
}

export default Home;