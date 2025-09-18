let age = prompt ("Quel est ton age ?");

if (age < 18) {
    console.log(`L'utilisateur a $(age) il est mineur !`);
}
else if (age >= 18 && age < 62) {
    console.log(`L'utilisateur a $(age) il est majeur !`);
}
else if (age >= 62) {
    console.log(`L'utilisateur a $(age) il est majeur mais aussi retraité !`);
}
