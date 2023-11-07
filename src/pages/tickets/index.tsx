import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import router from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Seo } from "src/components/seo";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: NextPage = () => {
  const settings = useSettings();

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authState === "true");
  }, []);

  const checkPassword = async () => {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password.toLowerCase() }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Its Ticket Toime");
    } else {
      toast.error("You're not a japlanner");
    }
  };

  // const [pass, setPass] = useState(false);

  // function handleChange(e) {
  //   if (e.target.value === "japlanner4700") {
  //     setPass(true);
  //   } else {
  //     setPass(false);
  //   }
  // }

  return (
    <>
      <Seo title="Dashboard: Blank" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
          <Stack
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
              alignItems={"center"}
            >
              <div>
                <Typography variant="h4">Tickets</Typography>
              </div>
              <TextField
                label="Only Japlanners Enter"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    checkPassword();
                    ev.preventDefault();
                  }
                }}
                size="medium"
              />
            </Stack>
            {isAuthenticated && (
              <>
                <TicketCards
                  title={" Gundam Factory"}
                  location={"Yokohama"}
                  image={"/assets/images/gundam.jpg"}
                  link={
                    "https://www.google.com/maps/place/Gundam+Factory+Yokohama/@35.4470105,139.6517457,17z/data=!4m10!1m2!2m1!1sgundam+factory!3m6!1s0x60185df2887c6bf7:0xc83634d218e1d77d!8m2!3d35.446711!4d139.6540782!15sCg5ndW5kYW0gZmFjdG9yeVoQIg5ndW5kYW0gZmFjdG9yeZIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VONE4zUllXVmxSRUFF4AEA!16s%2Fg%2F11j7c_ttsy?entry=ttu"
                  }
                  pageLink={"/tickets/gundam-tickets"}
                />
                <TicketCards
                  title={"Disney SEA"}
                  location={"Tokyo Bay"}
                  image={"/assets/images/disney.jpg"}
                  link={
                    "https://www.google.com/maps/place/Tokyo+DisneySea/@35.6267151,139.882503,17z/data=!3m1!4b1!4m6!3m5!1s0x60187d03114737b3:0x41471d704ab72d25!8m2!3d35.6267108!4d139.8850779!16zL20vMDRjN3R0?entry=ttu"
                  }
                  pageLink={"/tickets/disney-tickets"}
                />
                <TicketCards
                  title={" Shibuya Sky"}
                  location={"Tokyo - Shibuya"}
                  image={"/assets/images/shibuya-sky.jpg"}
                  link={
                    "https://www.google.com/maps/place/Shibuya+Sky/@35.6584509,139.6995887,17z/data=!3m2!4b1!5s0x60188b57f546295f:0x486cece41a7b21b0!4m6!3m5!1s0x60188b6825f61ae1:0x6ff47ee61e522473!8m2!3d35.6584466!4d139.7021636!16s%2Fg%2F11hdvt_gp9?entry=ttu"
                  }
                  pageLink={"/tickets/shibuya-sky"}
                />
              </>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export function TicketCards({
  title,
  location,
  link,
  image,
  pageLink,
}: {
  title: string;
  location: string;
  link: string;
  image: string;
  pageLink: string;
}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={() => router.push(pageLink)}>
        <CardMedia component="img" height="300" src={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={link} size="small" color="primary">
          Maps
        </Button>
      </CardActions>
    </Card>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
