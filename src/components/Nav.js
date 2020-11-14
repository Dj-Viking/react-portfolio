import React from 'react';

function Nav(props) {
  const tabs = [
    'Home', 
    'About', 
    'Projects', 
    //'Contact'
  ];
  const {
    currentTab,
    setTab
  } = props;
  return (
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
  );
}

export default Nav;