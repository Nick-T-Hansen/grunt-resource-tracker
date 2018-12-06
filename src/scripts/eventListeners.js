const eventListeners = {
  handleSearchButton() {
    let searchInput = document.querySelector("input[name='searchinput']");
    let searchQuery = searchInput.value;

    data.queryResources(searchQuery)
    .then(searchResultsArray => {
      console.log(searchResultsArray);
    })

  }
};
