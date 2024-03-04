const urlAll = `https://newsapi.org/v2/everything?q=all&apiKey=36f4981c90184f95b3be873d33b0bc93`;

const blogsDiv = document.querySelector(".blogs");

async function blogs() {
  try {
    const response = await fetch(urlAll);
    const data = await response.json();

    console.log(data);

    const threeData = data.articles.slice(0, 3);

    console.log(threeData);

    threeData.map((blog) => {
      console.log(blog);

      const { urlToImage, author, title, description, publishedAt } = blog;

      const blogDiv = document.createElement("div");
      blogDiv.classList.add("blog");

      blogDiv.innerHTML = `
        <img src="${urlToImage}" alt="Blog" class="blog__img" />
        <span class="blog__date">
          By <span class="text-primary">${author}</span> | ${publishedAt.slice(
        0,
        10
      )}
        </span>
        <h3 class="blog__title">
          ${title}
        </h3>
        <p class="blog__description">
          ${description}
        </p>`;

      blogsDiv.appendChild(blogDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

blogs()
