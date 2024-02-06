import styled from 'styled-components';
import React, { useState, useMemo } from 'react';
import { MainLayout } from './styles/Layout';
import Orb from './component/orb/Orb';
import Navigation from './component/Navigation/Navigation';
import Dashboard from './component/Dashboard/Dashboard';
import Income from './component/Income/Income';
import Expense from './component/Expense/Expenses';
import { dashboard } from './utils/Icons';
import { useGlobalContext } from './context/globalContext';
import Expenses from './component/Expense/Expenses';

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard/>;
      case 2:
        return <Dashboard/>;
      case 3:
        return <Income/>;
        case 4:
        return <Expenses/>
      default: 
        return <Dashboard/>;


    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const global = useGlobalContext()
  console.log(global);

  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background: rgb(184, 154, 205);
  background: radial-gradient(
    circle,
    rgba(184, 154, 205, 1) 0%,
    rgba(33, 7, 55, 1) 100%
  );
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
