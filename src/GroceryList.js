import { supabase } from './supabaseClient'

const GroceryList = ({ list, getItems, activeCats }) => {

    const deleteItem = async (num) => {
        const { data, error } = await supabase
            .from('item')
            .delete()
            .match({ id: num })
        getItems()
    }

    const groceryList = list.map((object, idx) => {
        return (
            <div className='cards btn btn-lg btn-primary'>
                {object.category}
                <li key={`item index: ${idx}`} >
                    {object.name} { }
                    <button key={`button index: ${idx}`} onClick={() => deleteItem(object.id)}> X </button>
                </li>
            </div>
        )
    })


    return (
        <>
            <div className="container">
                <h2>List</h2>
                <ul>
                    {activeCats}
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