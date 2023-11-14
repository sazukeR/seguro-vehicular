import {
 Grid,
 Link,
 IconButton,
 Typography,
 Toolbar,
 Box,
 AppBar,
} from "@mui/material";

export const HeadLayout = ({ children }) => {
 return (
  <>
   <Box
    sx={{
     flexGrow: 1,
     m: "auto",
     bgcolor: "#FAFBFF",
    }}
    height='10vh'
   >
    <AppBar
     position='static'
     color='secondary'
     sx={{ boxShadow: "none", px: "8%" }}
    >
     <Toolbar>
      <Grid container display='flex' justifyContent='space-between'>
       <Grid item>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
         <img src='src\assets\Logo_RIMAC.svg' />
        </IconButton>
       </Grid>

       <Grid item alignSelf='center' alignItems='center' display='flex'>
        <Grid>
         <Typography
          component='a'
          color='#808080'
          alignSelf='center'
          fontSize='0.8rem'
          sx={{ display: { xs: "none", md: "block" } }}
         >
          Tienes alguna duda?
         </Typography>
        </Grid>
        <Link
         sx={{
          cursor: "pointer",
          display: { xs: "block", md: "none" },
         }}
         color='#6F7DFF'
        >
         <IconButton>
          <img src='src\assets\gl_phone-20x20.png' />
         </IconButton>
         <Typography component='span'>Llamanos</Typography>
        </Link>

        <Link
         sx={{ cursor: "pointer", display: { xs: "none", md: "block" } }}
         color='#6F7DFF'
        >
         <IconButton>
          <img src='src\assets\gl_phone-20x20.png' />
         </IconButton>
         <Typography component='span'>(01) 411 6001</Typography>
        </Link>
       </Grid>
      </Grid>
     </Toolbar>
    </AppBar>
    {children}
   </Box>
  </>
 );
};
