/* eslint-disable no-unused-vars */

import MeetingView from "./components/MeetingView/MeetingView";
import { ThemeProvider } from "styled-components";
import { LightTheme, darkTheme } from "./utils/Theme";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SettingsApp from "./pages/settings/SettingsApp";
import Presentation from "./pages/presentation/Presentation";
import Login from "./pages/Login";
import { connectWithWebSocket } from "./utils/wssConnection/wssConnection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    connectWithWebSocket()
  }, [])
  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/video-chat"
          element={
            <MeetingView setDarkMode={setDarkMode} darkMode={darkMode} />
          }
        />
        <Route path="/settings" element={<SettingsApp />} />
        <Route path="/manage-presentation" element={<Presentation />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
