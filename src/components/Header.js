import Score from './Score';

function Header() {
    return (
        <div id="header">
          
            <img id="nameLogo" src={require('./images/logo.svg').default} alt='mySvgImage' />
            <Score />
        </div>
    );
}

export default Header;