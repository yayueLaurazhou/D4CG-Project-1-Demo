import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function MultipleChoice({data}){
    const [selectedOption, setSelectedOption] = useState([])
    const [addClass, setAddClass] = useState(false)
  
    function handleOptionChange(key){
        setAddClass(true);
        if (selectedOption.includes(key)){
            setSelectedOption((selectedOption) => selectedOption.filter((option) => option !== key));
        }else{
            setSelectedOption([...selectedOption, key]);
        }
        setTimeout(() => {setAddClass('false')}, 1);
    };
  
    return (
      <> 
        <p>{data[1]["Q1"]}</p>   
        <ul>
          {Object.entries(data[1]["Options"]).map(([key, value]) =>(
            <MultipleChoiceItem key={key} id={key} value={value} handleOptionChange={handleOptionChange}/>
          ))}
        </ul>
        <div>
            <MoreQuestions data={data} selected={selectedOption} addClass={addClass}/>
        </div>
      </>
    )
  }
  
  function MultipleChoiceItem({id,value,handleOptionChange}){
    return (
      <li style={{listStyleType: "none"}}>
        <input
          type="checkbox"
          value={false}
          onChange={() => handleOptionChange(id)}
        />
        {value}
      </li>
    )
  }
  

  function MoreQuestions({data, selected, addClass}){
    return (
        <div>  
            {selected.map((id) => {
                return (
                    <div className={addClass ? "flash":""} >
                        <label>{data[1]["MoreQuestion"][`selected${id}`]}   </label>
                        <input/>
                        <br></br>
                    </div>
                )
            })}
        </div>
    )
  }
