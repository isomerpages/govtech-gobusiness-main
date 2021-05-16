const customTables = [
  {
    path: "/start-a-business/open-a-corporate-bank-account/",
    columns: ["32%", "auto"],
  },
  {
    path: "/covid-faqs/workplace-safe-management-measures",
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
];

$(document).ready(function () {
  const path = $(location).attr("pathname");
  const { columns } = customTables.find(ct => ct.path === path);
  columns.forEach((c, i) => {
    $("table>thead>tr>th:nth-child(" + (i + 1)).css("width", c);
    $("table>tbody>tr>td:nth-child(" + (i + 1)).css("width", c);
  });
});
