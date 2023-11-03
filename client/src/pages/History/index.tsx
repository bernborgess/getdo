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
import { HistoryTask } from '../../types/history';
import { useEffect, useState } from "react";

export function History() {
  const [tasks, setTasks] = useState([] as HistoryTask[]);

  useEffect(() => {
    refreshTasks();
  }, [])
  console.log(tasks)

  async function refreshTasks() {
    setTasks(await getHistory());
    console.log(tasks)
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
                          Conclusion
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" sx={{ color: "#3E0554" }}>
                          Level
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
                              {(new Date(task.finishedAt)).toLocaleDateString("pt-PT")}
                            </Typography>     </TableCell>
                          <TableCell>
                            <Typography
                              color="text.secondary"
                              gutterBottom
                              variant="overline"
                            >
                              {task.level}
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


