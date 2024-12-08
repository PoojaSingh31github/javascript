import './App.css'
import { useRef } from 'react';
import Form from './components/form';

function App() {
  const ref = useRef("pooja");
  const handleSubmit = () => console.log(ref.current.value);

  return (
    <>
    <input ref={ref} /> 
    <button onClick={handleSubmit}>submit</button>

    <h1>form example</h1>
    <Form/>
    </>
  );


}

export default App
