// Saves options to chrome.storage
const saveOptions = () => {
  
    chrome.storage.sync.set({ 
         
    }, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
    });
};
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get({ 
        keywordsArray: []
    }, (items) => {
        buildOptDisplay(items.keywordsArray);
    });
};


// Listener to add keyword button
document.querySelector('.add-keyword').addEventListener('click', function() {
    var keywordRow = document.querySelector('.keyword-row').innerHTML;
    // document.querySelector('.keywords-holder').innerHTML += keywordRow;
    var newRow = document.createElement('div');
    newRow.className = 'keyword-row';
    newRow.innerHTML = keywordRow;
    document.querySelector('.keywords-holder').appendChild(newRow);
});

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);