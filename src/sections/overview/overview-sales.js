// import PropTypes from 'prop-types';
// import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
// import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Divider,
//   SvgIcon
// } from '@mui/material';
// import { alpha, useTheme } from '@mui/material/styles';
// import { Chart } from 'src/components/chart';

// const useChartOptions = () => {
//   const theme = useTheme();

//   return {
//     chart: {
//       background: 'transparent',
//       stacked: false,
//       toolbar: {
//         show: false
//       }
//     },
//     colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
//     dataLabels: {
//       enabled: false
//     },
//     fill: {
//       opacity: 1,
//       type: 'solid'
//     },
//     grid: {
//       borderColor: theme.palette.divider,
//       strokeDashArray: 2,
//       xaxis: {
//         lines: {
//           show: false
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       }
//     },
//     legend: {
//       show: false
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '40px'
//       }
//     },
//     stroke: {
//       colors: ['transparent'],
//       show: true,
//       width: 2
//     },
//     theme: {
//       mode: theme.palette.mode
//     },
//     xaxis: {
//       axisBorder: {
//         color: theme.palette.divider,
//         show: true
//       },
//       axisTicks: {
//         color: theme.palette.divider,
//         show: true
//       },
//       categories: [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec'
//       ],
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     },
//     yaxis: {
//       labels: {
//         formatter: (value) => (value > 0 ? ${value}K : ${value}),
//         offsetX: -10,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     }
//   };
// };

// export const OverviewSales = (props) => {
//   const { chartSeries, sx } = props;
//   const chartOptions = useChartOptions();

//   return (
//     <Card sx={sx}>
//       <CardHeader
//         action={(
//           <Button
//             color="inherit"
//             size="small"
//             startIcon={(
//               <SvgIcon fontSize="small">
//                 <ArrowPathIcon />
//               </SvgIcon>
//             )}
//           >
//             Sync
//           </Button>
//         )}
//         title="Sales"
//       />
//       <CardContent>
//         <Chart
//           height={350}
//           options={chartOptions}
//           series={chartSeries}
//           type="bar"
//           width="100%"
//         />
//       </CardContent>
//       <Divider />
//       <CardActions sx={{ justifyContent: 'flex-end' }}>
//         <Button
//           color="inherit"
//           endIcon={(
//             <SvgIcon fontSize="small">
//               <ArrowRightIcon />
//             </SvgIcon>
//           )}
//           size="small"
//         >
//           Overview
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// OverviewSales.protoTypes = {
//   chartSeries: PropTypes.array.isRequired,
//   sx: PropTypes.object
// };


import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { CompanyCard } from 'src/sections/companies/company-card';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 1',
    // downloads: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 2',
    downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 3',
    downloads: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 4',
    downloads: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 5',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Join us for a [Event Name] on [Event Date] at [Venue Name]! Its going to be a fantastic event with lots of fun and great activities.',
    logo: '/assets/logos/logo-foa.png',
    title: 'Event 6',
    downloads: '835'
  }
];

export const OverviewSales = (props) => {
  const { chartSeries, sx } = props;


  return (
    <>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >

            </Stack>
            <Grid
              container
              spacing={3}
            >
              {companies.map((company) => (
                <Grid
                  xs={12}
                  md={6}
                  // lg={4}
                  key={company.id}
                >
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                count={3}
                size="small"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>

  );
};