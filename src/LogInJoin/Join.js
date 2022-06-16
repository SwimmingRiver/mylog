import styled from "styled-components";


const JoinBox = styled.div`
    border: solid 2px violet;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    width: 80vw;
    text-align: center;
`;

function Join(){
    return(
        <>
        <JoinBox>
            <h2>Join</h2>
            <form>
            <input placeholder="Name" id="1"/>
            <input placeholder="Id" id="2"/>
            <input placeholder="PassWord" id="3"/>
            <input placeholder="Repeat PassWord" id="4"/><br/>
            <button>Join</button>
            </form>
            </JoinBox>
        </>
    );
}
export default Join;