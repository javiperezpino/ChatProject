import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'




class InstructorApp extends Component {
    render() {
        return (
                <Router basename ="ChatProject/">
                <>
                    <h1>Instructor Application 1</h1>
                    <Switch>
                        
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
                </Router>
        )
    }
}

export default InstructorApp
