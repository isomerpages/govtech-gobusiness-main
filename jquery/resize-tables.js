const customTables = [
  {
    path: "/start-a-business/open-a-corporate-bank-account/",
    columns: ["32%", "auto"],
  },
  {
    path: "/contact-us/",
    columns: ["32%", "auto"],
  }, 
  {
    path: "/timelimitedrrt/",
    columns: ["32%", "auto"],
  }, 
  {
    path: "/covid-19-faqs/time-limited-rrt-for-workplaces",
    columns: ["32%", "auto"],
  },
  {
    path: "/covid-19-faqs/workplace-safe-management-measures",
    columns: ["32%", "auto"],
  },
  {
    path: "/licences/find-licence-by-agency/",
    columns: ["auto", "200px"],
  },
  {
    path: "/licensing-faqs/food-shop-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/licensing-faqs/food-stall-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/covid-19-faqs/for-sector-specific-queries/marriage-solemnizations-and-receptions",
    columns: ["50%", "50%"],
  },
];

$(document).ready(function () {
  const path = $(location).attr("pathname");
  const { columns } = customTables.find(ct => ct.path === path);
  columns.forEach((c, i) => {
    $("table>thead>tr>th:nth-child(" + (i + 1)).css("width", c);
    $("table>tbody>tr>td:nth-child(" + (i + 1)).css("width", c);
  });
});
