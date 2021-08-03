import React from 'react';


const Header = () => {
  const lightDark = () => {
    const toggle = document.querySelector('.toggle');
    const buttons = document.querySelectorAll('.btn');
    const inputs = document.querySelectorAll('.input');
    if (document.body.classList.contains('light-theme')) {
      document.documentElement.style.setProperty('--background', 'hsl(207, 26%, 17%)');
      document.documentElement.style.setProperty('--elements', 'hsl(209, 23%, 22%)');
      document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 100%)');
      toggle.innerHTML = '<i class="fas fa-moon"></i>Dark Mode';
    } else {
      document.documentElement.style.setProperty('--background', 'hsl(0, 0%, 98%)');
      document.documentElement.style.setProperty('--elements', 'hsl(0, 0%, 98%)');
      document.documentElement.style.setProperty('--text', 'hsl(200, 15%, 8%)');
      toggle.innerHTML = '<i class="far fa-moon"></i>Dark Mode';
      
    }
    document.body.classList.toggle('light-theme');
    buttons.forEach(button => button.classList.toggle('light-mode'));
    inputs.forEach(input => input.classList.toggle('light-mode'));
  }

  return (
    <>
    <header>
      <div className="header-wrap">
        <div className="title">
          <h1>Where in the World?</h1>
        </div>
        <div className="icon">
        <span className="toggle" onClick={() => lightDark()}><i class="fas fa-moon"></i>Dark Mode</span>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header