export default function Button({clickFunction,name,age}){
    return(
        <button onClick={clickFunction}>Click</button>
    )
}

// export default function Button(props){
//     return(
//         <button onClick={propsc.clickFunction}>Your Name is : {props.name} and age is {props.age}</button>
//     )
// }