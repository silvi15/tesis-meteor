import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

/* public */ 
import Public from '../pages/Public';
/* Private */
import Authenticated from '../pages/Authenticated';
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index';

/*Document */
import Documents from '../pages/document/Documents';
import NewDocument from '../pages/document/NewDocument';
import EditDocument from '../containers/document/EditDocument';
import ViewDocument from '../containers/document/ViewDocument';

/*FeedBacks */
import FeedBacks from '../pages/feedBack/FeedBacks';
import NewFeedBack from '../pages/feedBack/NewFeedBack';
import EditFeedBack from '../containers/feedBack/EditFeedBack';
import ViewFeedBack from '../containers/feedBack/ViewFeedBack';

/*Mesagge */
import Mesagges from '../pages/mesagge/Mesagges';
import NewMesagge from '../pages/mesagge/NewMesagge';
import EditMesagge from '../containers/mesagge/EditMesagge';
import ViewMesagge from '../containers/mesagge/ViewMessage';

/* proyect */
import Projects from '../pages/project/Projects';
import NewProject from '../containers/project/NewProject';
import EditProject from '../containers/project/EditProject';
import ViewProject from '../containers/project/ViewProject';

/* professions */
import Professions from '../pages/profession/Professions';
import NewProfession from '../pages/profession/NewProfession';
import EditProfession from '../containers/profession/EditProfession';
import ViewProfession from '../containers/profession/ViewProfession';

/*home */
import Home from '../pages/home/Home';
import ProjectsWorking from '../pages/home/ProjectsWorking';
import ProjectsFinished from '../pages/home/ProjectsFinished';

/* country*/
import Countrys from '../pages/country/Countrys';
import NewCountry from '../pages/country/NewCountry';
import EditCountry from '../containers/country/EditCountry';

{/*import ViewCountry from '../containers/country/ViewCountry'; */}
/* skill */
import Skills from '../pages/skill/Skills';

//Login
import Login from '../pages/Login';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Signup from '../pages/Signup';
import SignupEnterprise from '../pages/SignupEnterprise';
import NotFound from '../pages/NotFound';
import Rol from '../pages/Rol';

//Pages

import Inbox from '../pages/Inbox';
import FindPeople from '../pages/FindPeople';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

const App = appProps => (
  <Router>
    <div className="App">
      <AppNavigation {...appProps} />
      <Grid>
        <Switch>
          <Route exact name="index" path="/" component={Index} />
          
          <Authenticated exact path="/projects" component = { Projects } {...appProps } />
          <Authenticated exact path="/projects/new" component={ NewProject } {...appProps} />
          <Authenticated exact path="/projects/:_id" component = { ViewProject } {...appProps } />
          <Authenticated exact path="/projects/:_id/edit" component = { EditProject } {...appProps } />

          <Authenticated exact path="/documents" component={ Documents } {...appProps} />
          <Authenticated exact path="/documents/new" component={ NewDocument } {...appProps} />
          <Authenticated exact path="/documents/:_id" component={ ViewDocument } {...appProps} />
          <Authenticated exact path="/documents/:_id/edit" component={ EditDocument } {...appProps} />

          <Authenticated exact path="/feedbacks" component={ FeedBacks } {...appProps} />
          <Authenticated exact path="/feedbacks/new" component={ NewFeedBack } {...appProps} />
          <Authenticated exact path="/feedbacks/:_id" component={ ViewFeedBack } {...appProps} />
          <Authenticated exact path="/feedbacks/:_id/edit" component={ EditFeedBack } {...appProps} />

          <Authenticated exact path="/mesagges" component={ Mesagges } {...appProps} />
          <Authenticated exact path="/mesagges/new" component={ NewMesagge } {...appProps} />
          <Authenticated exact path="/mesagges/:_id" component={ ViewMesagge } {...appProps} />
          <Authenticated exact path="/mesagges/:_id/edit" component={ EditMesagge } {...appProps} />

          <Authenticated exact path="/professions" component={ Professions } {...appProps} />  
          <Authenticated exact path="/professions/new" component={ NewProfession } {...appProps} />
          <Authenticated exact path="/professions/:_id" component={ ViewProfession } {...appProps} />
          <Authenticated exact path="/professions/:_id/edit" component={ EditProfession } {...appProps} />

          <Authenticated exact path="/countrys" component={ Countrys } {...appProps} />  
          <Authenticated exact path="/countrys/new" component={ NewCountry } {...appProps} />
    {/*  <Authenticated exact path="/countrys/:_id" component={ ViewCountry } {...appProps} />*/}
          <Authenticated exact path="/countrys/:_id/edit" component={ EditCountry } {...appProps} />

          <Authenticated exact path="/skills" component={Skills} {...appProps} />
{/*          <Authenticated exact path="/skills/new" component={NewSkill} {...appProps} />
          <Authenticated exact path="/skills/:_id" component={ViewSkill} {...appProps} />
          <Authenticated exact path="/skills/:_id/edit" component={EditSkill} {...appProps} />
*/}          
          <Authenticated exact path="/home" component = { Home } {...appProps} />
          <Authenticated exact path="/projectsworking" component = { ProjectsWorking } {...appProps} />
          <Authenticated exact path="/projectsfinished" component = { ProjectsFinished } {...appProps} />
          
          <Authenticated exact path="/inbox" component = { Inbox } {...appProps} />
          <Authenticated exact path="/findPeople" component = { FindPeople } {...appProps}  />          
          <Authenticated exact path="/notification" component = { Notification } {...appProps } />
          <Authenticated exact path="/profile" component = { Profile } {...appProps} />
          
          <Public path="/signup" component={Signup} {...appProps} />
          <Public path="/signupenterprise" component={SignupEnterprise} {...appProps} />
          <Public path="/rol" component={Rol} {...appProps} />
          <Public path="/login" component={Login} {...appProps} />
          <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
          <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};
//para tener acceso a las rutas autenticadas 
const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default composeWithTracker(composer)(App);
