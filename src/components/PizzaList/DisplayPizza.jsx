

function DisplayPizza({pizzaList}){

    return(
        <>
        <h3>Display Pizza Component</h3>
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
                {pizzaList.price}
            </div>
                <button>Add</button>
                <button>Remove</button>
         </div>
        </>
    )
}

export default DisplayPizza;