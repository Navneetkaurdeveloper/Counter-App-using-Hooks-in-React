import React, { useState } from 'react';






const App = () => {


  const [count,setCount] = useState(0);

const Incnum =() =>{
  setCount( count+1);

}

return (
  <>
  <h1 className='heading_style'> Counter App using Hooks In React </h1>
  <h2>{count} </h2>
  <button onClick={Incnum} > Click Me </button>
  </>
)
}



export default App;
