import { makeStyles } from "@material-ui/core/styles";
import { green, grey, red } from "@mui/material/colors";

// Dscomentar cuando se va a usar
// import { brown, amber, lime, deepOrange } from "@mui/material/colors";
export default function useStylesBougth(darkTheme, statusUser) {
  //darkTheme boolean global state
  return makeStyles((theme) => ({
    icon_status_inline: {
      position: "absolute",
      width: 25,
      height: 25,
      borderRadius: "15em",
      background: statusUser ? green[500] : red[400],
      right: "20%",
      bottom: "82%",
      border: `3px solid ${darkTheme ? "#212121" : "#FFE5A1"}`,
      transform: "scale(0.8,0.8)",
    },
    avatar: {
      boxShadow: `0.2em 0.2em 0.1em  ${darkTheme ? grey[800] : grey[600]}`,
      width: 70,
      height: 70,
      cursor: "pointer",
    },
    boxBoughtInline: {
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      width: "100%",
      height: "100%",
      cursor: "pointer2",
    },
    nameUserBought: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      paddingBottom: "25%",
    },
  }));
}
