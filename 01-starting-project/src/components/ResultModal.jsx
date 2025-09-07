import { useRef, useImperativeHandle } from "react"

export default function ResultModal( {ref, result, targetTime} ) {
    const diaLog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                diaLog.current.showModal();
            }
        };
    });

    return <dialog ref={diaLog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with X seconds left.</p>

        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}