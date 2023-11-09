import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Avatar, Box, Button, Card, CardContent, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import PropTypes from 'prop-types';



export const CompanyCard = (props) => {
  const { company } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={company.logo}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {company.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {company.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ClockIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            2 Weeks Before
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            {/* <ArrowDownOnSquareIcon /> */}
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {/* {company.downloads} Downloads */}
            <Button
              startIcon={(
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>)}
              variant="contained"
              sx={{ fontSize: '16px'}}
              >View Result</Button>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};
