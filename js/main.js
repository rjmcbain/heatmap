// $("select")
//   .on("change", function() {
//     var val = $(this).val();
//     $("div").hide();
//     $("." + val).css("background-color", "red");
//   })
//   .change();

// $("#inventoryForm")
//   .change(function() {
//     $(".box.b").css("background-color", "red");
//   })
//   .change();

$(".box").each(function(i, v) {
  if (v === String) {
    console.log("true");
  }
});
