import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import uauth from "../../../uauth";

const Navbar = () => {
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState<string>("");

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
        setRedirectTo("/profile");
      } catch (error) {
        console.error(error);
      }
    })();
  }, [navigate]);

  useEffect(() => {
    if (redirectTo) return navigate(redirectTo);
  }, [navigate, redirectTo]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Login with Unstoppable
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
