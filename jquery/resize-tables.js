const customTables = [
  {
    path: "/enterprisejobskills/resource-and-toolkits/skillfully",
    columns: ["250px", "auto"]
  },
  {
    path: "/start-a-business/open-a-corporate-bank-account/",
    columns: ["32%", "auto"]
  },
  {
    path: "/contact-us/",
    columns: ["32%", "auto"]
  }, 
  {
    path: "/timelimitedrrt/",
    columns: ["32%", "auto"]
  }, 
  {
    path: "/covid-19-faqs/workplace-safe-management-measures",
    columns: ["32%", "auto"]
  },
  {
    path: "/licensing-faqs/food-shop-licence/",
    columns: ["12%", "70%", "auto"]
  },
  {
    path: "/licensing-faqs/food-stall-licence/",
    columns: ["12%", "70%", "auto"]
  },
  {
    path: "/productivity-solutions-grant/",
    columns: ["20%", "auto"]
  },
  {
    path: "/browse-all-solutions*",
    columns: ["auto", "30%"]
  },
  {
    path: "/productivity-solutions-grant/solutionrepo/*",
    columns: ["10%", "auto", "20%", "10%", "10%"]
  },
  {
    path: "/energy-efficiency-grant/solutionrepo/*",
    columns: ["10%", "auto", "10%"]
  },
  {
    path: "/enterprisejobskills/programmes-and-initiatives/develop-human-capital/hr-tech-solutions-powered-by-skills-framework/",
    columns: ["auto", "10%", "10%", "10%", "10%","10%"]
  }
];

$(document).ready(function () {
  const path = $(location).attr("pathname");
  const { columns } = customTables.find(ct => ct.path === path);
  columns.forEach((c, i) => {
    $("table>thead>tr>th:nth-child(" + (i + 1)).css("width", c);
    $("table>tbody>tr>td:nth-child(" + (i + 1)).css("width", c);
  });
});
