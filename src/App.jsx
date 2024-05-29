import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OutletComponent from "./Components/Outlet/OutletComponent";
import Login from "./Pages/Login";
import Announcements from "./Pages/Announcements";
import HelpCenter from "./Pages/HelpCenter";
import Inbox from "./Pages/Inbox";
import Settings from "./Pages/Settings";
import Teams from "./Pages/Teams";
import Tickets from "./Pages/Tickets";
import WidgetAppearance from "./Pages/WidgetAppearance";
import WidgetSetting from "./Pages/WidgetSetting";
import { routes } from "./Routes/routes";
import CreateTicket from "./Pages/CreateTicket";
import WriteHelp from "./Pages/WriteHelp";
import VerifyOTP from "./Pages/VerifyOTP";
import ChangePassword from "./Pages/ChangePassword";
import { Toaster } from "react-hot-toast";
import WidgetAppereanceMessage from "./Pages/WidgetAppereanceMessage";
import TeamAgent from "./Pages/TeamAgent";
import InviteNewUser from "./Pages/InviteNewUser";
import AddNewTeam from "./Pages/AddNewTeam";

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletComponent />}>
          <Route index element={<Inbox />} />
          <Route path={routes.Announcment} element={<Announcements />} />
          <Route path={routes.HelpCenter} element={<HelpCenter />} />
          <Route path={routes.Setting} element={<Settings />} />
          <Route path={routes.Team} element={<Teams />} />
          <Route path={routes.CreateNewTeam} element={<AddNewTeam />} />
          <Route path={routes.InviteUser} element={<InviteNewUser />} />
          <Route path={routes.TeamAgent} element={<TeamAgent />} />
          <Route path={routes.Tickets} element={<Tickets />} />
          <Route
            path={routes.WidgetAppearance}
            element={<WidgetAppearance />}
          />
          <Route path={routes.WidgetSetting} element={<WidgetSetting />} />
          <Route path={routes.CreateTicket} element={<CreateTicket />} />
          <Route path={routes.WriteHelp} element={<WriteHelp />} />
          <Route path={routes.VerifyOtp} element={<VerifyOTP />} />
          <Route path={routes.ChangePassword} element={<ChangePassword />} />
          <Route
            path={routes.WidgetAppearancemessage}
            element={<WidgetAppereanceMessage />}
          />
        </Route>

        <Route path={routes.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
