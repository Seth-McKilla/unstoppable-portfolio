import React, { useEffect, useState } from "react";
import uauth from "./uauth";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AppBar, Box, Toolbar, Button, LinearProgress } from "@mui/material";
import { User } from "./types";

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

  const handleLogin = async () => {
    setLoading(true);
    try {
      await uauth?.loginWithPopup();
      const user = await uauth?.user();
      setUser(user);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
    return window.location.reload();
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await uauth?.logout();
      setUser(undefined);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
    return window.location.reload();
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
          {user ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleLogin}>
              Login with Unstoppable
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <PerfectScrollbar>
        <Box sx={{ height: "calc(100vh - 112px)" }}>{renderContent()}</Box>
      </PerfectScrollbar>
      <Footer />
    </>
  );
}
