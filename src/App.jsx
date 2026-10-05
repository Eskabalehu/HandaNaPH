import { HashRouter } from 'react-router';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;