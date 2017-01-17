			var numberOfSquares = 6;
			var colors = [];
			var pickedColor;

			var squares = document.querySelectorAll(".square");
			var colorDisplay = document.getElementById("colorDisplay");
			var messageDisplay = document.querySelector("#message");
			var h1 = document.querySelector("h1");
			var resetButton = document.querySelector("#reset");
			var modeButtons = document.querySelectorAll(".mode");

			init();

			function init(){
				setupModeButtons();
				setupSquares();
				reset();
			}

			function reset(){
				colors = generateRandomColors(numberOfSquares);
				// pick a new random color ffrom array
				pickedColor = pickColor();
				//change colorDisplay to match picked COlor
				colorDisplay.textContent = pickedColor;
				//change color of square
				for(var i = 0; i < squares.length; i++){
					squares[i].style.background = colors[i];
				}
				resetButton.textContent = "New Colors";
				messageDisplay.textContent = "";
				h1.style.background = "steelblue";
					for(var i = 0; i < squares.length; i++){
					if(colors[i]){
						squares[i].style.background = "block";
						squares[i].style.background = colors[i];
					}
					else{
						squares[i].style.background = "none";
					}
				}
			}



			resetButton.addEventListener("click", function(){
				reset();
			});

			function setupModeButtons(){
				for(var i = 0; i < modeButtons.length; i++){
					modeButtons[i].addEventListener("click" ,function(){
					modeButtons[0].classList.remove("selected");
					modeButtons[1].classList.remove("selected");
					this.classList.add("selected");
					this.textContent === "Easy"?numberOfSquares = 3: numberOfSquares = 6;
					reset();

					});
				}
			}

			function setupSquares(){
				for(var i = 0; i < squares.length; i++){

				// add click listeners to squares
				squares[i].addEventListener("click", function(){
					//grab color of clicked square
					var selectedColor = this.style.background;

					//compare color to picked color
					if(pickedColor === selectedColor){
						messageDisplay.textContent = "Correctos!";
						changeColors(pickedColor);
						h1.style.background = pickedColor;
						resetButton.textContent = "Play Again ??";
					}
					else{
						this.style.background = "#232323";
						messageDisplay.textContent = "Try Again!";

					}
				});
			}
			}

			function changeColors(color){
			//loop through all squares
			for(var i = 0; i < squares.length; i++){
				//change color to match picked color
				if(colors[i]){
					squares[i].style.background = color;
				}
			}
			}

			function pickColor(){
				var randomNum = Math.floor(Math.random() * colors.length) ;
				return colors[randomNum];
			}

			function generateRandomColors(num){
				//make an array
				var arr = [];
				//repeat num times
				for(var i = 0 ; i < num; i++){
					//get random colors and push to array
					
					arr.push(randomColor());
				}
				//return that array
				return arr;
			}

			function randomColor(){
				//pick a "red" from 0 - 255
				var r = Math.floor(Math.random() * 256);
				//pick a "green" from 0 - 255
				var g = Math.floor(Math.random() * 256);
				//pick a "blue" from 0 - 255
				var b = Math.floor(Math.random() * 256);
				return "rgb(" + r + ", " + g + ", " + b + ")";
			}