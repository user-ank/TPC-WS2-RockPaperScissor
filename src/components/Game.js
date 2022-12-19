import Select from './Select';
import Result from './Result';
import Rule from './Rule';
import Modal from './Modal';
import { useState } from 'react';



function Game(props){


    const [state, changeState] = useState(true);
    const [shape, changeShape] = useState();

    function changeToFlase(select){
        changeState(false);
        changeShape(select);
    }
    function changeToTrue(){
        changeState(true);
    }
        
    const [showModal, setShow] = useState(false);

    return(
        <div id="game">
            {state ? <Select stateProp={state} click={changeToFlase}/> : <Result onWin={props.onWin} click={changeToTrue} selProp={shape}/>}
            
        </div>
    );
}

export default Game;

