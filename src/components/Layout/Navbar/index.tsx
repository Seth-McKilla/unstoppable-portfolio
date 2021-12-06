import { AppBar, Toolbar, Button, Box } from "@mui/material";
import uauth from "../../../uauth";

const Navbar = () => {
  const handleClick = async () => {
    try {
      const authorization = await uauth?.login();
      console.log(authorization);
    } catch (error) {
      console.error(error);
    }
  };

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
