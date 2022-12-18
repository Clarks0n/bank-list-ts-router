
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from 'app-routes';

const App: React.FC = () => {
    return (
        <Suspense fallback={<h1>DOBILEEE... </h1>}>
            <Router>
                <Routes>
                    {routes.map(({ path, element }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        )}
                    )}
                    <Route
                        path='*'
                        element={<Navigate to='/account-list' />}
                    />
                </Routes>
            </Router>
        </Suspense>
    );
}

export default App;
