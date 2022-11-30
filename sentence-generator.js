//Defining a list of 100 most common verbs in English as an Array named "verbs"
const excelVerbs = ['be ','have ','go ','get ','make ',
'take ','see ','come ','use ','find ','give ','work ','call ',
'become ','begin ','move ','like ','sit ','lose ','pay ','meet ','learn ','change '];

const verbs = []; // Array of 100 most common verbs in English

for (verb of excelVerbs){
    verbs.push(verb.trim());
};


//Declaring some starter phrases for the psychic to start her sentences
const starter = ['I see that', 'I predict that', 'It is clear that', 'The spirits are telling me', 
'It is possible that', 'There is a 50/50 chance of', 'Be sure that', 'It is impossible that', 
'BEWARE!', 'I do not think', 'I do believe', 'Hum, possibly'];

const caseBe = ['fired', 'hired', 'lost in the woods', 'a doctor', 'a nurse', 'a mermaid', 'a fool', 'a Senior DEV', 'gone for good', 'using a wooden suit 6 months from now', 'happy', 'sad',
'lonely', 'a womanizer', 'a traveller', 'a jockey', 'chief', 'poor forever', 'rich like Elon Musk', 'ugly as heck', 'in a zepelin accident'];

console.log(caseBe.length);
