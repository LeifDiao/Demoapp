import { useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./MainTab.css";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { ListTab } from "./ListTab";
import { FormTab } from "./FormTab";
import { DashboardTab } from "./Dashboardtab";
import { BoardsTab } from "./Kanban";

export function MainTab(props: { showFunction?: boolean; environment?: string }) {
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

  const steps = ["view1", "view2", "view3","view4"];
  const friendlyStepsName: { [key: string]: string } = {
    view1: "Dashboard",
    view2: "Objectives",
    view3: "Summary",
    view4: "Kan-ban Board",
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
{/*       
        <h1 className="center">Welcome{userName ? ", " + userName : ""}!</h1>
        <p className="center">Please explore your OKR Hub in your {friendlyEnvironmentName}</p> */}
        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "view1" && (
            <div>
              <DashboardTab />
            </div>
          )}
          {selectedMenuItem === "view2" && (
            <div>
              <ListTab />
            </div>
          )}
          {selectedMenuItem === "view3" && (
            <div>
              <FormTab />
             
            </div>
          )}
          {selectedMenuItem === "view4" && (
            <div>
              <BoardsTab />
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
