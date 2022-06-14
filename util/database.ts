import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'

const dbConnection = (handler: any) => async(req: NextApiRequest, res: NextApiResponse) => {
  if(mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect(process.env.MONGO_URI as string)
  return handler(req, res)
}

export default dbConnection