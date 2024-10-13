import { useState, useEffect } from "react";
import { useInitData, useUtils } from "@telegram-apps/sdk-react";
import { toast } from "react-toastify";

import API from "@/libs/API";
import { LINK } from "@/libs/constants";
import Avatar from "@/components/ui/Avatar";
import Image from '@/components/ui/Image';
import Footer from "@/components/Footer";

const Friends = () => {
    const user = useInitData()!.user!;
    const utils = useUtils();

    const [point, setPoint] = useState(0);
    const [friends, setFriends] = useState<any[]>([]);

    const handleClickInviteLink = () => {
        const link = LINK.TELEGRAM_MINIAPP + '?start=' + user.id;
        const shareText = 'Join our telegram mini app.';
        const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(shareText)}`;
        utils.openTelegramLink(fullUrl);
    }

    const handleInviteLinkCopyButton = () => {
        const link = LINK.TELEGRAM_MINIAPP + '?start=' + user.id;
        navigator.clipboard.writeText(link)
            .then(() => toast('Invite link copied!'))
            .catch();
    }

    useEffect(() => {
        API.get(`/users/get/${user.id}`).then(res => {
            setPoint(res.data.point);
        }).catch(console.error);
        API.get('/users/friends/' + user.id).then(res => {
            setFriends(res.data.friends);
        }).catch(err => console.error(err.message));
    }, [user]);

    return (
        <div className="px-3 flex flex-col items-center overflow-y-auto pt-5 pb-[150px]">
            <div className="relative w-full h-[121px] rounded-[10px] overflow-hidden flex items-center justify-center">
                <Image className="rounded-[10px] opacity-75" src="/imgs/pages/friends.jpg" />
                <h1 className="absolute w-full text-2xl font-bold text-center -translate-y-1/2 top-1/2 left-6">
                    <p className="text-[#FFC100] leading-none text-left">INVITE</p>
                    <p className="leading-none text-left">YOUR</p>
                    <p className="leading-none text-left">FRIENDS &</p>
                    <p className="leading-none text-left">EARN</p>
                </h1>
            </div>
            <div className="mt-[21px] w-full grid grid-cols-2 gap-[6px]">
                <div className="flex items-center gap-[15px] h-[73px] px-2 py-3 rounded-[10px] bg-[#1E1E2A]">
                    <Image src="/imgs/icons/user.png" width={39} height={39} />
                    <div className="">
                        <div className="text-[14px] font-medium">Regular Users</div>
                        <div className="text-[14px] text-[#C84D6B] font-medium">10 points</div>
                    </div>
                </div>
                <div className="flex items-center gap-[15px] h-[73px] px-2 py-3 rounded-[10px] bg-[#1E1E2A]">
                    <Image src="/imgs/icons/user-premium.png" width={39} height={39} />
                    <div className="">
                        <div className="text-[14px] font-medium">Premium users</div>
                        <div className="text-[14px] text-[#C84D6B] font-medium">10 points</div>
                    </div>
                </div>
            </div>
            <div className="mt-[35px] w-full">
                <h2 className="text-base font-bold">Earned</h2>
                <div className="mt-[11px] h-20 rounded-[15px] bg-[#C84D6B] flex justify-center items-center gap-2">
                    <Image src="/imgs/icons/token.png" width={50} height={50} />
                    <span className="text-2xl font-medium">{ point.toLocaleString() }</span>
                </div>
                <div className="flex mt-[23px] gap-[10px]">
                    <button onClick={handleClickInviteLink} className="rounded-[15px] w-[210px] h-[53px] bg-gradient-to-r from-[#054D7D] to-[#D75070] font-medium text-base btn-anim">Invite a Friend</button>
                    <button onClick={handleInviteLinkCopyButton} className="rounded-[15px] w-[146px] h-[53px] bg-[#222131] flex items-center justify-center gap-2 border border-[#C84D6B]">
                        <Image src="/imgs/icons/link.png" width={18} height={18} />
                        <span className="text-[#D75070] font-bold text-base">Copy</span>
                    </button>
                </div>
            </div>
            <div className="w-full mt-7">
                <h2 className="text-base font-bold pl-[17px]">List of your friends:</h2>
                <div className="mt-[10px] rounded-[15px] bg-[#222131] py-6 px-3">
                    {/* <p className="text-center text-[#949494] font-medium text-base">You haven't invited anyone yet</p> */}
                    { friends.map((u, key) => (
                        <div key={key} className="flex items-center gap-2">
                            <Avatar userid={u.userid} width={32} height={32} username={u.username} />
                            <div className="flex flex-col justify-center gap-[6px] leading-none">
                                <div className="text-[12px] font-lemon">{ u.firstname }</div>
                                <div className="text-[10px]">{ u.point.toLocaleString() } points</div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Friends;