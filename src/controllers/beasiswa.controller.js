import beasiswaModel from "../models/beasiswa.model.js"
import { apiResponse, apiResponseValidation } from "../utils/response.js"
import { storeBeasiswaSchema, updateBeasiswaSchema } from "../schemas/beasiswa.schema.js"

class BeasiswaController {
    static async store(req, res) {
        const result = storeBeasiswaSchema.safeParse(req.body) 

        if (!result.success) { 
    return apiResponseValidation({ 
      res, 
      errors: result.error, 
    }) 
  } 
    const { name, organizer, deadline, description } = result.data
    
    const newBeasiswa = await beasiswaModel.create({
        name, organizer, deadline, description
    })

    return apiResponse({ res, status: 201,
        message: 'Fakultas berhasil di buat',  data: newBeasiswa })
  }

  static async index(req, res) {
  const listBeasiswa = await beasiswaModel.find()
  return apiResponse({ res, status: 200, data: listBeasiswa })
}

static async show(req, res) {
  const beasiswaId = req.params.id
  const beasiswa = await beasiswaModel.findById(beasiswaId)
  if (!beasiswa) {
    return apiResponse({ res, status: 404, message: 'beasiswa tidak ditemukan' })
  }
  return apiResponse({ res, status: 200, data: beasiswa })
}

static async update(req, res) {
  const beasiswaId = req.params.id
  const result = updateBeasiswaSchema.safeParse(req.body) 
  if (!result.success) { 
    return apiResponseValidation({ 
      res, 
      errors: result.error, 
    }) 
  } 
  const { name } = result.data 
  const exists = await beasiswaModel.exists({
    _id: beasiswaId,
  })
  if (!exists) {
    return apiResponse({
      res,
      status: 404,
      message: 'beasiswa tidak ada',
      data: null,
    })
  }
  const updateBeasiswa = await beasiswaModel.findOneAndUpdate(
    {
      _id: beasiswaId,
    },
    {
      name, organizer, deadline, description
    },
  )
  return apiResponse({
    res,
    status: 200,
    message: 'beasiswa berhasil di update', 
    data: updateBeasiswa,
  })
}
}

static async delete(req, res) {
  const beasiswaId = req.params.id
  const exists = await beasiswaModel.exists({ _id: beasiswaId })
  if (!exists) {
    return apiResponse({ res, status: 404, message: 'beasiswa tidak ditemukan' })
  }
  await beasiswaModel.findOneAndDelete({ _id: beasiswaId })
  return apiResponse({ res, status: 200, message: 'beasiswa berhasil dihapus', data: null })
}

}

export default BeasiswaController