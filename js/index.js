function runTrinity() {
  console.log(document.getElementById("fileList").files);
  var files = document.getElementById("fileList").files;
  var texts = [];
  for (var i = 0; i < files.length; i++) {
    file = files[i];
    console.log("running on: ", i, file);
    texts.push(readText(file));
  }
  Promise.all(texts).then(function(values) {
    console.log(values);
  });
  //   var compiledProject = trinity(data);
  // var newWindow = window.open();
  // newWindow.document.write(compiledProject);
}
var reader = new FileReader();
/**
 * read text input
 */
function readText(file) {
  var text = new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.readAsText(file);
  });
  return text;
}
