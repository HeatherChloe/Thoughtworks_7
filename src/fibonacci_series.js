'use strict';

var fiblist = [];
//var fib_arr = [];
	fiblist[0] = 0;
	fiblist[1] = 1;

function fibonacci_series(n) 
{
	//alert("in function");
	//����n ���n��쳲������� fib_arr[0]...fib_arr[n]
	if(n <=2)
	{
		return;
    }

	fibonacci_series(n-1);
	
	fiblist.push((fiblist[n-2]+fiblist[n-3]));

}

//n = 5;
//fibonacci_series(n);
//alert(fiblist);
module.exports = fibonacci_series;