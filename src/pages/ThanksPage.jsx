import { useSelector } from "react-redux";
import { Grid, Box, Typography, Button } from "@mui/material";
import { HeadLayout } from "../layouts/HeadLayout";
import { useAuthStore } from "../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";
import thnksdsk from "../public/thnksdsk.png";
import thnksmb from "../public/thnksmb.png";

export const ThanksPage = () => {
 const { user } = useSelector((state) => state.auth);
 const { startLogout } = useAuthStore();
 const navigate = useNavigate();

 const handleNavigation = () => {
  startLogout();
  navigate("/auth");
 };

 return (
  <HeadLayout>
   <Grid container sx={{ height: "90vh", maxHeight: "840px" }}>
    <Grid
     item
     xs={12}
     md={4}
     sx={{ bgcolor: "secondary.main", position: "relative" }}
    >
     <Box
      component='img'
      sx={{
       width: "100%",
       height: "auto",
       display: { xs: "flex", md: "none" },
       borderTop: { xs: "1px solid #B5B5B5", md: "none" },
      }}
      alt='The house from the offer.'
      src={thnksmb}
     />
     <Box
      component='img'
      sx={{
       position: "absolute",
       right: "-4rem",
       width: "100%",
       height: "100%",
       display: { xs: "none", md: "flex" },
       borderTop: { xs: "1px solid #B5B5B5", md: "none" },
      }}
      alt='The house from the offer.'
      src={thnksdsk}
     />
    </Grid>

    <Grid item xs={12} md={8} sx={{ bgcolor: "#FFFFFF" }}>
     <Box
      sx={{
       width: "80%",
       m: "auto",
       mt: { xs: "2rem", md: "6rem" },
       ml: { md: "7rem" },
      }}
     >
      <Typography
       sx={{ fontSize: "2rem", fontWeight: "500", color: "primary.main" }}
       variant='h2'
       constant='h2'
      >
       ¡Te damos la bienvenida!{" "}
      </Typography>
      <Typography
       variant='h2'
       constant='h2'
       sx={{ fontSize: "2rem", fontWeight: "500", mb: "1rem" }}
      >
       Cuenta con nosotros para proteger tu vehiculo{" "}
      </Typography>
      <Typography
       variant='p'
       constant='p'
       sx={{
        my: "2rem",
        fontSize: "1.5rem",
        fontWeight: "400",
        color: "#666666",
       }}
      >
       Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu
       correo:&nbsp;
      </Typography>

      <Typography
       variant='p'
       constant='p'
       sx={{ fontSize: "1.5rem", fontWeight: "500", color: "#666666" }}
      >
       {user.email}
      </Typography>

      <Typography sx={{ fontWeight: "bold" }}>
       MONTO: $ {JSON.parse(localStorage.getItem("total"))}
      </Typography>

      <Button
       onClick={handleNavigation}
       type='submit'
       variant='contained'
       sx={{
        borderRadius: "10px",
        py: "1.5rem",
        my: "2rem",
        width: { xs: "100%", md: "50%" },
       }}
      >
       COMO USAR MI SEGURO
      </Button>
     </Box>
    </Grid>
    <Box
     sx={{
      display: { md: "none" },
      borderTop: "1px solid #B5B5B5",
      width: "100%",
      p: "1.5rem",
     }}
    >
     <Typography sx={{ color: "#B5B5B5" }} variant='span' component='span'>
      © 2021 RIMAC Seguros y Reaseguros.
     </Typography>
    </Box>
   </Grid>
  </HeadLayout>
 );
};
