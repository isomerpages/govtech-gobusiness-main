// This would be the list of links that should open in a new tab
// Note: Add the second <script> file into the respective .md file. If it doesn't work, add the first one too in this order.

const listOfLinks = [
  "Start Business",
  "Business Grants Portal",
  "Covid-19",
  "Licences and Permits",
  "For event organisers",
  "For new food service business owners",
  "Dashboard",
  "SkillsFuture for Enterprise",
  "SFEC Microsite"
];

const main = ".bp-menu-list>li>a";
const sub = ".third-level-nav-div";

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
