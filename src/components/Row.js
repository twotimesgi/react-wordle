import './Row.css';
function Row({guess}) {
    const tiles = []
    const CHARS = 5;

    for (let i = 0; i < CHARS; i++) {
        tiles.push(<div key={i} className="tile">{guess != null ? guess[i] : '' }</div>)
    }
    return (
        <div className='row'>
            {tiles}
        </div>
    );
}

export default Row;
