import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TaskCard({ taskName, taskDuration }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{taskName}</Typography>
        <Typography variant="subtitle1">Duration: {taskDuration} days</Typography>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
