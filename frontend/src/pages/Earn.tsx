import { useState, useEffect, Fragment } from "react";
import { useInitData, useUtils } from "@telegram-apps/sdk-react";
import { Modal, Placeholder, Button } from '@telegram-apps/telegram-ui';
import Countdown from 'react-countdown';
import { toast } from "react-toastify";

import API from "@/libs/API";
import { LINK, PLATFORM } from "@/libs/constants";
import Image from '@/components/ui/Image';
import Footer from "@/components/Footer";

const Earn = () => {
    const user = useInitData()!.user!;
    const utils = useUtils();

    const [isFollowingX, setFollowingX] = useState(false);
    const [isJoinedTelegramChannel, setJoinedTelegramChannel] = useState(false);
    const [dailyRemainSecond, setDailyRemainSecond] = useState(0);

    const [openDailyClaimModal, setOpenDailyClaimModal] = useState(false);
    const [openJoinTGModal, setOpenJoinTGModal] = useState(false);
    const [openFollowXModal, setOpenFollowXModal] = useState(false);

    useEffect(() => {
        API.get(`/users/get/${user.id}`).then(res => {
            setFollowingX(res.data.xFollowed);
            setJoinedTelegramChannel(res.data.telegramChannelJoined);
        }).catch(console.error);
        handleClaimDailyReward();
    }, [user])

    const handleClaimDailyReward = (status = 0) => {
        API.post(`/users/claim/daily`, { userid: user.id, status }).then(res => {
            if (res.data.success) {
                setDailyRemainSecond(res.data.ms);
                if (res.data.status == 'success') {
                    toast('Claimed successfully.');
                    setOpenDailyClaimModal(false);
                }
            } else {
                toast.error(res.data.msg);
            }
        }).catch(console.error);
    }

    const handleTGChannelLink = () => {
        utils.openTelegramLink(LINK.TELEGRAM_CHANNEL);
    }

    const handleXLink = () => {
        API.post('/users/follow', { userid: user.id, platform: PLATFORM.X }).catch(console.error);
        utils.openLink(LINK.X);
    }

    const handleJoinTelegramChannel = () => {
        API.post('/users/jointg', {
            userid: user.id,
            type: 'channel'
        }).then(res => {
            if (res.data.success) {
                setJoinedTelegramChannel(true);
                setOpenJoinTGModal(false);
                toast(res.data.msg);
            }
            else toast.error(res.data.msg);
        }).catch(console.error);
    }

    const handleFollowX = () => {
        API.post('/users/followx', { userid: user.id, username: user.username }).then(res => {
            if (res.data.success) {
                setFollowingX(true);
                setOpenFollowXModal(false);
                toast(res.data.msg);
            }
            else toast.error(res.data.msg);
        }).catch(console.error);
    }

    return (
        <div className="px-3 flex flex-col items-center overflow-y-auto pt-5 pb-[150px]">
            <div className="relative w-full h-[164px] rounded-[10px] overflow-hidden flex items-center justify-center">
                <Image className="rounded-[10px] opacity-50" src="/imgs/pages/earn.png" />
                <h1 className="absolute w-full text-2xl font-bold text-center -translate-x-1/2 top-1/3 left-1/2"><span className="text-[#FFC100]">EARN</span> MORE TOKENS</h1>
            </div>
            <div className="mt-[37px] w-full">
                <h2 className="text-base font-bold">Daily reward</h2>
                <div onClick={() => dailyRemainSecond > 0 || setOpenDailyClaimModal(true)} className="mt-[7px] bg-[#222131] h-[62px] flex items-center justify-between px-[14px] rounded-[15px] cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Image src="/imgs/icons/daily.png" width={39} height={43} />
                        <span className="text-[15px]">Daily Reward</span>
                    </div>
                    <div>
                        { dailyRemainSecond > 0 && <Image src="/imgs/icons/check.png" width={20} height={20} />}
                    </div>
                </div>
            </div>
            <div className="mt-[18px] w-full">
                <h2 className="text-base font-bold">Special</h2>
                <div onClick={() => isJoinedTelegramChannel || setOpenJoinTGModal(true)} className="mt-[7px] bg-[#222131] h-[62px] flex items-center justify-between px-[14px] rounded-[15px] cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Image src="/imgs/icons/telegram.png" width={42} height={42} />
                        <div className="">
                            <span className="text-[15px]">Join Telegram Community</span>
                            <div className="flex items-center gap-[2px]">
                                <Image src="/imgs/icons/token.png" width={12} height={12} />
                                <span className="text-[15px] text-[#FFC100]">3000</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        { isJoinedTelegramChannel && <Image src="/imgs/icons/check.png" width={20} height={20} /> }
                    </div>
                </div>
                <div onClick={() => isFollowingX || setOpenFollowXModal(true)} className="mt-[21px] bg-[#222131] h-[62px] flex items-center justify-between px-[14px] rounded-[15px] cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Image src="/imgs/icons/x.png" width={45} height={45} />
                        <div className="">
                            <span className="text-[15px]">Join X Community</span>
                            <div className="flex items-center gap-[2px]">
                                <Image src="/imgs/icons/token.png" width={12} height={12} />
                                <span className="text-[15px] text-[#FFC100]">3000</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        { isFollowingX && <Image src="/imgs/icons/check.png" width={20} height={20} /> }
                    </div>
                </div>
            </div>
            <div className="mt-[18px] w-full">
                <h2 className="text-base font-bold">Bonuses</h2>
                <div className="mt-[7px] bg-[#222131] h-[62px] flex items-center justify-between px-[14px] rounded-[15px] cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Image src="/imgs/icons/clan.png" width={40} height={46} />
                        <div className="">
                            <span className="text-[15px]">Join to Clan</span>
                            <div className="flex items-center gap-[2px]">
                                <Image src="/imgs/icons/gem.png" width={12} height={12} />
                                <span className="text-[15px] text-[#FFC100]">3000</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Image src="/imgs/icons/check.png" width={20} height={20} /> */}
                    </div>
                </div>
            </div>
            <Modal
                header={<Modal.Header />}
                open={openDailyClaimModal}
                onOpenChange={setOpenDailyClaimModal}
            >
                <Placeholder
                    header={<span className="text-black dark:text-white">{dailyRemainSecond > 0 ? 'You can claim just once per day.' : 'Claim Daily Reward'}</span>}
                    action={
                        dailyRemainSecond > 0 ?
                            <Countdown date={Date.now() + dailyRemainSecond} intervalDelay={1000} precision={3} onComplete={() => setDailyRemainSecond(0)} renderer={(props) => <span>{props.hours.toString().padStart(2, '0')} : {props.minutes.toString().padStart(2, '0')} : {props.seconds.toString().padStart(2, '0')}</span>} /> :
                            <Button onClick={() => handleClaimDailyReward(1)} size="m" stretched>Claim</Button>
                    }
                />
            </Modal>
            <Modal
                header={<Modal.Header />}
                open={openJoinTGModal}
                onOpenChange={setOpenJoinTGModal}
            >
                <Placeholder
                    header={<span className="text-black dark:text-white">Join Telegram Community</span>}
                    action={
                        <Fragment>
                            <Button onClick={handleTGChannelLink} size="m" stretched>Join</Button>
                            <Button onClick={handleJoinTelegramChannel} size="m" stretched>Complete</Button>
                        </Fragment>
                    }
                />
            </Modal>
            <Modal
                header={<Modal.Header />}
                open={openFollowXModal}
                onOpenChange={setOpenFollowXModal}
            >
                <Placeholder
                    header={<span className="text-black dark:text-white">Join X Community</span>}
                    action={
                        <Fragment>
                            <Button onClick={handleXLink} size="m" stretched>Follow</Button>
                            <Button onClick={handleFollowX} size="m" stretched>Complete</Button>
                        </Fragment>
                    }
                />
            </Modal>
            <Footer />
        </div>
    )
}

export default Earn;