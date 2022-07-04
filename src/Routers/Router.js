import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from './Main';
import styled from 'styled-components';
import GuGUDan from './../GGD/GuGuDan';
import Lotto from './../Lotto/Lotto';
import NumberingBaseball from './../NumberingBaseBall/NumberingBaseball';
import WordRelay from './../wordRelay/word-relay';
import Lstr from "../LocalStorageEx/LStr";
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
    border-bottom: solid 5px lightblue;
`;
const MenuList = styled.ul`
    border: solid 1px black;
    width: 10vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const LinkText=styled(Link)`
    font-size: 1.5em;
    color: black;
    text-decoration: none;
    text-align: center;
`;
const HomeLink = styled(Link)`
    font-size: 3em;
    color: black;
    text-decoration: none;
`
const ContentsWrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LinkWrapper = styled.div`
    width: 10vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border: solid 1px green;
`;
export default function Router(){
    return(
        <>
        <Title>Dev:Log</Title>
        <Wrapper>
       
        <BrowserRouter>
        <MenuList>
            <HomeLink to="/">Home</HomeLink>
        <LinkWrapper>
            <LinkText to="/GuGudan">GuGudan</LinkText>
            <LinkText to="/Lottoto">Lottoto</LinkText>
            <LinkText to="/NumberingBaseball">NBB</LinkText>
            <LinkText to="/Word-relay">WordRelay</LinkText>
            <LinkText to="/Lstr">Local Storage Ex</LinkText>
        </LinkWrapper>
        </MenuList>
            <ContentsWrapper>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/GuGudan" element={<GuGUDan/>}/>
            <Route path="/Lottoto" element={<Lotto/>}/>
            <Route path="/NumberingBaseball"element={<NumberingBaseball/>}/>
            <Route path="/word-relays" element={<WordRelay/>}/>
            <Route path="/Lstr" element={<Lstr/>}/>
        </Routes>
         
        </ContentsWrapper>
        </BrowserRouter>
        </Wrapper>
        </>
    )
}