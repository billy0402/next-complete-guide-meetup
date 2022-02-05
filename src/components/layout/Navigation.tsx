import Link from 'next/link';

const Navigation = () => {
  return (
    <header className='header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
