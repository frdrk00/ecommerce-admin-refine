import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import { CategoryCardProps } from 'interfaces/category'

const CategoryCard = ({ id, title }: CategoryCardProps) => {
  return (
    <Card
      component={Link}
      to={`/categories/show/${id}`}
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
          <Typography fontSize={16} fontWeight={500} color="#a0a5cc">
            {title}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CategoryCard
