import { NextPage } from 'next';

import NewMeetupForm from '@components/meetup/NewMeetupForm';
import { Meetup } from '@models/meetup';

const NewMeetupPage: NextPage = () => {
  const addMeetupHandler = (meetup: Omit<Meetup, 'id'>) => {
    console.log(meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
