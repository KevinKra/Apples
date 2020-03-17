import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import appPage from './components/pages/app/appPage';
import overviewPage from './components/pages/overview/overviewPage';
import coursesPage from './components/pages/courses/coursesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={appPage} />
      <Route
        exact
        path="/courses/:course_id/overview"
        component={overviewPage}
      />
      <Route exact path="/courses" component={coursesPage} />
    </Router>
  );
}

export default App;
