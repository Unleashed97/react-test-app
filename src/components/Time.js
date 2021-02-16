import React, {useState} from 'react'

function Time(){

    // let [time, setTime] = useState('')
    let time;
    
    function currentTime(){
        const date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        time = `${h}:${m}:${s}`
        // setTime(time = `${h}:${m}:${s}`)
        return time
    }
    // setInterval(currentTime, 1000);
    

    return(
        <h1 className="sidebar__time">{`It's ${currentTime()} now`}</h1>
    )
}

export default Time