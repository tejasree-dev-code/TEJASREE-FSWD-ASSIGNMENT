let clipboard = null;
let isBusy = false;

function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

function handleCopy(fileName) {
  if (isBusy) {
    showMessage("System busy. Try again...");
    return;
  }

  isBusy = true;
  showMessage("Copying " + fileName + "...");

  setTimeout(() => {
    if (Math.random() < 0.5) {
      showMessage("Retrieving data. Wait a few seconds and try again.");
      isBusy = false;
    } else {
      clipboard = fileName;
      showMessage(fileName + " copied successfully!");
      isBusy = false;
    }
  }, 2000);
}

function handleCut(fileName) {
  if (isBusy) {
    showMessage("System busy. Try again...");
    return;
  }

  isBusy = true;
  showMessage("Cutting " + fileName + "...");

  setTimeout(() => {
    clipboard = fileName;
    showMessage(fileName + " cut successfully!");
    isBusy = false;
  }, 2000);
}

function handlePaste() {
  if (!clipboard) {
    showMessage("Nothing to paste!");
    return;
  }

  showMessage("Pasted: " + clipboard);
}