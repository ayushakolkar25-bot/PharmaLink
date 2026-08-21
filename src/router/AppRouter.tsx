import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import AuthLayout from '../pages/Auth/AuthLayout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Authentication */}
        <Route
          element={<AuthLayout />}
        >
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Route>

        {/* Temporary onboarding placeholder */}
        <Route
          path="/onboarding"
          element={
            <div
              style={{
                minHeight: '100vh',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'inherit',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  padding: '30px',
                }}
              >
                <h1>
                  Professional Identity
                </h1>

                <p
                  style={{
                    marginTop: '10px',
                    color: '#687783',
                  }}
                >
                  Onboarding is our next authentication task.
                </p>
              </div>
            </div>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter