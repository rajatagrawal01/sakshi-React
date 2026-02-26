export default function Heading(props){
    return(
        <div className="container">
            <h1>Hello {props.name}, your age is {props.age} </h1>
        </div>
    )
}