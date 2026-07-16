export const webViewAdBlockScript = `
(function() {

  const blockedDomains = [
    "pyppo",
    "adsterra",
    "doubleclick",
    "popunder",
    "popup",
    "casino",
    "bet",
    "slot",
    "gambling"
  ];

  function isBlocked(url) {
    if (!url) return false;

    return blockedDomains.some(
      domain =>
        url.toLowerCase().includes(domain)
    );
  }


  // Block popup
  window.open = function() {
    return null;
  };


  // Block redirect
  const originalAssign =
    window.location.assign;

  window.location.assign = function(url) {
    if (isBlocked(url)) {
      return;
    }

    return originalAssign(url);
  };


  const originalReplace =
    window.location.replace;

  window.location.replace = function(url) {
    if (isBlocked(url)) {
      return;
    }

    return originalReplace(url);
  };


  // Block iframe creation only if suspicious
  const originalCreate =
    document.createElement;

  document.createElement =
    function(tagName) {

      const element =
        originalCreate.call(
          document,
          tagName
        );


      if (
        tagName.toLowerCase() === "iframe"
      ) {

        const descriptor =
          Object.getOwnPropertyDescriptor(
            HTMLIFrameElement.prototype,
            "src"
          );


        if (descriptor?.set) {

          Object.defineProperty(
            element,
            "src",
            {
              set(value) {

                if (!isBlocked(value)) {
                  descriptor.set.call(
                    this,
                    value
                  );
                }
              },

              get() {
                return descriptor.get.call(
                  this
                );
              }
            }
          );
        }
      }


      return element;
    };


  // Block click redirect
  document.addEventListener(
    "click",
    function(event) {

      let target =
        event.target;


      while (
        target &&
        target.tagName !== "A"
      ) {
        target =
          target.parentElement;
      }


      if (
        target &&
        isBlocked(target.href)
      ) {

        event.preventDefault();
        event.stopPropagation();

      }

    },
    true
  );


})();
true;
`;

export const fullscreenDetectScript = `
(function() {

  function sendFullscreen(active) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "fullscreen",
        active: active
      })
    );
  }


  document.addEventListener(
    "fullscreenchange",
    function() {
      sendFullscreen(
        !!document.fullscreenElement
      );
    }
  );


  document.addEventListener(
    "webkitfullscreenchange",
    function() {
      sendFullscreen(
        !!document.webkitFullscreenElement
      );
    }
  );


})();
true;
`;
