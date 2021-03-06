import React from "react";

const ConverHeader = ({ rates }) => {
  return (
    <>
      <h1>Конвертер валют</h1>
      <div className="box-header">
        <div className="box-header-currency">
          <h3>курс USD</h3>
          <span>{rates?.USD}</span>
        </div>
        <div className="box-header-currency">
          <h3>курс EUR</h3>
          <span>{rates?.EUR}</span>
        </div>
      </div>
    </>
  );
};

export default ConverHeader;
