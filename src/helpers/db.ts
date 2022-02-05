import { MongoClient, ObjectId } from 'mongodb';

import { DbMeetup, Meetup, MeetupCreate } from '@models/meetup';

const dbUrl = process.env.DB_CONN_STRING || '';
const client = new MongoClient(dbUrl);
const dbName = process.env.DB_NAME || '';

const connectDb = async () => {
  await client.connect();
  return client.db(dbName);
};

const toMeetup = ({ _id, ...dbMeetUp }: DbMeetup): Meetup => ({
  ...dbMeetUp,
  id: _id.toString(),
});

const createMeetup = async (meetup: MeetupCreate) => {
  try {
    const db = await connectDb();
    const meetupCollection = db.collection<MeetupCreate>('meetup');
    return await meetupCollection.insertOne(meetup);
  } finally {
    client.close();
  }
};

const readMeetups = async () => {
  try {
    const db = await connectDb();
    const meetupCollection = db.collection<DbMeetup>('meetup');
    const dbMeetups = await meetupCollection.find().toArray();
    return dbMeetups.map((dbMeetup) => toMeetup(dbMeetup));
  } finally {
    client.close();
  }
};

const readMeetup = async (meetupId: string) => {
  try {
    const db = await connectDb();
    const meetupCollection = db.collection<DbMeetup>('meetup');
    const dbMeetup = await meetupCollection.findOne({
      _id: new ObjectId(meetupId),
    });
    if (!dbMeetup) {
      throw new Error('meetup not found');
    }
    return toMeetup(dbMeetup);
  } finally {
    client.close();
  }
};

export { createMeetup, readMeetups, readMeetup };
