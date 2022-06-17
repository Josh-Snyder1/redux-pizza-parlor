import DisplayPizza from "./DisplayPizza";
import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function PizzaList(){

    const history = useHistory();
    const pizza = useSelector(store => store.pizzaList)

    return(
        <>
        <h3>Step 1: Select Your Pizza</h3>
        <ul>
            {pizza.map((item, i) => {
            return <DisplayPizza 
            key={i}
            pizzaList={item}/>
        })}
        {/* <DisplayPizza pizzaList={pizza}/> */}
       </ul>
       <button onClick={() => history.push('/customer')}>NEXT</button>
        </>
    )
}
export default PizzaList;