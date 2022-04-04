import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterLuxon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Form from './pages/Form';
import Print from './pages/Print';

const App = () => {
  return (
    <RecoilRoot>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/print" element={<Print />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </RecoilRoot>
  );
};

export default App;
