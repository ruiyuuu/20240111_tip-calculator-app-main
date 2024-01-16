"use client";
import React, { useState, useEffect } from "react";
import { InputPanel } from "@/app/component/InputPanel";

const initialDb = {
  tipPerPerson: 0,
  totalPerPerson: 0,
};
export default function Home() {
  const [db, setDb] = useState(initialDb);
  const [disabled, setDisabled] = useState(true);
  const [reset, setReset] = useState(null);

  const handleReset = () => {
    setReset(Date.now())
    setDisabled(true);
  };
  return (
    <main className="container-fluid mx-0 mt-[24px] flex flex-col items-center justify-center gap-[24px] px-0 md:container md:mx-auto md:mt-[60px] md:gap-[48px] md:px-16 xl:px-72">
      <h1 className="text-[24px] font-[500px] tracking-[10.08px]">
        SPLI
        <br />
        TTER
      </h1>
      <div className="flex w-full flex-col gap-[24px] rounded-t-[28px] bg-white px-[16px] py-[32px] shadow-2xl shadow-primary-dark/10 md:flex-row md:gap-[48px] md:rounded-[28px] md:px-[32px]">
        <InputPanel reset={reset} setDb={setDb} setDisabled={setDisabled} />
        <div className="flex w-full flex-col justify-between gap-[24px] rounded-[16px] bg-primary-dark px-[16px] py-[32px] pb-[16px] md:w-[50%] md:gap-[24px] md:px-[38px] md:py-[40px]">
          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-white">Tip Amount</h2>
                <small className="small">/ person</small>
              </div>
              <h2 className="text-[34px] font-bold text-primary lg:text-[48px]">
                ${db.tipPerPerson}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-white">Total</h2>
                <small className="small">/ person</small>
              </div>
              <h2 className="text-[34px] font-bold text-primary lg:text-[48px]">
                ${db.totalPerPerson}
              </h2>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={handleReset}
            disabled={disabled ? true : false}
          >
            reset
          </button>
        </div>
      </div>
    </main>
  );
}
