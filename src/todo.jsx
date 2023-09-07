// export default function Todo({task , isDone}){
//     return (
//         <li>Task: {task} </li>

//     )
// }


// conditional rendering-1
// export default function Todo({ task, isDone }) {


//     if (isDone === true) {
//         return <li>Finished: {task} </li>
//     }
//     else{
//         return <li>work on: {task} </li>

//     }
// }


//conditional rendering-2
// export default function Todo({ task, isDone }) {


//     if (isDone) {
//         return <li>Finished: {task} </li>
//     }

//     return <li>work on: {task} </li>


// }

//conditional rendering-3
// export default function Todo({task , isDone}){
//     return (
//         <li>{isDone? 'Finished' : 'Work on'} : {task} </li>

//     )
// }



// //conditional rendering option-4
// export default function Todo({task , isDone}){
//     return (
//         <li>{task} {isDone && ': Done'} </li>

//     )
// }

// //conditional rendering option-5
// export default function Todo({task , isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'} </li>

//     )
// }



// conditional rendering-6
// export default function Todo({ task, isDone }) {
//     let listItem;

//     if (isDone) {
//         listItem = <li>Finished: {task} </li>
//     }
//     else {
//         return <li>work on: {task} </li>

//     }
//     return listItem


// }