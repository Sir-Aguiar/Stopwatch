const body = document.getElementsByTagName("body");

const toggleDarkMode = ():void => {
  body[0].classList.toggle("dark");
};

export { toggleDarkMode };
