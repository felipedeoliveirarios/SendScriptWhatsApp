function enviarScriptDaURL(url, loop){
    let text;
    fetch(url)
    .then(response => response.text())
    .then(response_text => {
        enviarScript(response_text, loop);
    });
}

function enviarScript(scriptText, loop){
    const lines = scriptText.split("\n"); 
    
    let loopCounter = loop;
    
    do{
        let i = 0;       

        setInterval(() => { 
            if(i >= lines.length) return

            if(lines[i].trim() != ''){ 
                console.log(lines[i]); 

                window.InputEvent = window.Event || window.InputEvent;

                const event = new InputEvent('input', { bubbles: true });

                const textbox = document.querySelector('div._2_1wd[data-tab="6"]');

                textbox.textContent = lines[i];

                textbox.dispatchEvent(event);

                document.querySelector("button._1E0Oz").click();                   

            }
            i++;
        }, 250);
        loopCounter--;
    } while (loop < 0 || loopCounter > 0 );
}

enviarScriptDaURL('https://raw.githubusercontent.com/felipedeoliveirarios/SendScriptWhatsApp/5cc76f9a98b7a8bcac51783ef8d3f1da1cd76073/cachorro-salsicha.txt', 15);
