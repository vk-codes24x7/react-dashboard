import { useState } from "react";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import Dashboard from "./pages/dashboard";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
