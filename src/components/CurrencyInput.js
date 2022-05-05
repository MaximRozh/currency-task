import "../styles/currencyInput.css";

const CurrencyInput = ({
  amount,
  currency,
  name,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="group">
      <input type="number" min={1} value={amount} onChange={onAmountChange} />
      <select name={name} value={currency} onChange={onCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
