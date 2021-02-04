const ages = [12, 14, 16, 18, 20];
const ages2 = [15, 12, 16];
const ages3 = [25, 22, 26, 29];

const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

const allAges2 = [ages, ages2, 7, ages3];
console.log(allAges2);

const allAges3 = [...ages, ...ages2, 7, ...ages3];
console.log(allAges3);

const business = 890;
const shochib = 970;
const minister = 678;
const maximum = Math.max(business, minister, shochib);
console.log(maximum);

const takaPoisha = [890, 450, 250];
const maximum2 = Math.max(takaPoisha);
console.log(maximum2);
const maximum3 = Math.max(...takaPoisha);
console.log(maximum3);