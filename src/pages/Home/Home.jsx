import styled from "styled-components";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <MainContainer>
      <Navbar/>
      <Header/>
    </MainContainer>
  );
};

export default Home;
const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
height: 100vh;
width: 100%;
background: url("../../assets/recipe.png")
`
