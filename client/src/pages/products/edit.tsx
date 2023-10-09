import { useState } from 'react'
import { useGetIdentity } from '@refinedev/core'
import { useForm } from '@refinedev/react-hook-form'
import { FieldValues } from 'react-hook-form'
import { Form } from 'components'

export const ProductEdit = () => {
  const { data: user } = useGetIdentity<{
    email: string
    id: string
    name: string
  }>()
  const [productImage, setPropertyImage] = useState({ name: '', url: '' })
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm()

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = () => resolve(fileReader.result as string)
        fileReader.readAsDataURL(readFile)
      })

    reader(file).then((result: string) =>
      setPropertyImage({ name: file?.name, url: result })
    )
  }

  const onFinishHandler = async (data: FieldValues) => {
    if (!productImage.name) return alert('Please upload a product image')

    await onFinish({
      ...data,
      photo: productImage.url,
      email: user?.email,
    })
  }

  return (
    <Form
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      productImage={productImage}
    />
  )
}
