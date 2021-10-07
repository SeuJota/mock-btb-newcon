// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';

type Response = {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    scope: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    res.status(200).json({
        access_token: uuidv4(),
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: uuidv4(),
        scope: 'CO.Consorcio'
    })
}
