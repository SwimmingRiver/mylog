
import Join from './Join';
import Welcome from './Welcome';
import { useState } from 'react';
import { UserInfoContext } from './UserContext';

function LogInJoinPage(){
    const [userData,setUserData]=useState([
        {
            id:"",
            pw:"",
        }
    ]);
    return(
        <>
        <UserInfoContext.Provider value={{userData,setUserData}}>
        <Welcome/>
        <Join/>
        </UserInfoContext.Provider>
        </>
    );
}
export default LogInJoinPage