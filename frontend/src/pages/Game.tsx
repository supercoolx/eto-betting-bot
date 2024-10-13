import { useEffect, useState } from 'react';
import API from '@/libs/API';
import { useInitData } from '@telegram-apps/sdk-react';

import Image from "@/components/ui/Image";
import TapEffect, { TapEffectProps } from '@/components/ui/TapEffect';
import Footer from "@/components/Footer";

const Game = () => {
    const user = useInitData()!.user!;
    const [point, setPoint] = useState(0);
    const [earnPerTap, setEarnPerTap] = useState(1);

    const [effects, setEffects] = useState<TapEffectProps[]>([]);
    
    useEffect(() => {
        API.get(`/users/get/${user.id}`).then(res => {
            setPoint(res.data.point);
            setEarnPerTap(res.data.earnPerTap);
        }).catch(console.error);
    }, [user]);

    const handleTap = async (e: MouseEvent) => {
        e.preventDefault();

        const { pageX, pageY } = e;
        const newTapEffect: TapEffectProps = {
            id: Date.now(),
            left: pageX,
            top: pageY,
            text: '+' + earnPerTap
        };
        // Add the new +1 to the state array
        setEffects((prev) => [...prev, newTapEffect]);
        // Remove the +1 after 1 second
        setTimeout(() => {
            setEffects((prevPlusOnes) =>
                prevPlusOnes.filter((plusOne) => plusOne.id !== newTapEffect.id)
            );
        }, 1000); // 1 second animation time
        
        const res = await API.put('/users/tap', {userid: user.id});
        if(res.data.success) {
            setPoint(res.data.point);
        }
    }

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-[#C43256] pb-[150px]">
            <div className="w-full flex justify-between items-center pl-[13px] pr-[23px]">
                <Image src="/imgs/logo.png" width={89} height={53} />
                <div className="bg-white/20 rounded-[10px] w-[49px] h-[49px] flex justify-center items-center">
                    <Image src="/imgs/icons/wallet.png" width={45} height={45} />
                </div>
            </div>
            <div className="flex items-center gap-[7px]">
                <Image src="/imgs/icons/token.png" width={32} height={32} />
                <span className="font-bold text-[32px]">{ point.toLocaleString() }</span>
            </div>
            <div className="flex flex-col items-center justify-around flex-1">
                <div className="">
                    <Image onClick={handleTap} className="max-h-[47vh] max-w-[292px] transition-transform duration-300 active:scale-90 hover:cursor-pointer" src="/imgs/pages/home.png" />
                </div>
                <span className="w-[191px] h-[45px] rounded-full bg-[#000000B3] font-bold text-[15px] flex items-center justify-center leading-none">TAP TO COLLECT</span>
            </div>
            { effects.map(effect => <TapEffect key={effect.id} left={effect.left} top={effect.top} text={effect.text} />) }
            <Footer />
        </div>
    )
}

export default Game;