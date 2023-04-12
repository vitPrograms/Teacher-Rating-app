import React from 'react'
import { weekDays } from '../weekDays'

export default function CommentDate({timestamp}) {
    const date = new Date(timestamp)
    const now = new Date()
    const titleDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, ${weekDays[date.getDay()]} | ${date.getHours()}:${date.getMinutes()}`

    const formatedDate = now-date <= (1000 * 60 * 60 * 24) 
        ? timeSince(now, date) + ' тому'
        : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`

    function timeSince(now, date) {
        var seconds = Math.floor((now - date) / 1000);

        let interval = seconds / 3600;
        if (interval >= 1) {
            const hours = Math.floor(interval)
            let hourlabel = ' годин'
            if(hours === 1) hourlabel = ' година'
            if(hours === 2 || hours === 3 || hours === 4 || hours === 22 || hours === 23 || hours === 24) hourlabel = ' години'
            return hours + hourlabel;
        }

        interval = seconds / 60;
        if (interval >= 1) {
            const minutes = Math.floor(interval)
            let minutelabel = ' хвилин'
            if(minutes === 1) minutelabel = ' хвилина'
            if(minutes === 2 || minutes === 3 || minutes === 4) minutelabel = ' хвилини'
           
            return minutes + minutelabel;
        }
        return "менше хвилини";
    }

    return (
        <div className="comment-date" title={titleDate}>
            {formatedDate}
        </div>
    )
}
