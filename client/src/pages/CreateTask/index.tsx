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
  function handleSubmit() {
    createTask(newTask);
    navigate("/");
  }

  return (
    <div>
      <Box
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
            <div>
              <TextField
                id="standard-search"
                label="Title"
                type="string"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ title: e.target.value })}
              />
            </div>
            <div>

              <TextField
                id="standard-search"
                label=" Description"
                type="string"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ description: e.target.value })}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Day"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ day: Number(e.target.value) })}
              />
            </div>
            <div>

              <TextField
                id="standard-search"
                label="Level"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ level: Number(e.target.value) })}
              />
            </div>
            <div>

              <TextField
                id="standard-search"
                label="Date"
                type="date"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ deadline: new Date(e.target.value) })}
              />
            </div>
            <div>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={handleSubmit}
                disabled={newTask.day == 0}>Salvar Dados</Button>
            </div>
          </FormControl>
        </Paper>
      </Box >
    </div>

  )
}


