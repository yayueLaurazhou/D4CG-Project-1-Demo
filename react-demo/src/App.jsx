import { useState } from 'react'
import MultipleChoice from './MultipleChoice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const dummy_data = [
  {
    'Q1' : "Has the patient been diagnosed with: any known congenital bone marrow failure syndrome (e.g. Fanconi anemia, Kostmann syndrome, Shwachman syndrome)?", 
    'Q2': "This is the first question shown if the user answered Yes", 
    'Q3': "This is the second question shown if the user answered Yes"
  }, 
  {
    'Q1':"This is a multiple choice question",
    
    'Options':
    {
      '1' : "This is option 1",
      '2' : "This is option 2",
      '3' : "This is option 3",
    },
    
    'MoreQuestion':
    {
    'selected1': "This is an input field if option1 is included in the selection",
    'selected2': "This is an input field if option2 is included in the selection",
    'selected3': "This is an input field if option3 is included in the selection"
    }
  }
]

export default function App() {
  return (
    <>
      <Section1 data={dummy_data}/>
      <div className='section'>
        <MultipleChoice data={dummy_data}/>
      </div>
    </>
  )
}

function Section1({data}){
  const [isShown, setIsShown] = useState(false)
  const handleShownChange = (e) => {
    setIsShown(!isShown)
  }

  return ( 
    <>
      <div className='section'>
        <h2>Section 1 <button className="icon" onClick={handleShownChange}>{isShown ? "-" : "+"}</button></h2>
        {isShown && <Form data={data}/>}
      </div>
    </>
    
  )

}

function Form({data}){
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <form>
        <p>{data[0]["Q1"]}</p>
        <label>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === 'Yes'}
            onChange={handleOptionChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={selectedOption === 'No'}
            onChange={handleOptionChange}
          />
          No
        </label>
        <label>
          <input
            type="radio"
            value="Not sure"
            checked={selectedOption === 'Not sure'}
            onChange={handleOptionChange}
          />
          Not sure
        </label>
      </form>
      {selectedOption === 'Yes'&& <AdaptiveForms data={data}/>}
    </>
  )
}

function AdaptiveForms({data}){
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedNumber, setSelectedNumber] = useState(0)

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleNumberChange = (e) => {
    setSelectedNumber(e.target.value);
  };
  return(
   <form>
    <p>{data[0]["Q2"]}</p>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={selectedOption === 'Yes'}
          onChange={handleOptionChange}
        />
        Yes
      </label>
      <label>
        <input
              type="radio"
              value="No"
              checked={selectedOption === 'No'}
              onChange={handleOptionChange}
            />
            No
      </label>
      <label>
          <input
            type="radio"
            value="Not sure"
            checked={selectedOption === 'Not sure'}
            onChange={handleOptionChange}
          />
          Not sure
      </label> 
    <p>{data[0]["Q3"]}</p>
    <input type="number" min="0" value={selectedNumber} onChange={handleNumberChange}></input>
  </form>
  )
}


