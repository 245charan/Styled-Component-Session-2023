import styled from 'styled-components'

const ProgressBarContainer = styled.div `
  display: flex;
  width: 247px; // 300 - 50 - 3
`

const ProgressBar = styled.div `
  background: ${({progress}) =>
    parseInt(progress) <= 20 ? '#FFB5B6' :
    parseInt(progress) <= 40 ? '#FED8B3' :
    parseInt(progress) <= 60 ? '#F9F4C2' :
    parseInt(progress) <= 80 ? '#B8F9A2' :
    '#95DFF3'
  };
  border-radius: 0 7px 7px 0;
  width: ${({progress}) => progress};
`

const ProgressBarToday = styled(ProgressBar) `
  border: 4px solid #ff6961;
  border-radius: 0 7px 7px 0;
  box-sizing: border-box;
`

const StyledSection = styled.section `
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const WeekdayTitle = styled.div `
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle) `
  background: lightgrey;
  border-radius: 7px 0 0 7px;
`

const Section = ({progress, day}) => {
  const dayInitial = day[0]
  const isWeekend = dayInitial === 'S'
  const daysNums = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const todayNum = new Date().getDay() - 1
  const isToday = todayNum === daysNums.indexOf(day)

  return (
    <StyledSection>
      {!isWeekend && <WeekdayTitle>{dayInitial}</WeekdayTitle>}
      {isWeekend && <WeekendTitle>{dayInitial}</WeekendTitle>}
      <ProgressBarContainer>
        {!isToday && <ProgressBar progress={progress} />}
        {isToday && <ProgressBarToday progress={progress} />}
      </ProgressBarContainer>
    </StyledSection>
  )
}

export default Section
