import { useTheme } from "@emotion/react";
import { useForm } from "../hooks/useForm";
import {
 Box,
 Grid,
 Typography,
 TextField,
 Link,
 Button,
 Select,
 MenuItem,
 FormControl,
 FormControlLabel,
 Checkbox,
} from "@mui/material";
import useImagenResponsive from "../hooks/useImagenResponsive";
import { HeadLayout } from "../layouts/HeadLayout";

import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

const loginFormFields = {
 doc: "DNI",
 noDoc: "",
 cel: "",
 placa: "",
};

export const AuthPage = () => {
 const { startLogin, errorMessage } = useAuthStore();

 const imagenPathGrande = "src/assets/ldng2.png";
 const imagenPathPequeno = "src/assets/lndxs.svg";
 const imagenPath = useImagenResponsive(imagenPathGrande, imagenPathPequeno);

 const theme = useTheme();

 const { doc, noDoc, cel, placa, onInputChange } = useForm(loginFormFields);
 //const [errorValidation, setErrorValidation] = useState("");

 /*  useEffect(() => {
  if (errorValidation !== "Todos los campos son obligatorios") {
   console.log("rr");
  }
 }, [errorValidation]); */

 const onSubmit = (e) => {
  e.preventDefault();

  if (doc === "" || noDoc === "" || cel === "" || placa === "") {
   Swal.fire(
    "Error en la autenticacion",
    "Todos los campos son obligatorios",
    "error"
   );

   return;
  }

  startLogin({ placa });
 };

 useEffect(() => {
  if (errorMessage !== undefined) {
   Swal.fire("Error en la autenticacion", errorMessage, "error");
  }
 }, [errorMessage]);

 return (
  <HeadLayout>
   <Grid
    container
    sx={{
     backgroundColor: theme.palette.secondary.main,
     m: "auto",
     maxWidth: "1400px",
    }}
   >
    <Grid
     item
     className='container-title'
     sx={{
      display: "flex",
      flexDirection: { xs: "row", sm: "column" },
      m: 0,
      padding: "0px",
      pl: { xs: "13%", sm: 0 },
      position: { xs: "relative", sm: "static" },
      height: { xs: "30vh", sm: "90vh" },
     }}
     xs={12}
     sm={5}
     alignItems='center'
    >
     <Grid
      sx={{
       maxWidth: "250px",
       justifySelf: "center",
       mt: { xs: "0", sm: "10%" },
       ml: { xs: "0", sm: "10%" },
       order: { xs: 0, sm: 1 },
       justifyContent: "center",
      }}
     >
      <Typography
       variant='h6'
       component='h6'
       fontSize='0.7rem'
       fontWeight='bold'
      >
       ¡NUEVO!
      </Typography>
      <Typography
       variant='h5'
       component='h5'
       sx={{
        fontSize: "1.5rem",
        mt: "0.4rem",
        mb: "0.4rem",
       }}
      >
       Seguro{" "}
       <Typography
        sx={{
         color: { xs: "inherit", sm: theme.palette.primary.main },
         fontWeight: { xs: "inherit", sm: "500" },
        }}
        variant='span'
        component='span'
       >
        {" "}
        Vehicular
       </Typography>
       <Typography
        sx={{ color: theme.palette.primary.main, fontWeight: "500" }}
        variant='span'
        component='span'
       >
        {" "}
        Tracking
       </Typography>
      </Typography>
      <Typography
       variant='p'
       component='p'
       sx={{
        fontSize: { xs: "0.8rem", sm: "0.6rem" },
        maxWidth: { xs: "200px", sm: "223px" },
        color: "#808080",
       }}
      >
       Cuentanos donde le haras seguimiento a tu seguro
      </Typography>
     </Grid>

     {/* <img src='src\assets\lndxs.svg' /> */}

     <Box
      component='img'
      sx={{
       position: { xs: "absolute", sm: "static" },
       right: { xs: 0, sm: "" },
       top: { xs: "0.9rem" },
       maxWidth: "100%",
       minWidth: { xs: "auto", sm: "400px" },
       height: { xs: "110%", sm: "50%" },
       width: { xs: "auto", sm: "100%" },
      }}
      alt='The house from the offer.'
      src={imagenPath}
     />
    </Grid>

    <Grid
     sx={{
      backgroundColor: { xs: "secondary", sm: "#FFFFFF" },
      m: "0px",
      order: 3,
      p: { xs: "2rem", sm: "4rem" },
      pr: { sm: "2rem", md: "6rem" },
      Pt: "1rem",
     }}
     item
     xs={12}
     sm={7}
    >
     <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
      Déjanos tus datos
     </Typography>
     <form onSubmit={onSubmit}>
      <FormControl>
       <Grid container sx={{ maxWidth: "600px" }}>
        <Grid item xs={12} sx={{ mt: 0, display: "flex" }}>
         {/*      <InputLabel id='select' sx={{ fontWeight: "bold" }}>
        Doc
       </InputLabel> */}
         <Select
          labelId='select'
          id='simple-select'
          type='select'
          name='doc'
          value={doc}
          onChange={onInputChange}
          sx={{ width: "7rem" }}
          autoWidth
          /*   label='DNI' */
         >
          <MenuItem value='DNI'>DNI</MenuItem>
          <MenuItem value='CE'>CE</MenuItem>
          <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
         </Select>
         <TextField
          label='Nro de doc'
          type='text'
          placeholder='471149'
          fullWidth
          name='noDoc'
          value={noDoc}
          onChange={onInputChange}
         />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
         <TextField
          label='Celular'
          type='text'
          placeholder='999888999'
          fullWidth
          name='cel'
          value={cel}
          onChange={onInputChange}
         />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
         <TextField
          label='Placa Nro'
          type='text'
          placeholder='FPF848'
          fullWidth
          name='placa'
          value={placa}
          onChange={onInputChange}
         />
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
         <FormControlLabel
          control={
           <Checkbox
            required
            sx={{
             mt: "-1.5rem",
             ml: "-0.4rem",
             color: "#C5C5C5",
             "&.Mui-checked": {
              color: "#00C853",
             },
            }}
           />
          }
          label={
           <Typography variant='span' component='span' color='#808080'>
            Acepto la{" "}
            <Link href='#' color='#808080' fontWeight='bold'>
             Política de Protección de Datos Personales
            </Link>
            {" y los "}
            <Link href='#' color='#808080' fontWeight='bold'>
             Términos y Condiciones
            </Link>
            .
           </Typography>
          }
          /* style={{ marginTop: '-4px' }} */
         />
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
         {/*        <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
        <Alert severity='error'>{errorMessage}</Alert>
       </Grid> */}
         <Grid item xs={12} sm={6}>
          <Button
           type='submit'
           variant='contained'
           fullWidth
           sx={{ borderRadius: "10px", py: "1rem" }}
          >
           COTÌZALO
          </Button>
         </Grid>
        </Grid>
       </Grid>
      </FormControl>
     </form>
    </Grid>
   </Grid>
  </HeadLayout>
 );
};
