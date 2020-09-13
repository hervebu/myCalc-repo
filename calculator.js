var firstInput, secondInput, answer,sign;
 		 
		function displayDigit(itsValue) {
			if (document.getElementById('calculator-display').value != '0') {
			document.getElementById('calculator-display').value += itsValue;
			}
		}

		function addPoint() {
			if (!document.getElementById('calculator-display').value.includes('.') 
				&& document.getElementById('calculator-display').value != '') {
				document.getElementById('calculator-display').value +='.';

			}
		}

		
		
