function Modal(props){

    if(!props.show)
    {
        return null;
    }
    return(
        <div className="modal">
            <div className="modalContent">
                <div className='ruleHead'>
                    RULES
                    <img className="closeImg" onClick={props.onCancel} src={require('./images/icon-close.svg').default} alt='mySvgImage' />
                </div>
                
                <img className="rulesImg"  src={require('./images/image-rules.svg').default} alt='mySvgImage' />
            </div>
        </div>
    );
}

export default Modal;