// import { useState, useEffect } from "react";
// import { useInitData } from "@telegram-apps/sdk-react";

// import API from "@/libs/API";
import Image from '@/components/ui/Image';
import Footer from "@/components/Footer";

const Boost = () => {
    // const initData = useInitData();

    return (
        <div className="px-3 flex flex-col items-center overflow-y-auto pt-5 pb-[150px]">
            <div className="relative w-full h-[149px] rounded-[10px] overflow-hidden flex items-center justify-center">
                <Image className="rounded-[10px] opacity-75" src="/imgs/pages/boost.png" />
                <h1 className="absolute w-full text-2xl font-bold text-center -translate-y-1/2 top-1/2 right-6">
                    <p className="text-[#FFC100] text-right leading-none">BOOST</p>
                    <p className="leading-none text-right">YOUR</p>
                    <p className="leading-none text-right">BOT</p>
                </h1>
            </div>
            <div className="mt-2 w-full grid grid-cols-2 gap-[6px]">
                <div className="h-16 px-4 py-3 rounded-[10px] bg-[#1E1E2A]">
                    <h2 className="text-[15px] font-medium leading-none">Damages</h2>
                    <span className="text-[15px] text-[#908E98] font-medium">+4</span>
                </div>
                <div className="h-16 px-4 py-3 rounded-[10px] bg-[#1E1E2A]">
                    <h2 className="text-[15px] font-medium leading-none">Energy Cap</h2>
                    <span className="text-[15px] text-[#908E98] font-medium">+7</span>
                </div>
            </div>
            <div className="mt-[27px] w-full">
                <h2 className="text-base font-bold">Free Boost</h2>
                <div className="mt-[7px] grid grid-cols-2 gap-[6px]">
                    <div className="bg-[#222131] h-[62px] flex items-center gap-3 px-[14px] rounded-[15px]">
                        <div className="w-[42px] h-[42px] rounded-[15px] bg-[#7D7D7D] flex items-center justify-center">
                            <Image src="/imgs/icons/harmmer.png" width={36} height={36} alt="" />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <h2 className="text-[15px] leading-none">Damages</h2>
                            <span className="text-[15px] text-[#908E98] leading-none">1/2</span>
                        </div>
                    </div>
                    <div className="bg-[#222131] h-[62px] flex items-center gap-3 px-[14px] rounded-[15px]">
                        <div className="w-[42px] h-[42px] rounded-[15px] bg-[#7D7D7D] flex items-center justify-center">
                            <Image src="/imgs/icons/charge.png" height={36} alt="" />
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <h2 className="text-[15px] leading-none">Damages</h2>
                            <span className="text-[15px] text-[#908E98] leading-none">3/3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[18px] w-full">
                <h2 className="text-base font-bold">Upgrades</h2>
                <div className="mt-[11px] bg-[#222131] h-[62px] flex items-center gap-[18px] px-[14px] rounded-[15px]">
                    <Image src="/imgs/icons/tools.png" width={34} height={33} alt="" />
                    <div className="">
                        <div className="text-[15px]">Damages</div>
                        <div className="text-[15px] text-[#908E98]">3000</div>
                    </div>
                </div>
                <div className="mt-[21px] bg-[#222131] h-[62px] flex items-center gap-[18px] px-[14px] rounded-[15px]">
                    <Image src="/imgs/icons/energy.png" width={37} height={37} alt="" />
                    <div className="">
                        <div className="text-[15px]">Energy Cap</div>
                        <div className="text-[15px] text-[#908E98]">3000</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Boost;