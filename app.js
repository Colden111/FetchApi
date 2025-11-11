fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("postContainer");

    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Xəta:", error);
  });
