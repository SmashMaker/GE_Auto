chrome.action.onClicked.addListener((tab) => {
    // Injecte le script `content.js` dans l'onglet actif
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
    }, () => {
        console.log("Script injecté.");
        // Optionnel : désactiver l'extension après l'exécution
        //chrome.action.disable(tab.id);
    });
});