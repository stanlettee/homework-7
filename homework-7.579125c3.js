// const bookmarkInput = document.querySelector('#bookmarkInput')
// const addBookmarkBtn = document.querySelector('#addBookmarkBtn')
// const bookmarkList = document.querySelector('#bookmarkList')
const addBookmarkBtn = document.querySelector('#addBookmarkBtn').addEventListener('click', ()=>{
    const bookmarkInput = document.querySelector('#bookmarkInput');
    if (bookmarkInput.value === '') document.querySelector('#checkBookmark').innerHTML = "\u0412\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0432\u0432\u0435\u043B\u0438";
    else {
        document.querySelector('#checkBookmark').innerHTML = "";
        localStorage.setItem("bookmark", JSON.stringify(bookmarkInput.value));
        const bookmarkList = document.querySelector('#bookmarkList');
        let item = document.createElement("li");
        item.innerHTML = `
            <a target="_blank">${bookmarkInput.value}</a>
            <div class="actions">
                <button id="editBookmark">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438} \u{437}\u{430}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{443}</button>
                <button id="deleteBookmark">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{437}\u{430}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{443}</button>
            </div>
        `;
        bookmarkList.insertAdjacentElement("beforebegin", item);
    }
}) // let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
 // function saveBookmarks() {
 //   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
 // }
 // function renderBookmarks() {
 //   const list = document.getElementById("bookmarkList");
 //   list.innerHTML = "";
 //   bookmarks.forEach((bookmark, index) => {
 //     const li = document.createElement("li");
 //     li.innerHTML = `
 //       <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>
 //       <div class="actions">
 //         <button onclick="editBookmark(${index})">✏️</button>
 //         <button onclick="deleteBookmark(${index})">🗑️</button>
 //       </div>
 //     `;
 //     list.appendChild(li);
 //   });
 // }
 // function addBookmark() {
 //   const titleInput = document.getElementById("titleInput");
 //   const urlInput = document.getElementById("urlInput");
 //   const title = titleInput.value.trim();
 //   const url = urlInput.value.trim();
 //   if (title && url) {
 //     bookmarks.push({ title, url });
 //     saveBookmarks();
 //     renderBookmarks();
 //     titleInput.value = "";
 //     urlInput.value = "";
 //   } else {
 //     alert("Введіть і назву, і URL!");
 //   }
 // }
 // function deleteBookmark(index) {
 //   bookmarks.splice(index, 1);
 //   saveBookmarks();
 //   renderBookmarks();
 // }
 // function editBookmark(index) {
 //   const newTitle = prompt("Нова назва:", bookmarks[index].title);
 //   const newUrl = prompt("Новий URL:", bookmarks[index].url);
 //   if (newTitle && newUrl) {
 //     bookmarks[index] = { title: newTitle, url: newUrl };
 //     saveBookmarks();
 //     renderBookmarks();
 //   }
 // }
 // // Початковий рендер
 // renderBookmarks();
;

//# sourceMappingURL=homework-7.579125c3.js.map
