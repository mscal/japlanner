import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
import { useCopyToClipboard } from "../hooks/use-copy-to-clipboard";
import { ReactNode } from "react";

export default function CommonCard({
  title,
  children,
  subheader,
  link,
  code,
}: {
  title: string;
  children: ReactNode;
  subheader: string;
  link?: string;
  code?: string;
}) {
  const [value, copy] = useCopyToClipboard();
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        sx={{ paddingBottom: "0px" }}
      />
      <CardContent>
        <Stack
          spacing={1}
          mb={2}
          direction={"row"}
        >
          {code && (
            <Button
              variant="outlined"
              onClick={() => copy(code)}
            >
              Code Copy
            </Button>
          )}
          {link && (
            <Button
              href={link}
              target="_blank"
              variant="outlined"
            >
              Link
            </Button>
          )}
        </Stack>
        <Box maxWidth={"400px"}>{children}</Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
