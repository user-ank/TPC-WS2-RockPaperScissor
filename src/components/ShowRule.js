import Modal from './Modal';
import Rule from './Rule';
import { useState } from 'react';


function ShowRule(){
	
    const [showModal, setShow] = useState(false)

	return (
		<div>
	
			<Rule onClick={()=>setShow(true)} />
			<Modal show={showModal} onCancel={()=>setShow(false)} />
		</div>
	);
}

export default ShowRule;
