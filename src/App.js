import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState('');
  // array of list banayenge usmain jitna number chahiye 

  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-', '+', '/', '=', 'C', '.'];

  const handleChange = (e) => {
    setvalue(e.target.value);
  }
  console.log(value);

  const handleclick = (e) => {
    const id = e.target.id;
    if (id === 'C') {
      setvalue('');
    }
    else if (id === '=') {
      //produce result
      handleSubmit()
    }
    else {
      setvalue((val) => val + id)
    }
  }
  const handleSubmit = (e) => {
    // result ko produce karana hai jab bhi form submit ho 
    // jab form submit ho page kko refresh nahin karwa na is liye .preventDefault() function use karni h
    e?.preventDefault();
    // try and catch ka use hona h q ki input main har type ke input value ko sirf number type lene ke liye
    try {
      const ans = eval(value);
      setvalue(ans);
    } catch (error) {
      alert("Invalid Input 😒");
    }
}

  return (
    <div className="App">
      <h1>CALC-APP</h1>
      <form
        // result show karana hai toh hum ko onsubmit function ko use karna padega in this form
      onSubmit={handleSubmit}  
      >
        <input
          onChange={handleChange}
          value={value}
          type='text'

          />
      </form>
      <div className='container' onClick={handleclick}>
        {
          arr.map((item, index) => (<button id={item} key={index} className='cell'>{item}</button>))
        }
      </div>
    </div>
  );
}

export default App;
