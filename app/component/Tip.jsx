import React,{useState,useEffect} from 'react'

const initialChecked = {
  5: false,
  10: false,
  15: true,
  25: false,
  50: false,
}
const newChecked = {
  5: false,
  10: false,
  15: false,
  25: false,
  50: false,
};

export function Tip({reset,updateTip}) {
  const [checked, setChecked] = useState(initialChecked)
  const [custom,setCustom] = useState("")
  const [tip,setTip] = useState(15)
  const handleRadio = (e) => {
    let value = Number(e.target.value)
    setCustom("")
    setChecked({...newChecked,[value]:true})
    setTip(value)
    updateTip(value)
  }
  const handleCustom = (e) => {
    let customVal = Number(e.target.value)
    setCustom(customVal)
    setChecked(newChecked);
    updateTip(customVal);
  }
  useEffect(() =>{
    setChecked(initialChecked)
    setCustom("")
  },[reset])
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="label">Select Tip %</p>
      <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3">
        <div>
          <input
            type="radio"
            name="tip"
            className={"hidden"}
            id="five"
            value={5}
            checked={checked[5]}
            onChange={handleRadio}
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
            value={10}
            checked={checked[10]}
            onChange={handleRadio}
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
            value={15}
            checked={checked[15]}
            onChange={handleRadio}
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
            value={25}
            checked={checked[25]}
            onChange={handleRadio}
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
            value={50}
            checked={checked[50]}
            onChange={handleRadio}
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
          value={custom?custom:""}
          onChange={handleCustom}
          onKeyDown={(e) => e.key === "e" && e.preventDefault()}
        />
      </div>
    </div>
  );
}
