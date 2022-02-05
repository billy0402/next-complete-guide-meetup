import type { NextApiRequest, NextApiResponse } from 'next';

import { createMeetup, readMeetup } from '@helpers/db';
import { Meetup } from '@models/meetup';

type Data = Meetup;

// [POST] /api/meetup
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      const data = req.body;
      const insertResult = await createMeetup(data);
      const meetup = await readMeetup(insertResult.insertedId.toString());
      if (meetup) {
        res.status(201).json(meetup);
      } else {
        res.status(404);
      }
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
