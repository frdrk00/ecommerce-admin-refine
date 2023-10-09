import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'

import { CategoryFormProps } from '../../interfaces/common'
import CustomButton from './CustomButton'

const Form = ({
  type,
  register,
  handleSubmit,
  formLoading,
  onFinishHandler,
}: CategoryFormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#a0a5cc">
        {type} a Category
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
              Enter category name
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
