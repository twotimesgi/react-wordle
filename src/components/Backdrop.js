import "./Backdrop.css";
function Backdrop({show}){
    if(show){
        return (
            <div className="backdrop"></div>
        )
    }
}

export default Backdrop;