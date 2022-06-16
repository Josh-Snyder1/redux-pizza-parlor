// Import `useSelector` to get our current customer information from the STORE
import { useSelector } from 'react-redux'

// Import the component that builds the table rows of information
import CheckoutAddRowToTable from './CheckoutAddRowToTable'

// REPLACE with customer information using REDUX
const customerInfo = {
    customer_name: "John Smith",
    street_address: "555 Applewood Lane",
    city: "Minneapolis",
    zip: "55555",
}

// REPLACE with order `type` from REDUX
const type = "For Delivery"

// REPLACE with the current cart array from REDUX
const orderList = [
    {
        id: 3,
        name: "Onamonapizza",
        price: "14.99",
    },
    {
        id: 6,
        name: "Pepperoni",
        price: "13.99",
    }
]

// REF: https://stackoverflow.com/a/6300596
const totalCost = orderList.reduce(
    (initialNumber, orderItem) => 
        initialNumber + Number(orderItem.price), 0
    )

function Checkout() {
    return (
        <section>
            {/* Page title */}
            <h2>Step 3: Checkout</h2>

            {/* Address block */}
            <div className="address-block">
                <p>{customerInfo.customer_name}</p>
                <p>{customerInfo.street_address}</p>
                <p>{customerInfo.city}, {customerInfo.zip}</p>
            </div>

            {/* Delivery method */}
            <div className="delivery-method">
                <p>{type}</p>
            </div>

            {/* Current order / cart for approval */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through the current array of pizzas in the cart  */}

                    {orderList.map(order =>
                        <CheckoutAddRowToTable
                            key={order.id}
                            order={order}
                        />
                    )}
                </tbody>
            </table>

            {/* Total cost area */}
            <div className="total-cost">
                <p>{totalCost}</p>
            </div>

            <div className="checkout-button-container">
                <button>Checkout</button>
            </div>

        </section>
    )
}

export default Checkout