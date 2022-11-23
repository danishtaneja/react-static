import { Redirect, Route, Switch } from 'react-router-dom'
import { Profile } from './Profile';
import { Education } from './Education';
import { Projects } from './myProjects'
import { Skills } from './Skills'
import { Home } from './Home';
import  Contact  from './Contact';
function Main() {
    return (
      <>
    <Switch>
      <Route exact path={'/main/'} component={Home} />
      <Route path={'/main/profile'} component={Profile} />
      <Route path={'/main/education'} component={Education}/>
      <Route path={'/main/myProject'} component={Projects} />
      <Route path={'/main/skills'} component={Skills}/>
      <Route path={'/main/contact'} component={Contact} />
      <Redirect to={'/main'} />
      </Switch>
      </>
    );
  }
  
  export default Main;