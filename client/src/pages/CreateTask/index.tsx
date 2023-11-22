import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
} from '@mui/material';
import { NewTask, emptyData } from '../../types/task';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../services/createTask';

export function CreateTask() {
  const [newTask, setNewTask] = React.useState<NewTask>(emptyData);
  const navigate = useNavigate();

  function updateData(addNewTask: Partial<NewTask>) {
    setNewTask({ ...newTask, ...addNewTask });
  }
  async function handleSubmit() {
    await createTask(newTask);
    navigate("/");
  }

  return (
    <div>
      <Box data-testID="form"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 2,
          borderRadius: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <Paper elevation={3} sx={{ p: 2 }}>
          <FormControl defaultValue="" required>
            <div data-testID="form-input">
              <TextField data-testID="form-input-title"
                id="standard-search"
                label="Title"
                type="string"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ title: e.target.value })}
              />
            </div>
            <div data-testID="form-input">

              <TextField data-testID="form-input-description"
                id="standard-search"
                label=" Description"
                type="string"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ description: e.target.value })}
              />
            </div>
            <div data-testID="form-input">
              <TextField data-testID="form-input-day"
                id="standard-search"
                label="Day"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ day: Number(e.target.value) })}
              />
            </div>
            <div data-testID="form-input">
              <TextField data-testID="form-input-level"
                id="standard-search"
                label="Level"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ level: Number(e.target.value) })}
              />
            </div>
            <div data-testID="form-input">
              <TextField data-testID="form-input-date"
                id="standard-search"
                label="Date"
                type="date"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ deadline: new Date(e.target.value) })}
              />
            </div>
            <div data-testID="form-input">
              <Button data-testID="button-form"
                size="small"
                variant="contained"
                color="success"
                onClick={handleSubmit}
                disabled={newTask.day == 0}>Save</Button>
            </div>
          </FormControl>
        </Paper>
      </Box >
    </div>

  )
}


