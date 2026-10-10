
import AppRouter from './router/AppRouter'
import { AuthProvider } from './stores/authStore'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
