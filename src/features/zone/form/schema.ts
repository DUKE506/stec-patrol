import z from 'zod'

export const zoneSchema = z.object({
  name: z.string().min(2, '2자 이상 입력해주세요.'),
})

export type FormDataType = z.infer<typeof zoneSchema>
