function enviarSpam(scriptText, loop, interval){
    const lines = scriptText.split("\n"); 
    let i = 0;
	let loopCounter = 0;

        setInterval(() => { 
            if(i >= lines.length){
				loopCounter++;
				if (loop > 0 && loopCounter >= loop){
					return;
				} else {
					i = 0;
				}
            }

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
        }, interval);
}

