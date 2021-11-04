import { Avatar, Box } from "@material-ui/core";
import React from "react";
import { Stack } from "@mui/material";

export default function Message(props) {
  var boxMSN = {
    background: "#1e88e5",
    borderTopLeftRadius: "3em",
    borderTopRightRadius: "0.6em",
    borderBottomRightRadius: "0.6em",
    marginTop: "4.5%",
    maxWidth: "80%",
  };

  var msn = {
    display: "flex",
    paddingRight: "2%",
  };
  return (
    <div style={boxMSN}>
      <Box name="msn" sx={msn}>
        <Avatar
          src="https://www.industriaanimacion.com/wp-content/uploads/2021/07/l.jpg"
          sx={{ width: "54px", height: 54 }}
        />
        <p style={{ textAlign: "justify", color: "white" }}>
          En el documento CSS se encuentren todos los códigos CSS que
          determinarán el estilo de todos los elementos HTML apuntados. Desde un
          documento HTML llamaremos al documento CSS para que se haga presente y
          aplique los estilos que hemos escrito en dicho documento CSS.Si bien
          es útil durante el desarrollo, el paquete de depuración agrega un peso
          En el documento CSS se encuentren todos los códigos CSS que .
        </p>
      </Box>
      <div
        style={{
          color: "#ffff",
          
        }}
      >
        <h5>hora 1:33</h5>
      </div>
    </div>
  );
}
