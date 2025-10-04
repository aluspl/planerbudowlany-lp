import React from 'react';

const AppVisualization = () => {
  return (
    <svg width="100%" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, sans-serif">
      <defs>
        <style>
          {`
          .phone-border { stroke: #e2e8f0; stroke-width: 4; rx: 20; ry: 20; fill: white; filter: drop-shadow(0 10px 8px rgba(0,0,0,0.04)) drop-shadow(0 4px 3px rgba(0,0,0,0.1)); }
          .header { fill: #f8fafc; stroke: #e2e8f0; }
          .nav { fill: #f8fafc; stroke: #e2e8f0; }
          .title-text { font-size: 14px; font-weight: 600; fill: #1e293b; }
          .body-text { font-size: 12px; fill: #475569; }
          .item-box { fill: white; stroke: #e2e8f0; rx: 8; ry: 8; }
          .arrow { stroke: #94a3b8; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
          .arrow-text { font-size: 11px; fill: #64748b; font-style: italic; }
          .icon { stroke: #4f46e5; stroke-width: 1.5; fill: none; }
          `}
        </style>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#94a3b8" />
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="#f1f5f9" />
      
      <text x="50%" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">Wizualizacja Przepływu Aplikacji "PlanBudowlany"</text>

      {/* Main Screens */}
      <g id="main-screens">
        {/* Tasks Screen */}
        <g id="tasks-screen-group" transform="translate(100, 80)">
          <rect className="phone-border" width="220" height="450" />
          <rect className="header" x="3" y="3" width="214" height="50" />
          <text className="title-text" x="110" y="35" textAnchor="middle">Zadania</text>
          <rect className="item-box" x="20" y="70" width="180" height="40" />
          <text className="body-text" x="35" y="95">Projekt elektryki</text>
          <circle cx="180" cy="90" r="4" fill="#4f46e5" />
          <rect className="item-box" x="20" y="130" width="180" height="40" />
          <text className="body-text" x="35" y="155">Zamówić okna</text>
          <rect className="nav" x="3" y="397" width="214" height="50" />
          <g className="icon" transform="translate(35, 412) scale(1.2)">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </g>
        </g>

        {/* Chat Screen */}
        <g id="chat-screen-group" transform="translate(360, 80)">
          <rect className="phone-border" width="220" height="450" />
          <rect className="header" x="3" y="3" width="214" height="50" />
          <text className="title-text" x="110" y="35" textAnchor="middle">Czat</text>
          <rect className="item-box" x="20" y="70" width="180" height="40" />
          <text className="body-text" x="35" y="95"># elektryka</text>
          <rect className="item-box" x="20" y="130" width="180" height="40" />
          <text className="body-text" x="35" y="155">Jan Kowalski</text>
          <rect className="nav" x="3" y="397" width="214" height="50" />
          <g className="icon" transform="translate(80, 412) scale(1.2)">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </g>
        </g>

        {/* Files Screen */}
        <g id="files-screen-group" transform="translate(620, 80)">
          <rect className="phone-border" width="220" height="450" />
          <rect className="header" x="3" y="3" width="214" height="50" />
          <text className="title-text" x="110" y="35" textAnchor="middle">Pliki</text>
          <rect className="item-box" x="20" y="70" width="180" height="40" />
          <text className="body-text" x="35" y="95">Projekty</text>
          <rect className="item-box" x="20" y="130" width="180" height="40" />
          <text className="body-text" x="35" y="155">Kosztorysy</text>
          <rect className="nav" x="3" y="397" width="214" height="50" />
           <g className="icon" transform="translate(125, 412) scale(1.2)">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.25-2.25v-6.59a2.25 2.25 0 00-2.25-2.25H6.375a2.25 2.25 0 00-2.25 2.25v6.59z" />
          </g>
        </g>

        {/* Logbook Screen */}
        <g id="logbook-screen-group" transform="translate(880, 80)">
          <rect className="phone-border" width="220" height="450" />
          <rect className="header" x="3" y="3" width="214" height="50" />
          <text className="title-text" x="110" y="35" textAnchor="middle">Dziennik B.</text>
          <rect className="item-box" x="20" y="70" width="180" height="40" />
          <text className="body-text" x="35" y="95">Wpis: 03.10.25</text>
          <rect className="item-box" x="20" y="130" width="180" height="40" />
          <text className="body-text" x="35" y="155">Wpis: 02.10.25</text>
          <rect className="nav" x="3" y="397" width="214" height="50" />
           <g className="icon" transform="translate(170, 412) scale(1.2)">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </g>
        </g>
      </g>
      
      {/* Sub Screens & Arrows */}
      <g id="sub-screens">
        {/* Task Detail */}
        <g id="task-detail-group" transform="translate(210, 590)">
          <rect className="phone-border" width="220" height="100" />
          <rect className="header" x="3" y="3" width="214" height="30" />
          <text className="title-text" x="110" y="23" textAnchor="middle">Checklista</text>
          <text className="body-text" x="20" y="55">☐ Sprawdzić normy</text>
          <text className="body-text" x="20" y="75">☐ Zatwierdzić z inwestorem</text>
        </g>
        <path className="arrow" d="M210 530 C 210 560, 320 560, 320 590" />
        <text className="arrow-text" x="270" y="565">Klik</text>

        {/* Chat Detail */}
        <g id="chat-detail-group" transform="translate(530, 590)">
          <rect className="phone-border" width="220" height="100" />
          <rect className="header" x="3" y="3" width="214" height="30" />
          <text className="title-text" x="110" y="23" textAnchor="middle">Konwersacja</text>
          <rect x="15" y="40" width="150" height="25" rx="5" fill="#e2e8f0" />
          <rect x="55" y="75" width="150" height="25" rx="5" fill="#4f46e5" />
        </g>
        <path className="arrow" d="M470 530 C 470 560, 570 560, 570 590" />
        <text className="arrow-text" x="520" y="565">Wejdź</text>
        
        {/* Files Detail */}
         <g id="files-detail-group" transform="translate(850, 590)">
          <rect className="phone-border" width="220" height="100" />
          <rect className="header" x="3" y="3" width="214" height="30" />
          <text className="title-text" x="110" y="23" textAnchor="middle">Folder: Projekty</text>
           <text className="body-text" x="20" y="55"> projekt_glowny.pdf</text>
          <text className="body-text" x="20" y="75">️ rzut_parteru.png</text>
        </g>
        <path className="arrow" d="M730 530 C 730 560, 830 560, 830 590" />
        <text className="arrow-text" x="780" y="565">Otwórz</text>
      </g>
    </svg>
  );
};

export default AppVisualization;
