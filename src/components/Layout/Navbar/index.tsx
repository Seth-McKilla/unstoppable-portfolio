import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import uauth from "../../../uauth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      return await uauth?.login();
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await uauth?.loginCallback();
        return navigate("/profile");
      } catch (error) {
        return console.error(error);
      }
    })();
  }, [navigate]);

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
