const ekleButton = document.querySelector('.button')
const inputBox = document.querySelector('#task')
const listContainer = document.querySelector('#list')
const listItems = document.querySelectorAll('#list li')


ekleButton.addEventListener('click', taskInput)

function taskInput() {
  const liElements = document.createElement('li')  
  liElements.textContent = inputBox.value
 
 
   const closeButton = document.createElement('button')
   closeButton.innerHTML = '&times;'
   closeButton.classList.add('close')
   closeButton.addEventListener("click",() => {
    liElements.remove();
});
  liElements.appendChild(closeButton)
  listContainer.appendChild(liElements)
  inputBox.value = ''
  liElements.addEventListener('click', () => {
    liElements.classList.toggle('checked');
  });

}
listItems.forEach(item => {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('close');
    closeButton.addEventListener("click", () => {
      item.remove();
    });
    item.appendChild(closeButton);
  
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
})