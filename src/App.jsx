import "./App.scss";
// import Input from "./components/Input";
import Title from "./components/Title";
import logo from "../src/media/logo.png";
import name from "../src/media/name.svg";

function App() {
  return (
    <form className="Form flex">
      <span className="flex Section">
        <img src={logo} alt="logo" className="display-block" />
        <img src={name} alt="name" />
      </span>
      <div className="Main border-b-2">
        <p className="text-gray-500 my-5">Basic Info</p>
        <Title text="Hi, We’d love to get to know you better" />
        <p className="text-gray-500 my-5">
          Let’s start with the basics, tell us who you are
        </p>
      </div>
      {/* <p className="text-sm ">Basic Info</p>
      <h1 className="text-2xl text-bold mt-4">
        
      </h1>

      <p className="text-gray-500">
        Let’s start with the basics, tell us who you are
      </p>
      <div>
        <p>What's your name ?</p>
        <p>First Name:</p>
        <input type="text" name="name" />
        <p> Last Name:</p>
        <input type="text" name="name" />
      </div>

      <div>
        <p>Where do you live?</p>
        <span>
          <p>Country of residence </p>
          <input type="text" name="country" />
        </span>
        <span>
          <p>Country of origin</p>
          <input type="text" name="" />
        </span>
        <span>
          <p>State </p>
          <input type="text" name="" />
        </span>
      </div> */}
    </form>
  );
}

export default App;
