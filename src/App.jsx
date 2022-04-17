// import React, { useState } from 'react';
// import './index.css';
// import TodoList from './Todolist';

// const App = () =>{

//    const [list, setList] = useState('');  // this the items which we are pushing in list
//    const [iarray, setIarray] = useState([]); // thi the array to stored the items which we are pushed.

//    let itemEvent = (event) =>{
//     setList(event.target.value);
//    }

   
   
//    let itemarray = (oldval) =>{
//      setIarray((oldval) => {
//        return [...oldval, list];   //add the new item in out array items
       
//     //  const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
//     //  const duplicateElementa = tofindDuplicates(arry); 
//      });
//      setList(''); //setting the 
//     //  setIarray((oldval) => {
//     //   let toFindDuplicates = iarray => iarray.filter((item, index) => iarray.indexOf(item) !== index)
//     //   let [] duplicateElementa = toFindDuplicates(iarray);
//     //    return duplicateElementa;
//     //  })

//     // const uniqueElements = new Set(iarray);
//     // const filteredElements = iarray.filter(item => {
//     //     if (uniqueElements.has(item)) {
//     //         uniqueElements.delete(item);
//     //     } else {
//     //         return item;
//     //     }
//     // });
//     // return [...new Set(uniqueElements)];

//    }

   

//    const deleteItem = (id) => {  // it is the deletion of specific item by using their cross sign.
//         // console.log("deletedddddddd");
//         setIarray((oldval) => {
//           return oldval.filter((arrElem, index) => {
//             return index !== id;
//           })
//         })
//   }

//     return <>
//           <div className='main_div'>
//              <div className='center_div'>
//                     <br />
                    
//                     <h1>ToDo List</h1>
                    
//                     <br />
//                     <input 
//                     type="text" 
//                     placeholder='Add a Items'
//                     required="required"
//                     onChange={itemEvent}
//                     value={list}
//                     />
//                     <button onClick={itemarray}> + </button>
                   



//                     <ol>
//                       {/* <li> {list} </li> */}
//                       {iarray.map((itemval, index) => {  //map is used to retive the elements from array.
//                         return <TodoList key={index} 
//                         id={index}
//                         text={itemval} 
//                         onSelect={deleteItem}
//                         />
//                       })}
//                     </ol>
//              </div>

//           </div>
//     </>
// }

// export default App;



import React, { useState } from 'react';
import './index.css';
import TodoList from './Todolist';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const App = () =>{

   const [list, setList] = useState('');  // this the items which we are pushing in list
   const [iarray, setIarray] = useState([]); // thi the array to stored the items which we are pushed.

   let itemEvent = (event) =>{
    setList(event.target.value);
   }



   let itemarray = (oldval) =>{
     setIarray((oldval) => {
       return [...oldval, list];   //add the new item in out array items

    //  const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
    //  const duplicateElementa = tofindDuplicates(arry); 
     });
     setList(''); //setting the 
    //  setIarray((oldval) => {
    //   let toFindDuplicates = iarray => iarray.filter((item, index) => iarray.indexOf(item) !== index)
    //   let [] duplicateElementa = toFindDuplicates(iarray);
    //    return duplicateElementa;
    //  })

    // const uniqueElements = new Set(iarray);
    // const filteredElements = iarray.filter(item => {
    //     if (uniqueElements.has(item)) {
    //         uniqueElements.delete(item);
    //     } else {
    //         return item;
    //     }
    // });
    // return [...new Set(uniqueElements)];

   }



   const deleteItem = (id) => {  // it is the deletion of specific item by using their cross sign.
        // console.log("deletedddddddd");
        setIarray((oldval) => {
          return oldval.filter((arrElem, index) => {
            return index !== id;
          })
        })
  }

    return <>
          <div className='main_div'>
             <div className='center_div'>
                    <br />

                    <h1>ToDo List</h1>

                    <br />
                    <input 
                    type="text" 
                    placeholder='Add a Items'
                    required="required"
                    onChange={itemEvent}
                    value={list}
                    />
                    <button className='newbtn' onClick={itemarray}> <AddCircleRoundedIcon/> </button>
                    {/* <AddCircleRoundedIcon/> */}



                    <ol>
                      {/* <li> {list} </li> */}
                      {iarray.map((itemval, index) => {  //map is used to retive the elements from array.
                        return <TodoList key={index} 
                        id={index}
                        text={itemval} 
                        onSelect={deleteItem}
                        />
                      })}
                    </ol>
             </div>

          </div>
    </>
}

export default App;


// import React from "react";
// import Todolist from "./Todolist";

// const App = () => {
//   return(
//     <Todolist />
//   )
// }

// export default App;

// const Todolist = () => {
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
//             required="required"
//             onChange={itemEvent}
//             value={list}
//           />
//           <button onClick={itemarray}> + </button>




//           <ol>
//             {/* <li> {list} </li> */}
//             {iarray.map((itemval, index) => {  //map is used to retive the elements from array.
//               return <TodoList key={index}
//                 id={index}
//                 text={itemval}
//                 onSelect={deleteItem}
//               />
//             })}
//           </ol>
//         </div>

//       </div>
//     </>

//   )
// }



