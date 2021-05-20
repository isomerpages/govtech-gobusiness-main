$(document).ready(function () {
  const referrer = document.referrer;
  const currentPage = document.URL;
  let data = "";
  let kw = "";
  let normAccArr = [];
  let spAccArr = [];

  const fuseOptions = {
    keys: ["accordion"],
    threshold: 0.7,
    includeScore: true,
    minMatchCharLength: 2,
    isCaseSensitive: false,
    ignoreLocation: true,
  };

  const getCurrentPageContent = async (currentPage = "") => {
    const response = await fetch(currentPage);
    data = await response.text();
  };

  const bringToTarget = (bestMatch = "") => {
    const tgtAcc = document.querySelector(`#${bestMatch}`);
    const tgtAccLi = tgtAcc.parentNode;
    tgtAcc.click();
    tgtAccLi.scrollIntoView(true);
  };

  const searchParams = new URLSearchParams(referrer);
  const expandAccordion = async () => {
    for (const [k, v] of searchParams) {
      if (k.includes("query")) {
        await getCurrentPageContent(currentPage);
        kw = v;

        if (/id\=\"accordion[0-9]{1,2}/g.test(data)) {
          const accCount = document.querySelectorAll(
            ".jekyllcodex_accordion"
          )[0].childElementCount;
          for (let i = 1; i <= accCount; i++) {
            const li = document.querySelectorAll(`#accordion${i}`)[0].parentNode
              .outerHTML;
            normAccArr.push({ accordion: li });
          }
          const fuse = new Fuse(normAccArr, fuseOptions);
          const res = fuse.search(kw);
          const bestMatch = res[0].item.accordion
            .match(/[^id=]accordion[0-9]{1,2}/g)[0]
            .slice(1);
          bringToTarget(bestMatch);
        } else if (/id\=\"accordion-[a-z][0-9]{1,2}/g.test(data)) {
          const accSections = document.querySelectorAll(
            ".jekyllcodex_accordion"
          );
          accSections.forEach(ul => {
            const allUl = Array.from(ul.children);
            allUl.forEach(l => {
              const li = l.children[0].parentNode.outerHTML;
              spAccArr.push({ accordion: li });
            });
          });

          const fuse = new Fuse(spAccArr, fuseOptions);
          const res = fuse.search(kw);
          const bestMatch = res[0].item.accordion
            .match(/[^id=]accordion-[a-z][0-9]{1,2}/g)[0]
            .slice(1);

          bringToTarget(bestMatch);
        } else {
          console.error("Different accordion found");
        }
      }
    }
  };
  expandAccordion();
});
