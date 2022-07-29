import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider
    theme={{
        headings: {
          fontWeight: 400,
          fontFamily: 'Roboto',
          sizes: {
            h1: { fontWeight: 100, fontSize: 32, lineHeight: 1.4 },
            h2: { fontSize: 35, lineHeight: 1.5 },
          },
        },
      }}
    >
        <App />
    </MantineProvider>
);
