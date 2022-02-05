import { SyntheticEvent, useRef } from 'react';

import Card from '@components/ui/Card';
import { MeetupCreate } from '@models/meetup';

type NewMeetupProps = {
  onAddMeetup: (meetup: MeetupCreate) => void;
};

const NewMeetupForm = ({ onAddMeetup }: NewMeetupProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();
    if (
      !titleInputRef.current ||
      !imageInputRef.current ||
      !addressInputRef.current ||
      !descriptionInputRef.current
    ) {
      return;
    }

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetup);
  }

  return (
    <Card>
      <form className='form' onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className='actions'>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
