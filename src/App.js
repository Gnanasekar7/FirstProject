import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventBind from './componenets/EventBind';
import Greet  from './componenets/Greet';
// import Welcome from './componenets/welcome';
// import Hello from './componenets/Hello';
// import Message from './componenets/Message';
// import Counter from './componenets/Counter';
// import FunctionClick from './FunctionClick';
// import ClassClick from './componenets/ClassClick';
class App extends Component{
  render (){
  return(
  <div className="App">
    {/* <Message /> */}
      <Greet name="Gnana" heroName="Sekar">
      <p>
          <button>Action</button>
        </p> 
      </Greet>
      {/* <Welcome name="Peter" heroName="spiderman" /> */}
    
      {/* <Hello/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      <EventBind/>
    </div>
  );
  }
}

export default App;





