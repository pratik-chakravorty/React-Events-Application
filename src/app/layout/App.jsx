import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashBoard from "../../features/event/EventDashBoard/EventDashBoard";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import NavBar from "../../features/nav/NavBar/NavBar";
import SettingsDashboard from "../../features/Settings/SettingsDashboard";
import HomePage from "../../features/home/HomePage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/UserDetailed/UserDetailedPage";
import { Route, Switch } from "react-router-dom";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashBoard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
