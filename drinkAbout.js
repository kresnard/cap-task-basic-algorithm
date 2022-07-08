function peopleWithAgeDrink(old) {

  let children = 'drink toddy';
  let teens = 'drink coke';
  let young = 'drink beer';
  let adults = 'drink whisky';
  
  if (old < 14){
    return children;
  } else if (old >=14 && old <18){
    return teens;
  } else if (old >=18 && old <21){
    return young;
  } else {
    return adults;
  }
  //   return '';
};