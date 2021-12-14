import React, { useEffect, useState } from "react";
import uauth from "./uauth";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AppBar, Box, Toolbar, Button, LinearProgress } from "@mui/material";
import {type User} from "./types";

// Components
import { Footer, Home, Profile } from "./components";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const user = await uauth?.user();
        setUser(user);
      } catch (error: any) {
        setError(error.message);
      }
      return setLoading(false);
    })();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    try {
      await uauth?.loginWithPopup();
      const user = await uauth?.user();
      setUser(user);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  const renderContent = () => {
    if (loading) {
      return <LinearProgress />;
    }

    if (error) {
      console.error(error);
      return <Home />;
    }

    if (user) {
      return <Profile user={user} />;
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
      <PerfectScrollbar>
        <Box sx={{ height: "calc(100vh - 112px)" }}>{renderContent()}</Box>
      </PerfectScrollbar>
      <Footer />
    </>
  );
}
