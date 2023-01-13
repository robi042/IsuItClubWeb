import React from 'react'
import styles from '../styles/upcomingEvents.module.css'
import Image from "next/image"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function upcomingEvents() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.text1}>Upcoming</div>
        <div className={styles.text2}>Events</div>
      </div>

      <div className={styles.upeventVideo}>
        <Card className={styles.image1} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="/img/contest.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Programming Contest
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A programming contest is going to be held on December 11. All ISU IT Club members can participate in this contest with following the resitration link.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={styles.image1} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="/img/robi_event.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Web Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Workshop on Web Development was held at the Mohakhali campus of International Standard University (ISU) on 10 November 2022
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={styles.image1} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="/img/tamzidEvent.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Canva Design Workshop
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Create with canva deisgn work-shop was held at the Mohakhali campus of International Standard University (ISU) on 10 November 2022
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

    </div>
  )
}

export default upcomingEvents