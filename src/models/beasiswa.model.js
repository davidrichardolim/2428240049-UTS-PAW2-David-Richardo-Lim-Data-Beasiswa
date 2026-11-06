import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    organizer: {
      type: String,
      required: true,
      unique: true,
    },
    deadline: {
      type: date,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)
const beasiswaModel = mongoose.model('beasiswa', schema)
export default beasiswaModel