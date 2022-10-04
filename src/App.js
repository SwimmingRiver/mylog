import Main from './Routers/Main';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 5em;
    background-color: #263238;
    width: 100%;
    height: 20%;
    text-align: center;
    color: white;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#62727b ;
    height: 80%;
    
`;

function App(){
    return(
        <>
        <Wrapper>
        <Header>Dev Log</Header>
        <Main/>
        </Wrapper>
        </>
    )
} 

export default App; 





