import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

import { FormProps } from '../interfaces/common'
import CustomButton from './CustomButton'

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  productImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#a0a5cc">
        {type} a Product
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#303030">
        <form
          style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#a0a5cc',
              }}
            >
              Enter product name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#a0a5cc',
              }}
            >
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              variant="outlined"
              style={{
                width: '100%',
                background: 'transparent',
                fontSize: '16px',
                borderRadius: 6,
                padding: 10,
                color: '#ffffff',
              }}
              {...register('description', { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#a0a5cc',
                }}
              >
                Select Product Type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="apartment"
                {...register('productType', {
                  required: true,
                })}
              >
                <MenuItem value="pizza">Pizza</MenuItem>
                <MenuItem value="burger">Burger</MenuItem>
                <MenuItem value="sushi">Sushi</MenuItem>
                <MenuItem value="pasta">Pasta</MenuItem>
                <MenuItem value="steak">Steak</MenuItem>
                <MenuItem value="salad">Salad</MenuItem>
                <MenuItem value="taco">Taco</MenuItem>
                <MenuItem value="soup">Soup</MenuItem>
                <MenuItem value="sandwich">Sandwich</MenuItem>
                <MenuItem value="curry">Curry</MenuItem>
                <MenuItem value="riceBowl">Rice Bowl</MenuItem>
                <MenuItem value="sausage">Sausage</MenuItem>
                <MenuItem value="seafood">Seafood</MenuItem>
                <MenuItem value="dumplings">Dumplings</MenuItem>
                <MenuItem value="bbq">BBQ</MenuItem>
                <MenuItem value="chickenWings">Chicken Wings</MenuItem>
                <MenuItem value="noodles">Noodles</MenuItem>
                <MenuItem value="burrito">Burrito</MenuItem>
                <MenuItem value="omelette">Omelette</MenuItem>
                <MenuItem value="pancakes">Pancakes</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#a0a5cc',
                }}
              >
                Enter product price
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="number"
                variant="outlined"
                {...register('price', { required: true })}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#a0a5cc',
              }}
            >
              Enter Location
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('location', { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#a0a5cc"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Product Photo
              </Typography>

              <Button
                component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  textTransform: 'capitalize',
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleImageChange(e.target.files![0])
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: 'break-all' }}
            >
              {productImage?.name}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#525257"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form
