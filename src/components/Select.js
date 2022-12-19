import Rock from './Rock';
import Paper from './Paper';
import Scissor from './Scissor';


function Select(props){
    
    return(
        <div id='select'>
            <span id="selectText">Select</span> 
            <Rock stateProp={props.stateProp} click={props.click} list='item rockselect' imgList='img'/>
            <Paper stateProp={props.stateProp} click={props.click} list='item paperselect' imgList='img'/>
            <Scissor stateProp={props.stateProp} click={props.click} list='item scissorselect' imgList='img'/>
        </div>
    );
}

export default Select;