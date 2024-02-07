import { Button } from "@aws-amplify/ui-react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
import Face6Icon from "@mui/icons-material/Face6";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";

function Title({ user, signOut }) {
  return (
    <Paper style={{ backgroundColor: "#EEC759", width: "100%" }}>
      <Grid
        container
        spacing={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid item xs={10}>
          <Typography
            level="h1"
            textAlign={"left"}
            textColor={"white"}
            marginInlineStart={10}
          >
            Welcome to PIE-droponics 🌱
          </Typography>
        </Grid>
        <Grid item xs={2} container alignItems={"center"} marginY={1}>
          <Box display="flex" flexDirection={"column"}>
            <Typography fontSize={20} textAlign={"center"}>
              Hello {user.username}! <Face6Icon />
            </Typography>
            <Button onClick={signOut} backgroundColor={"#FFF7D4"}>
              <LogoutIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Title;
