let currentPage = 1;

const paginationWrapper = document.querySelector(".pagination-wrapper");
paginationWrapper.innerHTML = "";

const form = document.querySelector("form");

const query = document.querySelector("#search");

let urlAll = `https://newsapi.org/v2/everything?q=all&apiKey=36f4981c90184f95b3be873d33b0bc93`;

const allPostsBlogs = document.querySelector(".all-posts-blogs");
const loader = document.querySelector(".loader");

async function allPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      loader.style.display = "none";
    } else {
      loader.style.display = "flex";
    }

    const sliceData = data.articles.slice(0, 4);
    sliceData.map((post) => {
      const { urlToImage, title, description } = post;
      const { name } = post.source;

      const postsBlog = document.createElement("div");
      postsBlog.classList.add("posts__blog");

      postsBlog.innerHTML = `
        <div class="posts__blog-img">
          <img src="${urlToImage}" alt="${title}" />
        </div>
        <div class="posts__blog-text">
          <span class="posts__blog-text-span">${name}</span>
          <h3 class="posts__blog-text-title">
            ${title}
          </h3>
          <p class="posts__blog-text-description">
            ${description}
          </p>
        </div>`;

      allPostsBlogs.appendChild(postsBlog);
    });
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("input", () => {
  allPostsBlogs.innerHTML = "";
  urlAll = `https://newsapi.org/v2/everything?q=${query.value}&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  allPosts(urlAll);
});

const buttonPrev = document.createElement("button");
buttonPrev.classList.add("btn-prev");
buttonPrev.textContent = "< Prev ";

buttonPrev.addEventListener("click", () => {
  allPostsBlogs.innerHTML = "";
  currentPage--;
  urlAll = `https://newsapi.org/v2/everything?q=all&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  allPosts(urlAll);
});

const buttonNext = document.createElement("button");
buttonNext.classList.add("btn-next");
buttonNext.textContent = " Next >";

buttonNext.addEventListener("click", () => {
  allPostsBlogs.innerHTML = "";
  currentPage++;
  urlAll = `https://newsapi.org/v2/everything?q=all&page=${currentPage}&apiKey=36f4981c90184f95b3be873d33b0bc93`;
  allPosts(urlAll);
});

paginationWrapper.appendChild(buttonPrev);
paginationWrapper.appendChild(buttonNext);

allPosts(urlAll);
