import  styled  from 'styled-components';

const Header = styled.div`
    border-bottom:solid 1px black ;
    display: flex;
    justify-content:space-between;
`;

function Welcome(){
    return(
        <>
        <Header>
            <p>Welcome,Guest</p>
            <div>
            <input placeholder='Id'/>
            <input placeholder='Password'/>
            <button>Login</button>
            <button>Join</button>
            </div>
        </Header>
        </>
    )
}
export default Welcome;