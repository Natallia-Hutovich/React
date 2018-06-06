
const sendData=(path, data)=>{
	let str=path+'?'+data;
	let XHR = new XMLHttpRequest();
	XHR.open ('get', str, true);
  	XHR.send ();
}

export default sendData;

