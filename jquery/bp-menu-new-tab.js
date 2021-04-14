$(".bp-menu-list>li>a").each((i, e) =>
  i >= 2 ? $(e).attr("target", "_blank") : null
);
