import Rock from './Rock';
import Paper from './Paper';
import Scissor from './Scissor';

let arr = [<Rock list='item rockselect selected' imgList='img imgSelected'/>,
<Paper list='item paperselect selected' imgList='img imgSelected'/>, 
 <Scissor list='item scissorselect selected' imgList='img imgSelected'/>];

function House(props){
    
    
    let shape = (arr[props.houseAns]); 

   
    return(
        <div id="house" className='selectedCont'>
            THE HOUSE PICKED
            {shape}
        </div>
    );
}

export default House;