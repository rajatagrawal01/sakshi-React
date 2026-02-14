import Paragraph from "./Paragraph"

export default function Heading({name,age}) {
  return (
    <div>
      <h1>Hello {name} , Your token number is : {age}</h1>
      <Paragraph company="TCS" tenure="5"/>
    </div>
  )
}


// export default function Heading({naam,token}) {
//   return (
//     <div>
//       <h1>Hello {naam} , Your token number is : {token}</h1>
//     </div>
//   )
// }