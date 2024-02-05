import styled from 'styled-components';
import React, { useState } from 'react';
// import bg from "./img/bg.jpg";
import { MainLayout } from './styles/Layout';
import Orb from './component/orb/Orb';
import Navigation from './component/Navigation/Navigation';
// import { useGlobalContext } from './context/globalContext';

function App() {

  const [active, setActive] = useState(1)

  // const global = useGlobalContext()
  // console.log(global);

  return (
    <AppStyled className="App">
      <Orb />
      <MainLayout>
      <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background: rgb(184,154,205);
    background: radial-gradient(circle, rgba(184,154,205,1) 0%, rgba(33,7,55,1) 100%);
    position: relative;
  `;

export default App;
