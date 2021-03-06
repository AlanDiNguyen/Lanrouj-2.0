import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { listCircleOutline, personCircleOutline, searchOutline} from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Matches from './pages/Matches';
import Problems from './pages/Problems';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import useAuth from './hooks/useAuth'
import UserContext from './contexts/UserContext'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App  = () => {
  const [user, setUser] = useAuth();
  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{user, setUser}}>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} exact={true} />
              <Route path="/profile" component={Profile} />
              <Route path="/matches" component={Matches} />
              <Route path="/problems" component={Problems} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route component ={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={listCircleOutline} />
                <IonLabel>LanRouj</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
              <IonTabButton tab="matches" href="/matches">
                <IonIcon icon={listCircleOutline} />
                <IonLabel>Matches</IonLabel>
              </IonTabButton>
              <IonTabButton tab="problems" href="/problems">
                <IonIcon icon={searchOutline} />
                <IonLabel>Problems</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
