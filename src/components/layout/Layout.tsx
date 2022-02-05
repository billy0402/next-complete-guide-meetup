import Navigation from './Navigation';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <main className='main'>{children}</main>
    </div>
  );
};

export default Layout;
