//Defining a list of 100 most common verbs in English as an Array named "verbs"
const excelVerbs = ['be ','have ','make ',
'take ','see ','find ','give ','work ',
'become ','begin ','move ','lose ','meet ','change '];

const verbs = []; // Array of 100 most common verbs in English

for (verb of excelVerbs){
    verbs.push(verb.trim());
};


//Declaring some starter phrases for the psychic to start her sentences
const starter = ['I see that', 'I predict that', 'It is clear that', 'The spirits are telling me', 
'It is possible that', 'There is a 50/50 chance that', 'Be sure that', 'It is impossible that', 
'BEWARE!', 'I do not think', 'I do believe', 'Hum, possibly'];

const caseBe = ['fired', 'hired', 'lost in the woods', 'a doctor', 'a nurse', 'a mermaid', 
'a fool', 'a Senior DEV', 'gone for good', 'using a wooden suit 6 months from now', 'happy', 'sad',
'lonely', 'a womanizer', 'a traveller', 'a jockey', 'chief', 'poor forever', 
'rich like Elon Musk', 'ugly as heck', 'in a zepelin accident'];

const caseHave = ['diarrhea' , 'just one shoe', 'heartburn', 'twelve children', 'one daughter next year',
'two children', 'no time to chill', 'a fever', 'too many tasks to complete', 'brand new car',
'the wallet stolen',  'just one arm soon', 'pimples on the forehead', 
'many friends', 'a new boyfriend', 'a new girlfriend', 'to wake up early', 
'to go to an early dinner party', 'to go back to school', 'a secret lover'] 

console.log(caseHave.length);
