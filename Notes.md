# Virtual DOM & Fibre in React

[Read about Fibre Here](https://github.com/acdlite/react-fiber-architecture)


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

    Whenever we need to make use of side effects in our application, useEffect is the way to go.According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.

    The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body
    This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks.
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


# Context API 
[Read Article](https://www.freecodecamp.org/news/context-api-in-react/)

    Context API is used to avoid porps drilling in react js
    
    Redux is also a solution to state Management.
    react-Redux, zustand and many more libraries are available for state management.

    "Context is nothing but a global object which provides access of its properties to targeted components in a well defined way."

## Working of context API:
    First and foremost we have to create context.

```jsx
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

    In Above code snippet of code React is imported and a Context is created using its built in function createContext() and exported to use it.

    Now we need to create a Provider(which provides the context to targeted components.)
```jsx
import React from "react";
import UserContext from './UserContext'
// UserContext which we created using useContext()

// Component/Wrapper which provides context to wrapped components.
const UserContextProvider = ({children}) =>{
    // State to hold the context data in form of object.
    const [user, setUser] = React.useState(null)
    
    // returns the whole context which wraps the targeted component/s and gives the access of the required values/functions. e.g. value={{user, setUser}}.
    return (
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    );
}
// export the provider to use it in the Project.
export default UserContextProvider;

```
    
    
    Now we need to add data(props) to the context
```jsx
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1>Context API: State Management</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

```
    Above code snippet demonstrates how we can use the Context.
    for this, we wrap the components in the contextProvider and components which are wrapped in contextProvider will be able to use the context.

    
Below code shows how to add data to the context.

```jsx
import React, {useState, useContext} from 'react';
import UserContext from '../Context/UserContext';

// How is data sent to UserContextProvider

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);
    
    const handleSubmit = () =>{
        setUser({username, password})

    }

    return (
        <div>
            <h2>Login</h2>
            <input type = 'text'
            value = {username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username' />{' '}

            <input type="text" 
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password' />{' '}
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;

```
    In above code snippet we are using useContext() Hook to get access of availabe context(Imported Context) this hook returns the object of available variables/function in the context in:
    const {setUser} = useContext(UserContext);
    we are destructuring the object and getting access to particular object.

    Now using setUser method we can set values to the user object.

To access the values/props in the context useContext() is use but in this case we destructure the user object from the context.
