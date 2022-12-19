
function Lose(props){

    function run(){
        props.click();
    }
    
    return(

        <div className="winLose">
            You Lose
            <div id="losepa" onClick={run}>Play Again</div>
        </div>
    );
}

export default Lose;