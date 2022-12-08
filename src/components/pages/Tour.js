import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ImageCollage from "../ImageCollage";
import CustomizedAccordions from "../CustomizedAccordions";
import BasicModal from "../BasicModal";
export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Laboris ad exercitation dolor laborum incididunt incididunt non. Minim
          laborum qui ad tempor elit. Amet tempor ad ipsum ullamco fugiat
          laborum aute tempor ipsum laboris labore sint id et. Aute ad cillum
          fugiat proident cillum non ea exercitation.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Box marginBottom={10}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}
