function runTrinity() {
  //   console.log(document.getElementById("rootFile").files[0]);
  readText(document.getElementById("rootFile")).then(function(data) {
    console.log(data);
    var compiledProject = trinity(data);
    // var newWindow = window.open();
    // newWindow.document.write(compiledProject);
  });
}
var reader = new FileReader();
/**
 * read text input
 */
function readText(filePath) {
  var text = new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      return resolve(e.target.result);
    }; //end onload()
    reader.readAsText(filePath.files[0]);
  });
  return text;
}
