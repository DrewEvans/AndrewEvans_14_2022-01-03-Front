export const siblingNodeDirection = (e) => {
  let siblings = [];

  if (!e.target.parentNode) {
    return siblings;
  }

  let sibling = e.target.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e.target) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  if (e.isTrusted) {
    siblings.forEach((sibling) => {
      sibling.removeAttribute("is-selected");
    });
  }

  if (e.target.getAttribute("is-selected") === "descend") {
    e.target.removeAttribute("is-selected", "ascend");
    return "ascend";
  }

  if (e.target.hasAttribute("is-selected")) {
    e.target.removeAttribute("is-selected", "ascend");
    e.target.setAttribute("is-selected", "descend");
    return "descend";
  }

  if (!e.target.hasAttribute("is-selected")) {
    e.target.setAttribute("is-selected", "ascend");
    return "ascend";
  }
};
