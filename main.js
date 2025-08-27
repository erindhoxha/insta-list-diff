
document.getElementById("submit").addEventListener("click", function() {
   let followersTextarea = document.getElementById('followers-textbox');
   let followingsTextarea = document.getElementById('followings-textbox');

   if (followersTextarea.value === "" || followingsTextarea.value === "") {
    return;
   }

   let followersData = JSON.parse(followersTextarea.value);
   let followingsData = JSON.parse(followingsTextarea.value);

   // Extract followers
   let followers = Array.isArray(followersData)
     ? followersData.map(f => f.string_list_data[0])
     : [];
   // Deduplicate followers by value
   followers = Object.values(followers.reduce((acc, curr) => {
     acc[curr.value] = curr;
     return acc;
   }, {}));

   // Extract followings
   let followings = [];
   if (Array.isArray(followingsData)) {
     followings = followingsData
       .flatMap(obj => Array.isArray(obj.relationships_following) ? obj.relationships_following : [])
       .map(f => f.string_list_data[0]);
   }
   // Deduplicate followings by value
   followings = Object.values(followings.reduce((acc, curr) => {
     acc[curr.value] = curr;
     return acc;
   }, {}));

   // Find not following back
   let notFollowingBack = followings.filter(following => !followers.find(follower => follower.value === following.value));

   const ul = document.getElementById('not-following-back-list');
   ul.innerHTML = "";

   if (notFollowingBack.length === 0) {
    return;
   }

   const count = document.getElementById('accountsCount');
   document.getElementById('accountsCount').classList.remove('hidden');
   count.innerHTML = notFollowingBack.length;

   notFollowingBack.forEach(item => {
     const li = document.createElement('li');
     li.className = "flex items-center justify-between lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[6px] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] py-2 px-4";
     li.innerHTML = `
       <span>
         @${item.value}
       </span>
       <a class="underline text-xs flex items-center gap-2" href="${item.href}">
         <!-- SVG omitted for brevity -->
         View instagram
       </a>
     `;
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

