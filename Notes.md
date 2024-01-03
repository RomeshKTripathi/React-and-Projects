# Virtual DOM & Fibre in React

[Read abojut Fibre Here](https://github.com/acdlite/react-fiber-architecture)


# Hooks in React js

## useState
    useState hook in react used to update value which affects ui

```js
const [color, setColor] = useState("olive");
// Here setColor is a function which is used to update color and 'olive' is the initial value of color.
```

## useCallback

    useCallback in react is used to perform some optimization over the methods which are frequently called by keeping their definition or some part in the cache memoory.

```js
const passwordGenerator = useCallback(()=>{
    // Code which manipulates/uses length, numberAllowed, charAllowed. 
  }, [length, numberAllowed, charAllowed]);
  // useCallback Hook takes a callback function which you want to keep in the cache and parameters array which it uses.
```

## useEffect

    useEffect hook in react is used to perform some task whenever some set of variables/functions affected/modified.

```jsx
useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  // useEffect hook calles a callback function whenever given set of parameters affected/modified. 
```

## useRef
    useRef Hook is used to hold reference of some html element.

```JSX
const passwordRef = useRef(null);
// somewhere in code
<input type="text" 
      value = {password}
      className="outline-none w-full py-1 px-3 text-gray-900"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      /> 
```


