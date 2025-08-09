document.addEventListener('DOMContentLoaded', () => { //Espera a que el DOM esté cargado
  const openButton = document.querySelector('.header__open') //Obtiene el botón para abrir el menú
  const closeButton = document.querySelector('.header__close') //Obtiene el botón para cerrar el menú
  const menu = document.querySelector('.header__menu') //Obtiene el menú de navegación

  openButton.addEventListener('click', () => { //Al hacer clic en abrir menú
    menu.classList.add('header__menu--visible') //Muestra el menú agregando la clase
  })

  closeButton.addEventListener('click', () => { //Al hacer clic en cerrar menú
    menu.classList.remove('header__menu--visible') //Oculta el menú quitando la clase
  })

  const menuItems = document.querySelectorAll('.header__link') //Obtiene todos los enlaces del menú

  menuItems.forEach(item => { //Recorre cada enlace del menú
    item.addEventListener('click', () => { //Al hacer clic en un enlace
      removeMenuItemsActive(menuItems, 'header__link--active') //Quita la clase activa de todos los enlaces
      item.classList.add('header__link--active') //Agrega la clase activa al enlace clicado
      menu.classList.remove('header__menu--visible') //Oculta el menú después de seleccionar
    })
  })

  const removeMenuItemsActive = (items, _class) => { //Función para quitar la clase activa
    items.forEach(item => { //Recorre los elementos
      item.classList.remove(_class) //Quita la clase activa
    })
  }

  document.getElementById('copyright').innerText = //Actualiza el texto del copyright
    `© Jacobo Garcés. ${new Date().getFullYear().toString()}` //Muestra el año actual
})