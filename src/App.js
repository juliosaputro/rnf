import React, {useState, useEffect} from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import NewsSection from "./Components/NewsSection";
import { OuterLayout } from "./styles/Layouts";
import {css} from "@emotion/react";
import { RingLoader } from "react-spinners";
import About from "./Components/About";
import Start from "./Components/Start";
import Grow from "./Components/Grow";
import Team from "./Components/Team";
import Visi from "./Components/Visi";
import Partnership from "./Components/Partnership";
import Footer from "./Components/Footer";
import TeamSlider from "./Components/TeamSlider";

function App() {
  const [loading,setLoading] = useState(false);
const override = css`
display:flex;
border-color: red;
margin-top: 20%;
margin-left: 45%;
`;
useEffect(() => {
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  }, 3000)
},[])
  return (
    <div className="App">
      {
        loading? <RingLoader color={"#243594"} loading={loading} css={override} size={75}/>
        :
        <>
      <Navigation /> 
      <Header />
      <NewsSection />
      <About />
      <Start />
      <Grow />
      <Team />
      <Visi />
      <Partnership />
      <Footer />
      </>
       }
      </div>
  );
}

const MainStyled = styled.main`

 `;
export default App;
