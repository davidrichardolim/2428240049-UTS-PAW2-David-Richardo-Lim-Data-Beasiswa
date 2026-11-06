import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: {
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
      type: String,
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
