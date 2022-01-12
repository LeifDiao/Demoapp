import { useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { EditCode } from "./EditCode";
import { AzureFunctions } from "./AzureFunctions";
import { Graph } from "./Graph";
import { CurrentUser } from "./CurrentUser";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { Deploy } from "./Deploy";
import { Publish } from "./Publish";
import { ListTab } from "./ListTab";
import { ChartTab } from "./ChartTab";

export function Welcome(props: { showFunction?: boolean; environment?: string }) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["local", "azure", "publish","new"];
  const friendlyStepsName: { [key: string]: string } = {
    local: "1. Build your app locally",
    azure: "2. Provision and Deploy to the Cloud",
    publish: "3. Publish to Teams",
    new: "4.Add something new",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("local");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  const { isInTeams } = useTeamsFx();
  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  const userName = userProfile ? userProfile.displayName : "";
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
      
        <h1 className="center">Welcome{userName ? ", " + userName : ""}!</h1>
        <p className="center">Please explore your OKR Hub in your {friendlyEnvironmentName}</p>
        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "local" && (
            <div>
              <EditCode showFunction={showFunction} />
              {isInTeams && <CurrentUser userName={userName} />}
              <Graph />
              {showFunction && <AzureFunctions />}
            </div>
          )}
          {selectedMenuItem === "azure" && (
            <div>
              <Deploy />
            </div>
          )}
          {selectedMenuItem === "publish" && (
            <div>
              <ChartTab />
             
            </div>
          )}
          {selectedMenuItem === "new" && (
            <div>
              <ListTab />
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
