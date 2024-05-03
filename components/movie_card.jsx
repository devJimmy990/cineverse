import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EditNote } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const handleLike = React.useCallback(() => {
    setLike(!like)
  }, [like])

  const handleEdit = React.useCallback(() => {

  }, [])
  return (
    <Card
      sx={{
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        borderRadius: 5,
        margin: 2,
        elevation: 5,
        "&:hover": {
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
          "& $actions": {
            visibility: 'visible',
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/movies/${movie.id}`}>
        <CardHeader
          titleTypographyProps={{
            noWrap: true,
            color: 'white',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }} subheaderTypographyProps={{ color: 'white' }}
          avatar={
            <Avatar sx={{ bgcolor: 'red[500]', width: 50, height: 50 }} aria-label="recipe" src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}>
              {/* <Image width={50} height={50} src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt="MOVIE" /> */}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.release_date}
        />
        <CardMedia
          component="img"
          height="194"
          image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          alt="Movie Poster"
        />
        <CardContent sx={{ flexGrow: 1 }} >
          <Typography variant="body2" align='justify' color="white" sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}>
            {movie.overview}
          </Typography>
        </CardContent>
      </Link >

      <CardActions disableSpacing sx={{ marginTop: 'auto', visibility: like ? 'visible' : isHovered ? 'visible' : 'hidden' }} className="actions">
        <IconButton aria-label="add to favorites" style={{ color: like ? 'red' : 'white' }} onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{ color: 'white' }}>
          <ShareIcon />
        </IconButton>

        {like ? null : <Link href="/movie" onClick={handleEdit}>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <EditNote />
          </IconButton>
        </Link>}

      </CardActions>
    </Card>
  );
}
