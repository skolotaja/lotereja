const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis Priede'];
const balvas = ['Dators', 'Telefons', 'Ledusskapis', 'Fotoaparāts', 'Kafijas automāts'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rindas = document.querySelector('.rindas');
//rindas.innerHTML = 'Hello';
function randFunc(maxCipars)
{
    let random1=Math.floor(Math.random()*maxCipars);
    return random1;
}
function izlozet()
{
    rindas.innerHTML=" ";
for (let i = 0; i < uzvaretajuSkaits; i++) {
<<<<<<< HEAD
    let rand = Math.random() * vardi.length;​
    rand = Math.floor(rand);​
    
=======
    let rand = randFunc(vardi.length);
>>>>>>> 7f6aa29ee0533db7cb377bc8cd8349fc818e708c


    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
    <tr>
<<<<<<< HEAD
        <td>${i + 1}</td>
=======
        <td>${i+1}</td> 
>>>>>>> 7f6aa29ee0533db7cb377bc8cd8349fc818e708c
        <td>${uzvaretajs}</td>
    </tr>`


}
}
//beidzas izloze
