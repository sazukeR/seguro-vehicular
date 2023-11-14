import { useState } from "react";

import {
 Accordion,
 AccordionDetails,
 AccordionSummary,
 Box,
 Button,
 Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Acordion = ({ id, initialState, title, description, image }) => {
 const [isAccordionOpen, setIsAccordionOpen] = useState(initialState);

 const handleAccordionToggle = () => {
  setIsAccordionOpen(!isAccordionOpen);
 };

 const handleRemoveCover = (e) => {
  // Evitar que el clic se propague hacia arriba
  e.stopPropagation();
 };

 return (
  <Box>
   <Accordion expanded={isAccordionOpen} onChange={handleAccordionToggle}>
    <AccordionSummary
     expandIcon={
      <ExpandMoreIcon sx={{ display: { xs: "none", md: "flex" } }} />
     }
     /*     aria-controls='panel1a-content'
     id='panel1a-header'
 */

     aria-controls={`panel-${id}-content`}
     id={`panel-${id}-header`}
    >
     <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
     >
      <Box
       sx={{
        display: "flex",
        flexDirection: "column",
        mt: "2rem",
        justifyContent: "end",
       }}
      >
       <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={image} width='60px' height='60px' />
        <Typography
         variant='span'
         component='span'
         sx={{ ml: "1rem", fontSize: "2rem" }}
        >
         {title}
        </Typography>
       </Box>

       <Box
        sx={{
         display: { xs: "none", md: "flex" },
         mb: "1.5rem",
         justifyContent: "flex-start",
        }}
       >
        <Button
         sx={{
          p: 0,
          mt: "0.5rem",
          color: "#6F7DFF",
          fontSize: "1.3rem",
          ml: "72px",
         }}
         onClick={handleRemoveCover}
        >
         <RemoveCircleOutlineIcon sx={{ mb: "0.2rem", mr: "0.5rem" }} />
         QUITAR
        </Button>
       </Box>

       <Box
        sx={{
         display: { xs: isAccordionOpen ? "none" : "flex", md: "none" },
         mb: "1.5rem",
         justifyContent: "flex-start",
        }}
       >
        <Button
         onClick={handleAccordionToggle}
         sx={{
          p: 0,
          mt: "0.5rem",
          color: "#6F7DFF",
          fontSize: "1.3rem",
          ml: "72px",
         }}
        >
         VER MAS
         <ExpandMoreIcon sx={{ mb: "0.2rem", ml: "0.5rem" }} />
        </Button>
       </Box>
      </Box>
      <Box
       sx={{
        display: { xs: "flex", md: "none" },
        alignSelf: { xs: "center", sm: isAccordionOpen ? "end" : "center" },
        /*    marginX: "auto", */
        mr: "1rem",
       }}
      >
       {/*       <input type='checkbox' id='switch' />
      <label htmlFor='switch'>Toggle</label> */}
       <input type='checkbox' id={`switch-${id}`} />
       <label htmlFor={`switch-${id}`}>Toggle</label>
      </Box>
     </Box>
    </AccordionSummary>

    <AccordionDetails style={{ flexDirection: "column" }}>
     <Typography
      variant='p'
      component='p'
      sx={{
       mb: "1rem",
       ml: "72px",
       mr: "40px",
       fontSize: "1.5rem",
       lineHeight: 2,
       color: "#666666",
      }}
     >
      {description}
     </Typography>
     {isAccordionOpen && (
      <Button
       onClick={handleAccordionToggle}
       sx={{
        display: { xs: "flex", md: "none" },
        p: 0,
        mt: "2rem",
        ml: "72px",
        color: "#B5B5B5",
        fontSize: "1.3rem",
        mb: "1.5rem",
       }}
      >
       VER MENOS
       <ExpandLessIcon sx={{ mb: "0.2rem", ml: "0.5rem" }} />
      </Button>
     )}
    </AccordionDetails>
   </Accordion>
  </Box>
 );
};