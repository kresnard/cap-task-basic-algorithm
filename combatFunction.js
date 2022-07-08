function combat(health, damage) {
  // Write your code here
  result = health - damage;

  if (result >= 0){
    return result;
  } else {
    return 0;
  }
}