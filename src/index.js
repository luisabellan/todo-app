import React from 'react';
import ReactDOM from 'react-dom';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
//import { t } from '@lingui/macro';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <I18nProvider i18n={i18n}> */}
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
