import EastIcon from '@mui/icons-material/East';
import SyncIcon from '@mui/icons-material/Sync';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
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
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Latest Tasks"
        action={(
          <Button
            color="inherit"
            size="small"
            onClick={() => refreshTasks()}
            startIcon={(
              <SvgIcon fontSize="small">
                <SyncIcon />
              </SvgIcon>
            )}
          >
            Sync
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
              <TableCell>
                <Typography variant="h6" sx={{ color: "#3E0554" }}>
                  Status
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
                      arrumar
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
                      arrumar
                    </Typography>     </TableCell>
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