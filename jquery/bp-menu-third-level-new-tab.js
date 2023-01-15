// This would be the list of links that should open in a new tab
// Note: Add the second <script> file into the respective .md file. If it doesn't work, add the first one too in this order.

const listOfThirdLevelLinks = [
  "SFEC Microsite"
];

const mainTag = ".third-level-nav-div>li>a";
const subTag = ".third-level-nav-item";

const makeThirdLevelNewTab = sel =>
  $(sel).each((i, e) =>
  listOfThirdLevelLinks.some(link => link === $(e).text())
      ? $(e).attr("target", "_blank")
      : null
  );

$(document).ready(function () {
  makeThirdLevelNewTab(mainTag);
  makeThirdLevelNewTab(subTag);
});
