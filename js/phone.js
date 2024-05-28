const loadPhone = async (searchText='13') => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayphone(phones);
   // console.log(phones);
  }
  
const displayphone = phones =>{

    // 1 get the id 
    const phonecontainer = document.getElementById('phone-container');
    // remove old searach result 
    phonecontainer.textContent ='';

    // display show all button if there are more than 10 phone; 

    const showallcontainer = document.getElementById('show_all_container');
    if(phones.length > 10){
        showallcontainer.classList.remove('hidden');
    }
    else{
        showallcontainer.classList.add('hidden');
    }

    // display only frist ten phone 
    phones = phones.slice(0,10);

    //console.log(phones.length)
   // console.log(phones)
   phones.forEach(phone => {
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
        <button onclick="handleShowdetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
    </div>
    `
    // 4 appent chile 
    phonecontainer.appendChild(phonecard);
    });

    // hide loading spnneer 
    toggleloadingSpineer(false);

}
 

const handleShowdetails = async (id) => {
    console.log('click shoe details', id);
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    showPhoneModal(phone);
}
const showPhoneModal = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show_details_Phone_name');
    phoneName.innerHTML = phone.name;

    const showdetailscontainer = document.getElementById('show_details_container');
    showdetailscontainer.innerHTML=`
    <img src="${phone.image}" alt="">
    <p><span>storage:</span> ${phone?.mainFeatures?.storage}</p>
    <p><span>GPS:</span> ${phone?.others?.GPS}</p>
    `
    
    // show the modal 
    showDetails_modal.showModal();
}



// handle search button ?
 
function handleSearch(){
    toggleloadingSpineer(true);
    const search_field = document.getElementById('searchField');
    const search_text =search_field.value;
    //console.log(search_text)
    loadPhone(search_text);
}


const toggleloadingSpineer = (isLoading)  => {
    const loading_spineer = document.getElementById('loadingSpinerr');
   
    if(isLoading){
        loading_spineer.classList.remove('hidden');
    } 
    else{
        loading_spineer.classList.add('hidden')
    }

}



loadPhone();