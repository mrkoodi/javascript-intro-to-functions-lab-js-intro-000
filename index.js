function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO').toUpperCase();
}
function logWhisper(string) {
  console.log("HELLO").toLowerCase();
}

function sayHiToGrandma(string) {
    if (string.toLowerCase()) {
        return "I can\'t hear you!";
    } else if (string.toUpperCase()) {
      return "YES INDEED!";
    } else if ("I love you grandma.") {
        return "I love you to.";
    }
}
