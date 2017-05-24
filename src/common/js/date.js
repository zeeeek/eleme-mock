export function formatDate(date,fmt) {
	if(/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4-RegExp.$1.length))
	}

	let o = {
		'M+': date.getMonth() + 1,    //getMonth是从零开始计算的
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds() 
	};

	for(let k in o){
		if(new RegExp(`(${k})`).test(fmt)){
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeft(str));
		}
	}
	return fmt;
};

function padLeft(str) {
	return ('00' + str).substr(str.length);
}


//RegExp.$1 就是4个yyyy
//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。