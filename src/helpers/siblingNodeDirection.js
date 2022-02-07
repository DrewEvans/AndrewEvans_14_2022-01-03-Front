//function that gathers all sibling nodes
export const siblingNodeDirection = (e) => {
  //empty array of sibling to be listed
  let siblings = [];

  //if no parent node return blank
  if (!e.target.parentNode) {
    return siblings;
  }

  // sibling is equal to the firstChild under the parent node
  let sibling = e.target.parentNode.firstChild;

  //loop over siblings after first child and push them into sibling array and stop if all logged
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e.target) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  //if the user click remove attribute is-selected
  if (e.isTrusted) {
    siblings.forEach((sibling) => {
      sibling.removeAttribute("is-selected");
    });
  }

  //if target has attr and it equals des remove asec and update state to aesc attr to aesc direction
  if (e.target.getAttribute("is-selected") === "descend") {
    e.target.removeAttribute("is-selected", "ascend");
    return "ascend";
  }

  //if target has attr remove aesc set to desc and update state to desc direction
  if (e.target.hasAttribute("is-selected")) {
    e.target.removeAttribute("is-selected", "ascend");
    e.target.setAttribute("is-selected", "descend");
    return "descend";
  }
  //if target has attr remove aesc set to aesc and update state to aesc direction
  if (!e.target.hasAttribute("is-selected")) {
    e.target.setAttribute("is-selected", "ascend");
    return "ascend";
  }
};
