import React from 'react';


const Header = () => {
  let isDarkMode = true;

  const lightDark = () => {
    const buttons = document.querySelectorAll('.btn');
    const inputs = document.querySelectorAll('.input');
    if (!isDarkMode) {
      document.documentElement.style.setProperty('--background', 'hsl(207, 26%, 17%)');
      document.documentElement.style.setProperty('--elements', 'hsl(209, 23%, 22%)');
      document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 100%)');
    } else {
      document.documentElement.style.setProperty('--background', 'hsl(0, 0%, 98%)');
      document.documentElement.style.setProperty('--elements', 'hsl(0, 0%, 98%)');
      document.documentElement.style.setProperty('--text', 'hsl(200, 15%, 8%)');
    }
    buttons.forEach(button => button.classList.toggle('light-mode'));
    inputs.forEach(input => input.classList.toggle('light-mode'));
    isDarkMode = !isDarkMode;
  }

  

  return (
    <>
    <header>
      <div className="header-wrap">
        <div className="title">
          <h1>Where in the World?</h1>
        </div>
        <div className="icon">
        <span className="toggle" onClick={lightDark}>{isDarkMode ? <i className="fas fa-moon" /> : <i className="far fa-moon" />}Dark Mode</span>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header


