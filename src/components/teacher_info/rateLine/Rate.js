import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { selectTotalVoted } from '../../../features/studentsRate/studentsRateSlice';

export default function Rate(props) {
    const totalVoted = useSelector(selectTotalVoted)

    const {rate, voted, power} = props;
    let size = voted / totalVoted

  return (
    <div className={`rate ${power}`} style={{flex: size}}>
        <span className="number" title={`Студентів проголосувало: ${voted}`}>
            { rate }
        </span>
        {size <= 0.1 ? (
            <span className="voted-user-count">
                <b>{ voted }</b>
            </span>
            ) : (
            <span className="voted-user-count">
                Студентів: <b>{ voted }</b>
            </span>
            )
        }
    </div>
  )
}
