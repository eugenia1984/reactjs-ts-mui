import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './Router';

function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
