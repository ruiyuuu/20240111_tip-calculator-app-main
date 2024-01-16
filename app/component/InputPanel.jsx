import React, { useState, useEffect } from "react";
import { Tip } from "@/app/component/Tip";

const initialData = {
  bill: "",
  tipPercent: 15,
  people: 1,
};
const initialNewData = {
  tipPerson: 0,
  total: 0,
};
export function InputPanel({ setDb, reset, setDisabled }) {
  const [data, setData] = useState(initialData);
  const [newData, setNewData] = useState(initialNewData);
  useEffect(() => {
    setDb(newData);
  }, [newData]);
  useEffect(() => {
    setData(initialData);
  }, [reset]);
  useEffect(() => {
    let { bill, tipPercent, people } = data;
    let tip = (bill * tipPercent) / 100;
    let totalAmount = bill + tip;
    let newData = {};

    if (people > 0) {
      newData = {
        tipPerPerson: (tip / people).toFixed(2),
        totalPerPerson: (totalAmount / people).toFixed(2),
      };
    } else {
      newData = {
        tipPerPerson: 0,
        totalPerPerson: 0,
      };
    }
    if (bill === 0 || tipPercent === 0 || people === 0) {
      setDisabled(true);
    }
    setNewData(newData);
  }, [data]);
  const handleBill = (e) => {
    let bill = Number(e.target.value);
    setData({ ...data, bill });
    setDisabled(false);
  };
  const handlePeople = (e) => {
    let people = Number(e.target.value);
    setData({ ...data, people });
    setDisabled(false);
  };
  const updateTip = (tipPercent) => {
    setData({ ...data, tipPercent });
    setDisabled(false);
  };
  return (
    <div className="flex w-full flex-col gap-[24px] md:my-[16px] md:ms-[16px] md:w-[50%] md:gap-[40px]">
      <div className="flex flex-col gap-[16px]">
        <label htmlFor="bill" className="">
          Bill
        </label>
        <input
          type="number"
          className="input"
          id="bill"
          value={data.bill}
          placeholder="0"
          onChange={handleBill}
          onKeyDown={(e) => e.key === "e" && e.preventDefault()}
        />
      </div>
      <Tip reset={reset} updateTip={updateTip} />
      <div className="flex flex-col gap-[16px]">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          className="input"
          value={data.people}
          id="people"
          placeholder="0"
          onChange={handlePeople}
          onKeyDown={(e) => e.key === "e" && e.preventDefault()}
        />
      </div>
    </div>
  );
}
