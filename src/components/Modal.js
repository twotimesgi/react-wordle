import "./Modal.css";
function Modal({gameWon, show}){
    if(show){
        return (
            <div className="modal">
                {gameWon ? 'You won!' : 'You lost!'}
            </div>
        )
    }
}

export default Modal;