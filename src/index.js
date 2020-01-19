import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'src/Root';
import './main.scss';

window.start = dealers =>
  ReactDOM.render(
    <Root dealers={dealers} />,
    document.getElementById('react'),
  );
