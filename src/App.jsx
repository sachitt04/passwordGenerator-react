import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length,setLength] = useState(8)
const [numAllowd,setNumAllowed] = useState(false)
const [charAllowed,setCharAllowed] = useState(false)
const [password,setPassword] = useState("")


// useRef hook
const passwordRef = useRef(null)


// now lets make a password generator

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numAllowd) str+="0123456789"
  if(charAllowed) str+="!@#$%&:;'><.,?/+=_-"

 for(let i = 1; i<=length; i++){

    let char = Math.floor(Math.random() *str.length + 1)
    pass += str.charAt(char)

  }
  setPassword(pass)
},[length,numAllowd,charAllowed,setPassword])


useEffect(()=>{
  passwordGenerator()

},[length,numAllowd,charAllowed,passwordGenerator])

const copyPasswordToclip = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
},[password])
   

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 my-8 text-orange-500 bg-gray-600'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} />

        <button className='outline-none bg-blue-700 
        text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToclip}>copy</button>


      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8} 
          max={20}
          value={length}
          className='curosor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {numAllowd}
          id='numInput'
          onChange={() => {
            setNumAllowed((prev)=> !prev)
          }}/>

          <label htmlFor="numInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev)=> !prev)
          }}/>

          <label htmlFor="charInput">Characters</label>
        </div>


      </div>
 
    </div>
    </>
  )
}

export default App
