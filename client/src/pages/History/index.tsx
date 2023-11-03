import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { getHistory } from "../../services/getHistory";
import { Task } from '../../types/task';
import { useEffect, useState } from "react";

export function History() {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    refreshTasks();
  }, [])

  async function refreshTasks() {
    setTasks(await getHistory());
  }
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={12}
            lg={11}
          >


            <Card sx={{ height: '100%' }}>
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
            </Card >
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}


