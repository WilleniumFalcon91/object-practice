// practice with objects in javascript 
//editing a phonebook
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
var personName = '';
console.log(phonebookDict['Elizabeth']);
phonebookDict['Kareem'] = '938-489-1234';
delete phonebookDict['Alice'];
phonebookDict['Bob'] = '968-345-2345';
console.log(phonebookDict);

//breaking down input string into individual letters and their respective count

function letterHistogram (str) {
    var strDict = {};
    str = str.split("");
    for (i = 0; i < str.length; i++) {
      console.log(str[i]);
      if (strDict[str[i]] == undefined) {
        strDict[str[i]] = 0;
      } else {
        strDict[str[i]] = strDict[str[i]] + 1;
      }
    } 
    
    return strDict
}
letterHistogram('test')

//breaking down input string into separate words and their respective count

function wordHistogram (str) {
    var wordDict = {};
    var word = str.split(" ");
    for (var i = 0; i < word.length; i++) {
        if (wordDict[word[i]] === undefined) {
          wordDict[word[i]] = 0;
        }
      wordDict[word[i]] = wordDict[word[i]] + 1;
    }
  console.log(word);
  return wordDict;
}
wordHistogram("to be or not to be")