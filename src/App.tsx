import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DefaultButton } from "@fluentui/react";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { ThemeProvider } from "@fluentui/react/lib/Theme";

const geolocation: Geolocation = navigator.geolocation;

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

function App() {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [loc, setLoc] = useState<boolean>();

  function getLocation() {
    if (geolocation) {
      geolocation.getCurrentPosition(findLocal, showError);
    } else {
      setLoc(false);
    }
    function findLocal(position: any) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      setLoc(true);
    }
    function showError(error: any) {
      alert(error.message);
    }
  }
  return (
    <ThemeProvider>
      <div className="App" onLoad={() => getLocation()}>
        <header className="App-header">
          <Stack tokens={verticalGapStackTokens}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>&int;bogdad(dy)</p>
            <a
              className="App-link"
              href="https://cscloud.itsjoeoui.com/egHeryWQMwFZhEBSYX5U/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coming soon...
            </a>
            <DefaultButton onClick={() => getLocation()}>Suicide</DefaultButton>
            <p>
              {loc ? (
                <p>
                  Bogdaddy is on his way
                  <br /> Latitude: {lat}
                  <br /> Longitude: {lng}
                </p>
              ) : (
                <p>Location is unavailable</p>
              )}
            </p>
          </Stack>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
