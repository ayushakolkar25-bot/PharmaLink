import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Feed from '../pages/Feed/Feed'
import Profile from '../pages/Profile/Profile'

import { AuthProvider } from '../stores/authStore'

function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Public */}

          <Route
            path="/"
            element={<Landing />}
          />

          {/* Application */}

          <Route
            path="/feed"
            element={<Feed />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* Authentication */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
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
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRouter