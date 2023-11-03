import EastIcon from '@mui/icons-material/East';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getTasks } from "../../services/getTasks";
import { deleteTask } from "../../services/deleteTask";
import { completeTask } from "../../services/completeTask";
import { Task } from '../../types/task';
import { useEffect, useState } from "react";


export default function OverviewLatestTasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    refreshTasks();
  }, [])

  async function refreshTasks() {
    setTasks(await getTasks());
  }

  async function handleDelete(id: string) {
    await deleteTask(id);
    await refreshTasks();
  }

  async function handleComplete(id: string) {
    await completeTask(id);
    await refreshTasks();
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Latest Tasks"
        action={(

          <Button
            color="secondary"
            size="small"
            onClick={() => navigate("newTask")}
            startIcon={(
              <SvgIcon fontSize="small">
                <AddIcon />
              </SvgIcon>
            )}
            variant="contained"
          >
            Add Task
          </Button>
        )}
      />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Desciption
                </Typography>
              </TableCell>
              <TableCell sortDirection="desc">
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Date
                </Typography>
              </TableCell>
              <TableCell sortDirection="desc">
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Days
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Level
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Ações
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => {
              return (
                <TableRow
                  hover
                  key={task.id}
                >
                  <TableCell>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="overline"
                    >
                      {task.title}
                    </Typography>     </TableCell>
                  <TableCell>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="overline"
                    >
                      {task.description}
                    </Typography>     </TableCell>
                  <TableCell>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="overline"
                    >
                      {(new Date(task.deadline)).toLocaleDateString("pt-PT")}
                    </Typography>     </TableCell>
                  <TableCell>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="overline"
                    >
                      {task.day}
                    </Typography>     </TableCell>
                  <TableCell>
                    <Typography
                      color="text.secondary"
                      gutterBottom
                      variant="overline"
                    >
                      {task.level}
                    </Typography>     </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton aria-label="delete"
                        onClick={() => handleDelete(task.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                      <IconButton color="secondary" aria-label="add an alarm"
                        onClick={() => handleComplete(task.id)}>
                        <CheckCircleOutlineIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <EastIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
          onClick={() => navigate("./history")}
        >
          View history
        </Button>
      </CardActions>
    </Card >
  );
}