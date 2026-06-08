import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/app/Input'
import { useEffect } from 'react'
import Button from '@/components/Button'
import { zoneSchema, type FormDataType } from './schema'

const AddZoneForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(zoneSchema),
    defaultValues: {
      name: '',
    },
  })

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  const onSubmit = (data: FormDataType) => {
    console.log('============FORM============')
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="구역명"
        required
        placeholder="구역명을 입력해주세요"
        error={errors.name?.message}
        {...register('name')}
      />
      <Button size="full" type="submit">
        생성
      </Button>
    </form>
  )
}

export default AddZoneForm
