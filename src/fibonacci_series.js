'use strict';
//alert("before fun")
function fibonacci_series(n) 
{
	var list = [0, 1, 1];
	var i = 0;
	var fib = [];
	if(n == 0)
	{
		fib = [0];
		//alert("fib:" + fib);
		return fib;
	}

	else if(n == 1)
	{
		fib = [0 ,1];
		//alert("fib:" + fib);
		return fib;
	}

	else if(n == 2)
	{
		fib = [0, 1, 1];
		//alert("fib:" + fib);
		return fib;
	}

	else
	{
		for(i = 3; i < n + 1; ++i)
		{
			list.push(list[i - 1] + list[i - 2]);
		}

		//alert("list:" + list);
		return list;
	}
	
}
//alert("after func");
//var n = 1;
//fibonacci_series(n);

module.exports = fibonacci_series;