

function Rock(props) {
    function pass(){
        
        if(props.stateProp)
            props.click('rock');
        
    }
    return (

        <div id="rock" className={props.list} onClick={pass}>
            <img className={props.imgList} src={require('./images/icon-rock.svg').default} alt='mySvgImage' />
        </div>

    );
}

export default Rock;