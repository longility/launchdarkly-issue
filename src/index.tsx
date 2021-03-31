import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "<CLIENT-SIDE-ID>",
    user: {
      key: "d4695385-cdff-457f-a581-feae81aced10",
      firstName: "John",
      lastName: "Doe",
      name: "John Doe",
      email: "john.doe@email.com",
    },
  });

  ReactDOM.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
