import Place from '@mui/icons-material/Place'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

import { ProductCardProps } from '../interfaces/product'

const ProductCard = ({
  id,
  title,
  location,
  price,
  photo,
}: ProductCardProps) => {
  return (
    <Card
      component={Link}
      to={`/products/show/${id}`}
      sx={{
        maxWidth: '330px',
        padding: '10px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)',
        },
        cursor: 'pointer',
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{ borderRadius: '10px' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '10px',
          paddingX: '5px',
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500}  color="#a0a5cc">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{
                fontSize: 18,
                color: '#a0a5cc',
                marginTop: 0.5,
              }}
            />
            <Typography fontSize={14} display={"flex"} alignItems={"center"} justifyContent={"center"} color="#808191">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#dadefa"
          height="fit-content"
        >
          <Typography fontSize={12} fontWeight={600} color="#525257">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCard
