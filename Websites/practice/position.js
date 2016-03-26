var x=0, y=0;
function pos(dx,dy) {
  if (!document.getElementById) return;
  x += 30*dx;
  y += 30*dy;
  myCircle = document.getElementById("circle");
  myCircle.style.bottom = y + "px";
  myCircle.style.left = x + "px";
}

function hideCircle() {
  myCircle = document.getElementById("circle");
  myCircle.style.display = "none";
}

function showCircle() {
  myCircle = document.getElementById("circle");
  myCircle.style.display = "block";
}

function showHide () {
  if (!document.getElementById) return;
  var head1 = document.getElementById("head1");
  var head2 = document.getElementById("head2");
  var showHead1 = document.checkBoxForm.checkbox1.checked;
  var showHead2 = document.checkBoxForm.checkbox2.checked;
  head1.style.visibility=(showHead1) ? "visible" : "hidden";
  head2.style.visibility=(showHead2) ? "visible" : "hidden";
}

function changeHeading1 () {
  if (!document.getElementById) return;
  var head1 = document.getElementById("head1");
  var newHeading1 = document.changeForm.inputBox1.value;
  head1.firstChild.nodeValue = newHeading1;
  }

function changeHeading2 () {
  if (!document.getElementById) return;
  var head2 = document.getElementById("head2");
  var newHeading2 = document.changeForm.inputBox2.value;
  head2.firstChild.nodeValue = newHeading2;
  }

function addText () {
  if (!document.getElementById) return;
  var sentence = document.changeContent.sentence.value;
  var node = document.createTextNode(" " + sentence);
  document.getElementById("paragraph1").appendChild(node);
  document.changeContent.sentence.value = " ";
}
