module.exports = {
    title: "nowgnuyheel",
    description: "nowgnuyheel 개발블로그 입니다.",
    locales: {
      '/': { lang: 'ko-KR' }
    },
    head: [
      //['meta', { name: 'google-site-verification', content: 'QGOhGD99HvCUXbDTSPep9FTwqTHWFfm8b86-gbvssJQ' }],
      ['script', { "data-ad-client": "ca-pub-5531898421123312", async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
      ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-JC3NHMQ4D9' }],
      [
        'script',
        {},
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JC3NHMQ4D9');
      `],
      ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
    ],
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-katex'))
    },
    plugins: [
      ["sitemap", 
        { 
          hostname: "https://hueleev.github.io",
          dateFormatter: val => {
            return new Date().toISOString()
          }
        }
      ],
      ["@vuepress/back-to-top"],
      ["@vuepress/last-updated"],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }]
    ],
    themeConfig: {
      nav: [{ text: "Github", link: "https://github.com/hueleev" }],
      sidebar: getSidebarArr(),
    },
    smoothScroll: true,
    //<username>.github.io 뒤에 주소가 붙으시면 아래와 같이 ..
    base: "/"
  };
  
  function getSidebarArr() {
    var fs = require("fs");
    var docsPath = __dirname + "/../";
    var sidebarArr = [];
    var HomeFilelist = [];
    var filelist = fs.readdirSync(docsPath);
    filelist.forEach(function(file) {
      if (file === ".vuepress") return;
      var stat = fs.lstatSync(docsPath + "/" + file);
      if (stat.isDirectory()) {
        // directory
        // title is file, children is readdirSync
        var docsFolderPath = docsPath + "/" + file;
        var list = fs.readdirSync(docsFolderPath);
        sidebarArr.push(makeSidebarObject(file, list));
      } else {
        // NOT directory
        // title is '/' children is file
        HomeFilelist.push(file);
      }
    });
    sidebarArr.unshift(makeSidebarObject("", HomeFilelist));
    return sidebarArr;
  }
  function makeSidebarObject(folder, mdfileList) {
    var path = folder ? "/" + folder + "/" : "/";
    mdfileList = aheadOfReadme(mdfileList);
    var tmpMdfileList = [];
    // remove .md, add Path
    mdfileList.forEach(function(mdfile) {
      if (mdfile.substr(-3) === ".md" && !mdfile.startsWith("index")) {
        mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);
        tmpMdfileList.push(path + mdfile);
      }
    });
    mdfileList = tmpMdfileList;
    // remove folder prefix number
    if (folder) {
      var dotIdx = folder.indexOf(".");
      var title = Number(folder.substr(0, dotIdx))
        ? folder.substr(dotIdx + 1)
        : folder;
    } else {
      title = "HOME";
    }
    return {
      title: title,
      children: mdfileList
    };
  }
  function aheadOfReadme(arr) {
    // ['1.test.md','README.md'] => ['README.md','1.test.md']
    var readmeIdx = arr.indexOf("README.md");
    if (readmeIdx > 0) {
      arr.unshift(arr.splice(readmeIdx, 1)[0]);
    }
    return arr;
  }