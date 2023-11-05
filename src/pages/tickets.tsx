import type { NextPage } from "next";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Seo } from "src/components/seo";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import { Card, CardActionArea, CardActions, CardContent } from "@mui/material";

const Page: NextPage = () => {
  const settings = useSettings();

  return (
    <>
      <Seo title="Dashboard: Blank" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
                <Typography variant="h4">Tickets</Typography>
              </div>
            </Stack>

            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src="/assets/images/gundam.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gundam Factory
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yokohama
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
