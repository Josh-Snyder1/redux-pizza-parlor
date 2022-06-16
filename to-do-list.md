**EACH PERSON NEEDS TO:**

[ ] Git Clone project from 
[ ] Initialize the Database:
    [ ] Postico
        *- or -*
    [ ] Terminal:
        [ ] `createdb pizza_parlor`
        [ ] `psql -d pizza_parlor -f ./database.sql`
            **NOTE**
            [ ] `drop pizza_parlor` to start over


**Components**
[ ] **App.jsx**
    [ ] Router (from HashRouter)
    [ ] Route
[ ] **index.js**
    [ ] REDUX stores
        [ ] pizzas as array
        [ ] customer information
        [ ] current pizza?
[ ] **PizzaList.jsx**
    [ ] axios GET from database
    [ ] store array to REDUX on index.js
    [ ] header saying: "Step 1: Select Your Pizza"
    [ ] **DisplayPizza.jsx**
        [ ] pizza name
        [ ] button to add to cart
        [ ] button to remove from cart
            [ ] only show `remove` if the pizza is in the cart
        [ ] description
        [ ] price
        [ ] image_path?    
[ ] **Header.jsx**
    [ ] <h1> Prime Pizza </h1>
    [ ] **HeaderCart.jsx**
        [ ] cart icon
        [ ] total cost of pizzas
        [ ] (stretch) # pizzas
[ ] **CustomerInfo.jsx**
    [ ] *form* with `onSubmit()` function
        [ ] `axios` to POST to db
        [ ] *inputs*
            [ ] customer_name
            [ ] street_address
            [ ] city
            [ ] zip
            [ ] type
                [ ] *radio button to choose between `Pickup` or `Delivery`
            [ ] total
[ ] **Checkout.jsx**
    [ ] `useSelector` to get *customer information* from REDUX
    [ ] `useSelector` to get *pizza order* from REDUX
        [ ] Show the information in a <table> view
    [ ] show the total cost of the order
    [ ] <button> for "Checkout"
    [ ] display delivery method (pickup or delivery)
[ ] **admin.jsx**
    [ ] create admin route in server.js
    [ ] create different header component
    [ ] create table showing order history