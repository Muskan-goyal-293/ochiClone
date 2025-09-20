import { useState } from "react";

function Buttontwo({ value }) {
  const [active, setActive] = useState(false);
 
  return (
    <div>
      <button
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="p-2 bg-black text-white rounded-full flex items-center "
      >
        {value}
        <div
          className={`ml-12 bg-white text-black p-1 w-8 rounded-full transform transition-all duration-300 
          ${active ? "scale-100" : "scale-[0.2]"}`}
        >
          <i
            className={`fa-solid fa-arrow-right -rotate-45 transition-all duration-300 
            ${active ? "opacity-100" : "opacity-0"}`}
          ></i>
        </div>
      </button>
    </div>
  );
}

export default Buttontwo;
