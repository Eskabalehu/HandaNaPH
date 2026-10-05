import { HashRouter } from 'react-router';
import AppRoutes from './routes/AppRoutes';
import SettingsProvider from './context/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </SettingsProvider>
  );
}

export default App;