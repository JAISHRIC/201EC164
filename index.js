const button=document.getElementById("btn");
const text=document.getElementById("text");
button.addEventListener('click',()=>{
    // console.log("clicked");

    const url=document.getElementById("text");
    const urlvalue=document.getElementById("content");
    // console.dir(url);
    // console.log(url.value);
   urlvalue.innerHTML+=`<a href=${url.value} target="_blank">Click here</a>`;
    // console.log(urlvalue);
    // fetch(url.value);
    
    setTimeout(() => { document.location.reload(); }, 8000);

});

