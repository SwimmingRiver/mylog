import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
    display: flex;

`
const Title = styled.h1`
    text-align: center;
    font-size: 10em;
    overflow: hidden;
    background-color: aliceblue;
`;
const MenuList = styled.ul`
    border: solid 1px black;
    width: 20vw;
    height: 100vh;
`;


export default function Router(){
    return(
        <>
        <Title>Dev:Log</Title>
        <Wrapper>
        <MenuList></MenuList>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
        </BrowserRouter>
        </Wrapper>
        </>
    )
}