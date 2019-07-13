var a = prompt("Что вы предпочитаете пить?")

switch(a) {
    
    case 'beer': console.log('Чрезмерное употребление алкоголя вредит вашему здоровью')
    break;
    case 'cola': console.log('Большое количество сахара в крови опасно для жизни')
    break;
    case 'coffe': console.log('Кофеин вредит вашему здоровью')
    break;
    case 'milk': console.log('У вас хороший выбор!')
    break;
    default: console.log('Очень интересный напиток, но я его не знаю')
}
