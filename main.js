var balance = 1000;
var input = query();
input = input.toLowerCase();

function query() {
  return prompt("Would you like to (d)eposit, (w)ithdraw  or (q)uit");
}

function dQuery(){
  return prompt("How much would you like to deposit") * 1;
}

function dBonus(deposit){
  if(deposit > 500){
    return deposit += 25;
  }
  return deposit;
}

function wQuery(){
  return prompt("How much would you like to withdraw") * 1;
}

function wFee(wd){
  if(balance - wd < 0){
    return wd += 50;
  }
  return wd;
}

function acctValid(){
  return balance >+ -750;
}

function quit(){
  return input === "q";
}
while(!quit()){
  if(input === "d"){
    var deposit = dQuery();
    deposit = dBonus(deposit);
    balance += deposit;
    alert("Thank you for your deposit! Your new balance is " + balance);
  } else if(input ==="w"){
    var wd = wQuery();
    wd = wFee(wd);
    balance -= wd;
    if(!acctValid()){
      alert("Due to excessive overage, your account has been closed!");
      break;
    }
    alert("Here is your money! Your new balance is " + balance);
  } else {
    alert("You entered an invalid command")
  }
  input = query();
}
