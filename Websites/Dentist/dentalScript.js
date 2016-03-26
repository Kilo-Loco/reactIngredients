<!-- Hide script from older browsers
now = new Date();
localtime = now.toString();
utctime = now.toGMTString();
document.write("<p class='lastUpdated'><strong>Local Time:</strong> " + localtime + "</p>");
document.write("<p class='lastUpdated'><strong>UTC Time:</strong> " + utctime + "</p>");

hrs = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h3>");
document.write(hrs + ":" + mins + ":" + secs);
document.write("</h3>");
// end hiding script from older browsers -->
