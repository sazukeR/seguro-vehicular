import { useSelector } from "react-redux";
import { useCounterStore } from "../hooks/useCounterStore";
import { useAuthStore } from "../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

import ldnb from "../../public/ldnb.png";
import llantar from "../../public/llantar.svg";
import choque from "../../public/choque.svg";
import atropello from "../../public/atropello.svg";

import {
 Grid,
 Button,
 IconButton,
 Box,
 Typography,
 Divider,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@emotion/react";
import { Acordion } from "../components/Acordion";
import { HeadLayout } from "../layouts/HeadLayout";

export const QuotePage = () => {
 const { startLogout, user } = useAuthStore();

 const theme = useTheme();

 const navigate = useNavigate();

 const handleNavigation = () => {
  localStorage.setItem("total", payment);
  navigate("/thanks");
 };

 const { counter, payment, coverageTires, coverageRedLight, coverageRoad } =
  useSelector((state) => state.policy);
 const { incrementCounter, decrementtCounter } = useCounterStore();

 return (
  <>
   <HeadLayout>
    <Box>
     <Grid container>
      <Grid item xs={12} md={2}>
       <Box
        sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
       >
        <Box
         sx={{ display: "flex", justifyContent: "start", ml: "17%", mt: "9%" }}
        >
         <Box
          sx={{
           width: "2rem",
           height: "2rem",
           border: "0.5px solid #B5B5B5",
           borderRadius: "50%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           color: "#B5B5B5",
          }}
         >
          1
         </Box>
         <Typography
          sx={{ ml: "1rem", color: "#B5B5B5" }}
          variant='span'
          component='span'
         >
          Datos
         </Typography>
        </Box>
        <Box
         sx={{
          width: "0.1px",
          height: "60px",
          border: "4px solid #FAFBFF",
          ml: "24%",
         }}
        ></Box>
        <Box
         sx={{ display: "flex", justifyContent: "start", ml: "17%", mt: "9%" }}
        >
         <Box
          sx={{
           width: "2rem",
           height: "2rem",
           border: "0.5px solid #B5B5B5",
           borderRadius: "50%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           color: "#FFFFFF",
           backgroundColor: "#6F7DFF",
          }}
         >
          2
         </Box>
         <Typography
          sx={{ ml: "1rem", color: "#666666" }}
          variant='span'
          component='span'
         >
          Arma tu plan
         </Typography>
        </Box>
       </Box>
      </Grid>
      <Grid item xs={12} md={6}>
       <Box
        sx={{
         display: "flex",
         justifyContent: { xs: "center", md: "flex-start" },
         padding: "1rem",
        }}
       >
        <Box sx={{ ml: { md: "2rem" } }}>
         <IconButton
          sx={{
           border: "1px solid",
           borderColor: { xs: "#DCDCDC", md: theme.palette.primary.main },
           width: "1.5rem",
           height: "1.5rem",
          }}
          onClick={startLogout}
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
          sx={{
           ml: "0.7rem",
           fontSize: "0.7rem",
           color: "#808080",
           display: { xs: "none", md: "inline" },
          }}
         >
          VOLVER
         </Typography>

         <Typography
          variant='a'
          component='a'
          sx={{
           ml: "0.7rem",
           fontSize: "0.7rem",
           color: "#808080",
           display: { xs: "inline", md: "none" },
          }}
         >
          PASO 2 DE 2
         </Typography>
        </Box>
        <Box
         sx={{
          display: { xs: "flex", md: "none" },
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
         backgroundColor: { xs: theme.palette.secondary.main, md: "#FFFFFF" },
        }}
       >
        <Box sx={{ width: "80%", my: "2.5rem" }}>
         <Typography
          variant='h3'
          component='h3'
          mb={1.5}
          sx={{ display: { xs: "flex", md: "none" } }}
         >
          Mira las coberturas
         </Typography>
         <Typography
          variant='h3'
          component='h3'
          mb={1.5}
          sx={{ display: { xs: "none", md: "inline-flex" } }}
         >
          ¡Hola,&nbsp;
         </Typography>
         <Typography
          variant='h3'
          component='h3'
          sx={{
           color: theme.palette.primary.main,
           display: { xs: "none", md: "inline-flex" },
          }}
         >
          {user.username}!
         </Typography>
         <Typography
          variant='p'
          component='p'
          mb={4}
          sx={{ fontSize: "1.3rem" }}
         >
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
            sx={{ fontSize: { xs: "0.9rem", sm: "1.3rem" }, color: "#9E9E9E" }}
           >
            Placa: {user.placa}
           </Typography>
           <Typography
            variant='h6'
            component='h6'
            sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }}
           >
            {user.modelo}
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
           src={ldnb}
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
        <Box
         sx={{
          width: "80%",

          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-evenly" },
         }}
        >
         <Box>
          <Typography
           variant='p'
           component='p'
           sx={{ fontSize: { xs: "1.7rem", md: "1rem" }, mb: "0.2rem" }}
          >
           Indica la suma asegurada
          </Typography>
          <Typography
           variant='p'
           component='p'
           sx={{ fontSize: { xs: "1rem", md: "0.6rem" }, mb: "1rem" }}
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
           width: { xs: "100%", md: "60%" },
           height: "60px",
           border: "1px solid #E0E0E0",
           borderRadius: "0.5rem",
           maxWidth: { xs: "700px", md: "400px" },
           minWidth: "204px",
           mr: { md: "10%" },
          }}
         >
          <Button onClick={decrementtCounter} sx={{ height: "100%" }}>
           <RemoveIcon sx={{ color: "#6464FA" }} />
          </Button>

          <Box sx={{ fontSize: { xs: "1.3rem", md: "1rem" } }}>$ {counter}</Box>

          <Button onClick={incrementCounter} sx={{ height: "100%" }}>
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
          image={llantar}
          coverageStatus={coverageTires}
         />
         <Acordion
          id={2}
          initialState={false}
          title={"Choque y/o pasarte la luz roja"}
          description={
           "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más."
          }
          image={choque}
          coverageStatus={coverageRedLight}
         />
         <Acordion
          id={3}
          initialState={false}
          title={"Atropello en la vía Evitamiento"}
          description={
           "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más."
          }
          image={atropello}
          coverageStatus={coverageRoad}
         />
        </Box>
       </Box>
      </Grid>
      <Grid item xs={12} md={4}>
       <Box
        sx={{
         display: "flex",
         flexDirection: { xs: "row", md: "column" },
         width: "100%",
         mt: { xs: "2rem", md: "15rem" },
         mb: "3rem",
         alignItems: "center",
        }}
       >
        <Box
         sx={{
          width: { xs: "40%", md: "100%" },
          display: "flex",
          flexDirection: "column",
          alignSelf: { md: "start" },
          pl: { xs: "10%", md: "15%" },
          mb: { md: "4rem" },
         }}
        >
         <Typography
          variant='p'
          component='p'
          sx={{
           display: { xs: "none", md: "flex" },
           mb: "1rem",
           fontSize: "1.3rem",
          }}
         >
          MONTO:
         </Typography>
         <Typography
          variant='p'
          component='p'
          sx={{
           fontSize: { xs: "1.2rem", md: "3rem" },
           fontWeight: "bold",
          }}
         >
          $ {payment}
         </Typography>
         <Typography
          variant='p'
          component='p'
          sx={{
           fontSize: "1.3rem",
           fontWeight: "bold",
           display: { xs: "flex", md: "none" },
          }}
         >
          MENSUAL
         </Typography>
         <Typography
          variant='p'
          component='p'
          sx={{
           fontSize: "1.3rem",
           fontWeight: "bold",
           display: { xs: "none", md: "flex" },
           color: "#B5B5B5",
          }}
         >
          mensuales
         </Typography>
         <Divider
          variant='middle'
          sx={{
           display: { xs: "none", md: "flex" },
           mt: "2rem",
           width: "80%",
           pr: "3%",
          }}
         />
        </Box>

        <Box
         sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
         }}
        >
         <button onClick={handleNavigation} className='my-button'>
          <Typography sx={{ fontSize: "1.5rem", display: { md: "none" } }}>
           lo quiero
          </Typography>
          <Typography
           sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            display: { xs: "none", md: "inline" },
           }}
          >
           LO QUIERO
          </Typography>
         </button>
        </Box>
       </Box>
      </Grid>
     </Grid>
    </Box>
   </HeadLayout>
  </>
 );
};
