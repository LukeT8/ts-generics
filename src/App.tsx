import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


// function loggingIdentity<Type>(arg: Type[]): Type[] {
//   console.log(arg.length);
//   return arg;
// }
// function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
//   console.log(arg.length); // Array has a .length, so no more error
//   return arg;
// }

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: <Type>(arg: Type) => Type = identity;
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: { <Type>(arg: Type): Type } = identity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: GenericIdentityFn = identity;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
