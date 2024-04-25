import "./assets/css/tailwind.css";

document.getElementById("submit").addEventListener("click", function() {
   // Get the textarea elements
   let followersTextarea = document.getElementById('followers-textbox');
   let followingsTextarea = document.getElementById('followings-textbox');

   if (followersTextarea.value === "" || followingsTextarea.value === "") {
    return;
   }
 
   // Parse the textarea contents as JSON
   let followersData = JSON.parse(followersTextarea.value);
   let followingsData = JSON.parse(followingsTextarea.value);

   // Extract the followers and followings
   let followers = followersData.map(follower => follower.string_list_data[0]);
   let followings = followingsData.relationships_following.map(following => following.string_list_data[0]);
 
   // Filter the followings to find the people who don't follow back
   let notFollowingBack = followings.filter(following => !followers.find(follower => follower.value === following.value));

   const ul = document.getElementById('not-following-back-list');


   if (notFollowingBack.length === 0) {
    return;
   }
   // Iterate over each item in the data
   notFollowingBack.forEach(item => {
     // Create a new li element
     const li = document.createElement('li');
     li.className = "flex items-center justify-between lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[6px] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] py-2 px-4";

     // Set the inner HTML of the li element
     li.innerHTML = `
       <span>
         @${item.value}
       </span>
       <a class="underline text-xs flex items-center gap-2" href="${item.href}">
         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
         View instagram
       </a>
     `;

     // Append the li element to the ul
     ul.appendChild(li);
     document.getElementById('accountsThatDontFollowBack').classList.remove('hidden');
   });
});

let textbox = document.getElementById('followers-textbox');

document.getElementById("followers-clear").addEventListener("click", function() {
    textbox.value = "";
    let title = document.getElementById("followers-count")
    title.textContent = "0";
});

textbox.addEventListener('input', function() {
    let lines = textbox.value.split('\n').length;
    if (textbox.value.length === 0) {
        lines = 0;
    }
    let title = document.getElementById("followers-count")
    title.textContent = `${lines}`;
});

let followingsTextbox = document.getElementById('followings-textbox');

document.getElementById("followings-clear").addEventListener("click", function() {
 followingsTextbox.value = "";
 let title = document.getElementById("followings-count")
 title.textContent = "0";
});

followingsTextbox.addEventListener('input', function() {
    let lines = followingsTextbox.value.split('\n').length;
    if (followingsTextbox.value.length === 0) {
        lines = 0;
    }
    let title = document.getElementById("followings-count")
    title.textContent = `${lines}`;
});

