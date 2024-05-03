function Progress({index, numQuestions, points, maxPossiblePoints, answer}) {
    return (
        <header className="progress">
            <progress max={numQuestions} value=
            // if there is no answer then its false
            {index + Number(answer !== null)}/>
        <p>Question <strong> {index +1}</strong>/ {numQuestions}</p>
        <p><strong> {points}</strong>/ {maxPossiblePoints}</p>
        </header>
    )
}

export default Progress
