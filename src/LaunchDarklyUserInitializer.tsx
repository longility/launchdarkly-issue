import {
  useLDClient,
} from "launchdarkly-react-client-sdk";
import { useState, FC, useEffect } from "react";

const LaunchDarklyUserInitializer: FC = ({ children }) => {
  const ldClient = useLDClient();
  const [identifyCompleted, setIdentifyCompleted] = useState(false);

  useEffect(() => {
    if (!ldClient) return;

    ldClient
      .identify({
        key: "d4695385-cdff-457f-a581-feae81aced10",
        firstName: "John",
        lastName: "Doe",
        name: "John Doe",
        email: "john.doe@email.com",
      })
      .then(() => setIdentifyCompleted(true));
  }, [ldClient]);

  if (!identifyCompleted) return null;
  return <>{children}</>;
};
export default LaunchDarklyUserInitializer;
