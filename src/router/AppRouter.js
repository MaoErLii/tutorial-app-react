import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TempCalclator from "../components/TempCalclator";
// import Time from '../components/Time'

const Index = () => (
        <div>
            <h2>Home</h2>
            <TempCalclator/>
        </div>
    );
const About = () => <h2>About</h2>
const User = () => <h2>User</h2>
const Topic = ({ match }) => <h3>Requested Param: { match.params.id }</h3>
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v .State</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} compontent={Topic}/>
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)

const AppRouter = () => (
    <Router>
        <div>
            <h2>React-router-dom</h2>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                    </li>
                    <li>
                        <Link to = '/user'>Users</Link>
                    </li>
                    <li>
                        <Link to = '/topics'>Topics</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
            <Route path="/topics" component={Topics} />

        </div>
    </Router>
)

export default AppRouter