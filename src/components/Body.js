import Game from './Game';
import Header from './Header';

function Body() {
	
	let val = 0;

	function increment(){
		val++;
		let el = document.getElementById('score');
		el.innerHTML = val;
	}

	return (
		<div>
			<Header  />
			<Game onWin={increment} />
		</div>
	);
}

export default Body;
