import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <marquee behavior="" direction="" className="marq-bg">Welcome to Our Vehicle fuel Oil Products</marquee>
      <Shop></Shop>
      <div className='paragraph-container'>
        <h1>How React Works ?</h1>
        <p>
          1. React is a JavaScript library not a framework that uses declarative code to create predictable and efficient user interfaces .  <br />
          2. If there are multiple state changes, React does not commit them one after the other. <br />
          2. React evaluates these objects before synchronizing with the real DOM and uses them to build HTML elements on the virtual DOM. <br />
          3. As a result, object trees will exist in both the virtual and real DOMs. <br />
          4.  When we update the data on a React element, the DOM element to which it is associated is also updated.
        </p>
        <h1>Props VS  State</h1>
        <p>
          1. props cannot be changed that means it is immutable and state is mutable. <br />
          2.In react, props are read only <br />
          3. On the other hand, state  changes can be asynchronous <br />
          4. In react, props cannot be modified <br />
          5. On the other hand, state can be modified using this.setState
        </p>
        <h1>What does useState Works ?</h1>
      <p>
       1.useState() is a built-in React hook that enables the use of states in functional components. <br />
       2. Only within functional components should useState be used. <br />
       3. We can use useState if we need an internal state but do not need to implement more complex logic such as lifecycle methods. <br />
        4. Use the setState function to update the state. It accepts a new state value and re-renders the component. <br />
        5. We can create a piece of state without switching to class components by using the useState hook inside a function component.
      </p>
      </div>
    </div>
  );
}

export default App;
