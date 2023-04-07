import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div>
        <AppBar />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;