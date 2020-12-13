const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


function handleClassSwitch() {
  if (refs.body.className === '') {
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  }

  const currentTheme = refs.body.getAttribute('class');
  localStorage.setItem('workingTheme', currentTheme);
}


refs.checkbox.addEventListener('change', handleClassSwitch);



function actualTheme() {
    const savedTheme = localStorage.getItem(currentTheme);

   if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }
 
    if (saveTheme === Theme.DARK) {
        refs.checkbox.setAttribute('checked', true);
    }
}




// const addClassSwitch = () => {
//     if (refs.checkbox.checked === true) {
//         themeMenu = refs.body.classList.add(parsedThemeOption.DARK);
//         refs.body.classList.remove(parsedThemeOption.LIGHT);
//         localStorage.setItem('currentTheme', true);
//     } else {
//         themeMenu = refs.body.classList.add(parsedThemeOption.LIGHT);
//         refs.body.classList.remove(parsedThemeOption.DARK);
//         localStorage.setItem('currentTheme', false);
    
// } 
// }


// const actualTheme = () => {
//     const saveTheme = localStorage.getItem('currentTheme');

 
//     if (saveTheme === 'true') {
//         refs.body.classList.add(Theme.DARK);
//         refs.checkbox.checked = true;
//     }
//     else {
//           refs.body.classList.add(Theme.LIGHT);  

//     }
   
// }


// refs.checkbox.addEventListener('change', addClassSwitch)
// actualTheme();