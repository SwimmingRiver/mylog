import styled from "styled-components";

const Box = styled.div`
    width: 40vw;
    height: 45vh;
    border-radius: 10px;
    text-align: center;
    background-color: white;
`;
const BTitle = styled.h2`
    border-bottom: solid 2px black;
    font-size: 2em;
`;
const Gif = styled.img`
    width: 25em;
    height: 20em;
`;


function ContentBox(){
    return<>
        <Box>
            <BTitle>Box</BTitle>
            <div>contents</div>
            <Gif src={require('../Animation.gif')}  />
        </Box>
    </>
}
export default ContentBox;