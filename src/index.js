import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Section from './Section'

const Title = styled.h1 ``

ReactDOM.render(
  <React.StrictMode>
    <Title>Project Tracker</Title>
    <div>
      <Section progress='55%' day='Mo' />
      <Section progress='15%' day='Tu' />
      <Section progress='29%' day='We' />
      <Section progress='70%' day='Th' />
      <Section progress='90%' day='Fr' />
      <Section progress='5%' day='Sa' />
      <Section progress='68%' day='Su' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value

//TO DO:
// extend the WeekdayTitle component to make a WeekendTitle component
// use the WeekendTitle if the text prop is an 'S'

//TO DO:
// move Section to its own file
// make sure the WeekdayTitle is moved with it
// export Section so we can use it in our index.js file
// pass through text as a prop
