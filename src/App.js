import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  const [datas, setDatas] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [isShow, setIsShow] = useState(false);

  const getDataFruit = async () => {
    const dataFruit = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await dataFruit.json();
    const result = value.results.map((data) => {
      return {
        label: data.name,
        value: data.name,
      };
    });
    setDatas(result.sort((a, b) => a.label.localeCompare(b.label)));
  };

  useEffect(() => {
    getDataFruit();
  }, []);

  const handleSubmit = () => {
    setIsShow((state) => !state);
  };

  const handleChange = (value) => {
    setUserSelect(value);
  };

  return (
    <>
      <Header/>
      <Display
        isShow={isShow}
        userSelect={userSelect}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        datas={datas}
      />
    </>
  );
}

export default App;
