import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Input from "@mui/material/Input";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { TaskCheckItem } from "./task-check-item";
import { TaskCheckItemAdd } from "./task-check-item-add";

const initialCheckItems = [
  { id: "1", text: "Activate Sim", state: "incomplete" },
  { id: "2", text: "Get Suica Card", state: "incomplete" },
  { id: "3", text: "Get Cash Out", state: "incomplete" },
  { id: "4", text: "Pick Up JR Pass", state: "incomplete" },
  { id: "5", text: "Book Train to Nikko", state: "incomplete" },
  { id: "6", text: "Book Train to Fuji", state: "incomplete" },
  { id: "7", text: "Book Train to Osaka", state: "incomplete" },
  { id: "8", text: "Book Train to Tokyo Narita", state: "incomplete" },
  { id: "9", text: "Book Train to Narita", state: "incomplete" },
  { id: "10", text: "Book Luggage", state: "incomplete" },
];

const calculateProgress = (checkItems: any) => {
  const totalItems = checkItems.length;
  const completedItems = checkItems.filter(
    (item: any) => item.state === "complete"
  ).length;
  return totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);
};

const STORAGE_KEY = "myChecklist";

export const TaskChecklist = () => {
  const loadCheckItemsFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      // Check if window is defined
      const storedItems = localStorage.getItem("myChecklist");
      if (storedItems) {
        return JSON.parse(storedItems);
      }
    }
    return initialCheckItems; // Return initial items if localStorage is not accessible
  };

  useEffect(() => {
    // Only attempt to load localStorage data once the component has mounted
    const storedItems = loadCheckItemsFromLocalStorage();
    setCheckItems(storedItems);
  }, []);

  const [checkItems, setCheckItems] = useState(initialCheckItems);

  useEffect(() => {
    // Only try to read from localStorage after mounting, which means it runs in the browser
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      setCheckItems(JSON.parse(storedItems));
    }
  }, []);

  const progress = calculateProgress(checkItems);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkItems));
  }, [checkItems]);

  // ... other state and handlers

  // Add a new check item to the list
  const addCheckItem = (text: string) => {
    const newCheckItem = {
      id: Date.now().toString(),
      text: text,
      state: "incomplete",
    };
    setCheckItems((currentItems) => [...currentItems, newCheckItem]);
  };

  const deleteCheckItem = useCallback((id: string) => {
    setCheckItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }, []);

  useEffect(() => {
    console.log(checkItems); // To check the current state of check items
  }, [checkItems]);

  // Function to change the state of a check item (toggle between 'complete' and 'incomplete')
  const toggleCheckItemState = (id: string) => {
    setCheckItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              state: item.state === "complete" ? "incomplete" : "complete",
            }
          : item
      )
    );
  };

  // ... more functionality like deleting a check item or renaming it

  return (
    <Card variant="outlined">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" mb={2}>
          First day checklist
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          // ... other LinearProgress props
        />
        <Typography variant="body2" color="text.secondary">
          {progress}%
        </Typography>
      </Box>

      <Divider />
      {checkItems.length > 0 && (
        <Box>
          {checkItems.map((item) => (
            <TaskCheckItem
              key={item.id}
              checkItem={item}
              // state={item.state}
              onCheck={() => toggleCheckItemState(item.id)}
              onUncheck={() => toggleCheckItemState(item.id)}
              onDelete={() => deleteCheckItem(item.id)}
            />
          ))}
        </Box>
      )}
      <Divider />
      <Box sx={{ p: 1 }}>
        <TaskCheckItemAdd onAdd={addCheckItem} />
      </Box>
      {/* Other elements */}
    </Card>
  );
};

TaskChecklist.propTypes = {
  onRename: PropTypes.func,
  onDelete: PropTypes.func,
  // ... other prop types
};

export default TaskChecklist;
