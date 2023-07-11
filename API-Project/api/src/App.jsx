import "./App.css";
import styled from "styled-components";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";

//url for api

export const BASE_URL = "http://localhost:9000";

function App() {
  const buttonel = [
    { type: "all", text: "All" },
    { type: "breakfast", text: "Breakfast" },
    { type: "lunch", text: "Lunch" },
    { type: "dinner", text: "Dinner" },
  ];
  const [Error, setError] = useState(null);
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(false);
  const [Filterdata , setFilterdata] = useState();
  const [Selectedbtn , setSelectedbtn] = useState("All");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilterdata(json);
        setLoading(false);

      } catch (error) {
        setError("Can't Fetch Data");
      }
    };
    getData();
  }, []);

  const togglefood=(btntype)=>{
    setSelectedbtn(btntype);
    if(btntype == "All"){
      setFilterdata(Data);
      return;
    }
    
    const filter = Data?.filter((value) => value.type.toLowerCase().includes(btntype.toLowerCase()));
    setFilterdata(filter);
    
  }


  if(Error) return <div>{Error}</div>;
  if(Loading) return <div>Loading....</div>;

  return (
    <>
      <Topsection>
        <Search setFilterdata={setFilterdata} Data={Data} />
        <div className="btnarea">
          {buttonel.map((value, index) => (
            <Button isSelected = {Selectedbtn === value.text} onClick={()=>togglefood(value.text)} key={index}>{value.text}</Button>
          ))}
        </div>
      </Topsection>
      <Cards Data={Filterdata}/>
    </>
  );
}

export default App;

const Topsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 2rem;
  height: 180px;

  .btnarea {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: #ff4343;
  color: white;
  border: transparent;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 15px;

  &:hover {
    background-color: darkred;
  }
  outline: ${(props)=> props.isSelected?'1px solid white': 'none'};
  background-color: ${(props)=> props.isSelected?'darkred': '#ff4343'};
`;
