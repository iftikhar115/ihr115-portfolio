document.addEventListener("DOMContentLoaded", () => {
    const searchbar = document.getElementById('search');
    const searchinput = document.querySelector('.search-input');
    const result = document.getElementById("result");
    const moreinfo = document.getElementById("learn-more");
    const moreinfo0 = document.getElementById("learn-more0")
    const moreinfo1 = document.getElementById('learn-more1');
    const moreinfo2 = document.getElementById('learn-more2');
    const moreinfo3 = document.getElementById('learn-more3');
    const moreinfo4 = document.getElementById('learn-more4');
    const moreinfo5 = document.getElementById('learn-more5');
    const moreinfo6 = document.getElementById('learn-more6');
    const moreinfo7 = document.getElementById('learn-more7');
    if (!searchinput || !searchbar || !result) return;
    searchinput.addEventListener('input', () => {
        const value = searchinput.value.trim();
        if (value === "") {
            result.textContent = "❌ Kuch likho";
            return;
        }
        if (value === "about") {
            window.location.href = "about.html";
        } else if (value === "services") {
            window.location.href = "services.html";
        } else if (value === "contact") {
            window.location.href = "contact.html";
        } else {
            result.innerText = "No results found";
            result.style.color = "red";
            result.style.backgroundColor = "lightyellow";
            result.style.height = "100px";
            result.style.width = "200px";
        }
    })
    if (moreinfo) {
        moreinfo.addEventListener('click', () => {
            window.location.href = "webdevelopment.html";
        });
    }
    if (moreinfo0) {
        moreinfo0.addEventListener('click', () => {
            window.location.href = "frontend.html"
        })
    }
    if (moreinfo1) {
        moreinfo1.addEventListener('click', () => {
            window.location.href = "chatbot.html";
        })

    };
    if (moreinfo2) {
        moreinfo2.addEventListener('click', () => {
            window.location.href = "rules.html";
        })

    }
    if (moreinfo3) {
        moreinfo3.addEventListener('click', () => {
            window.location.href = "aichatbot.html";
        })
    }
    if (moreinfo4) {
        moreinfo4.addEventListener('click', () => {
            window.location.href = "canvadesign.html";
        })
    }
    if (moreinfo5) {
        moreinfo5.addEventListener('click', () => {
            window.location.href = "skills.html";
        });
    };
    if (moreinfo6) {
        moreinfo6.addEventListener('click', () => {
            window.location.href = "myexperties.html";
        });
    };
    if (moreinfo7) {

        moreinfo7.addEventListener('click', () => {
            window.location.href = "other.html";
        });
    };

});
