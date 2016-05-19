'use strict';



function fibonacci_series(n) 
{
	var fiblist = [];

	fiblist[0] = 0;
	fiblist[1] = 1;
	fiblist[2] = 1;
	if(n <= 2)
	{ 
		return;
    }

	 fibonacci_series(n-1);
	
	 fiblist.push((fiblist[n-2]+fiblist[n-3]));
	return fiblist;
}

module.exports = fibonacci_series;