import Selected from './Selected';
import House from './House';
import Draw from './Draw';
import Win from './Win';
import Lose from './Lose';



function Result(props) {

    

    let houseAns = Math.floor(Math.random() * 3);

    let winLose;
    if (props.selProp === 'rock') {
        if (houseAns === 0)
            winLose = <Draw click={props.click} />
        else if(houseAns === 1)
            winLose = <Lose click={props.click} />
        else
        {
            winLose = <Win click={props.click} />
            props.onWin();
        }
    }
    else if(props.selProp === 'paper')
    {
        if (houseAns === 0)
        {
            winLose = <Win click={props.click} />
            props.onWin();
            
        }
        else if(houseAns === 1)
            winLose = <Draw click={props.click} />
        else
            winLose = <Lose click={props.click} />
    }
    else if(props.selProp === 'scissor')
    {
        if (houseAns === 0)
            winLose = <Lose click={props.click} />
        else if(houseAns === 1)
        {
            winLose = <Win click={props.click} />
            props.onWin();
            
        }
        else
            winLose = <Draw click={props.click} />
    }


    return (
        <div id="result">
            <Selected selProp={props.selProp} />
          
            <>
                {winLose}
            </>
            <House houseAns={houseAns} />
            
            
        </div>
    );
}

export default Result;