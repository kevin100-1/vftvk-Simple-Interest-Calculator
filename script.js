function isPrincipalValid(amount) {
  var val = parseFloat(amount);
  if (val === undefined || val === NaN) {
      return false;
  }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute() {
    var p = document.getElementById("principal");
    var principal = p.value();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;

}
        