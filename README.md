# A basic app to use *React with Typescript* #

>[Github Link of project](https://github.com/rohitmondal03/React-and-Typescript.git) <br />
>[Reference](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/)

<br />

## Topics ##
>__1. *"JSX.Element"* for functional component__  <br>
>__2. "*CSSProperties*" defining styling objects for any element__  <br>
>__3. Data types for "*useRef*" hook and "*useState*" hooks__  <br>
>__4. "*null!*" value__ <br>
>__5. HTMLTextareatElement, HTMLDivElement, HTMLInputElement, HTMLButtonElement, HTMLFormElement, etc__  <br>
>__6. ChangeEvent , FormEvent__  <br>
>__7. *Props* and defining its types__  <br>

<br>
<br>

### 1. *"JSX.Element"* for functional component ###
>This is used as prop type for a single react element, specially when a functional component return something.

```JSX
    function App(): JSX.Element {
        return (
            // your code
        );
    }
```

<br>

### "2. *CSSProperties*" defining styling objects for any element ###
> This prop type is given to an object defining styling of any JSX element. For using *CSSProperties* we've to first import it from react library.

```JSX
    import { CSSProperties } from "react"
    // ...some code 
    const divStyle: CSSProperties= {textDecoration: 'none'};
    // ...more code
```

<br>

### 3. Prop types for "*useRef*" hook and "*useState*" hooks ###
>In useRef hook, the prop types are basically the type of HTML element we're refering to such as div, button, input, textarea, form, heading, etc. These props types are written inside generics. <br>
>In useState hooks, inside generics we place the prop type that the "current state" will hold.

```JSX
    const inputEle= useRef<HTMLInputElement>(null!);
    const btnEle= useRef<HTMLButtonElement>(null!);
    const formEle= useRef<HTMLFormElement>();

    const [place, setPlace]= useState<string | undefined>();
    const [num, setNum]= useState<number>();
```

<br>

### 4. "*null!*" value ###
> We use null! when we know that the value cannot be null of a particular variable.

```JSX 
    const inputRef= useRef<HTMLInputElement>(null!);
    const [password, setPassword]= useState<string>(null!);
```

<br>

### 5. HTMLTextareatElement, HTMLDivElement, HTMLInputElement, HTMLButtonElement, HTMLFormElement, etc. ###
>The above mentioned prop types are used for refering the type of HTML/JSX elements like div, inputs fields, form, section, table and everything else. Typescript provide us with this feature so that while refering any HTML element, we don't use it in another element's place. 

```JSX
    const divElement= useRef<HTMLDivElement>(null);
    const btnElement= useRef<HTMLButtonElement>(null!);
    const formElement= useRef<HTMLFormElement>();
```

<br>

### 6. ChangeEvent , FormEvent ###
> These are actually props for form events in JSX. ChangeEvent is basically used with onChange event and FormEvent is used with onSubmit method in JSX. Please note that they might be used in many other cases and there are many other props for forms but while going through a blog I got to know about these 2 only, which are quite important than others.

```JSX
    const handleSubmit(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // more code...
    }


    <input 
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value);
        }
        className= "flex flex-row mb-3 bg-red-500"
    />
```

<br>

### 7. *Props* and defining its types ###
> When passing props to child component, it's recommended to specify those props in **type** or **interface**.  This helps to pass down only required type of data to pass down, so that it does not cause any error.

```JSX
    type Sub= {
        msg: string;
        age: number;
    }

    type Props= {
        name: string
        others: Sub
    }

    const MyChild= (props: Props): JSX.Element => {
        const {name, others}= props;
        const {msg, age}= others;

        return (
            <>
                <h1>{name}</h1>
                <p>{age}</p>
                <h2>{msg}</h2>
            </h1>
        )
    }
```

> **Please note that in place of *type*, we could have used *interface* also.**
