import { z } from 'zod'

// import { groupStatusSchema } from '@/departaments/lib/schemas'
// import { roleWithGroupSchema } from '@/roles/lib/schemas'

export const loginSchema = z.object({
  email: z.email({message:'Correo Inválido'}),
  password: z.string({message:'Clave Inválida'})
})

export const loginWithCaptcha = loginSchema.extend({
  captcha: z.string()
})

export const authGroupSchema = z.object({
  id: z.number(),
  userId: z.number(),
  roleId: z.number(),
  principal: z.boolean(),
  // status: groupStatusSchema,
  // role: roleWithGroupSchema
})

export const loginResponseSchema = z.object({
  accessToken: z.string(),
  passToken: z.string(),
  groups: z.array(authGroupSchema)
})

export interface Login extends z.infer<typeof loginSchema> { }
export interface AuthGroup extends z.infer<typeof authGroupSchema> { }
export interface LoginWithCaptcha extends z.infer<typeof loginWithCaptcha> { }
export interface LoginResponse extends z.infer<typeof loginResponseSchema> { }
