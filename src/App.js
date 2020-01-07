import React, {useState} from 'react'
import './App.css';
import Form from './components/form'

function App() {
  const [todo, setTodo] = useState([])

  return (
    <>
    <div className="App">
      <Form onSubmit={text => setTodo([{text, complete: false}, ...todo])}/>
    </div>
    <div>
      {
        todo.map((elem, i) => {
          return(
            <ul key={i}>
              <li>{elem.text}</li>
            </ul>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
