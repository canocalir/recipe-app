import styled from "styled-components";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import background from './../../assets/back.jpg'

const Home = () => {
  return (
    <MainContainer background={background}>
      <Navbar/>
      <Header/>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 100vh;
height: 100%;
gap: 2rem;
background: url(${props => props.background});
background-attachment: fixed;
position: relative;
`
