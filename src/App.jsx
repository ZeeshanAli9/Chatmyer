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

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutletComponent />}>
          <Route index element={<Inbox />} />
          <Route path={routes.Announcment} element={<Announcements />} />
          <Route path={routes.HelpCenter} element={<HelpCenter />} />
          <Route path={routes.Setting} element={<Settings />} />
          <Route path={routes.Team} element={<Teams />} />
          <Route path={routes.Tickets} element={<Tickets />} />
          <Route
            path={routes.WidgetAppearance}
            element={<WidgetAppearance />}
          />
          <Route path={routes.WidgetSetting} element={<WidgetSetting />} />
        </Route>

        <Route path={routes.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
