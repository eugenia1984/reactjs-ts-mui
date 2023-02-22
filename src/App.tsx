import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './Router';

function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
          <Suspense fallback={ "Loading..." }>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
