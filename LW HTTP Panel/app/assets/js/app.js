const documentHtml=document.getElementsByTagName("html")[0],schemeInput=document.getElementsByClassName("scheme-name"),checkScheme=()=>{localStorage.getItem("scheme")?changeScheme(localStorage.getItem("scheme")):changeScheme("light")},changeScheme=e=>{localStorage.setItem("scheme",e),documentHtml.setAttribute("scheme",e);for(let t=0;t<schemeInput.length;t++)schemeInput[t].getAttribute("id")===e&&schemeInput[t].setAttribute("checked",!0)};for(let i=0;i<schemeInput.length;i++)schemeInput[i].addEventListener("click",function(e){switch(e.target.value){case"dark":changeScheme("dark");break;case"light":changeScheme("light");break;default:checkScheme("light")}});checkScheme();var inputs=document.querySelectorAll(".input-file");Array.prototype.forEach.call(inputs,function(e){var t=e.nextElementSibling,c=t.innerHTML;e.addEventListener("change",function(e){var n="";(n=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop())?t.querySelector("span").innerHTML=n:t.innerHTML=c})});