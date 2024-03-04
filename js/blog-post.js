const avatarInput = document.querySelector("#avatar");
const formPriview = document.getElementById("formPriview");

avatarInput.addEventListener("change", () => {
  uploadFile(avatarInput.files[0]);
});

function uploadFile(file) {
  if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
    alert("Only images");
    avatarInput.value = "";
    console.log("Error");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("2 MB");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const dateNow = new Date();
    const urlImg = {
      url: e.target.result,
    };

    formPriview.innerHTML = `<img src="${e.target.result}" alt="Avatar"></img>`;
    localStorage.setItem(dateNow, JSON.stringify(urlImg));
  };
  reader.onerror = function () {
    alert("Error");
  };
  reader.readAsDataURL(file);
}

const blogPostForm = document.querySelector(".blog-post-form");
const blogPostDiv = document.querySelector(".blog-post-div");
const blogPostInput = document.querySelectorAll(".blog-post-input");

blogPostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  blogPostDiv.innerHTML = "";

  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const imgObj = JSON.parse(localStorage.getItem(key));

      const blogPostBlog = document.createElement("div");
      blogPostBlog.classList.add("blog-post-blog");

      blogPostBlog.innerHTML = `
      <div class="blog-top">
          <div>
              <img src="${imgObj.url}" alt="Avatar">
          </div>
          <div>
              <h4>${blogPostInput[0].value}</h4>
          </div>
      </div>
      <h2 class="blog-post-title">${blogPostInput[1].value}</h2>
      <h3 class="blog-post-startup">Startup(${blogPostInput[2].value})</h3>
      <p class="blog-post-about">${blogPostInput[3].value}</p>`;

      blogPostDiv.appendChild(blogPostBlog);
    }
  }

  blogPostForm.reset();
});

localStorage.clear()

