$(function() {
  // On ready to double check packages are loaded
  //Fonts
  var font_disruptheavy = new FontFaceObserver('disruptheavy');
  var font_karla = new FontFaceObserver('Karla');
  var font_saira = new FontFaceObserver('Saira Condensed');
  Promise.all([font_disruptheavy.load(), font_karla.load(), font_saira.load()]).then(function () {
    // Fonts loaded
    $("html").addClass("fonts-loaded");

    // Set up name background using fonts
    window.NAME_BG.init()
  });

  function imageLoadPromise(selector) {
    return new Promise((resolve, reject) => {
      $(selector).imagesLoaded(resolve)
    })
  }

  // Set some loaders in a Promise.all
  let loadConditions = [
    font_disruptheavy.load(),
    font_karla.load(),
    font_saira.load(),
    imageLoadPromise('#noise-overlay'),
    imageLoadPromise('#rgb-orb'),
    window.DISRUPT.addCachedDisruptions()
  ]

  // Timeout after 10 seconds
  let timeoutCondition = new Promise((resolve, reject) => {
    window.setTimeout(resolve, 10000)
  })

  // Loader FUNCTIONS

  function loader_hide() {
    $("html").addClass("loaded");
    $("#loader").fadeOut(500);
  }

  function loader_show() {
    $("html").removeClass("loaded");
    $("#loader").fadeIn(500);
  }

  // Promise race between load conditions and timeout
  Promise.race([
    Promise.all(loadConditions),
    timeoutCondition
  ]).then(() => {
    loader_hide()
  })
});
