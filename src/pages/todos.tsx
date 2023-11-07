import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Seo } from "src/components/seo";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import { TaskChecklist } from "src/sections/dashboard/overview/task-modal/task-checklist";

const Page = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Task 1",
      completed: false,
      checklists: [
        {
          id: "checklist1",
          items: [
            { id: "1", text: "Checklist item 1", checked: false },
            { id: "2", text: "Checklist item 2", checked: false },
          ],
        },
      ],
    },
    // ... you can add more tasks
  ]);

  // Function to toggle the completed state of a checklist item
  const toggleChecklistItem = (
    taskId: string,
    checklistId: string,
    itemId: string
  ) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            checklists: task.checklists.map((checklist) => {
              if (checklist.id === checklistId) {
                return {
                  ...checklist,
                  items: checklist.items.map((item) => {
                    if (item.id === itemId) {
                      return { ...item, checked: !item.checked };
                    }
                    return item;
                  }),
                };
              }
              return checklist;
            }),
          };
        }
        return task;
      })
    );
  };

  // Example to-do list rendering (simplified for brevity)
  return (
    <>
      <Seo title="Dashboard: Tasks" />
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" mb={2}>
            Checklist
          </Typography>
          <TaskChecklist />
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
