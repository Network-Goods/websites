// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  isGeofenced: boolean,
  countryCode?: string | string[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  // Australia:
  // Hong Kong: 
  // India
  // Indonesia: 
  // Japan:
  // Thailand: 

  const countryCode = req.headers['X-Vercel-IP-Country'] || 'not set';
  res.status(200).json({ isGeofenced: false, countryCode: countryCode })
}
