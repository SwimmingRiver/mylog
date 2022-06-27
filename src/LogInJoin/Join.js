import styled from "styled-components";
import { useContext } from 'react';
import { UserInfoContext } from './UserContext';


const JoinBox = styled.div`
    border: solid 2px violet;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    width: 25vw;
    text-align: center;
`;

function Join(){
    const [userData,setUserData]=useContext(UserInfoContext);
    return(
        <>
        <JoinBox>
            <h2>Join</h2>
            <form>
            <input placeholder="Id"/>
            <p>error</p>
            <input placeholder="PassWord" />
            <p>error</p>
            <input placeholder="Repeat PassWord"/>
            <p>error</p>
            <br/>
            <button>Join</button>
            </form>
            </JoinBox>
        </>
    );
}
export default Join;