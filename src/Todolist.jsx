// import React, { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// const TodoList = (props) =>{

//     const [Line, setLine] = useState(false);
//     const cutIt = () => {
//         setLine(true);
//     }
//     return (
//         <>
//             <div className='todo_style'>
//                 {/* <i className="fa fa-times" aria-hidden="true" 
//                     onClick={() => {
//                         props.onSelect(props.id);
//                     }}
//                 /> */}
//                 <span 
//                    onClick={cutIt}>
//                      <DeleteIcon className="fa fa-times" />
//                 </span>
//                 <li style={{textDecoration: Line ? "line-through" : "none"}}> {props.text} </li>
//             </div>
//         </>
    
    
//     );
// }

// export default TodoList;


// // import React, { useState } from "react";
// // import './index.css';
// // import Button from '@mui/material/Button';
// // import AddIcon from '@mui/icons-material/Add';

// // const Todolist = () => {
// //     const [item, setItem] = useState("buy");

// //     let itemEvent = (event) =>{
// //             setList(event.target.value);
// //            }
// //   return (
// //     <>
// //       <div className='main_div'>
// //         <div className='center_div'>
// //           <br />

// //           <h1>ToDo List</h1>

// //           <br />
// //           <input
// //             type="text"
// //             placeholder='Add a Items'
// //             // required="required"
// //             onChange={itemEvent}
// //             // value={list}
// //           />
// //           {/* <button onClick={itemarray}> + </button> */}
// //             <Button className="newbtn">
// //                 <AddIcon />
// //             </Button>




// //           {/* <ol>
            
// //             {iarray.map((itemval, index) => {  //map is used to retive the elements from array.
// //               return <TodoList key={index}
// //                 id={index}
// //                 text={itemval}
// //                 onSelect={deleteItem}
// //               />
// //             })}
// //           </ol> */}
// //         </div>

// //       </div>
// //     </>

// //   )
// // }

// // export default Todolist;








import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = (props) =>{

    const [Line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <>
            <div className='todo_style'>
                {/* <i className="fa fa-times" aria-hidden="true" 
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                /> */}
                <span 
                   onClick={cutIt}>
                     <DeleteIcon className="fa fa-times" />
                </span>
                <li style={{textDecoration: Line ? "line-through" : "none"}}> {props.text} </li>
            </div>
        </>
    
    
    );
}

export default TodoList;


// import React, { useState } from "react";
// import './index.css';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

// const Todolist = () => {
//     const [item, setItem] = useState("buy");

//     let itemEvent = (event) =>{
//             setList(event.target.value);
//            }
//   return (
//     <>
//       <div className='main_div'>
//         <div className='center_div'>
//           <br />

//           <h1>ToDo List</h1>

//           <br />
//           <input
//             type="text"
//             placeholder='Add a Items'
//             // required="required"
//             onChange={itemEvent}
//             // value={list}
//           />
//           {/* <button onClick={itemarray}> + </button> */}
//             <Button className="newbtn">
//                 <AddIcon />
//             </Button>




//           {/* <ol>
            
//             {iarray.map((itemval, index) => {  //map is used to retive the elements from array.
//               return <TodoList key={index}
//                 id={index}
//                 text={itemval}
//                 onSelect={deleteItem}
//               />
//             })}
//           </ol> */}
//         </div>

//       </div>
//     </>

//   )
// }

// export default Todolist;