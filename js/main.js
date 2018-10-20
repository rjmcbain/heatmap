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

$("#inventoryForm").on("click", function() {
  $(".textvalue").show();
});

$("select")
  .on("change", function() {
    $(".textvalue div")
      .removeClass("highlight")
      .filter(":contains(" + this.value + ")")
      .addClass("highlight");
    if (this.value === "1") {
      console.log("Not Available");
    }
  })
  .change();
