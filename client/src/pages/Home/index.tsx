import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import OverviewBudget from '../../utils/components/OverviewBudget';
import OverviewTotalCustomers from '../../utils/components/OverviewTotalCustomers';
import OverviewTasksProgress from '../../utils/components/OverviewTasksProgress';
import OverviewTotalProfit from '../../utils/components/OverviewTotalProfit';
import OverviewLatestTasks from '../../utils/components/OverviewLatestTasks';

export default function Home() {
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
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="15"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value="75"
            />
          </Grid>

          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="75 days"
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestTasks />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}