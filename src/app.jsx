import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';

const Home = lazy(() => import('./pages/home.jsx'));

render(
    () => (
        <Router>
            <Routes>
                <Route path='/' component={Home} />
            </Routes>
        </Router>
    ),
    document.getElementById('root'),
);
