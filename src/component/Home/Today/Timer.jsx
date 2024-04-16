import { useCallback, useEffect, useState } from "react";


const Timer3 = () => {
    
const [countDownTime, setCountDownTIme] = useState({
        days: 23,
        hours: 10,
        minutes: 13,
        seconds: 46,
});
const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
};
const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() - countDownTime.days,
      customDate.getHours() - countDownTime.hours,
      customDate.getMinutes() - countDownTime.minutes,
      customDate.getSeconds() - countDownTime.seconds
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
}, []);
useEffect(() => {
    startCountDown();
}, [startCountDown]);

return (
    <div className="pb-10">
    <div className="flex flex-col items-center justify-center w-full h-full  ">
        <div className="flex flex-row justify-end gap-0 sm:gap-8">
            <div className="flex flex-col relative pb-1 me-1" >
                <div className=" flex flex-col 
                sm:w-20 sm:h-20 
                lg:w-20 lg:h-20 
                justify-center items-center rounded-lg">
                    <span className="text-[black] text-xs sm:text-xl text-center capitalize mb-4">
                        {countDownTime?.days === 1 ? "Day" : "Days"}
                    </span>
                    <span className="lg:text-3xl sm:text-3xl text-xl font-semibold text-[black]">
                        {countDownTime?.days}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center pt-6">
                <span className="text-2xl font-bold text-red-500">:</span>
            </div>
            <div className="flex flex-col relative pb-1">
            <div className=" flex flex-col 
                sm:w-20 sm:h-20 
                lg:w-20 lg:h-20 
                justify-center items-center rounded-lg">
                    <span className="text-[black] text-xs sm:text-xl text-center capitalize mb-4">
                        {countDownTime?.hours === 1 ? "Hour" : "Hours"}
                    </span>
                    <span className="lg:text-3xl sm:text-3xl text-xl font-semibold text-[black]">
                        {countDownTime?.hours}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center pt-6">
                <span className="text-2xl font-bold text-red-500">:</span>
            </div>
            <div className="flex flex-col relative pb-1">
            <div className=" flex flex-col 
                sm:w-20 sm:h-20 
                lg:w-20 lg:h-20 
                justify-center items-center rounded-lg">
                    <span className="text-[black] text-xs sm:text-xl text-center capitalize mb-4">
                        {countDownTime?.minutes === 1 ? "Minute" : "Minutes"}
                    </span>
                    <span className="lg:text-3xl sm:text-3xl text-xl font-semibold text-[black]">
                        {countDownTime?.minutes}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-center pt-6">
                <span className="text-2xl font-bold text-red-500">:</span>
            </div>
            <div className="flex flex-col relative pb-1">
            <div className=" flex flex-col 
                sm:w-20 sm:h-20 
                lg:w-20 lg:h-20  
                justify-center items-center rounded-lg">
                    <span className="text-[black] text-xs sm:text-xl text-center capitalize mb-4">
                        {countDownTime?.seconds === 1 ? "Second" : "Seconds"}
                    </span>
                    <span className="lg:text-3xl sm:text-3xl text-xl font-semibold text-[black]">
                        {countDownTime?.seconds}
                    </span>
                </div>
            </div>
        </div>
    </div>
    </div>
);
};
export default Timer3;
