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
    document.getElementById("saveButton").addEventListener("click", function() {
      download("index.html", values[0]);
    });
  });
  //   var compiledProject = trinity(data);
  // var newWindow = window.open();
  // newWindow.document.write(compiledProject);
}
var reader = new FileReader();

// read text input
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

// Download text as file
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
