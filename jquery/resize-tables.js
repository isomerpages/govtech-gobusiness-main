const customTables = [
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
    path: "/enterprisejobskills/programmes-and-initiatives/recruit-talent/sgunited-jobs-and-skills-placement-partners-initiative/",
    columns: ["30%", "auto"]
  },
  {
    path: "/enterprisejobskills/programmes-and-initiatives/upgrade-skills/skillsfuture-series/",
    columns: ["10%", "20%", "20%", "20%", "20%"]
  },
  {
    path: "/enterprisejobskills/programmes-and-initiatives/upgrade-skills/skillsfuture-enterprise-credit/",
    columns: ["20%", "30%", "30%"]
  },
  {
    path: "/enterprisejobskills/programmes-and-initiatives/redesign-jobs/skillsfuture-enterprise-credit/",
    columns: ["20%", "30%", "30%"]
  }
  {
    path: "/enterprisejobskills/programmes-and-initiatives/recruit-talent/hiring-incentive-enhanced-hiring-incentive/",
    columns: ["50%","50%"]
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
