function totalprice(){
	
	var unitprice,qty,total,
	
	documents=this.parentNode.parentNode,
	unit=documents.getElementsByClassName("unitprice")[0],
	quantity=documents.getElementsByClassName("qty")[0],
	overallprice=documents.getElementsByClassName("total")[0];
	
	
	unitprice=unit.innerText;
	qty=quantity.value;
	total=unitprice*qty;
	overallprice.innerText=total;
	
	}
	
	let btns=document.getElementsByClassName("btn")
	
	for(i=0; i<btns.length; i++){
		btns[i].addEventListener("click",totalprice);
	}