function showText ()
{
	document.write(myAdd());
}

function myAdd()
{
	var a = "Ala ma kota";
	var y = a.charAt(7);
 
	document.write(y);
	
}

function Swap (txt)
{
	for (i=0; i <= txt.length; i++)
	{
		if (txt[i] = ",")
		{
			var res = txt.replace(",",".");
			txt = res;

		}
		else
		{
		window.alert("you moron");
		}
		
	}
		//return(txt);
		document.write(res);
	
}