import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MODES } from "./constants/modes";
import User from "./pages/User/User";
import Admin from "./pages/Admin/Admin";

function App() {
  const [mode, setMode] = useState(MODES.ADMIN);
  console.log(mode);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        <Button
          style={{ width: "40%" }}
          variant={`${mode === MODES.USER ? "contained" : "outlined"}`}
          onClick={() => {
            setMode(MODES.USER);
          }}
        >
          USER
        </Button>
        <Button
          style={{ width: "40%" }}
          variant={`${mode === MODES.ADMIN ? "contained" : "outlined"}`}
          onClick={() => {
            setMode(MODES.ADMIN);
          }}
        >
          ADMIN
        </Button>
      </div>
      {mode === MODES.USER && <User />}
      {mode === MODES.ADMIN && <Admin />}
    </div>
  );
}

export default App;
