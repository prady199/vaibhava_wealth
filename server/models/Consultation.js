import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      default: 'Retirement Planning',
    },
    message: {
      type: String,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;
