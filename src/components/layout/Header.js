import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';

export const Header = () => {
	return (
  	<header className="header" data-test="header">
    <div className="logo">
      <img src="/images/logo.png" alt="TodoIst" />
    </div>
    <div className="settings">
      <ul>
        <li>+</li>
        <li>
					<FaPizzaSlice />
				</li>
      </ul>
    </div>
  </header>
	);
};
