
function Draw(props){

    
    function run(){
        props.click();
    }
    
    return(

        <div className="winLose">
            DRAW
            <div id="winpa" onClick={run}>PLAY AGAIN</div>
        </div>
    );
}

export default Draw;