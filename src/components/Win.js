
function Win(props){
    
    function run(){
        props.click();
    }
    
    return(

        <div className="winLose">
            YOU WIN
            <div id="winpa" onClick={run}>PLAY AGAIN</div>
        </div>
    );
}

export default Win;