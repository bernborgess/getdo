import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

interface OverviewTypes {
  sx: object,
  value: string
}


export default function OverviewTotalProfit({ sx, value }: OverviewTypes) {

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Streak
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <LocalFireDepartmentIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}