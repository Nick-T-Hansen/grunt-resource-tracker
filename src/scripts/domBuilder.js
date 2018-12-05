const domBuilder = {
  // appendInputForm : function() {
  //   console.log("Hello");
  // }
  name: "Dom Builder Component",
  appendInputForm () {
    let formContainer = document.querySelector("#form-container");

    formContainer.innerHTML = `<section>
    <label for="resourcename">Resource Name</label>
    <input type="text" name="resourcename" id="resource-name">
    </section>

    <section>
    <label for="resourcelink">Resource Link</label>
    <input type="text" name="resourcelink" id="resource-link">
    </section>

    <section>
    <label for="resourcetype">Resource Type</label>
    <input type="radio" name="resourcetype" value="Video" checked> Video
    <input type="radio" name="resourcetype" value="Article"> Article<br>
    </section>

    <section>
      <button type="button" id="add-button">Add Resource</button>
    </section>`;
  },
  appendResourceContainers () {
    let divContainer = document.querySelector("#display-container");
    divContainer.appendChild(domComponents.createDomElement("h3", "Video Resources", null));
    const videosContainer = domComponents.createDomElement("article", null, "resource-container");
    videosContainer.setAttribute("id", "videos-container");
    divContainer.appendChild(videosContainer);
    divContainer.appendChild(domComponents.createDomElement("h3", "Article Resources", null));
    const articlesContainer = domComponents.createDomElement("article", null, "resource-container");
    articlesContainer.setAttribute("id", "articles-container");
    divContainer.appendChild(articlesContainer);
  }
};

domBuilder.appendInputForm();
domBuilder.appendResourceContainers();
