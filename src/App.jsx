import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const [length,setLength] = useState(8)
const [numAllowd,setNumAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setPassword] = useState("")

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numAllowd) str+="0123456789"
  if(charAllowed) str+="!@#$%&:;'><.,?/+=_-"

 for(let i = 1; i<=length; i++){

    let char =Math.floor(Math.random() *str.length + 1)
    pass += str.charAt(char)

  }
},[length,numAllowd,charAllowed,setPassword])

// now lets make a password generator
function App() {
   

  return (
    <>

     
    
 
    </>
  )
}

export default App
