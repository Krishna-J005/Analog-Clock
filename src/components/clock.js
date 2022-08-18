import { useEffect, useState } from "react";
import './style.css'
const Clock = () => {
    const [time, setTime] = useState(Date.parse(new Date()))
    const [timeFlag, setTimeFlag] = useState(false)
    const [val, setVal] = useState(time)
    useEffect(() => {
        let id = setInterval(() => { setTime(time + 1000) }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [time])
    useEffect(() =>{
        console.log("ghghgh")
        if(!timeFlag){
            if(val !== "" && typeof(val) === 'string') setTime(Date.parse(val))
        } 
    },[timeFlag])
    return (
        <div style={{ display: 'flex'}}>
            <div style={{ width: '25%', marginTop: '5%' }}>
                {timeFlag &&
                    <input
                        className="inputDate"
                        type="datetime-local"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                    >

                    </input>
                }
                <button 
                    className="buttonClass"
                    onClick={(e) => {
                        e.preventDefault()
                        setTimeFlag(prev => !prev)
                    }}
                >
                    {timeFlag ? 'Update Time' : 'Set Time'}
                </button>
            </div>
            <div style={{ flexGrow: 1, margin: '30px' }}>
                <div className="date">Date : {new Date(time).toDateString()}</div>
                <div className="clock">
                    <div
                        className="hour_hand"
                        style={{
                            transform: `rotateZ(${(new Date(time).getHours()) % 12 * 30 + new Date(time).getMinutes() * 0.5}deg)`
                        }}
                    />
                    <div
                        className="min_hand"
                        style={{
                            transform: `rotateZ(${new Date(time).getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className="sec_hand"
                        style={{
                            transform: `rotateZ(${new Date(time).getSeconds() * 6}deg)`
                        }}
                    />
                    <span className="twelve">12</span>
                    <span className="one">1</span>
                    <span className="two">2</span>
                    <span className="three">3</span>
                    <span className="four">4</span>
                    <span className="five">5</span>
                    <span className="six">6</span>
                    <span className="seven">7</span>
                    <span className="eight">8</span>
                    <span className="nine">9</span>
                    <span className="ten">10</span>
                    <span className="eleven">11</span>
                </div>
            </div>

        </div>
    );
}

export default Clock