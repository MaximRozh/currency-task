import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ConvertCurrency from "./components/ConvertCurrency";
import { options } from "./utils/helpers";
function App() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        const res = response.data.filter((item) =>
          options.some((q) => q === item.cc)
        );
        const data = res.reduce((acc, next) => {
          return { ...acc, [next.cc]: { ...next } };
        }, {});
        setRates(data);
      });
  }, []);

  return <ConvertCurrency rates={rates} />;
}

export default App;