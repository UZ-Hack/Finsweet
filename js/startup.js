let currentPage = 1;

const paginationWrapper = document.querySelector(".pagination-wrapper");
paginationWrapper.innerHTML = "";

const form = document.querySelector("form");

const query = document.querySelector("#search");

let urlBusiness = `https://newsapi.org/v2/everything?q=business&page=1&apiKey=36f4981c90184f95b3be873d33b0bc93`;

const startupBlogs = document.querySelector(".startup-blogs");
const loader = document.querySelector(".loader");

async function startup(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      loader.style.display = "none";
    } else {
      loader.style.display = "flex";
    }

    startupBlogs.innerHTML = "";

    const sliceData = data.articles.slice(0, 4);
    sliceData.map((post) => {
      const { urlToImage, title, description } = post;

      const postsBlog = document.createElement("div");
      postsBlog.classList.add("posts__blog");

      postsBlog.innerHTML = `
        <div class="posts__blog-img">
          <img src="${urlToImage}" alt="${title}" />
        </div>
        <div class="posts__blog-text">
          <span class="posts__blog-text-span">Business</span>
          <h3 class="posts__blog-text-title">
            ${title}
          </h3>
          <p class="posts__blog-text-description">
            ${description}
          </p>
        </div>`;

      startupBlogs.appendChild(postsBlog);
    });
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("input", () => {
  startupBlogs.innerHTML = "";
  urlBusiness = `https://newsapi.org/v2/everything?q=business${query.value}&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  startup(urlBusiness);
});

const buttonPrev = document.createElement("button");
buttonPrev.classList.add("btn-prev");
buttonPrev.textContent = "< Prev ";

buttonPrev.addEventListener("click", () => {
  startupBlogs.innerHTML = "";
  currentPage--;
  urlBusiness = `https://newsapi.org/v2/everything?q=business&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  startup(urlBusiness);
});

const buttonNext = document.createElement("button");
buttonNext.classList.add("btn-next");
buttonNext.textContent = " Next >";

buttonNext.addEventListener("click", () => {
  startupBlogs.innerHTML = "";
  currentPage++;
  urlBusiness = `https://newsapi.org/v2/everything?q=business&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  startup(urlBusiness);
});

paginationWrapper.appendChild(buttonPrev);
paginationWrapper.appendChild(buttonNext);

startup(urlBusiness);
