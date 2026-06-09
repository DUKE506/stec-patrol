import z from 'zod'

export const pointSchema = z
  .object({
    name: z.string().min(2, '두 글자 이상 입력해주세요.'),
    description: z.string(),
    authenticationMethod: z.enum(['QR', 'NFC']),
    nfcTagId: z.string(),
  })
  .refine((data) => !(data.authenticationMethod === 'NFC' && !data.nfcTagId), {
    error: 'NFC TAG ID를 입력해주세요.',
    path: ['nfcTagId'],
  })

export type FormDataType = z.infer<typeof pointSchema>
