let listElm = document.querySelector(".infinity_list");
function loadMore() {
  quotes.forEach((elem) => {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("parentDiv");
    let quote = document.createElement("h2");
    quote.innerHTML = `💦  ${elem.quoteText}  💦`;

    let author = document.createElement("span");
    author.innerHTML = `- ${elem.quoteAuthor} -`;

    parentDiv.append(quote, author);
    listElm.append(parentDiv);
  });
}

listElm.addEventListener("scroll", () => {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

loadMore();
