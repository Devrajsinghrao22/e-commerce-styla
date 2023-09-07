let shop = document.getElementById("shop");

let shopData = [
  {
    id: "1",
    name: "Classic Utility gucci",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3326.jpg;w=640",
  },
  {
    id: "2",
    name: "classic utility puma",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3328.jpg;w=960",
  },
  {
    id: "3",
    name: "Classic Utility adidas",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3324.jpg;w=960",
  },
  {
    id: "4",
    name: "Classic Utility peter england",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3327.jpg;w=960",
  },
  {
    id: "5",
    name: "Classic Utility under armor",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3332.jpg;w=960",
  },
  {
    id: "6",
    name: "Classic Utility trends",
    price: "₹1100.00",
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/3329.jpg;w=960",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopData
    .map((x) => {
      return `<div class="flex font-sans w-150px border-2 border-black rounded-lg overflow-hidden hover:bg-gray-300 hover:text-white hover:scale-105">
        <div class="flex-none w-48 relative">
          <img src="${x.img}" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              ${x.name}
            </h1>
            <div class="text-lg font-semibold text-slate-500">
                ${x.price}
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
              </button>
              <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                Add to bag
              </button>
            </div>
            
          </div>
        </form>
      </div>`;
    })
    .join(""));
};

generateShop();

let shop2 = document.getElementById("shop2");

let shopDataItem = [
  {
    id: "1",
    name: "Casual Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 550",
    img: "images/img-1.jpg",
  },
  {
    id: "2",
    name: "T-Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 299",
    img: "images/img-3.jpg",
  },
  {
    id: "3",
    name: "Office Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 550",
    img: "images/img-2.jpg",
  },
  {
    id: "4",
    name: "Men's Suit Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 550",
    img: "images/shirt2.jpg",
  },
  {
    id: "5",
    name: "Sen's suit",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 1399",
    img: "images/img-4.jpg",
  },
  {
    id: "6",
    name: "T-Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 399",
    img: "images/t-shirt2.jpg",
  },
  {
    id: "7",
    name: "Casual Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 450",
    img: "images/designer.jpg",
  },
  {
    id: "8",
    name: "Shirt",
    description: "Men Regular Fit Solid Spread Collar Casual Shirt",
    price: "₹ 450",
    img: "images/shirt.jpg",
  },
];

let generateShop2 = () => {
  return (shop2.innerHTML = shopDataItem
    .map((x) => {
      return `<div class="border-2 border-black rounded-md overflow-hidden hover:bg-gray-600 hover:text-white hover:scale-105 md:w-52 w-52">
            <div class="w-52 h-52 bg-black overflow-hidden">
                <img width="220" src="${x.img}" alt=" ">
            </div>
            <div class="flex flex-col p-4 gap-3">
                <h3>${x.name}</h3>
                <p>${x.description}</p>
                <div class="flex flex-row justify-between items-center ">
                    <h2>${x.price}</h2>
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};

generateShop2();

console.log("check");

const search = () => {
  console.log("call funtionsss");
  const searchbar = document.getElementById("inp").value.toLowerCase();

  const place = document.getElementById("search");
  if (searchbar != "") {
    for (let i = 0; i < shopDataItem.length; i++) {
      if (i < shopData.length) {
        if (shopData[i].name.toLowerCase().includes(searchbar)) {
          place.innerHTML = `<!--<h4 class="text-gray-500">Your results:</h4>-->
      <div class="flex font-sans w-150px border-2 border-black rounded-lg overflow-hidden hover:bg-gray-300 hover:text-white hover:scale-105 m-5">
      <div class="flex-none w-48 relative">
        <img src="${shopData[i].img}" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-lg font-semibold text-slate-900">
            ${shopData[i].name}
          </h1>
          <div class="text-lg font-semibold text-slate-500">
              ${shopData[i].price}
          </div>
          <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            In stock
          </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div class="space-x-2 flex text-sm">
            <label>
              <input class="sr-only peer" name="size" type="radio" value="xs" checked />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="s" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="m" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="l" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
              </div>
            </label>
            <label>
              <input class="sr-only peer" name="size" type="radio" value="xl" />
              <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
        </div>
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              Buy now
            </button>
            <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
              Add to bag
            </button>
          </div>
          
        </div>
      </form>
    </div>`;
   
        }
      }
      if (shopDataItem[i].name.toLowerCase().includes(searchbar)) {
        place.innerHTML = `
      <div class="border-2 border-black rounded-md overflow-hidden hover:bg-gray-600 hover:text-white hover:scale-105 md:w-52 w-52 m-4">
      <div class="w-52 h-52 bg-black overflow-hidden">
          <img width="220" src="${shopDataItem[i].img}" alt=" ">
      </div>
      <div class="flex flex-col p-4 gap-3">
          <h3>${shopDataItem[i].name}</h3>
          <p>${shopDataItem[i].description}</p>
          <div class="flex flex-row justify-between items-center ">
              <h2>${shopDataItem[i].price}</h2>
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
          </div>
      </div>
  </div>`;
  
      }
    }
  } else {
    place.innerHTML = "";
  }
};
