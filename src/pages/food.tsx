import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { Seo } from "src/components/seo";
import CommonTabs from "src/components/tabs";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const settings = useSettings();

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
            >
              <div>
                <Typography variant="h4">Food</Typography>
              </div>
              <div>
                <Stack
                  direction="row"
                  spacing={4}
                ></Stack>
              </div>
            </Stack>
            <CommonTabs
              tabLabels={["Tokyo", "Kyoto", "Osaka"]}
              mikesTickets={
                <Stack spacing={2}>
                  {loading && (
                    <Skeleton
                      animation="wave"
                      sx={{ transformOrigin: "0 0" }}
                      height={1000}
                    />
                  )}
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1i7sozWtahRVnhJHjlD4t0tfiRDGQKFM&ehbc=2E312F&noprof=1"
                    width="100%"
                    height="600px"
                    onLoad={() => setLoading(false)}
                    style={{
                      display: loading ? "none" : "block",
                      border: "4px solid white",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    }}
                  ></iframe>
                </Stack>
              }
              feesTickets={
                <Stack
                  spacing={2}
                  minHeight={"600px"}
                >
                  {loading2 && (
                    <Skeleton
                      animation="wave"
                      sx={{ transformOrigin: "0 0" }}
                      height={1000}
                    />
                  )}
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1tr08pUhATDne2MH4IsiGBv1S4VDWOR8&ehbc=2E312F&noprof=1"
                    width="100%"
                    height="600px"
                    onLoad={() => setLoading2(false)}
                    style={{
                      display: loading2 ? "none" : "block",
                      border: "4px solid white",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    }}
                  ></iframe>
                </Stack>
              }
              natsTickets={
                <Stack spacing={2}>
                  {loading3 && (
                    <Skeleton
                      animation="wave"
                      sx={{ transformOrigin: "0 0" }}
                      height={1000}
                    />
                  )}
                  <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1Jv0j_obNk45uk2FI9_PiQpP2aRYU8E0&ehbc=2E312F&noprof=1"
                    width="100%"
                    height="600px"
                    onLoad={() => setLoading3(false)}
                    style={{
                      display: loading3 ? "none" : "block",
                      border: "4px solid white",
                      overflow: "hidden",
                      borderRadius: "8px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    }}
                  ></iframe>
                </Stack>
              }
              megsTickets={undefined}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
