// import GroceryList from "./GroceryList"

const GroceryList = ({ list }) => {

    const groceryList = list.map((items, idx) => {
        return (
            <li key={`item index: ${idx}`}>
                {items}
            </li>
        )
    })

    return (
        <>
            <div>
                <h2>List</h2>
                <ul>
                    {groceryList}
                    {/* {console.log(list)} */}
                </ul>
            </div>
        </>
    )
}


export default GroceryList