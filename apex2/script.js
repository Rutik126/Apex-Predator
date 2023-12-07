var i = 0;
var txt = '👾 Calling all Hacktivists,<br /><br />Gear up for the grand showdown!<br /> The hacker TEST is here.<br />Showcase your digital dominance,<br />Seize your chance, <br />and become part of our APEX PREDATORS.<br />The spotlight awaits! 🛡💻';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    var char = txt.charAt(i);
    if (char === '<') {
      // If the current character is '<', find the closing '>' of the HTML tag
      var endIndex = txt.indexOf('>', i);
      if (endIndex !== -1) {
        // Extract the HTML tag and append it to the demo element
        var htmlTag = txt.substring(i, endIndex + 1);
        document.getElementById("demo").innerHTML += htmlTag;
        i = endIndex + 1;
      }
    } else {
      // If the current character is not '<', append it directly to the demo element
      document.getElementById("demo").innerHTML += char;
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}