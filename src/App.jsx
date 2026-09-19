import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/router/AppRouter';
import ScrollToTop from '@/components/ScrollToTop';
import IntroSplash from '@/components/IntroSplash/IntroSplash';

function App() {
  return (
    <>
      <IntroSplash />
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
