const wordCount = (inputText, minWordLen) => {
  // RegEx searches for any special characters or capital letters (for camel case)
  const wordArr = inputText.split(/[A-Z&\/\\ #,+()$~%.'\= ":;*?<>{}\-\n\|]/g);
  const formattedArr = wordArr.filter(
    (word) => word !== "" && word.length - 1 >= minWordLen
  );
  return formattedArr.length;
};

$(() => {
  $(".result-button").hide();
  $("#submit-button").on("click", (e) => {
    e.preventDefault();

    const inputText = $("#text-input").val();
    const minLen = $("#length-input").val();
    const result = wordCount(inputText, minLen);
    const resultStr =
      result === 1 ? `There is 1 word.` : `There are ${result} words.`;

    $(".result-button").hide(250).text(resultStr).show(250);
  });
});
