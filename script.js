const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis Priede'];
const balvas = ['Dators', 'Telefons', 'Ledusskapis', 'Fotoaparāts', 'Kafijas automāts'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rindas = document.querySelector('.rindas');
//rindas.innerHTML = 'Hello';
function randFunc(maxCipars) {
    let random1 = Math.floor(Math.random() * maxCipars);

    return random1;
}
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = randFunc(vardi.lenght);​
    console.log(vardi[rand]);


    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${uzvaretajs}</td>
    </tr>`


}