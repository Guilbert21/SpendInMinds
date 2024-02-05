import styled from 'styled-components';
// import bg from "./img/bg.jpg";
import { MainLayout } from './styles/Layout';
import Orb from './component/orb/Orb';

function App() {

  return (
    <AppStyled className="App">
      <Orb />
      <MainLayout>

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
