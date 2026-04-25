/* Mouse-tracking glow + 3D tilt for .signature-card.
   Sets --mx, --my (px from card top-left) and --tilt-x, --tilt-y
   (degrees, capped) on pointermove. Resets on pointerleave. */
(function () {
  var TILT_MAX = 6; // degrees

  function bind(card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");

      // Normalize to [-1, 1] then scale to TILT_MAX. Invert X to feel right.
      var nx = (x / r.width) * 2 - 1;
      var ny = (y / r.height) * 2 - 1;
      card.style.setProperty("--tilt-y", (nx * TILT_MAX).toFixed(2) + "deg");
      card.style.setProperty("--tilt-x", (-ny * TILT_MAX).toFixed(2) + "deg");
    });
    card.addEventListener("pointerleave", function () {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  }
  document.querySelectorAll(".signature-card").forEach(bind);
})();
