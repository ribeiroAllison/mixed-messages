const SENTENCE_TREE = {
    //Defining a list of verbs in as an Array.
    verbs: ['be','have','make','take','lose','give','become'],

    //Declaring some starter phrases for the psychic to start her sentences
    starter: ['I see that', 'I predict that', 'It is clear that', 'The spirits are telling me', 
    'It is possible that', 'There is a 50/50 chance that', 'Be sure that', 'It is impossible that', 
    'BEWARE!', 'I do not think', 'I do believe', 'Hum, possibly'],



    // the verb will be the key factor on how the sentence ends so I created an array for each verb to finish a phrase that 
    // makes some sense
    caseBe: ['fired', 'hired', 'lost in the woods', 'a doctor', 'a nurse', 'a mermaid', 
    'a fool', 'a Senior DEV', 'gone for good', 'using a wooden suit 6 months from now', 'happy', 'sad',
    'lonely', 'a womanizer', 'a traveler', 'a jockey', 'chief', 'poor forever', 
    'rich like Elon Musk', 'ugly as heck', 'in a zeppelin accident'],

    caseHave: ['diarrhea' , 'just one shoe', 'heartburn', 'twelve children', 'one daughter next year',
    'two children', 'no time to chill', 'a fever', 'too many tasks to complete', 'brand new car',
    'the wallet stolen',  'just one arm soon', 'pimples on the forehead', 
    'many friends', 'a new boyfriend', 'a new girlfriend', 'to wake up early', 
    'to go to an early dinner party', 'to go back to school', 'a secret lover'],

    caseMake: ['a cake', '1 million dollars this year', 'a good husband', 'a good wife', 'a bad husband',
    'a bad wife', 'a joke nobody will laugh about', 'sense of your life', 'a trip to Hong Kong', 'a trip to North Korea',
    'it', 'many mistakes', 'up for being so you', 'coffee for a friend'],

    caseTake: ['a vacation in Bahamas', 'a fall and hit your head', 'too much time playing this game', 
    `note of my maker's GitHub profile https://github.com/ribeiroAllison and check his awesome work`, 'two hours to get to work',
    'a wrong turn on your way home', 'a bottle and drink it down', 'on meeeee, take me oooon', 'a sabbatical year soon', 'your pet to the vet',
    'a dive in Niagara Falls', 'your last breath sometime in the next 90 years', 'a bottle of Vodka to work', 'me to visit Rome',
    'some time to see all my random messages'],

    caseLose: ['all hope', 'your driver\'s licence','your favorite game', 'your religion', 'your sanity', 'your car keys',
    'your dignity', 'your life savings', 'an umbrella on a rainy day', 'your sense of style', 'the tip of your eleventh finger',
    'a bet with your fiancée', 'your favorite sock', 'yourself', 'everything'],

    caseGive: ['a firm handshake on a snake', 'up giving up', 'that bad movie another shot', 'dancing the mambo a chance',
    'bad gifts to your mother-in-law', 'some thought about the universe\'s heat death', 'a good grade to a bad student', 'me a 5 star review in the App Store',
    'it to me baby. Aham, aham', 'a friend a hug soon', 'your dog a break', 'in to fear', 'a mouth to mouth breathing on a toothless lady', 'me some change',
    'your cat a sibling'],

    caseBecome: ['filthy rich', 'even poorer', 'a movie star', 'a rock star', 'a K-Pop idol', 'a father of triplets', 'a mother of triplets', '27.8 pounds heavier',
    'thinner than a Victoria\'s Secret Angel', 'a handmaid in Buckingham palace', 'friends with a squirrel', 'the next emperor of Japan', 'heir to the iron throne',
    'lost in a jungle', 'one with the Force'],

    
}

export {SENTENCE_TREE};

