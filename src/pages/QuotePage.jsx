import { useState } from "react";

import {
 Grid,
 Button,
 IconButton,
 Box,
 Typography,
 Accordion,
 AccordionSummary,
 AccordionDetails,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@emotion/react";
import { Acordion } from "../components/Acordion";

export const QuotePage = () => {
 const theme = useTheme();

 /*  const handleClickBotonUno = (event) => {
  event.stopPropagation();
 }; */

 return (
  <>
   <Grid container>
    <Grid item xs={12} md={4}></Grid>
    <Grid item xs={12} md={4}>
     <Box
      sx={{
       display: "flex",
       justifyContent: "center",
       padding: "1rem",
      }}
     >
      <Box>
       <IconButton
        sx={{
         border: "1px solid",
         borderColor: { xs: "#DCDCDC", md: theme.palette.primary.main },
         width: "1.5rem",
         height: "1.5rem",
        }}
       >
        <ArrowBackIosNewRoundedIcon
         sx={{
          width: "1rem",
          color: { xs: "#DCDCDC", md: theme.palette.primary.main },
         }}
        />
       </IconButton>

       <Typography
        variant='a'
        component='a'
        sx={{ ml: "0.7rem", fontSize: "0.7rem", color: "#808080" }}
       >
        PASO 2 DE 2
       </Typography>
      </Box>
      <Box
       sx={{
        width: "30%",
        maxWidth: "150px",
        backgroundColor: "#6464FA",
        height: "0.3rem",
        alignSelf: "center",
        borderRadius: "15%",
        ml: "1rem",
       }}
      ></Box>
     </Box>
     <Box
      sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: theme.palette.secondary.main,
      }}
     >
      <Box sx={{ width: "80%", my: "2.5rem" }}>
       <Typography variant='h3' component='h3' mb={1.5}>
        Mira las coberturas
       </Typography>
       <Typography variant='p' component='p' mb={4} sx={{ fontSize: "1.3rem" }}>
        Conoce las coberturas para tu plan
       </Typography>

       <Box
        sx={{
         display: "flex",
         width: "100%",
         maxWidth: "700px",
         height: "200px",
         position: "relative",
         backgroundColor: "#FFFFFF",
         boxShadow: "0 0 10px #EEEEEE",
         borderRadius: "1rem",
        }}
       >
        <Box
         sx={{
          alignSelf: "center",
          ml: "10%",
          maxWidth: { xs: "150px", sm: "200px", md: "150px" },
         }}
        >
         <Typography
          variant='p'
          component='p'
          sx={{ fontSize: { xs: "0.9rem", sm: "1.5rem" }, color: "#9E9E9E" }}
         >
          Placa: C2U-114
         </Typography>
         <Typography
          variant='h6'
          component='h6'
          sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }}
         >
          Wolkswagen 2019 Golf
         </Typography>
        </Box>

        <Box
         component='img'
         sx={{
          position: "absolute",
          right: "30px",
          bottom: "0px",
          width: "auto",
          height: "220px",
          overflowX: "hidden",
         }}
         alt='The house from the offer.'
         src='src\assets\ldnb.png'
        />
       </Box>
      </Box>
     </Box>

     <Box
      sx={{
       display: "flex",
       justifyContent: "center",
       width: "100%",
       my: "2rem",
      }}
     >
      <Box sx={{ width: "80%" }}>
       <Box>
        <Typography
         variant='p'
         component='p'
         sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" }, mb: "0.2rem" }}
        >
         Indica la suma asegurada
        </Typography>
        <Typography
         variant='p'
         component='p'
         sx={{ fontSize: { xs: "0.9rem", sm: "0.9rem" }, mb: "1rem" }}
        >
         MIN $12.500 | MAX $16.500
        </Typography>
       </Box>

       <Box
        sx={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         width: "100%",
         height: "60px",
         border: "1px solid #E0E0E0",
         borderRadius: "0.5rem",
         maxWidth: "700px",
        }}
       >
        <Button sx={{ height: "100%" }}>
         <RemoveIcon sx={{ color: "#6464FA" }} />
        </Button>

        <Box sx={{ fontSize: "1.3rem" }}>$ 14,300</Box>

        <Button sx={{ height: "100%" }}>
         <AddIcon sx={{ color: "#6464FA" }} />
        </Button>
       </Box>
      </Box>
     </Box>

     <Box>
      <Typography variant='h4' component='h4' sx={{ my: "5rem", mx: "7%" }}>
       Agrega un producto o quita coberturas
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
       <Button
        sx={{
         width: "33.33%",
         height: "8rem",
         borderBottom: "0.4rem solid",
         display: "flex",
         alignItems: "start",
         fontSize: "1.1rem",
         fontWeight: "bold",
         p: "10px",
        }}
       >
        PROTEGE A TU AUTO
       </Button>
       <Button
        sx={{
         width: "33.33%",
         height: "8rem",
         borderBottom: "0.4rem solid #E0E0E0",
         display: "flex",
         alignItems: "start",
         fontSize: "1.1rem",
         fontWeight: "bold",
         p: "10px",
         color: "#000000",
        }}
       >
        PROTEGE A LOS QUE TE RODEAN
       </Button>
       <Button
        sx={{
         width: "33.33%",
         height: "8rem",
         borderBottom: "0.4rem solid #E0E0E0",
         display: "flex",
         alignItems: "start",
         fontSize: "1.1rem",
         fontWeight: "bold",
         p: "10px",
         color: "#000000",
        }}
       >
        MEJORA TU PLAN
       </Button>
      </Box>

      {/* PADRE DE ACORDEONES */}

      <Box>
       <Acordion
        id={1}
        initialState={false}
        title={"Llanta robada"}
        description={
         "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más."
        }
        image={"src/assets/llantar.svg"}
       />
       <Acordion
        id={2}
        initialState={false}
        title={"Choque y/o pasarte la luz roja"}
        description={
         "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más."
        }
        image={"src/assets/choque.svg"}
       />
      </Box>

      <Box>Precio: $ 35.00</Box>
      <Button>Lo quiero</Button>
     </Box>
    </Grid>
    <Grid item xs={12} md={4}>
     Monto y precio incluye
    </Grid>
   </Grid>
  </>
 );
};
