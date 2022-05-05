
function merge(first, second) {
    const arr = [...first, ...second];
    let set = {};
    for (let i = 0; i < arr.length; i++) {
      let obj = arr[i];
      let id = obj.userid;
      if (set[id]) {
        arr[set[id]].role = obj.role;
        arr.splice(i, 1);
        i--;
      } else set[id] = i;
    }
    return arr;
  }

const first = [
	{ userid: 2, name: "Velen" },
	{ userid: 56, name: "Illidan" },
	{ userid: 23, name: "Muradin" },
	{ userid: 12, name: "Sylvanas" },
	{ userid: 44, name: "Cenarius" },
	{ userid: 4, name: "Gul'Dan" },
];
const second = [
	{ userid: 2, role: "Mage" },
	{ userid: 4, role: "Worlock" },
	{ userid: 56, role: "Demon Hunter" },
	{ userid: 66, role: "Druid" },
	{ userid: 87, role: "Shaman" },
	{ userid: 12, role: "Hunter" },
];

console.log(merge(first, second));
