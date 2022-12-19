import Rock from './Rock';
import Paper from './Paper';
import Scissor from './Scissor';



function Selected(props) {

    
    if (props.selProp === 'rock')
    {   
        
        let className ='item rockselect selected';
        let imgl = 'img imgSelected';
        return (
            <div id='selected' className='selectedCont'>
                YOU PICKED
                <Rock list={className} imgList={imgl}/>
            </div>
        );
    }
    else if (props.selProp === 'paper')
    {
        let className ='item paperselect selected';
        let imgl = 'img imgSelected';
        return (
            <div id='selected' className='selectedCont'>
                YOU PICKED
                <Paper list={className} imgList={imgl}/>
            </div>
        );
    }
    else if (props.selProp === 'scissor')
    {
        let className ='item scissorselect selected';
        let imgl = 'img imgSelected';
        return (
            <div id='selected' className='selectedCont'>
                YOU PICKED
                <Scissor list={className} imgList={imgl}/>
            </div>
        );
    }
   

}

export default Selected;