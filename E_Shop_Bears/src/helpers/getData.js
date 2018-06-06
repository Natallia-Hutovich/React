const getData=(path)=>{
	return new Promise((resolve, reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open ('get', path, true);
  		xhr.onload=function(){
  			if(xhr.status===200){
  				resolve(xhr.responseText);
  			}
  			else{
  				reject();
  			}
		} 
		xhr.onerror=function(){
			reject();
		} ;
		xhr.send ();
   	});
}

export default getData;