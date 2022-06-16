// Function that handles adding a row of information into the
// checkout table
function CheckoutAddRowToTable({ order }) {
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.price}</td>
        </tr>
    )
}

export default CheckoutAddRowToTable