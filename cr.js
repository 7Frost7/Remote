javascript:(function(){setTimeout(function(){window.onkeydown=function(event){if(event.keyCode===192){(function(){var code=prompt("Enter JavaScript code to run:");if(code){var script=document.createElement('script');script.textContent=code;document.body.appendChild(script);}else{alert("No code provided!");}})();}else if(event.keyCode===17&&event.location===2){clock.style.display=clock.style.display==="none"?"block":"none";}};var clock=document.createElement("div");clock.style.position="fixed";clock.style.top="10px";clock.style.right="10px";clock.style.padding="10px";clock.style.backgroundColor="rgba(0,0,0,0.7)";clock.style.color="white";clock.style.fontSize="14px";clock.style.zIndex="9999";clock.style.borderRadius="5px";document.body.appendChild(clock);function timeSinceOct1(){var now=new Date();var oct1=new Date(now.getFullYear(),9,1);var timeSince=Math.floor((now-oct1)/1000);var days=Math.floor(timeSince/(60*60*24));var hours=Math.floor((timeSince%(60*60*24))/(60*60));var minutes=Math.floor((timeSince%(60*60))/60);var seconds=timeSince%60;return`Time since Oct 1: ${days}d ${hours}h ${minutes}m ${seconds}s<br>`}function fetchRepoData(){fetch("https://api.github.com/repos/BinBashBanana/olybmmer").then(response=>response.json()).then(data=>{var lastUpdated=new Date(data.pushed_at);var now=new Date();var timeSinceLastUpdate=Math.floor((now-lastUpdated)/1000);var daysSinceUpdate=Math.floor(timeSinceLastUpdate/(60*60*24));var hoursSinceUpdate=Math.floor((timeSinceLastUpdate%(60*60*24))/(60*60));var minutesSinceUpdate=Math.floor((timeSinceLastUpdate%(60*60))/60);var secondsSinceUpdate=timeSinceLastUpdate%60;clock.innerHTML=timeSinceOct1();clock.innerHTML+=`Last update: ${lastUpdated.toLocaleString()}<br>`;clock.innerHTML+=`Time since last update: ${daysSinceUpdate}d ${hoursSinceUpdate}h ${minutesSinceUpdate}m ${secondsSinceUpdate}s`}).catch(err=>{console.error("Error fetching GitHub data:",err);clock.innerHTML+="Error fetching last update"})}function updateDisplay(){fetchRepoData()}updateDisplay();setInterval(updateDisplay,1000);},1000);})();
