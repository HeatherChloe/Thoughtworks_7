'use strict';

var fiblist = [];

	fiblist[0] = 0;
	fiblist[1] = 1;

function fibonacci_series(n) 
{
	//alert("in function");
	//输入n 输出n个斐波那契数 fib_arr[0]...fib_arr[n]
	if(n <=2)
	{
		return;
    }

	fibonacci_series(n-1);
	
	fiblist.push((fiblist[n-2]+fiblist[n-3]));
	return fiblist;
}

//n = 5;
//fibonacci_series(n);
//alert(fiblist);
module.exports = fibonacci_series;