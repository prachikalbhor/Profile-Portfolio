

window.onscroll=function(){
	const docScrollTop=document.documentElement.scrollTop;

	if(window.innerWidth>991){
		if(docScrollTop>100){
			document.querySelector("header").classlist.add("fixed")

		}
		else{
			document.querySelector("header").classlist.remove("fixed")

		}
	}
}

//navbar link
const navbar=document.querySelector(".navbar");
	a=navbar.querySelectorAll("a");

	a.forEach(function(element){
		element.addEventListener("click",function(){
			for(let i=0; i<a.length; i++){
				a[i].classlist.remove("active");
			}
			this.classlist.add("active")
		})

			})
