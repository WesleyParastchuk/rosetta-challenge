const doors = Array(100).fill(false);

for (let i = 1; i <= 100; i++) {
    for(let j = i - 1; j < 100; j += i) {
        doors[j] = !doors[j];
    }
}

const openDoors = doors.map((door, index) => door ? index + 1 : null).filter(door => door);

console.log(openDoors);