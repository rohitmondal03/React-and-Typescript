import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [textareaValue, setTextareaValue]= useState<string>(null!)

  const divRef = useRef<HTMLDivElement>(null!);   // means it'll never be null
  const btnRef = useRef<HTMLButtonElement>(null!)
  const formRef = useRef<HTMLFormElement>(null!)
  const inputRef = useRef<HTMLInputElement>(null!)
  const textareaRef= useRef<HTMLTextAreaElement>(null!)


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  useEffect(() => {
    console.log(divRef.current?.innerHTML);
    console.log(btnRef.current.classList.contains('btn-submit'));
    console.log(formRef.current.attributes);
    console.log(inputRef.current.attributes);
  }, [])


  return (
    <>
      <h1>A small `REACT APP` for using React and Typescript together</h1>

      Count using useState: {count}
      <button
        onClick={
          () => {
            setCount((prev) => prev + 1)
          }
        }
      >
        +
      </button>


      {/* ------- useRef------ */}
      <div
        ref={divRef}
      >
        `useRef` hook
      </div>


      {/* ------- form -------- */}
      <form
        className='form-ele'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className='input-ref'
          placeholder='used concept of typescript in this input'
          ref={inputRef}
        />

        <input
          type="password"
        />

        <textarea
          name=""
          id=""
          cols={20}
          rows={5}
          value={textareaValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextareaValue(e.target.value)
            console.log(e.target.value);
          }}
          ref={textareaRef}
        />

        <button
          type='submit'
          ref={btnRef}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default App
