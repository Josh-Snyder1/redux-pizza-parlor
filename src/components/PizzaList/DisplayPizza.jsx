import { useDispatch } from 'react-redux';
import TotalCost from '../Utilities/TotalCost';

//passing this in as a prop vs doing useSelector makes it easier to work
// with the data. Otherwise it would be very hard to just select a singular item
function DisplayPizza({pizzaList}){

    let total = 0

    const dispatch = useDispatch()

    const addToCart = () => {
        total += Number(pizzaList.price) 
        dispatch(
            { type: "ADD_TO_CART",
              payload: {
                    name: pizzaList.name,
                    price: pizzaList.price,
                    total
                 }
            })
            runningTotal();
        }
    
    const runningTotal = () => {
        dispatch(
          {type: "UPDATE_TOTAL",
           payload: {
               total
           }
        })
    }

    return(
        <>
        <div className="boxContainer">
            <div className="pizzaName">
                {pizzaList.name}
            </div>
                <br></br>
            <div className="ingredients">
                {pizzaList.description}
            </div>
                <br></br>
            <div className="price">
               <TotalCost objList={[pizzaList]}/>
            </div>
                <button type="submit" onClick={addToCart}>Add</button>
                <button type="submit">Remove</button>
         </div>
        </>
    )
}

export default DisplayPizza;