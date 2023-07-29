const projects = [
    ['TPM', 19],
    ['Benefit World', 22],
    ['ROG', 2],
    ['EarnQuay', 2],
    ['Minicap', 2],
    ['BeaConnect', 2],
    ['Cyboz', 2],
    ['SG-Cap', 2],
];

const calculateProgressPercentage = project => {
    const progress = project[1];
    const total = 100;
    const percentage = progress / total * 100;
    return percentage;
};

for (const project of projects) {
    const percentage = calculateProgressPercentage(project);
    console.log(`${project[0]}: ${percentage.toFixed(2)}%`);
}