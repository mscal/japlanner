import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { Seo } from "src/components/seo";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import { TaskChecklist } from "src/sections/dashboard/overview/task-modal/task-checklist";

const Page: NextPage = () => {
  const settings = useSettings();

  const task = [
    {
      id: "5e849c8708bd72683b454747",
      assigneesIds: [],
      attachments: [],
      authorId: "5e86809283e28b96d2d38537",
      checklists: [{ id: "2", name: "lol", checkItems: [{ id: "1" }] }],
      comments: [
        {
          id: "15e849c5a35d4dff4f88ebff6",
          authorId: "5e887ac47eed253091be10cb",
          createdAt: "subDays(now, 5).getTime()",
          message: "This is a comment",
        },
      ],
      columnId: "5e849c39325dc5ef58e5a5db",
      description: "Get Train Tickets",
      due: "addDays(now, 7).getTime()",
      isSubscribed: false,
      labels: ["Train"],
      name: "Get Train Tickets",
    },
  ];

  const handleCheckItemAdd = useCallback(
    async (checklistId: string, name: string): Promise<void> => {
      try {
        // await dispatch(
        //   thunks.addCheckItem({
        //     taskId: task!.id,
        //     checklistId,
        //     name,
        //   })
        // );
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      }
    },
    [task]
  );

  const handleCheckItemDelete = useCallback(
    async (checklistId: string, checkItemId: string): Promise<void> => {
      try {
        // await dispatch(
        //   thunks.deleteCheckItem({
        //     taskId: task!.id,
        //     checklistId,
        //     checkItemId,
        //   })
        // );
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      }
    },
    [task]
  );

  const handleCheckItemCheck = useCallback(
    async (checklistId: string, checkItemId: string): Promise<void> => {
      try {
        // await dispatch(
        //   thunks.updateCheckItem({
        //     taskId: task!.id,
        //     checklistId,
        //     checkItemId,
        //     update: {
        //       state: "complete",
        //     },
        //   })
        // );
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      }
    },
    [task]
  );

  const handleCheckItemUncheck = useCallback(
    async (checklistId: string, checkItemId: string): Promise<void> => {
      try {
        // await dispatch(
        //   thunks.updateCheckItem({
        //     taskId: task!.id,
        //     checklistId,
        //     checkItemId,
        //     update: {
        //       state: "incomplete",
        //     },
        //   })
        // );
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      }
    },
    [task]
  );

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
            mb={2}
          >
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <div>
                <Typography variant="h4">Todos</Typography>
              </div>
            </Stack>
          </Stack>
          <TaskChecklist
            key={2}
            checklist={task}
            onCheckItemAdd={(name) => handleCheckItemAdd("2", name)}
            onCheckItemDelete={(checkItemId) =>
              handleCheckItemDelete("2", checkItemId)
            }
            onCheckItemCheck={(checkItemId) =>
              handleCheckItemCheck("2", checkItemId)
            }
            onCheckItemUncheck={(checkItemId) =>
              handleCheckItemUncheck("2", checkItemId)
            }
            // onCheckItemRename={(checkItemId, name) =>
            //   handleCheckItemRename(2, checkItemId, name)
            // }
            // onDelete={() => handleChecklistDelete(2)}
            // onRename={(name) => handleChecklistRename(2, name)}
          />
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
