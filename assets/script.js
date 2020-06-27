const wordCount = (inputText, wordLen) => {
  // RegEx searches for any special characters or capital letters (for camel case)
  const wordArr = inputText.split(/[A-Z&\/\\ #,+()$~%.' ":;*?<>{}]/g);
  console.log(wordArr);
  const formattedArr = [];
  wordArr.forEach((el) => {
    const wordRules =
      (el !== '' && el !== '\n' && el.length >= wordLen - 1) || el === 'a';

    if (wordRules) formattedArr.push(el);
  });
  console.log(formattedArr);

  return formattedArr.length;
};

$(() => {
  $('.result-button').hide();
  $('#submit-button').on('click', (e) => {
      e.preventDefault();

      const inputText = $('#text-input').val();
      const minLen = $('#length-input').val();
      const result = wordCount(inputText, minLen);
 
      $('.result-button').text(`There are ${result} words.`);
      $('.result-button').show(400);
  });
});
