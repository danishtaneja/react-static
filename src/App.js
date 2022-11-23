import { Route, Switch} from 'react-router-dom'
import Main from './Pages/App2';
import Data from './Pages/ScanQR';
function App() {
  return (
    <>
    <Switch>
    <Route exact path='/'  component={Data}/>
    <Route path={'/main'} component={Main} />
    </Switch>
    </>
  );
}

export default App;