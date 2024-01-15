"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("0");
  const [total, setTotal] = useState("0");
  const [five, setFive] = useState("1");
  const [ten, seTen] = useState("1");
  const [fifteen, setFifteen] = useState("1");
  const [twf, setTwf] = useState("1");
  const [fifty, setFifty] = useState("1");
  const [check5, setCheck5] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check25, setCheck25] = useState(false);
  const [check50, setCheck50] = useState(false);
  const [custom, setCustom] = useState("")
  useEffect(() => {
    setTip(
      Math.ceil(bill * people * five * ten * fifteen * twf * fifty * custom),
    );
    setTotal(bill * people+tip);
  }, [five, ten, fifteen, twf, fifty,bill,people,tip,custom]);

  const handleBill = (e) => {
    setBill(e.target.value);
    setTip(
      Math.ceil(e.target.value * people * five * ten * fifteen * twf * fifty),
    );
  };
  const handlePeople = (e) => {
    setPeople(e.target.value);
    setTip(
      Math.ceil(e.target.value * bill * five * ten * fifteen * twf * fifty),
    );
  };
  const handleFive = (e) => {
    setFive("0.05");
    seTen("1");
    setFifteen("1");
    setTwf("1");
    setFifty("1");
    setCheck5(true);
    setCheck10(false);
    setCheck15(false);
    setCheck25(false);
    setCheck50(false);
  };
  const handleTen = (e) => {
    setFive("1");
    seTen("0.1");
    setFifteen("1");
    setTwf("1");
    setFifty("1");
    setCheck10(true);
    setCheck5(false);
    setCheck15(false);
    setCheck25(false);
    setCheck50(false);
  };
  const handleFifteen = (e) => {
    setFive("1");
    seTen("1");
    setFifteen("0.15");
    setTwf("1");
    setFifty("1");
    setCheck15(true);
    setCheck5(false);
    setCheck10(false);
    setCheck25(false);
    setCheck50(false);
  };
  const handleTwf = (e) => {
    setFive("1");
    seTen("1");
    setFifteen("0.25");
    setTwf("1");
    setFifty("1");
    setCheck25(true);
    setCheck5(false);
    setCheck10(false);
    setCheck15(false);
    setCheck50(false);
  };
  const handleFifty = (e) => {
    setFive("1");
    seTen("1");
    setFifteen("1");
    setTwf("1");
    setFifty("0.5");
    setCheck50(true);
    setCheck5(false);
    setCheck10(false);
    setCheck15(false);
    setCheck25(false);
  };
  const handleReset = (e) => {
    setBill("");
    setTip("0");
    setPeople("");
    setFive("1");
    seTen("1");
    setFifteen("1");
    setTwf("1");
    setFifty("1");
    setCheck5(false);
    setCheck10(false);
    setCheck15(false);
    setCheck25(false);
    setCheck50(false);
    setCustom("");
  };
  const handleCustom = (e) => {
    setCustom(e.target.value);
    setFive("1");
    seTen("1");
    setFifteen("1");
    setTwf("1");
    setFifty("1");
    setCheck50(false);
    setCheck5(false);
    setCheck10(false);
    setCheck15(false);
    setCheck25(false);
  }
  return (
    <main className="container-fluid mx-0 mt-[24px] flex flex-col items-center justify-center gap-[24px] px-0 md:container md:mx-auto md:mt-[60px] md:gap-[48px] md:px-72">
      <h1 className="text-[24px] font-[500px] tracking-[10.08px]">
        SPLI
        <br />
        TTER
      </h1>
      <div className="flex w-full flex-col gap-[24px] rounded-t-[28px] bg-white px-[16px] py-[32px] shadow-2xl shadow-primary-dark/10 md:flex-row md:gap-[48px] md:rounded-[28px] md:px-[32px]">
        <div className="flex w-full flex-col gap-[24px] md:my-[16px] md:ms-[16px] md:w-[50%] md:gap-[40px]">
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="bill" className="">
              Bill
            </label>
            <input
              type="number"
              className="input"
              id="bill"
              value={bill}
              placeholder="0"
              onChange={handleBill}
              onKeyDown={(e) => e.key === "e" && e.preventDefault()}
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="label">Select Tip %</p>
            <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3">
              <div>
                <input
                  type="radio"
                  name="tip"
                  className={"hidden"}
                  id="five"
                  checked={check5}
                  onChange={handleFive}
                />
                <label htmlFor="five" className={"filter"}>
                  5%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="tip"
                  className={"hidden"}
                  id="ten"
                  checked={check10}
                  onChange={handleTen}
                />
                <label htmlFor="ten" className={"filter"}>
                  10%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="tip"
                  className={"hidden"}
                  id="fifteen"
                  checked={check15}
                  onChange={handleFifteen}
                />
                <label htmlFor="fifteen" className={"filter"}>
                  15%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="tip"
                  className={"hidden"}
                  id="twentyFive"
                  checked={check25}
                  onChange={handleTwf}
                />
                <label htmlFor="twentyFive" className={"filter"}>
                  25%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="tip"
                  className={"hidden"}
                  id="fifty"
                  checked={check50}
                  onChange={handleFifty}
                />
                <label htmlFor="fifty" className={"filter"}>
                  50%
                </label>
              </div>
              <input
                type="number"
                name="tip"
                className={"custom"}
                placeholder="CUSTOM"
                id="custom"
                value={custom}
                onChange={handleCustom}
                onKeyDown={(e) => e.key === "e" && e.preventDefault()}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="people">Number of People</label>
            <input
              type="number"
              className="input"
              value={people}
              id="people"
              placeholder="0"
              onChange={handlePeople}
              onKeyDown={(e) => e.key === "e" && e.preventDefault()}
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-[24px] rounded-[16px] bg-primary-dark px-[16px] py-[32px] pb-[16px] md:w-[50%] md:gap-[24px] md:px-[38px] md:py-[40px]">
          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-white">Tip Amount</h2>
                <small className="small">/ person</small>
              </div>
              <h2 className="text-[34px] font-bold text-primary md:text-[48px]">
                ${tip}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[16px] font-bold text-white">Total</h2>
                <small className="small">/ person</small>
              </div>
              <h2 className="text-[34px] font-bold text-primary md:text-[48px]">
                ${total}
              </h2>
            </div>
          </div>
          <button className="btn-primary" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </main>
  );
}
