

function Scissor(props) {
    function pass(){
        
        if(props.stateProp)
            props.click('scissor');
        
    }
    return (

        <div id="scissor" className={props.list} onClick={pass}>
            <img className={props.imgList} src={require('./images/icon-scissors.svg').default} alt='mySvgImage' />
        </div>

    );
}

export default Scissor;