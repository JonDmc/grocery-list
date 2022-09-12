
const GroceryList = ({ list }) => {

    const groceryList = list.map((object, idx) => {
        return (
            <li key={`item index: ${idx}`}>
                {object.category}: {object.item}
            </li>
        )
    })

    return (
        <>
            <div className="container">
                <h2>List</h2>
                <ul>
                    {groceryList}
                    {/* {console.log(list)} */}
                </ul>
            </div>
        </>
    )
}
// const GroceryList = ({ items, category }) => {

//     const itemList = items.map((items, idx) => {
//         return (
//             <li key={`item index: ${idx}`}>
//                 {items}
//             </li>
//         )
//     })
//     const catList = category.map((cat, idx) => {
//         return (
//             <li key={`item index: ${idx}`}>
//                 {cat}
//             </li>
//         )
//     })

//     return (
//         <>
//             <div className="container">
//                 <h2>List</h2>
//                 <ul>
//                     {itemList}
//                     {catList}
//                     {/* {console.log(list)} */}
//                 </ul>
//             </div>
//         </>
//     )
// }


export default GroceryList