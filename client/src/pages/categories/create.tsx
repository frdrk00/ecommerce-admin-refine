import { useForm } from '@refinedev/react-hook-form'
import { FieldValues } from 'react-hook-form'
import {CategoryForm} from 'components'

export const CategoryCreate = () => {
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm()

  const onFinishHandler = async (data: FieldValues) => {
    await onFinish({
      ...data,
    })
    console.log(data)
  }

  return (
    <CategoryForm
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      onFinishHandler={onFinishHandler}
    />
  )
}
