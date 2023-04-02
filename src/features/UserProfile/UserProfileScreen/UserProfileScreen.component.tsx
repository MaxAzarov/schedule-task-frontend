import { useCallback } from "react";
import { ConnectButton } from "src/components/buttons";
import { Config } from "src/config";

export function UserProfileScreen() {
  const handleConnectJira = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/jira/auth`;
  }, []);

  const handleConnectTrello = useCallback(() => {
    window.location.href = `${Config.API_BASE_URL}/jira/auth`;
  }, []);

  return (
    <div>
      <ConnectButton onClick={handleConnectJira} />
      <ConnectButton onClick={handleConnectTrello} />
    </div>
  );
}
