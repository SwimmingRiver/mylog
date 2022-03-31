import styled  from 'styled-components';

const Header = styled.div`
    background-color:black ;
    height:30vh ;
    color:white;
    display:flex;
    justify-content:center ;
    align-items:center ;
    font-size:50px ;
`;
const ContentsWrapper = styled.div`
    display:flex ;
    flex-direction:row;
`;
const Menu = styled.div`
    display:flex ;
    flex-direction:column;
    width:10vw ;
    height:100vh ;
    font-size:55px ;
    border-right:solid 1px black;
`;
const Contents = styled.div`
    width:80vw ;
    height:100vh ;
    text-align: center;
`;
const Title = styled.h1`
    text-align: center;
    margin-top: 30px;
    font-size: 55px;
    border-bottom: solid 1px black;

`;
const MenuList = styled.ul`
    margin-top:50px;
    font-size:25px;
    display:flex;
    flex-direction:column ;
    justify-content:space-around;
    list-style:none ;
`;
const MenuListItem = styled.li`
    text-decoration:none ;
    display:flex ;
    justify-content:center ;
    border:solid 1px  blue;
    margin-bottom:30px ;
`;

function Daily(){
    return(
        <>
          <Header>Dev:Log</Header>
            <ContentsWrapper>
                <Menu>
                    Menu
                <MenuList>
                    <MenuListItem>
                        Daily
                    </MenuListItem>
                    <MenuListItem>
                        Mini Project
                    </MenuListItem>
                </MenuList>
                </Menu>
                <Contents>
                    <Title>
                    Daily
                    </Title>
                </Contents>
            </ContentsWrapper>
        </>
    )
}
export default Daily;