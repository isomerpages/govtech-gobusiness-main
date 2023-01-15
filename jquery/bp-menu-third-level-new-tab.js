// This would be the list of links that should open in a new tab
// Note: Add the second <script> file into the respective .md file. If it doesn't work, add the first one too in this order.

const listOfLinks = [
  "SFEC Microsite"
];

const main = ".bp-menu-list>third-level-nav-div>li>a";
const sub = ".third-level-nav-item";

const makeNewTab = sel =>
  $(sel).each((i, e) =>
    listOfLinks.some(link => link === $(e).text())
      ? $(e).attr("target", "_blank")
      : null
  );

$(document).ready(function () {
  makeNewTab(main);
  makeNewTab(sub);
});
