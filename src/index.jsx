import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyle/index.scss';
import './globalStyle/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from './components/UI/container';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Container>
        <App />
      </Container>
    </Router>
  </QueryClientProvider>
);

// If you want to start measuring pe rformance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
