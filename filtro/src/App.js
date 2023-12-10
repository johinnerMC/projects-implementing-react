import { useState } from "react";
import SearchBar from "./components/searchBar";

import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  bacground-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #ccc1f1
  }
`;

const people = [
  {
    id: "people-10",
    title: "pello",
  },
  {
    id: "people-5",
    title: "johimadacor",
  },
  {
    id: "people-8",
    title: "madariaga",
  },
  {
    id: "people-3",
    title: "corpas",
  },
  {
    id: "people-7",
    title: "johinner",
  },
];

const calendar = [
  {
    id: "calendar-10",
    title: "seguimiento",
  },
  {
    id: "calendar-5",
    title: "equipo",
  },
];
const email = [
  {
    id: "email-120",
    title: "pello@gmail.com",
  },
  {
    id: "email-5",
    title: "johinner@gmail.com",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...email]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...email]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      case "email":
        setData([...email]);
        setCurrentOption("email");
        break;
      default:
        break;
    }
  }
  function handleItemSelected(item){
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">
        All
      </Button>
      <Button onClick={handleClick} name="people">
        People
      </Button>
      <Button onClick={handleClick} name="calendar">
        Calendar
      </Button>
      <Button onClick={handleClick} name="email">
        Email
      </Button>
      {
        selection ? <div>You selected: {selection.title}</div> : ""
      }
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
