$(() => {
  $(".result-button").hide();
  $("#submit-button").on("click", (e) => {
    e.preventDefault();

    const inputText = $("#text-input").val();
    const minWordLen = $("#length-input").val();
    const result = inputText
      // Adding a placeholder with a space to split camel case words
      .replace(/[A-Z]/g, " a")
      // RegEx searches for any special characters or capital letters (for camel case)
      .split(/[A-Z&\/\\ #,+()$~%.'\= ":;*?<>{}\-\n\|]/g)
      // Then filtering array to remove empty strings and strings below min length
      // then taking the length of the return
      .filter((word) => word !== "" && minWordLen <= word.length).length;
    console.log(result);

    const resultStr =
      result === 1 ? `There is 1 word.` : `There are ${result} words.`;

    $(".result-button").hide(250).text(resultStr).show(250);
  });
});
