let input=document.querySelector(".input-url");
let button=document.querySelector(".create-btn");
let bookmarkConatiner=document.querySelector(".bookmark-store");


button.addEventListener("click",function value(){
    let bookmarkDiv=document.createElement('div');
    bookmarkDiv.classList.add("bookmark");
    let img=document.createElement('img');
    img.classList.add("delete-btn");
    img["src"]="delete-icon.png";
    bookmarkDiv.append(img);
    let logo=document.createElement('img');
    logo.classList.add("logo");
    logo["src"]="https://www.google.com/s2/favicons?sz=24&domain_url="+getImage(input.value);
    bookmarkDiv.append(logo);
    let link=document.createElement('a');
    link.innerText=getDomain(input.value);
    link.setAttribute("href", input.value);
    link.setAttribute("target", "_blank");
    bookmarkDiv.appendChild(link);
    bookmarkConatiner.append(bookmarkDiv); 
    deletionFunction();

});



    function deletionFunction(){
        let deleteBtn=document.querySelectorAll(".delete-btn"); 

        deleteBtn.forEach(function (element){
            element.addEventListener("click",function value(){
                let del=element.parentElement; 
                del.remove();});
        });
       
    }

    function getImage(url){
        let start=url.indexOf("//")+2;
        return url.slice(start);
    }

    function getDomain(url){
        if(url.indexOf("www")==-1)
        {
            let start=url.indexOf("//")+2;
            let end=url.indexOf(".");
            return url.slice(start,end).toUpperCase();
        }
        else{
            let start=url.indexOf("www")+4;
            let end=url.lastIndexOf(".");
            return url.slice(start,end).toUpperCase();
        }
        
      
    }
    




