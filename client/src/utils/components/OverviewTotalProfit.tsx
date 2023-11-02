import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ mt: 2 }}
        >

          <Stack
            alignItems="center"
            direction="row"
            spacing={0.5}
          >
            <SvgIcon
              color={'success'}
              fontSize="small"
            >
              {<FavoriteBorderIcon />}
            </SvgIcon>
          </Stack>
          <Typography
            color="text.secondary"
            variant="caption"
          >
            Dedication extreme
          </Typography>
        </Stack>
      </CardContent>
    </Card >
  );
}