const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   box.innerHTML = i;
   row.append(box);
   console.log(box);

   if (!(i % 3) && !(i % 5)) {
      box.classList.add('mult3-5');   
      box.innerHTML = i + '= numero multiplo di 3 e 5';
   } else if (!(i % 3)) {
      box.classList.add('mult3');
      box.innerHTML = i + '= numero multiplo di 3';
   } else if (!(i % 5)) {
      box.classList.add('mult5');
      box.innerHTML = i + '= numero multiplo di 5';
   } 

   console.log(i);
}

