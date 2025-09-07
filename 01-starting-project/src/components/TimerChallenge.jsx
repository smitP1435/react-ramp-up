import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime}){
    const timer = useRef();
    const diaLog = useRef();

    const [timmerStarted, setTimmerStarted] = useState(false);
    const [timmerExpired, setTimmerExpired] = useState(false);

    function handleTimerStart() {
        timer.current = setTimeout(() => {
           setTimmerExpired(true);
           diaLog.current.open();
        }, targetTime * 1000);

        setTimmerStarted(true);
    }

    function handleTimerEnd() {
        clearTimeout(timer.current);
    }

    return(
        <>
            <ResultModal ref={diaLog} targetTime={targetTime} result={'Lost'} />
            <section className="challenge">
                <h2>
                    {title}
                </h2>
                {timmerExpired && <p>You lost!!</p>}
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timmerStarted ? handleTimerEnd : handleTimerStart}>
                    {timmerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className="">
                    {timmerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>

            </section>
        </>
    )
}