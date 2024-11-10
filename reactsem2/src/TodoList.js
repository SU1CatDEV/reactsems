import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth>
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <ListItem
              secondaryAction={
                <Button edge="end" onClick={() => handleDeleteTask(index)}>
                  Delete
                </Button>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
