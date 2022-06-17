import { useSelector } from 'react-redux';
import cartPic from "./cartPic.png";

function Header(){
    const theTotal = useSelector(store => store.runningTotal)

    return(
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <div className="headerCart">
            <img src={cartPic} style={{width:20 }}/>
            <h3>Cart Total: {theTotal.total}</h3>
            
            </div>
        </header>
    )
}
export default Header;