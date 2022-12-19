

function Paper(props) {
    function pass(){
        
        if(props.stateProp)
            props.click('paper');
        
    }
    return (

        <div id="paper" className={props.list} onClick={pass}>
            <img className={props.imgList} src={require('./images/icon-paper.svg').default} alt='mySvgImage' />
        </div>

    );
}

export default Paper;