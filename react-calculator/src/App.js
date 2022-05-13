
import CalculatorTitle from './components/calculatorTitle';
import OutputScreen from './components/outputScreen';
import Button from './components/button';
import { useState } from 'react';
function App() {
  const [state, setState] = useState({ question: '', answer: ''});
  const handleClick = (event) => {
 
    
    const value = event.target.value;
   
    switch (value) {
      case '=': {
        if (state.question!=='')
        {
            var ans='';
              try
                {
                    ans = eval(state.question);
                }
                catch(err)
                {
                    setState({answer: "Math Error"});
                }
                if (ans===undefined)
                    setState({answer: "Math Error"});
   
                else
                    setState({ answer: ans , question: ''});
                break;
            }
            break;
      }
      case 'Clear': {
   
        setState({ question: '', answer: '' });
        break;
      }
   
      case 'Delete': {
        var str = state.question;
          str = str.substr(0,str.length-1);
          setState({question: str});
          break;
      }
   
    default: {
   
        setState({ question: state.question += value})
        break;
      }
    }
  }
  return (
    <div className="frame">
    <CalculatorTitle value="sk - Calculator"/>
    <div className="mainCalc">
    <OutputScreen answer = {state.answer} question = {state.question}/>
    <div className="button-row">
      <Button label={'Clear'} handleClick = {handleClick}/>
      <Button label={'Delete'} handleClick = {handleClick}/>
      <Button label={'.'} handleClick = {handleClick}/>
      <Button label={'/'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {handleClick}/>
      <Button label={'8'} handleClick = {handleClick}/>
      <Button label={'9'} handleClick = {handleClick}/>
      <Button label={'*'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {handleClick}/>
      <Button label={'5'} handleClick = {handleClick}/>
      <Button label={'6'} handleClick = {handleClick}/>
      <Button label={'-'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {handleClick}/>
      <Button label={'2'} handleClick = {handleClick}/>
      <Button label={'3'} handleClick = {handleClick}/>
      <Button label={'+'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {handleClick}/>
      <Button label={'='} handleClick = {handleClick}/>
    </div>
    </div>
    </div>
    );
}

export default App;
