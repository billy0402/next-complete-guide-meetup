import { ObjectId } from 'mongodb';

type Meetup = {
  id: string;
  title: string;
  description: string;
  address: string;
  image: string;
};

type MeetupCreate = Omit<Meetup, 'id'>;

type DbMeetup = Omit<Meetup, 'id'> & {
  _id: ObjectId;
};

export type { Meetup, MeetupCreate, DbMeetup };
