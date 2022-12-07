import { Router } from './Routes';
import './styles/globals.scss';
import './styles/layout.scss';

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
