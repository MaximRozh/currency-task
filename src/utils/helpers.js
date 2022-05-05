export const format = (number) => number.toFixed(3);

export const isUAH = (currency) => currency === "UAH";

export const options = ["USD", "UAH", "EUR"];

export const calcAmount = (amout, currency1, currency2, rates) => {
  return format((amout * rates[currency1]?.rate) / rates[currency2]?.rate);
};
