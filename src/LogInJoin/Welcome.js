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
            <p>Welcome,Guest{Math.floor(Math.random()*8999+1000)}</p>
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