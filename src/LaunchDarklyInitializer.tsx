import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { FunctionComponent, useState, FC, useEffect } from "react";

const LaunchDarklyInitializer: FC<{ clientSideId: string }> = ({
  clientSideId,
  children,
}) => {
  const [
    launchDarklyProviderWrapper,
    setLaunchDarklyProviderWrapper,
  ] = useState<{ LaunchDarklyProvider: FunctionComponent<{}> } | undefined>(); // wrapper needed so it doesn't throw an error weirdness.

  useEffect(() => {
    asyncWithLDProvider({
      clientSideID: clientSideId,
      deferInitialization: true,
    }).then((LaunchDarklyProvider) =>
      setLaunchDarklyProviderWrapper({ LaunchDarklyProvider })
    );
  }, [clientSideId]);

  if (!launchDarklyProviderWrapper) return null;
  const { LaunchDarklyProvider } = launchDarklyProviderWrapper;
  return <LaunchDarklyProvider>{children}</LaunchDarklyProvider>;
};
export default LaunchDarklyInitializer;
