import z from 'zod'

export const storeBeasiswaSchema = z.object({
  name: z.string().trim().min(2, 'nama beasiswa minimal 2 karakter'),
  organizer: z.string().trim().min(3, 'nama organizer minimal 3 karakter'),
  deadline: z.string().trim().min(),
  description: z.string().trim().min(20, 'kode prodi minimal 20 karakter'),
})

export const updateBeasiswaSchema = z.object({
  name: z.string().trim().min(2, 'nama beasiswa minimal 2 karakter'),
  organizer: z.string().trim().min(3, 'nama organizer minimal 3 karakter'),
  deadline: z.string().trim().min(),
  description: z.string().trim().min(20, 'kode prodi minimal 20 karakter'),
})
