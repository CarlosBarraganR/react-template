import logo from './logo.svg';
import './tailwind.css';

function App() {
  return (
    <div
      className="bg-gray-700 min-h-screen min-w-full text-white text-3xl flex flex-col justify-center items-center border-2"
      data-testid="AppComponent"
    >
      <img src={logo} className="h-60 animate-spin" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        data-testid="AppLink"
        className="text-blue-500 hover:underline"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
