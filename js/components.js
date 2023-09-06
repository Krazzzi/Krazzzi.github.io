"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"
  }, React.createElement(Project, {
    img: "images/Aplus Logo Certified CE.png",
    caption: "CompTIA A +",
    url: "https://www.credly.com/earner/earned/badge/c1e2034a-c4be-416b-a845-b51e2e2be45d"
  }), React.createElement(Project, {
    img: "images/NetworkPlus Logo Certified CE.png",
    caption: "CompTIA Network +",
    url: "https://www.credly.com/earner/earned/badge/de9038c6-3a7d-4822-883f-34178f606bd3"
  }), React.createElement(Project, {
    img: "images/SecurityPlus Logo Certified CE.png",
    caption: "CompTIA Security +",
    url: "https://www.credly.com/earner/earned/badge/9a2cb4c3-e521-442f-9a63-c39f1bea8a9b"
  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));
