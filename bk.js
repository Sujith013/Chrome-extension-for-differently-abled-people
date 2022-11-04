import {colorPage,googleColor} from './colors.js';

chrome.action.onClicked.addListener((tab) => 
{
  if(tab.url.includes("google.co")) 
  {
    chrome.scripting.executeScript
    ({
      target: { tabId: tab.id },
      function: googleColor
    });
  }

  else if(!tab.url.includes("chrome://")) 
  {
      chrome.scripting.executeScript
    ({
      target: { tabId: tab.id },
      function: colorPage
    });
  }
});

  chrome.runtime.onInstalled.addListener(async () => {
    chrome.action.setPopup({popup: "main.html"});
});