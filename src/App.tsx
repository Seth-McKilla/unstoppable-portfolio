import React, { useEffect, useState } from "react";
import uauth from "./uauth";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Button,
  LinearProgress,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { User } from "./types";

// Components
import { Footer, Home, Profile } from "./components";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
      <AppBar>
        <Toolbar>
          <Box sx={{ flexGrow: 1, height: 60 }}>
            <img
              src="/UP-logos_black.png"
              alt="UP-logo"
              style={{ height: "100%" }}
            />
          </Box>
          {user ? (
            <>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                  padding: 0.5,
                  margin: 0.5,
                  textTransform: "none",
                }}
              >
                <img
                  alt=""
                  draggable="false"
                  src="https://docs.unstoppabledomains.com/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MF1CaqLXCtpg4trwHjh%2F-MjjpJ6gM6yNltRf0-yc%2F-MjjudfnwJ7Gm_roYy5j%2Fdefault-icon.png?alt=media&amp;token=34f41fe8-5e26-45f2-ace2-6dffb113c031"
                  style={{ height: 40 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: 150,
                  }}
                  noWrap
                  ml={1}
                >
                  {user.wallet_address}
                </Typography>
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={!!anchorEl}
                onClose={() => {
                  setAnchorEl(null);
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="secondary"
              onClick={handleLogin}
              sx={{
                margin: 0,
                padding: 0,
                "&:hover": { filter: "brightness(0.85)" },
              }}
            >
              <img
                alt="unstoppable-login-button"
                draggable="false"
                src="https://docs.unstoppabledomains.com/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-MF1CaqLXCtpg4trwHjh%2F-MjjpJ6gM6yNltRf0-yc%2F-MjjutLm4Kh7ikfH7Pi3%2Fpressed-button.png?alt=media&amp;token=e1ac2392-8d77-4a60-b7a7-fa9f65a34cb8"
                style={{ height: 40 }}
              />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {renderContent()}
      <Footer />
    </>
  );
}
