function isPrincipalValid(amount) {
  var val = parseFloat(amount);
  if (val === undefined || isNaN(val) === true) {
      return false;
  }
  if (val > 0) {
      return true;
  }
  return false;
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}

function compute() {
    var p = document.getElementById("principal");
    var principal = p.value;
    if (isPrincipalValid(principal) === false) {
        alert("Enter a positive number");
         p.focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;

    document.getElementById("result").innerHTML='If you deposit <span class="highlight">' + principal + '</span>,<br/>at an interest rate of  <span class="highlight">' + rate + '%</span><br/>You will receive an amount of  <span class="highlight">' + interest + '</span>,<br/>in the year  <span class="highlight">' + year + '</span><br/>';
    p.focus();
}
        