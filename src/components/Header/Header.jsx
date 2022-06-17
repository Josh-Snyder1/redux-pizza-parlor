import { useSelector } from 'react-redux';
import cartPic from "./cartPic.png";

function Header(){
    const cart = useSelector(store => store.cart)

    return(
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <div className="headerCart">
            <img src={cartPic} style={{width:20 }}/>
            <h3>Cart Total: {cart.total}</h3>
            
            </div>
        </header>
    )
}
export default Header;