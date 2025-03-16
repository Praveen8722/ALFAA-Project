import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
  Button,
  LinearProgress,
} from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import {
  AccessTime,
  CalendarToday,
  Phone,
  LocationOn,
  Folder,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const events = [
  {
    icon: <OtherHousesIcon sx={{ fontSize: 100 }} />,
    title: "A Real Change",
    description:
      "Curabitur luctus euismod metus, eu pellentesque ma Proin posuere idlacus auctor, elementum.",
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 100 }} />,
    title: "A Real Change",
    description:
      "Curabitur luctus euismod metus, eu pellentesque ma Proin posuere idlacus auctor, elementum.",
  },
  {
    icon: <BloodtypeIcon sx={{ fontSize: 100 }} />,
    title: "Donate and Help",
    description:
      "Curabitur luctus euismod metus, eu pellentesque ma Proin posuere idlacus auctor, elementum.",
  },
  {
    icon: <Diversity1Icon sx={{ fontSize: 100 }} />,
    title: "Full Inspiration",
    description:
      "Curabitur luctus euismod metus, eu pellentesque ma Proin posuere idlacus auctor, elementum.",
  },
];

const EventsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection subHead="Home / Event" mainHead="Event Details" />
      <Container maxWidth="lg" sx={{ paddingX: { xs: 0 } }} className="my-5">
        <Grid container spacing={2} mb={"2rem"}>
          <Grid item xs={12} md={8} order={{ xs: 1, md: 1 }}>
            <Stack sx={{ width: { xs: "22.5rem", md: "50rem" } }}>
              <Box sx={{ mt: 4, mb: 4, position: "relative" }}>
                <Box
                  color="white"
                  bgcolor="#FE7F4C"
                  size="small"
                  width="6rem"
                  height="2.5rem"
                  alignContent="center"
                  textAlign="center"
                  sx={{ position: "absolute", top: 15, left: 15, zIndex: 1 }}
                >
                  08 April
                </Box>
                <img
                  src="/src/assets/Events-det-img1.png"
                  alt="example"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "790",
                  color: "#253739",
                  fontSize: { xs: "30px", md: "35px" },
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Your Help Makes Someone’s Life Easier
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: "48rem",
                  color: "#89807B",
                  fontSize: "16px",
                  fontFamily: "'Manrope', sans-serif",
                  maxWidth: { xs: "23rem", md: "50rem" },
                }}
              >
                <br />
                Curabitur luctus euismod metus, eu pellentesque mauris tempus
                sit amet. Proin ante odio, posuere id lacus auctor, elementum
                tempor tellus. Integer mattis justo eu enim tempus lacinia.
                Fusce vitae enim diam. Ut commodo viverra magna non egestas.
                Integer sodales massa at odio tristique volutpat. Proin posuere
                odio maximus, eleifend felis sed, ultrices turpis. Proin
                ultricies sodales nisl vel euismod. Praesent vestibulum sem
                lorem, eget fermentum justo iaculis et. Integer tellus dolor,
                venenatis vitae tortor et, accumsan laoreet sem. Sed laoreet
                rutrum ex, et efficitur enim pharetra non. Mauris rhoncus, odio
                eu vulputate interdum, ipsum erat sagittis purus, vitae lobortis
                eros purus non augue. Nullam molestie augue diam, scelerisque
                porta dolor mollis a. Cras condimentum elementum eros at
                finibus. pharetra condimentum sagittis. Donec consequat velit et
                nisi scelerisque, quis iaculis felis tincidunt. In faucibus
                sapien ut elit hendrerit, et tristique mauris lacinia. Phasellus
                tincidunt scelerisque lectus sed scelerisque. Donec at enim
                facilisis, tempus nisi quis, pharetra enim.
                <br /> <br />
                Curabitur luctus nisl in justo maximus egestas. Curabitur sit
                amet sapien vel nunc molestie pulvinar at vitae quam. Aliquam
                lobortis nisi vitae congue consectetur. Aliquam et quam non
                metus ultrices faucibus sit amet non nisi. Duis at urna vel
                turpis aliquet venenatis et eget ipsum. Praesent felis nibh,
                dictum eu tincidunt sed, elementum at dolor. Duis ultricies urna
                a tortor faucibus venenatis. Phasellus consequat eu lacus
                laoreet posuere. Sed ipsum quam, placerat porta aug
              </Typography>
            </Stack>
            <Box sx={{ mt: 8, mb: 4 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "790",
                  color: "#253739",
                  mb: 4,
                  fontSize: { xs: "29px", md: "35px" },
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Why Donate On Poorex?
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                  }}
                >
                  {events.map((event, index) => (
                    <Card
                      key={index}
                      sx={{
                        display: "flex",
                        maxWidth: 345,
                        boxShadow: "unset",
                        flexDirection: { xs: "column", md: "unset" },
                      }}
                    >
                      <Box
                        sx={{
                          flex: "0 0 130px",
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          color: "#FE7F4C",
                        }}
                      >
                        {event.icon}
                      </Box>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          padding: "0px",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontSize: "20px", fontWeight: "700",fontFamily: "'Manrope', sans-serif" }}
                        >
                          {event.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color: "#89807B",
                            fontSize: "16px",
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        >
                          {event.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Grid>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "790",
                  color: "#253739",
                  mb: 2,
                  fontSize: { xs: "30px", md: "35px" },
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Event Requirements
              </Typography>
              <Typography
                sx={{
                  width: "48rem",
                  color: "#89807B",
                  fontSize: "16px",
                  maxWidth: { xs: "23rem", md: "50rem" },
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Curabitur luctus euismod metus, eu pellentesque mauris tempus
                sit amet. Proin ante odio, posue id lacus auctor, Proin
                ultricies sodales niel euismod. Praesent vestibulum sem lorem,
                eget fermentum justo iaculis et. Integer tellus venenatis vitae
                tortor et, accumsan laoreet sem. Sed laoreet rutrum ex, et
                effnon. Mauris rhoodio eu vulputate interdum, ipsum erat
                sagittis purus, vitae lobortis eros purus non augue.
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#FE7F4C",
                  mt: "2rem",
                  borderRadius: "unset",
                  width: "13rem",
                  height: "3.5rem",
                  fontFamily: "'Manrope', sans-serif"
                }}
              >
                Register Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: 4 }} order={{ xs: 2, md: 2 }}>
            <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent sx={{ alignContent: "center", ml: "20px" }}>
                  <Grid
                    container
                    spacing={3}
                    bgcolor={"#F2F8F8"}
                    height={"7rem"}
                  >
                    <Grid item>
                      <Avatar
                        alt="Kaira Beasley"
                        src="path_to_image.jpg"
                        sx={{ width: 56, height: 56, bgcolor: "#07847f" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" component="div">
                        Kaira Beasley
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Host & Speaker
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 2, bgcolor: "#07847f", height: "2px" }} />
                  <Box mt={2}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <AccessTime sx={{ color: "#07847f" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="text.secondary">
                          Event Time:
                        </Typography>
                        <Typography variant="body1">
                          10:00 am to 8:00 pm
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" mt={1}>
                      <Grid item>
                        <CalendarToday sx={{ color: "#07847f" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="text.secondary">
                          Date:
                        </Typography>
                        <Typography variant="body1">12 Feb 2023</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" mt={1}>
                      <Grid item>
                        <Phone sx={{ color: "#07847f" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="text.secondary">
                          Phone:
                        </Typography>
                        <Typography variant="body1">
                          +99 456 (9874) 3456
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" mt={1}>
                      <Grid item>
                        <Folder sx={{ color: "#07847f" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="text.secondary">
                          Category:
                        </Typography>
                        <Typography variant="body1">Health</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" mt={1}>
                      <Grid item>
                        <LocationOn sx={{ color: "#07847f" }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="text.secondary">
                          Location:
                        </Typography>
                        <Typography variant="body1">
                          The Strand, sector USA
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
              <Box
                sx={{
                  overflow: "hidden",
                  height: { xs: "300px", md: "400px" },
                  width: { xs: "344px", md: "350px" },
                  position: "relative",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.847978266845!2d-73.9893847845939!3d40.73082357932927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af8f9b1b79%3A0x8fdc93e8e12bd18d!2s55%20Washington%20Square%20S%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2sin!4v1622648342222!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poorex Location"
                ></iframe>
              </Box>
              <Box
                sx={{
                  width: { xs: "16.5rem", md: "17rem" },
                  height: 300,
                  padding: 5,
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  backgroundImage: 'url("/src/assets/Events/Back-img.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box>
                    <img src="/src/assets/Events/image.png" alt="Back-image" />
                  </Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginBottom: 1, color: "white" }}
                  >
                    Healthy People Better in The World
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: 2, color: "white" }}
                  >
                    $6,790 of $10,000 raised
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      bgcolor: "#FE7F4C",
                      mt: "2rem",
                      borderRadius: "unset",
                      width: "13rem",
                      height: "3.5rem",
                    }}
                  >
                    Donate Now
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventsDetails;
