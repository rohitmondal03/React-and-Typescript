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

### *"JSX.Element"* for functional component ###
>This is used as prop type for a single react element, specially when a functional component return something.

```javascript
    function App(): JSX.Element {
        return (
            // your code
        )
    }
```

<br>

### "*CSSProperties*" defining styling objects for any element ###
> This prop type is given to an object defining styling of any JSX element. For using *CSSProperties* we've to first import it from react library.

```javascript
    import { CSSProperties } from "react"
    // ...some code 
    const divStyle: CSSProperties= {textDecoration: 'none'}
    // ...more code
```

<br>

### Data types for "*useRef*" hook and "*useState*" hooks ###
