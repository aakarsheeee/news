
const newsAccord=document.getElementById("newsAccord");
const api='2cda38f214a48f437458ed9b4d0dc8e0';
const country= 'in';
const xhr=new XMLHttpRequest();
const indiaBtn=document.getElementById('indiaBtn');
const germanyBtn=document.getElementById('germanyBtn');
const japanBtn=document.getElementById('japanBtn');
const countryName=document.getElementsByClassName('country');
getData('in');
function getData(country) {
xhr.open('GET',`https://gnews.io/api/v4/top-headlines?token=${api}&country=${country}`,true);
xhr.onprogress=function () {
    console.log("fetching....");
    newsAccord.innerHTML=`<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
}
xhr.onload=function(){
    if(this.status==200){
        let json =JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let newsHtml=" ";
        articles.forEach(function(element,index) {
            let news=
            `<div class="accordion-item" id="newsAccord">
                  <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                      aria-expanded="true" aria-controls="collapseOne">
                      ${element["title"]}<img src="${element["image"]}" class="img-thumbnail mx-2" style="height:100px;" alt="image">
                    </button>
                  </h2>
                  <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      ${element["description"]}
                      <a href="${element["url"]}" target="_blank" class="link-info">Read More</a>
                    </div>
                  </div>
                </div>`
                newsHtml+=news;
        });
        
        newsAccord.innerHTML=newsHtml;

    }
    
    else{
        console.log("some error occured");
    }
    
};
xhr.send(); 
}



indiaBtn.addEventListener('click',()=>{
  let countryVal='in';
  indiaBtn.classList.add("active");
  germanyBtn.classList.remove("active");
  japanBtn.classList.remove("active");
  getData(countryVal);
  
});
germanyBtn.addEventListener('click',()=>{
let countryVal='de';
germanyBtn.classList.add("active");
indiaBtn.classList.remove("active");
japanBtn.classList.remove("active");
getData(countryVal);
   
});
japanBtn.addEventListener('click',()=>{
let countryVal='jp';
japanBtn.classList.add("active");
germanyBtn.classList.remove("active");
indiaBtn.classList.remove("active");
getData(countryVal);
   
});






