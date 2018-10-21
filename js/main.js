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

// $("#inventoryForm").on("click", function() {
//   $(".textvalue").show();
// });

$("#inventoryForm").on("change", function() {
  if ($("#inventoryForm").val() !== "None") {
    console.log("show");
    $(".textvalue").show();
  } else if ($("#inventoryForm").val() === "None") {
    console.log("hide");
    $(".textvalue").hide();
  }

  // if($("#inventoryForm").val() )
});

$("select")
  .on("change", function() {
    $(".textvalue div")
      .removeClass("highlight")
      .filter(":contains(" + this.value + ")")
      .addClass("highlight");
    console.log("This: ", this);
    if (
      this.value === "Inventory 9" &&
      $("#inventoryForm").val() === "Inventory 9"
    ) {
      $(".textvalue").hide();
      alert("Not In Inventory");
    }
  })
  .change();
