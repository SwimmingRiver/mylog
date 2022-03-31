import { Route,Routes,BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Daily from './Daily';
import MiniProject from './MiniProject';


export default function Router(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/*'element={<HomePage/>} />
        <Route path='/Daily/*' element={<Daily/>}/>
        <Route path='/MiniProject/*' element={<MiniProject/>}/>
    </Routes>
    </BrowserRouter>
    )
}