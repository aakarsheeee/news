
const newsAccord=document.getElementById("newsAccord");
const api='c45c20fe189e4b99805d1e05240cb6e2';
const country= 'in';
const xhr=new XMLHttpRequest();
const indiaBtn=document.getElementById('indiaBtn');
const germanyBtn=document.getElementById('germanyBtn');
const skBtn=document.getElementById('skBtn');
const countryName=document.getElementsByClassName('country');
getData('in');
function getData(country) {
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`,true);
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
                      <img src="${element["urlToImage"]}" class="img-thumbnail mx-4" style="height:100px;" alt="image">
                      ${element["title"]}
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
  skBtn.classList.remove("active");
  getData(countryVal);
  
});
germanyBtn.addEventListener('click',()=>{
let countryVal='de';
germanyBtn.classList.add("active");
indiaBtn.classList.remove("active");
skBtn.classList.remove("active");
getData(countryVal);
   
});
skBtn.addEventListener('click',()=>{
let countryVal='kr';
skBtn.classList.add("active");
germanyBtn.classList.remove("active");
indiaBtn.classList.remove("active");
getData(countryVal);
   
});






