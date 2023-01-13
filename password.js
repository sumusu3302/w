
function doAuthentication(pass, theHTML, thePrompt) { //do authentication}
  
	if (pass != '8585KD') {
		alertf();
		
    thePrompt.close()
    
	} 
  else {
	
    thePrompt.close()
	$('.lock').toggleClass('unlocked');
	
	setTimeout(() => {
		var myWindow = window.open("", "_blank");
		myWindow.document.write('<title>Google</title><link rel=\"icon\" type=\"image/x-icon\" href=\"https://www.google.com/favicon.ico\">')
		myWindow.document.write("<iframe onload=\"\" id='iframe' width=\"100%\" height=\"100%\" style=\"border:none;\"></iframe>");
		myWindow.document.write(`<script>setTimeout(function() {document.getElementById('iframe').src = "https://makeawish-kid.github.io/good"}, 500)</script>`)
		myWindow.document.write('<style>body { margin:0;}</style>')
		myWindow.document.write("<script>function home(){document.getElementById('iframe').src = 'https://makeawish-kid.github.io/good'}</script>")
		myWindow.document.close();
		myWindow.stop();
		window.location.replace('https://google.com');
	}, 2000);
		
	}
  
}

$(function() {
 

	var theButton = $('#prompt')
  
	theButton.click(function() {
    
    
		var thePrompt = window.open("", "Password", "name=yes,top=500,left=500,width=400,height=400");
    
  var theHTML = "";   
		
		theHTML += "<style media='screen'>button.button3{display:inline-block;border:0;padding:0.3em 1.2em;margin:0 0.3em 0.3em 0;border-radius:2em;box-sizing: border-box;text-decoration:none;font-family:'Roboto',sans-serif;font-weight:300;color:#FFFFFF;background-color:#4eb5f1;text-align:center;transition: all 0.2s;}button.button3:hover{background-color:#4095c6;}@media all and (max-width:30em){button.button3{display:block;margin:0.2em auto;}}body { display: grid;    align-content: center;    justify-items: center; background: rgb(41, 140, 140);}* {  box-sizing: border-box;}.input__item {  background: #fff;  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.3);    padding: 1rem;  width: 320px;}.input__item label {  position: relative;}.input__item input {  width: 100%;  padding: 15px;  font-size:17px;  padding-right: 50px;  border: 1.4px solid #e6d9d9;}.input__item .showPass {  position: absolute;  top: 0;  bottom: 0;  right: 0;  font-size: 15px;  margin: 0;  background: transparent;  padding: 0;  border: 0;  line-height: 1;  margin-right: 10px;  cursor: pointer;  color: dodgerblue;}.input__item .showPass:focus {  outline: none;}</style>";
		theHTML += ' <div class="input__item">   <label for="">  		<input type="password" autocomplete="off" id="thePass">  		<button id="showPass" class="showPass">Show</button>  	</label>  </div>';
	
		theHTML += "<button class='button3' type='button'  id='authOK'>Submit</button>";
    theHTML += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
		$(thePrompt.document.body).html(theHTML);
		var showPass = thePrompt.document.getElementById('showPass');
			console.log(showPass)
			//The following calculation will be activated when you click on the button
			  showPass.addEventListener('click', () => {
				console.log('click')
				  var $this = $(showPass);
				  console.log($this)
			//If the contacts in the input box are in the form of a password(type="password"), it will be converted to text(type="text").
			
			//If it is in text, it will be converted to password
				  if ($this.text().toLowerCase() === "show") {
					  $this.text("Hide");
					  $this
						  .prev("input")
						  .prop("type", "text");
				  } else {
					  $this.text("Show");
					  $this
						  .prev("input")
						  .prop("type", "password");
				  }
			  });
		var button = thePrompt.document.getElementById('authOK');
		button.addEventListener('click', () => {
			
		var thePass2 = thePrompt.document.querySelector('input').value ;
		console.log('run')
		console.log(thePass2)
			doAuthentication(thePass2, theHTML, thePrompt)
			
		  }); 
		  
	});
  
})

function alertf() {
	$('#error-0').toggleClass('hidden');
	$('.lock').toggleClass('hidden');
	const system = new Windows95("body");
};

class Windows95 {
    cursorDragPos = null;
    errorDragging = null;
    errorLimit = 50;
    errors = [];
    sound = {
        chord: new Howl({
            src: ["chord.wav"],
            autoplay: false,
            loop: false,
            volume: 1.0
        })
    };

    constructor(el) {
        this.el = document.querySelector(el);
        this.el?.addEventListener("click", this.errorLoop.bind(this));
        this.el?.addEventListener("keyup", this.errorLoop.bind(this));
        // down
        this.el?.addEventListener("mousedown", this.dragErrorStart.bind(this));
        this.el?.addEventListener("touchstart", this.dragErrorStart.bind(this));
        // move
        this.el?.addEventListener("mousemove", this.dragError.bind(this));
        this.el?.addEventListener("touchmove", this.dragError.bind(this));
        // up
        this.el?.addEventListener("mouseup", this.dragErrorEnd.bind(this));
        this.el?.addEventListener("mouseleave", this.dragErrorEnd.bind(this));
        this.el?.addEventListener("contextmenu", this.dragErrorEnd.bind(this));
        this.el?.addEventListener("touchend", this.dragErrorEnd.bind(this));

        this.spawnError(0,0,true);
    }
    async errorLoop(e) {
        const { code, target } = e;

        if (code === "Enter" || code === "NumpadEnter" || (!code && target?.hasAttribute("data-ok"))) {
            const activeError = this.errors.find(error => error.id === target?.getAttribute("data-ok") || error.active);

            if (activeError) {
                // kill the error if active, filter out the active
                activeError.close();
                this.errors = this.errors.filter(error => !error.isClosing);
                // reactivate the last
                this.errors[this.errors.length - 1]?.activate();
                // spawn new errors by chance
                let spawns = Utils.randomInt(this.errors.length ? 0 : 1,5);
                let overLimit = (this.errors.length + spawns) - this.errorLimit;
                // adjust the spawns to not exceed the limit
                if (overLimit > 0) spawns = this.errorLimit - this.errors.length;

                for (let s = 0; s < spawns; ++s) {
                    await new Promise((res) => setTimeout(res, 100));
                    if (this.errors.length) this.spawnError();
                    else this.spawnError(0,0);
                }
            }
        } else if (!code) {
            this.switchError(e);
        }
    }
    dragError(e) {
        if (this.errorDragging) {
            let moveX = 0;
            let moveY = 0;

            if (e.touches?.length) {
                // touchscreen
                const [touch] = e.touches;

                moveX = touch.clientX - this.cursorDragPos.x;
                moveY = touch.clientY - this.cursorDragPos.y;
                
                this.errorDragging.moveBy(moveX,moveY);
                this.cursorDragPos.x = touch.clientX;
                this.cursorDragPos.y = touch.clientY;
 
            } else {
                // mouse
                moveX = e.clientX - this.cursorDragPos.x;
                moveY = e.clientY - this.cursorDragPos.y;
                
                this.errorDragging.moveBy(moveX,moveY);
                this.cursorDragPos.x = e.clientX;
                this.cursorDragPos.y = e.clientY;
            }
        }
    }
    dragErrorStart(e) {
        let { target } = e;

        if (target?.nodeName !== "BUTTON") {
            // ensure it’s the header or anything in it that’s not a button
            let headerFound = false;

            do {
                headerFound = target?.hasAttribute("data-header");
                target = target?.parentElement;
            } while (target && !headerFound)

            if (headerFound) {
                // make the error being dragged active
                this.errorDragging = this.errors.find(error => error.el.id === target.id);
                this.switchError(e);

                if (e.touches?.length) {
                    // touchscreen
                    const [touch] = e.touches;

                    this.cursorDragPos = { x: touch.clientX, y: touch.clientY };
                } else {
                    // mouse
                    this.cursorDragPos = { x: e.clientX, y: e.clientY };
                }
            }
        }
    }
    dragErrorEnd() {
        this.cursorDragPos = null;
        this.errorDragging = null;
    }
    spawnError(x,y,muted) {
        this.errors.forEach(error => {
            error.deactivate();
        });
        this.errors.push(new Windows95Error(this.el,x,y));
        // chord sound
        if (!muted) this.sound.chord.play();
    }
    switchError(e) {
        this.errors.find(error => error.active)?.deactivate();

        let { target } = e;

        do {
            target = target?.parentElement;
        } while (target && !target?.hasAttribute("data-window"))

        if (target) {
            // get the window by element ID and make active
            const errorFound = this.errors.find(error => error.el.id === target.id);

            if (errorFound) {
                this.errors.push(this.errors.splice(this.errors.indexOf(errorFound),1)[0]);
                this.errors[this.errors.length - 1]?.activate();
            }
        }
    }
}

class Windows95Error {
    activeClass = "window--active";
    active = false;
    el = null;
    id = Utils.randomInt().toString(16);
    isClosing = false;
    x = 0;
    y = 0;

    constructor(parentEl,x,y) {
        this.parent = parentEl;
        const windowEls = Array.from(this.parent.querySelectorAll("[data-window]"));
        const windowNew = windowEls[windowEls.length - 1]?.cloneNode(true);

        if (this.parent && windowNew) {
            this.el = windowNew;
            this.parent.appendChild(windowNew);
            windowNew.id = `error-${this.id}`;
            windowNew.hidden = false;
            windowNew.querySelector("[data-desc]").textContent = this.errorMessage;

            // configuration start
            const halfElWidth = Math.round(this.parent.offsetWidth / 2);
            const halfElHeight = Math.round(this.parent.offsetHeight / 2);
            const halfWinWidth = Math.round(windowNew.offsetWidth / 2);
            const halfWinHeight = Math.round(windowNew.offsetHeight / 2);
            // x-position
            if (x === undefined) this.x = Utils.randomInt(-halfElWidth + halfWinWidth,halfElWidth - halfWinWidth);
            else this.x = x;
            // y-position
            if (y === undefined) this.y = Utils.randomInt(-halfElHeight + halfWinHeight,halfElHeight - halfWinHeight);
            else this.y = y;
            // wire up all the parts
            const label = `error-label-${this.id}`;
            const desc = `error-desc-${this.id}`;

            windowNew.setAttribute("aria-labelledby", label);
            windowNew.setAttribute("aria-describedby", desc);
            windowNew.querySelector("[data-label]").id = label;
            windowNew.querySelector("[data-desc]").id = desc;
            windowNew.querySelector("[data-ok]").setAttribute("data-ok", this.id);
            windowNew.style.left = `calc(50% - ${halfWinWidth}px)`;
			windowNew.style.transform = `translate(${this.x}px,${this.y}px)`;

            this.activate();
        }
    }
    get errorMessage() {
        const errorList = [
            "A fatal error has occurred.",
            "Access is denied.",
            "An error occurred while displaying the previous error.",
            "Application performed an illegal action.",
            "Click OK to fix the error.",
            "Critical error",
            "Nope.",
            "Something terrible happened.",
            "Sorry. No can do.",
            "That action is out of order.",
            "The operation completed successfully.",
            "The operation failed badly.",
            "This is illegal you know.",
            "Unknown error",
            "You don’t have permission to do that. Contact an administrator if you want it."
        ];

        return errorList[Utils.randomInt(0, errorList.length - 1)];
    }
    activate() {
        this.el.classList.add(this.activeClass);
        this.el.setAttribute("aria-hidden", false);
        this.active = true;
        this.parent.appendChild(this.el);
    }
    deactivate() {
        this.el.classList.remove(this.activeClass);
        this.el.setAttribute("aria-hidden", true);
        this.active = false;
    }
    close() {
        this.deactivate();
        this.parent.removeChild(this.el);
        this.isClosing = true;
    }
    moveBy(x,y) {
        this.x += x;
        this.y += y;
        this.el.style.transform = `translate(${this.x}px,${this.y}px)`;
    }
}

class Utils {
	static randomInt(min = 0,max = 2**32) {
        const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
        const relativeValue = (max - min) * percent;

        return min + Math.round(relativeValue);
    }
}