let addBookmarkBtn=document.querySelector("#addBookmarkBtn").addEventListener("click",()=>{let e=document.querySelector("#bookmarkInput");if(""===e.value)document.querySelector("#checkBookmark").innerHTML="Ви нічого не ввели";else{document.querySelector("#checkBookmark").innerHTML="",localStorage.setItem("bookmark",JSON.stringify(e.value));let u=document.querySelector("#bookmarkList"),t=document.createElement("li");t.innerHTML=`
            <a target="_blank">${e.value}</a>
            <div class="actions">
                <button id="editBookmark">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438} \u{437}\u{430}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{443}</button>
                <button id="deleteBookmark">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{437}\u{430}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{443}</button>
            </div>
        `,u.insertAdjacentElement("beforebegin",t)}});
//# sourceMappingURL=homework-7.8cd4137a.js.map
