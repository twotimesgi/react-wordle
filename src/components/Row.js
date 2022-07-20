import './Row.css';
function Row({ guess, solution, isLast }) {
    const tiles = []
    const CHARS = 5;

    for (let i = 0; i < CHARS; i++) {
        let className = 'tile ';
        if (isLast) {
            if (guess && guess[i] === solution[i]) {
                className += ' correct';
            } else if (guess && solution.includes(guess[i])) {
                className += ' semi-correct';
            }else{
                className += ' incorrect';
            }
        }
        tiles.push(<div key={i} className={className}>{guess != null ? guess[i] : ''}</div>)
    }
    return (   
        <div className='row'>
            {tiles}
        </div>
    );
}

export default Row;
