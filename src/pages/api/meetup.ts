import type { NextApiRequest, NextApiResponse } from 'next';

import { Meetup } from '@models/meetup';

type Data = Meetup;

// [POST] /api/meetup
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      const data = req.body;
      res.status(201).json(data);
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
