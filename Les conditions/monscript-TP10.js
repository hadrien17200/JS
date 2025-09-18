let age = prompt ("Quel est ton age ?");

switch (age) {
    case '18':
        alert("Tu viens d'être majeur");
        break;
    case '25':
        alert("il a un quart de siècle");
        break;
    case '50':
        alert("il a un demi-siècle");
        break;
    case '62':
        alert("il vient d'être à la retraite");
        break;
    case '100':
        alert("il vient d'être centenaire");
        break;
    default:
        alert("Je n'ai pas compris ton âge");
        break;
}
