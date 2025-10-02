import React from 'react';

const Logo = () => (
  <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .logo-text {
          font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 28px;
          fill: #1e293b; /* slate-800 */
        }
        .light-part {
          font-weight: 300; /* Light */
        }
        .bold-part {
          font-weight: 700; /* Bold */
        }
      `}
    </style>

    <g transform="translate(5, 5)">
      <rect x="0" y="0" width="50" height="50" rx="8" ry="8" fill="#4f46e5"/>
      <path d="M12 40V10a2 2 0 012-2h22a2 2 0 012 2v30a2 2 0 01-2 2H14a2 2 0 01-2-2z" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M12 18h26M12 25h26M20 8v4m10-4v4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </g>
    
    <text x="70" y="38" className="logo-text">
      <tspan className="light-part">Plan</tspan><tspan className="bold-part">Budowlany</tspan>
    </text>
  </svg>
);

export default Logo;