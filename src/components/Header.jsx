import notesImage from "../assets/images/notes.png";
import tickImage from "../assets/images//double-tick.png";
import plusImage from "../assets/images/plus.png";
import { useState } from "react";
import { added } from "../redux/todos/actions";
import { useDispatch } from "react-redux";

const Header = () => {
   const dispatch = useDispatch();
   const [input, setInput] = useState("");
   console.log(input);
   const handleInput = (e) => {
      setInput(e.target.value);
   };

   const submitHandle = (e) => {
      e.preventDefault();
      dispatch(added(input));
      setInput("");
   };

   return (
      <div>
         <form
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            onSubmit={submitHandle}
         >
            <img src={notesImage} className="w-6 h-6" alt="Add todo" />
            <input
               type="text"
               placeholder="Type your todo"
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
               value={input}
               onChange={handleInput}
            />
            <button
               type="submit"
               className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
            ></button>
         </form>

         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
               <img className="w-4 h-4" src={tickImage} alt="Complete" />
               <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer">Clear completed</li>
         </ul>
      </div>
   );
};

export default Header;
