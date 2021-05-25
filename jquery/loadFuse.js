document.addEventListener("DOMContentLoaded", () => {
  const syncJSarr = ["/jquery/fuse-code.js", "/jquery/scroll-to-accordion.js"];
  const loadSync = arr => {
    for (const js of arr) {
      var script = document.createElement("script");
      script.src = js;
      script.async = false;
      document.body.appendChild(script);
    }
  };
  loadSync(syncJSarr);
});
