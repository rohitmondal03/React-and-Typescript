import { useState, useRef, useEffect, FormEvent, ChangeEvent, CSSProperties } from 'react'
import './App.css'
import MyChild from './components/MyChild';


// FOR STYLES
const styles: CSSProperties= {textDecoration: 'underline', alignItems: 'center'}


function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [textareaValue, setTextareaValue] = useState<string>(null!)

  const divRef = useRef<HTMLDivElement>(null!);   // means it'll never be null
  const btnRef = useRef<HTMLButtonElement>(null!)
  const formRef = useRef<HTMLFormElement>(null!)
  const inputRef = useRef<HTMLInputElement>(null!)
  const textareaRef = useRef<HTMLTextAreaElement>(null!)


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  useEffect(() => {
    console.log(divRef.current?.innerHTML);
    console.log(btnRef.current.classList.contains('btn-submit'));
    console.log(formRef.current.classList);
    console.log(inputRef.current.value);
    console.log(textareaRef.current.attributes)
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

      <hr />

      {/* -------- concept of props here --------- */}
      <h2 style={styles}>Props and how to define its type</h2>
      <MyChild
        text="A prop to child component."
        num= {30}
      />
    </>
  )
}

export default App
