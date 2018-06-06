function categoryHead(categories, currentCategory){
	let header='';
	 if(currentCategory==='all'){
		header=`все размеры`;
	}
	else{
		let [size1,size2]=currentCategory.split('-');
		if(categories.indexOf(currentCategory)===0){
			header+=`до ${size2}см`;
		}
		else if(categories.indexOf(currentCategory)===categories.length-1){
			header+=`выше ${size1}см`;
		}
		else{
			header+=`от ${size1} до ${size2}см`;
		}
	}
	return header;
}

export default categoryHead;