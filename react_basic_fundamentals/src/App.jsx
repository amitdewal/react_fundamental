
import './App.css'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import Header from './components/Header';
function WelcomeMessage(props) {
   return <h1>Hello, {props.name}</h1>;
}


function App() {
   const name = "Alice";
   const profession = "Software Engineer";
   // const name = "Alice"
   // const btnLabel = "Click Me"
   // const imgSrc = "https://placehold.co/100x100"
   // const element = <h1>Hello, world!</h1>;
   // const isLoggedIn = false;

   // <>
   //    {/* {element} */}
   //    {/* <h1>Hello, world!</h1>
   //    {6 + 7}
   //    <h2 className='greeting'>Welcome, {name}!</h2>
   //    <button style={{backgroundColor:"green" ,color:"black"}}> {btnLabel}</button>

   //   <button onClick={() => alert("Button clicked")}>
   //    Alert me!
   //   </button>

   //   <img src={imgSrc} alt="placeholder" /> */}

   // </>

   // if (isLoggedIn) {
   //    return (<h1>Welcome back!</h1>);
   // }
   // return (<h1>Please sign up.</h1>);

   return (
      <div className='App'>
         <Header name={name} profession={profession} />
         <About name={name} profession={profession} />
         <Project />
         <Contact />
         <Footer />
      </div>
   );
}


export default App
