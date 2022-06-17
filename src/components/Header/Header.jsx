import { useSelector } from 'react-redux';
import cartPic from "./cartPic.png";

function Header(){
    const theTotal = useSelector(store => store.runningTotal)

    const totalCount = useSelector(store => store.cart.length)

    return(
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <div className="headerCart">
            <p className='item-count'>{
                totalCount ?
                    <span>({totalCount})</span>
                    :
                    <span> </span>
            }</p>
            <img src={cartPic}/>

            {/* Choose whether or not the cart total is shown */}
            {theTotal.total ?
                <h3>Cart Total: <span>{
                    theTotal.total.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"}
                    )
                }</span></h3>
                :
                null
            }

            </div>
        </header>
    )
}
export default Header;