import { NextPage } from 'next';

import NewMeetupForm from '@components/meetup/NewMeetupForm';
import { MeetupCreate } from '@models/meetup';

const NewMeetupPage: NextPage = () => {
  const addMeetupHandler = (meetup: MeetupCreate) => {
    console.log(meetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
