import React from 'react';
import { Box, Grid, Typography, Avatar, Card, CardContent, Rating, Button } from '@mui/material';

// Dummy data for reviews
const reviews = [
  {
    id: 1,
    name: 'Alex Stanton',
    position: 'CEO at Bukalapak',
    date: '21 July 2022',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    rating: 4,
    review:
      'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
  },
  {
    id: 2,
    name: 'Skylar Dias',
    position: 'CEO at Amazon',
    date: '20 July 2022',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    review:
      'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
  },
  
];

function ReviewSection() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', p: 4, borderRadius: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Reviews
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: 12 }}>
          13
        </Button>
      </Grid>

      <Grid container spacing={2} mt={2}>
        {reviews.map((review) => (
          <Grid item xs={12} key={review.id}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      alt={review.name}
                      src={review.avatarUrl}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" fontWeight="bold">
                      {review.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {review.position}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {review.review}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      {review.date}
                    </Typography>
                    <Rating value={review.rating} readOnly />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={2} textAlign="center">
        <Button variant="text" color="primary" endIcon={<span>&#x25BC;</span>}>
          Show All
        </Button>
      </Box>
    </Box>
  );
}

export default ReviewSection;
