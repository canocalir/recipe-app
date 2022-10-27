import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <MainContainer>
      <Navbar/>
    </MainContainer>
  );
};

export default Home;
const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url("../../assets/recipe.png")
`
