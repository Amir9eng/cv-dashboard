import "./App.scss";
import Input from "./components/Input";
import Title from "./components/Title";
import logo from "../src/media/logo.png";
import name from "../src/media/name.svg";
import Question from "./components/Question";

function App() {
  return (
    <form className="Form flex">
      <span className="flex Section">
        <img src={logo} alt="logo" />
        <img src={name} alt="name" />
      </span>
      <section>
        <div className="Top">
          <p className="text-gray-500 my-5">Basic Info</p>
          <Title text="Hi, We’d love to get to know you better" />
          <p className="text-gray-500 my-5 border-b-2 pb-4">
            Let’s start with the basics, tell us who you are
          </p>
        </div>
        <p className="mb-6 ml-16 text-gray-500">What's your name?</p>
        <div className="Main flex">
          <span>
            <Question question="First Name" />
            <Input name="name" />
          </span>
          <span className="ml-9">
            <Question question="Last Name" />
            <Input name="name" />
          </span>
        </div>
        <p className="mt-10 ml-16 text-gray-500">Where do you live?</p>
        <div className="Main flex mt-5">
          <span>
            <Question question="Country of Residence" />
            <Input name="name" />
          </span>
          <span className="ml-9">
            <Question question="Country of Origin" />
            <Input name="name" />
          </span>
        </div>
        <div className="Main flex mt-5">
          <span>
            <Question question="State of Residence" />
            <Input name="name" />
          </span>
          <span className="ml-9">
            <Question question="State of Origin" />
            <Input name="name" />
          </span>
        </div>
        <div className="Main flex mt-5">
          <span>
            <Question question="City of Residence" />
            <Input name="name" />
          </span>
          <span className="ml-9">
            <Question question="City of Origin" />
            <Input name="name" />
          </span>
        </div>
        <div className="Inquiry">
          <Question question="Current Address" />
          <textarea
            name="address"
            cols="54"
            rows="4"
            className="outline-none Text"
          ></textarea>
        </div>
        <p className="mt-10 ml-16 text-gray-500">How do we reach you?</p>
        <div className="Main flex mt-4">
          <span>
            <Question question="Email Address" />
            <Input name="email" />
          </span>
          <span className="ml-9">
            <Question question="Phone Number" />
            <Input name="number" />
          </span>
        </div>
        <p className="mt-16 ml-16 text-gray-500">Any prior experience?</p>
        <div className="Main flex mt-4">
          <span>
            <Question question="Years of coding experience" />
            <Input name="email" />
          </span>
          <span className="ml-9">
            <Question question="Years of professional experience" />
            <Input name="number" />
          </span>
        </div>
        <p className="mt-10 ml-16 mb-6 text-gray-500">How's your English?</p>
        <label htmlFor="Basic" className="flex p-2">
          <input type="radio" value="" />
          <div className="ml-4">
            <p className="text-coolblack text-sm pb-1"> Basic</p>
            <p className="text-gray-500 text-xs">
              I can only communicate in written form. Verbal communication with
              a US engineering <br /> manager might be slow or will require
              repetition of words.
            </p>
          </div>
        </label>
        <label htmlFor="Average" className="flex p-2 my-6">
          <input type="radio" value="" />
          <div className="ml-4">
            <p className="text-coolblack text-sm pb-1"> Average</p>
            <p className="text-gray-500 text-xs">
              I can communicate with a US engineering manager if we both speak
              slowly and ocassionally <br /> repeat sentences the other person
              might not understand.
            </p>
          </div>
        </label>
        <label htmlFor="Basic" className="flex p-2 my-6">
          <input type="radio" value="" />
          <div className="ml-4">
            <p className="text-coolblack text-sm pb-1"> Great</p>
            <p className="text-gray-500 text-xs">
              Both I and a US engineer can communicate smoothly without the need
              to repeat words or <br /> speak slowly.
            </p>
          </div>
        </label>
        <p className="mt-10 ml-16 mb-6 text-coolblack">
          What's your educational background?
        </p>
        <div className="Main flex">
          <span>
            <Question />
            <Input name="name" type="text" placeholder={"Degree / Program"} />
          </span>
          <span className="ml-9">
            <Question />
            <Input name="name" placeholder="Instituition/school" />
          </span>
        </div>

        <div className="Main mt-6 flex Active">
          <div>
            <input
              type="text"
              name="Month"
              className="w-28 h-8 border-gray-500"
            />
            <input type="text" name="Month" className="w-28 ml-2 h-8" />
          </div>
        </div>
      </section>
    </form>
  );
}

export default App;
