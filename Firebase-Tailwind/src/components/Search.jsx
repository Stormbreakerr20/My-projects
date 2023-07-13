import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
function Search({ Open, setFilter, contacts }) {
  
  const ShowSearched = (e) => {
    
    const searchedval = e.target.value;
    if(searchedval === ""){
      setFilter(contacts);
      return;
    }

    const filter = contacts.filter((value) =>
      value.name.toLowerCase().includes(searchedval.toLowerCase())
    );
    setFilter(filter);
  };
  return (
    <>
      <div className="flex  items-center justify-between gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className=" ml-1 text-white text-3xl absolute" />
          <input
            type="text"
            className="border bg-transparent border-white rounded-md h-10 flex-grow text-white pl-9 "
            onChange={ShowSearched}
          />
        </div>

        <div>
          <AiFillPlusCircle
            className="text-4xl cursor-pointer"
            onClick={Open}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
