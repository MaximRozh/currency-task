import React from "react";
import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";
import ConverHeader from "./ConverHeader";
import { format, isUAH, calcAmount, options } from "../utils/helpers";
import "../App.css";

const ConvertCurrency = ({ rates }) => {
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);

  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    if (!Object.keys(rates).length) return;

    if (isUAH(fromCurrency)) {
      amountInFromCurrency
        ? setToAmount(format(fromAmount / rates[toCurrency]))
        : setFromAmount(format(toAmount * rates[toCurrency]));
    }
    if (isUAH(toCurrency)) {
      amountInFromCurrency
        ? setToAmount(format(fromAmount * rates[fromCurrency]))
        : setFromAmount(format(toAmount / rates[fromCurrency]));
    }

    if (!isUAH(toCurrency) && !isUAH(fromCurrency)) {
      amountInFromCurrency
        ? setToAmount(
            calcAmount(fromAmount, rates[fromCurrency], rates[toCurrency])
          )
        : setFromAmount(
            calcAmount(toAmount, rates[toCurrency], rates[fromCurrency])
          );
    }
  }, [
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    amountInFromCurrency,
    rates,
  ]);

  const hendleFromAmount = (e) => {
    setFromAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const hendleToAmount = (e) => {
    setToAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="container">
      <div className="box">
        <ConverHeader rates={rates} />
        <div className="currency-inputs">
          <div>
            <span className="currency-text">Віддаю:</span>
            <CurrencyInput
              onAmountChange={hendleFromAmount}
              onCurrencyChange={(e) => setFromCurrency(e.target.value)}
              currencies={options}
              amount={fromAmount}
              currency={fromCurrency}
              name={"base"}
            />
          </div>
          <h1 onClick={handleSwap} className="swap">
            &#8644;
          </h1>
          <div>
            <span className="currency-text"> Отримаю:</span>
            <CurrencyInput
              onAmountChange={hendleToAmount}
              onCurrencyChange={(e) => setToCurrency(e.target.value)}
              currencies={options}
              amount={toAmount}
              currency={toCurrency}
              name={"convert"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConvertCurrency);
