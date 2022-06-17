import DisplayPizza from "./DisplayPizza";
import { useSelector } from 'react-redux'

function PizzaList(){

    const pizza = useSelector(store => store.pizzaList)

    return(
        <>
        <h3>Step 1: Select Your Pizza</h3>
        <div className="outter-pizza-div">
            {pizza.map((item, i) => {
            return <DisplayPizza 
            key={i}
            pizzaList={item}/>
        })}
       </div>
        </>
    )
}
export default PizzaList;