import logo from './logo.svg';
import './App.css';

function App() {
   let score =0;
  return (
    <div className="App">
      <h1>ARITHEMATIC OPERATORS</h1>
     <button onClick={()=>{
      let a=10/5;
      console.log(a)
     }}>arithematicOperators</button>
     <button onClick={()=>{
         score++;
        console.log(score);

     }}>Increment</button>
     <button onClick={()=>{
      score--;
      console.log(score);

     }}>Decrement</button>
     <h1>ASSIGNMENT OPERATORS</h1>
     <button onClick={()=>{
      let b=5;
      b+=5;
      b*=10;
      b/=10;
      b%=2;
      console.log(b)
     }}>Assignment operators</button>
     <h1>COMPARISION OPERATORS</h1>
     <button onClick={()=>{
       let Marks=45;
       console.log(Marks == 45);
       console.log(Marks >=50);
       console.log(Marks <= 35);
       console.log(Marks != 10);
     }}>Comparision operators</button>
    </div>
  );
}

export default App;
