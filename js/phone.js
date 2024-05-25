const loadPhone = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayphone(phones);
   // console.log(phones);
  }
  
const displayphone = phoens =>{

    // 1 get the id 
    const phonecontainer = document.getElementById('phone-container');
    // remove old searach result 
    phonecontainer.textContent ='';
   // console.log(phoens)
   phoens.forEach(phone => {
        //console.log(phone)
         // 2 crreate a div
    const phonecard = document.createElement('div');
    phonecard.classList = ` card p-4 bg-base-100 shadow-xl `;
    // 2 set innner html 
    phonecard.innerHTML= ` 
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    `
    // 4 appent chile 
    phonecontainer.appendChild(phonecard);
    });

}
 
// handle search button ?
 
function handleSearch(){
    const search_field = document.getElementById('searchField');
    const search_text =search_field.value;
    console.log(search_text)
    loadPhone(search_text);
}



//   loadPhone();