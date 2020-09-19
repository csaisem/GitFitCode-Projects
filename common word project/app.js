/**
 * To do:
 * Find out how to return the resulting string into lowercase letters
 * I can make the paragraph into an array (use .split on the empty spaces "") and filter the words out from there
 * Create function to return most used word ( Can force all words into lowercase if filtering is case sensitive)
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."

const mostCommonWord = (paragraph, banned) => {
    var commonWord = []
    paragraph.forEach.split( " " )
    for (let i = 0; i = paragraph.length; i++) {
      commonWord.push(paragraph[i])
    }
    return commonWord
};

mostCommonWord(paragraph, 'hit')