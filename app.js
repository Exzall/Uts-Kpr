function hitung() {
  var hp = Number(document.getElementById("hp").value);
  var um = Number(document.getElementById("um").value);
  var bum = Number(document.getElementById("bum").value);
  var jwp = Number(document.getElementById("jwp").value);

  var cicilan = (hp - um) * bum/100 / 12 * jwp;

  document.getElementById("hasil").innerHTML = cicilan + " /bulan";
}