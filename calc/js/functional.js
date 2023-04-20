var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOperator = "";

// 
function NumPressed(Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}
	
// арифметические операции
function Operation(sign) 
{
		var Readout = Fcalc.ReadOut.value;
		if (FlagNewNum && PendingOperator != "=")
		{
			Fcalc.ReadOut.value = Currents;
			Currents = 0;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOperator )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOperator )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOperator )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOperator )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			Fcalc.ReadOut.value = Currents;
			PendingOperator = sign;
		}
}
	
// добавление десятичной точки к числу
function Decimal() 
{
		var curReadOut = Fcalc.ReadOut.value;
		if (FlagNewNum) 
		{
			curReadOut = "0.";
			FlagNewNum = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1)
				curReadOut += ".";
		}
		Fcalc.ReadOut.value = curReadOut;
}
	
// Очистка текущего результата
function ClearEntry() 
{
		Fcalc.ReadOut.value = "0";
		FlagNewNum = true;
}
	
// Полная очистка всех результатов
function Clear() 
{
	if(Fcalc.ReadOut.value.length > 1) 
		{
			Fcalc.ReadOut.value = Fcalc.ReadOut.value.substring(0, Fcalc.ReadOut.value.length - 1)
		}
	else 
		{
			Fcalc.ReadOut.value = 0;
			FlagNewNum = false;
		}
}

// Смена знака
function Neg() 
{
		Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * -1;
}
	
// Проценты
function Percent() 
{	
		if (Fcalc.ReadOut.value != '0') 
		{
			Currents = Fcalc.ReadOut.value;
			Fcalc.ReadOut.value = (parseFloat(Fcalc.ReadOut.value) / 100) * parseFloat(Currents) + '%';
		}
}

 // кое-какая реализация нажатия клавиш
function keyboardNumbers(key) 
{
	return (key >= '0' && key <= '9') || key == '+' || key == '/' || key == '*' || key == '-' ||
	  key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
  }