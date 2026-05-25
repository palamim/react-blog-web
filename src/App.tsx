import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { ThemeProvider, useTheme } from '@/app/providers/theme.provider';
import { GlobalStyle } from './atomic/obj.globals/global.style';
import Header from './atomic/org.header/header.component';
import Footer from './atomic/org.footer/footer.component';

// Pages
import Home from '@/pages/home';
import Blog from './pages/blog/blog';
import BlogPost from './pages/blog/blog-post';
import BlogIndex from './pages/blog/blog-index';

const RootLayout = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

const ThemedApp = () => {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Wraps your entire app in Header/Footer/Styles
    children: [
      {
        index: true, // Matches exactly '/'
        element: <Home />,
      },
      {
        path: 'blog', // Matches '/blog'
        element: <Blog />,
        children: [
          {
            index: true, // Matches exactly '/blog'
            element: <BlogIndex />,
          },
          {
            path: ':slug', // Matches '/blog/any-post-title-here'
            element: <BlogPost />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
