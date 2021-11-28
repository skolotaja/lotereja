const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis Priede'];
const balvas = ['Dators', 'Telefons', 'Ledusskapis', 'Fotoaparāts', 'Kafijas automāts'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rand = Math.random() * 5;
rand = Math.floor(rand);

console.log(vardi[rand]);