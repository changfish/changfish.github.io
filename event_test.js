function clubsavings() {
  var pv = parseInt(document.getElementById("amount").value);
  var i = parseInt(document.getElementById("rate").value) / 100;
  var n = parseInt(document.getElementById("period").value);
  var fvifa = ((1 + i / 12) * Math.pow(1 + i / 12, n) - 1) / (i / 12);
  var fv = fvifa * pv;
  document.getElementById("result").innerHTML = "本利和=$" + fv.toFixed(2);
}
