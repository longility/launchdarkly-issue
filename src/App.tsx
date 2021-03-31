import "./App.css";
import { useLDClient } from "launchdarkly-react-client-sdk";

function App() {
  const ldClient = useLDClient();
  return (
    <div className="App">
      <code>{JSON.stringify(ldClient?.allFlags())}</code>
    </div>
  );
}

export default App;
