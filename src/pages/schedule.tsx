import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";

import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Seo } from "src/components/seo";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: NextPage = () => {
  const settings = useSettings();

  const [days, setDays] = useState([
    {
      day: "17th",
      active: true,
      activities: [
        {
          name: "Arrive",
          subActivities: [
            "Suica card",
            "Book Into Hotel ",
            "Get CoCo Ichibanya",
            "Rikugien Garden Maybe",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-travel-card.svg" height={40} />,
            <img src="/assets/japan/icons8-service-bell.svg" height={40} />,
            <img src="/assets/japan/icons8-rice-bowl.svg" height={40} />,
            <img src="/assets/japan/icons8-bonsai.svg" height={40} />,
          ],
        },
      ],
    },
    {
      day: "18th",
      active: false,
      activities: [
        {
          name: "Ikebukuro",
          subActivities: [
            "Pick up rail pass",
            "Book train tickets (ask about luggage)",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-train-ticket.svg" height={40} />,
            <img src="/assets/japan/icons8-new-ticket.svg" height={40} />,
          ],
        },
        {
          name: "Shinjuku",
          subActivities: ["Pokemon Centre", "Animate"],
          subIcons: [
            <img src="/assets/japan/icons8-pokemon.svg" height={40} />,
            <img src="/assets/japan/icons8-anime.svg" height={40} />,
          ],
        },
        {
          name: "Shibuya",
          subActivities: ["Gatchapon Departo"],
          subIcons: [<img src="/assets/japan/icons8-sphere.svg" height={40} />],
        },
      ],
    },
    {
      day: "19th",
      active: false,
      activities: [
        {
          name: "Asakusa",
          subActivities: [
            "Sensoji Temple",
            "Eat snacks",
            "Hie Shrine (Optional)",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-temple.svg" height={40} />,
            <img src="/assets/japan/icons8-kawaii-cupcake.svg" height={40} />,
            <img src="/assets/japan/icons8-torii-ori.svg" height={40} />,
          ],
        },
        {
          name: "Akihabara",
          subActivities: [
            "Shop for anime things",
            "Go to crane games",
            "Super Potato",
            "Raido Kaikan",
            "Maybe Pet Cafe ~~~~",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-naruto.svg" height={40} />,
            <img src="/assets/japan/icons8-game.svg" height={40} />,
            <img src="/assets/japan/icons8-xbox-cross.svg" height={40} />,
            <img src="/assets/japan/icons8-building.svg" height={40} />,
            <img src="/assets/japan/icons8-running-rabbit.svg" height={40} />,
          ],
        },
        {
          name: "Food",
          subActivities: [
            "Unagi Onigiri",
            "Currypan",
            "Menchikatsu",
            "Wagashiya",
            "Karaage",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-sashimi.svg" height={40} />,
            <img src="/assets/japan/icons8-kawaii-bread.svg" height={40} />,
            <img src="/assets/japan/icons8-kawaii-bread.svg" height={40} />,
            <img src="/assets/japan/icons8-flower.svg" height={40} />,
            <img src="/assets/japan/icons8-poultry-leg.svg" height={40} />,
          ],
        },
      ],
    },
    {
      day: "20th",
      active: false,
      activities: [
        {
          name: "Nikko",
          subActivities: [
            "Rinnoji Temple",
            "Toshogu Shrine",
            "Taiyuin",
            "Nikko Futarasan Shrine",
            "Shinkyo Bridge",
            "Kegon Waterfall",
            "Akechidaira Ropeway",
            "Kinu Tateiwa Otsuribashi bridge",
          ],
          subIcons: [
            <img src="/assets/japan/icons8-Temple.svg" height={40} />,
            <img src="/assets/japan/icons8-Torii-ori.svg" height={40} />,
            <img src="/assets/japan/icons8-Torii-ori.svg" height={40} />,
            <img src="/assets/japan/icons8-Torii-ori.svg" height={40} />,
            <img src="/assets/japan/icons8-bridge.svg" height={40} />,
            <img src="/assets/japan/icons8-waterfall.svg" height={40} />,
            <img src="/assets/japan/icons8-ropeway.svg" height={40} />,
            <img src="/assets/japan/icons8-bridge.svg" height={40} />,
          ],
        },
        {
          name: "Food",
          subActivities: [
            "Yubamanju (Deep fried mochi)",
            "Dango",
            "Abura gen",
            "Espo Ashi-yu cafe",
            "Pork Sando",
          ],
        },
      ],
    },
    {
      day: "21st",
      active: false,
      activities: [
        {
          name: "Harakuku",
          subActivities: [
            "Takeshita Dori - Famous harajuku shopping street",
            "Cat Street - Less busy harajuku shopping street",
            "Omote-sando - Luxury shopping street",
            "Laforet - Harajuku department store",
          ],
        },
        {
          name: "Shibuya",
          subActivities: [
            "Miyashita Park - Giant new shopping/food/izakaya district",
            "Scramble Square / Shibuya Sky Lookout - department store food",
            "Parco - Has a floor for game and geeks shops",
            "Shibuya 109 - The hub of Japanese fashion",
            "Loft  - Stationary shop",
            "Hachiko - Famous dog statue",
          ],
        },
        {
          name: "Night Time",
          subActivities: ["At least 1 jazz bar - Shinjuku", "Izakaya"],
        },
      ],
    },
    {
      day: "22nd",
      active: false,
      activities: [
        {
          name: "Disney",
          subActivities: ["Go to disney", "Have Dinner", "Thats it"],
        },
      ],
    },
    {
      day: "23rd",
      active: false,
      activities: [
        {
          name: "Public Holiday",
          subActivities: [
            "Mt Takao",
            "Shibuya More",
            "Thrift Shopping ",
            "Spocha",
            "Crane games",
            "Tori-no-ichi festival (night)",
            "karaoke",
            "Ueno",
          ],
        },
      ],
    },
    {
      day: "24th",
      active: false,
      activities: [
        {
          name: "Yokohama",
          subActivities: [
            "Gundam Factory",
            "Cup Noodle muesem ",
            "Pokemon centre",
            "Garden",
            "Red brick warehouse Christmas Markets",
            "Ramen Mueseum",
          ],
        },
        {
          name: "Food",
          subActivities: ["Specialty ramen ", "Izakaya "],
        },
      ],
    },
    {
      day: "25th",
      active: false,
      activities: [
        {
          name: "Ginza",
          subActivities: [
            "Ginza Kabukiza - little shopping stall area",
            "Yanaka ginza - old/more traditional area of ginza",
            "Art Aquarium - Aquarium that is also art",
            "12F Uniqlo",
            "Ginza Six shopping centre -Check out bookstore on the top level",
          ],
        },
        {
          name: "Odaiba",
          subActivities: [
            "Small world",
            "Gundam number 2",
            "Daiba Shopping street",
            "National Museum of emerging science",
            "Look at the pretty view outside (Rainbow bridge / statue of liberty)",
          ],
        },
      ],
    },
    {
      day: "26th",
      active: false,
      activities: [
        {
          name: "Open Day",
          subActivities: [
            "Mt Takao",
            "Shibuya More",
            "Thrift Shopping ",
            "Spocha",
            "Crane games",
            "Tori-no-ichi festival (night)",
            "karaoke",
            "Ueno",
          ],
        },
      ],
    },
    {
      day: "27th",
      active: false,
      activities: [
        {
          name: "Fuji Five Lakes",
          subActivities: [
            "First train leaves at 7:30am from Shinjuku station - arrives at 9am",
            "Get off at Shimoyoshida station for Pagoda and Shrine",
            "Kimono Museum",
            "Maple Corridor",
            "Fujiyoshida Sengen Shrine",
            "Chureito Pagoda",
            "Panoramic Ropeway",
          ],
        },
        {
          name: "Food",
          subActivities: ["Houtou"],
        },
      ],
    },
    {
      day: "28th",
      active: false,
      activities: [
        {
          name: "Travel Day -> Osaka",
          subActivities: ["Shinsaibashi", "Dontonburi"],
        },
      ],
    },
    {
      day: "29th",
      active: false,
      activities: [
        {
          name: "Osaka -> Kyoto",
          subActivities: [
            "Kiyomizudera",
            "Keninji Temple",
            "Kodai-ji Temple",
            "Chion-in Temple",
            "Gion",
          ],
        },
        {
          name: "Food",
          subActivities: ["Traditional Sweets and Tea"],
        },
      ],
    },
    {
      day: "30th",
      active: false,
      activities: [
        {
          name: "Kyoto/Osaka",
          subActivities: ["Shinbashi / Dontonburi", "Fushimi inari"],
        },
      ],
    },
    {
      day: "1st",
      active: false,
      activities: [
        {
          name: "Osaka / Nara",
          subActivities: [
            "Tsurumi Ryokuchi park - Tulips, sunflowers, windmills",
            "Nara",
          ],
        },
      ],
    },
    {
      day: "2nd",
      active: false,
      activities: [
        {
          name: "Osaka -> Tokyo",
          subActivities: [
            "Travel day back to tokyo",
            "Airport travel at 8:10pm",
            "Last Shoppo",
            "Tokyo Station see some garden",
            "Ramen alley",
            "Leave at 4pm for safety",
          ],
        },
      ],
    },
  ]);
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const selectedDayActivities = selectedDay
    ? selectedDay.activities.filter(
        (activity) =>
          activity.name &&
          activity.subActivities &&
          activity.subActivities.length > 0
      )
    : [];

  const [openSubActivities, setOpenSubActivities] = useState(
    selectedDayActivities.reduce((acc: any, activity: any) => {
      acc[activity.name] = true; // Set each activity's sub-activity list to open by default
      return acc;
    }, {})
  );

  useEffect(() => {
    if (selectedDay) {
      // Open all sub-activities for the new selected day
      setOpenSubActivities(
        selectedDay.activities.reduce((acc: any, activity: any) => {
          acc[activity.name] = true; // Initialize or maintain the open state for each
          return acc;
        }, {})
      );
    }
  }, [selectedDay, setOpenSubActivities]);

  const handleActive = (index: number, day: any) => {
    setSelectedDay(day);
    // Update the days array to reflect the new active day
    const newDays = days.map((day, idx) => ({
      ...day,
      active: index === idx, // Only the clicked day will be active
    }));
    setDays(newDays);
  };

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
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <div>
                <Typography variant="h4">Schedule</Typography>
              </div>
            </Stack>
            <Box>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {days.map((day, index) => {
                  return (
                    <Grid item xs={3} key={index}>
                      <Button
                        onClick={(e) => handleActive(index, day)}
                        variant={day.active ? "contained" : "outlined"}
                        fullWidth
                      >
                        {day?.day}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <ScheduleList
              selectedDayActivities={selectedDayActivities}
              openSubActivities={openSubActivities}
              setOpenSubActivities={setOpenSubActivities}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const ScheduleList = ({
  selectedDayActivities,
  openSubActivities,
  setOpenSubActivities,
}: {
  selectedDayActivities: any;
  openSubActivities: any;
  setOpenSubActivities: any;
}) => {
  const handleToggleSubActivities = (activityName: any) => {
    setOpenSubActivities((prevState: any) => ({
      ...prevState,
      [activityName]: !prevState[activityName],
    }));
  };

  return (
    <List>
      {selectedDayActivities.map((activity: any, index: number) => (
        <React.Fragment key={index}>
          <ListItemButton
            onClick={() => handleToggleSubActivities(activity.name)}
          >
            <ListItemText primary={activity.name} />
            {activity.subActivities && activity.subActivities.length > 0 ? (
              openSubActivities[activity.name] ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>
          <Collapse
            in={openSubActivities[activity.name]}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {activity.subActivities.map(
                (subActivity: any, subIndex: number) => (
                  <ListItemButton key={subIndex} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {activity?.subIcons?.[subIndex]}
                    </ListItemIcon>
                    <ListItemText primary={subActivity} />
                  </ListItemButton>
                )
              )}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
