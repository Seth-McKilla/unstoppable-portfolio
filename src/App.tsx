import React, { useEffect, useState } from "react";
import uauth from "./uauth";
import { AppBar, Toolbar, Button, Box, LinearProgress } from "@mui/material";

// Components
import { Footer, Home, Profile } from "./components";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      return await uauth?.login();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const loginCallback = await uauth?.loginCallback();
        console.log("loginCallback ->", loginCallback);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <LinearProgress />;
    }

    if (user) {
      return <Profile />;
    }

    return <Home />;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Login with Unstoppable
          </Button>
        </Toolbar>
      </AppBar>

      {renderContent()}

      <Footer />
    </>
  );
}
