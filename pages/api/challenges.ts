import type { NextApiRequest, NextApiResponse } from 'next'
import Challenge from '../../models/Challenges'
import dbConnection from '../../util/database'
const catchAsyncError = require('../../middleware/catchAsyncError')

/** Create Challenge */
const createChallenge = catchAsyncError(async(req: NextApiRequest, res: NextApiResponse) => {
  const challenge = await Challenge.create(req.body)
  res.status(201).json({
    success: true,
    challenge,
  })
})

export default dbConnection(createChallenge)