const row = document.querySelector('.row');
let multiplo3_5 = '';
let multiplo3 = '';
let multiplo5 = '';

for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   box.innerHTML = i;
   row.append(box);
   console.log(box);

   if (!(i % 3) && !(i % 5)) {
      box.classList.add('mult3-5');
      multiplo3_5 = 'numero multiplo di 3 e 5';
   } else if (!(i % 3)) {
      box.classList.add('mult3');
      multiplo3 = 'numero multiplo di 3';
   } else if (!(i % 5)) {
      box.classList.add('mult5');
      multiplo3 = 'numero multiplo di 5';
   } 

   console.log(i);

}

document.getElementsByClassName("mult3-5").innerHTML = multiplo3_5;
document.getElementsByClassName("mult3").innerHTML = multiplo3;
document.getElementsByClassName("mult5").innerHTML = multiplo5;

