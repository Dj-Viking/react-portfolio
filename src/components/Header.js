import React from 'react';

function Header(props) {
  const tabs = ['Home', 'About', 'Projects', 'Resume', 'Contact'];
  const {
    currentTab,
    setTab
  } = props;
  return (
    <header>
      <h1>
        Anders Ackerman
      </h1>
      <nav>
      <ul>
        {/**loop through tabs array to create elements for each */}
        {
          tabs.map(tab => (
            <li key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => setTab(tab)}
                className={
                  currentTab === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
    <div className="secondary-background"></div>
    </header>
  );
}

export default Header;