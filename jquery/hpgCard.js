const hpgCardClassName = 'toggle-display';
const hpgCardDropdownClassName = 'hpgCard__dropdown';
const hpgCard__dropdownArr = Array.from(
  document.getElementsByClassName(hpgCardDropdownClassName)
);
hpgCard__dropdownArr.forEach(e => {
  e.addEventListener('click', () => {
    const label = e;
    const top2 = label.parentElement.parentElement.parentElement.children[1];
    const bottom =
      label.parentElement.parentElement.parentElement.parentElement.children[1];
    top2.classList.toggle(hpgCardClassName);
    bottom.classList.toggle(hpgCardClassName);
  });
});
