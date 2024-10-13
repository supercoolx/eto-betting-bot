import { useLocation } from "react-router-dom";

import Image from "./ui/Image";
import Link from "@/components/Link";

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <div className="fixed bottom-8 left-[7px] z-[2] w-[calc(100vw-14px)] h-[79px] rounded-[25px] bg-[#000000B3] grid grid-cols-5 pb-[14px] px-4">
            <Link to="/earn" className="flex flex-col items-center justify-end gap-[7px] group">
                <Image src="/imgs/footer/earn.png" width={50} height={37} />
                <span className={`text-[15px] leading-none group-hover:text-[#928FDA] transition-colors duration-200 ${ pathname === '/earn' ? 'text-[#928FDA] font-bold' : '' }`}>Earn</span>
            </Link>
            <Link to="/boost" className="flex flex-col items-center justify-end gap-[8px] group">
                <Image src="/imgs/footer/boost.png" width={40} height={38} />
                <span className={`text-[15px] leading-none group-hover:text-[#928FDA] transition-colors duration-200 ${ pathname === '/boost' ? 'text-[#928FDA] font-bold' : '' }`}>Boost</span>
            </Link>
            <Link to="/game" className="relative flex flex-col items-center justify-end gap-[7px] group">
                <div className="group absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] flex justify-center items-center rounded-full border-[3px] border-[#FFC100] shadow-[0_0_10px_#D9D9D9,inset_0_0_10px_#D9D9D9] hover:w-[80px] hover:h-[80px] transition-all duration-200">
                    <Image className="group-hover:animate-spin" src="/imgs/footer/game.png" width={53} height={53} />
                </div>
                <span className={`text-[15px] leading-none group-hover:text-[#928FDA] transition-colors duration-200 ${ pathname === '/game' ? 'text-[#928FDA] font-bold' : '' }`}>Game</span>
            </Link>
            <Link to="/friends" className="flex flex-col items-center justify-end gap-[9px] group">
                <Image src="/imgs/footer/friends.png" width={56} height={28} />
                <span className={`text-[15px] leading-none group-hover:text-[#928FDA] transition-colors duration-200 ${ pathname === '/friends' ? 'text-[#928FDA] font-bold' : '' }`}>Friends</span>
            </Link>
            <Link to="/bets" className="flex flex-col items-center justify-end gap-[2px] group">
                <Image src="/imgs/footer/bet.png" width={43} height={44} />
                <span className={`text-[15px] leading-none group-hover:text-[#928FDA] transition-colors duration-200 ${ pathname === '/bets' ? 'text-[#928FDA] font-bold' : '' }`}>Bets</span>
            </Link>
        </div>
    )
}

export default Footer;