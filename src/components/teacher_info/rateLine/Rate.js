import { useSelector } from 'react-redux';
import { selectTotalVoted } from '../../../features/teacher/teacherSlice';

export default function Rate(props) {
    const totalVoted = useSelector(selectTotalVoted)

    const {rate, voted, power} = props;
    let size = voted / totalVoted

  return (
    <div className={`rate ${power} unselectable`} style={{flex: size}} title={`Студентів проголосувало: ${voted}`}>
        <span className="number">
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
