
import { SENTENCE_TREE } from "./sentence-tree.mjs";

const floorArray = array => Math.floor(Math.random() * array.length);
    


const sentence = () =>{
    //defining a random number to be the index to be used on each array on final sencence 
    const randomStarter = floorArray(SENTENCE_TREE.starter);
    const randomVerb = floorArray(SENTENCE_TREE.verbs);
    const randomBe = floorArray(SENTENCE_TREE.caseBe);
    const randomHave = floorArray(SENTENCE_TREE.caseHave);
    const randomMake = floorArray(SENTENCE_TREE.caseMake);
    const randomTake = floorArray(SENTENCE_TREE.caseTake);
    const randomLose = floorArray(SENTENCE_TREE.caseLose);
    const randomGive = floorArray(SENTENCE_TREE.caseGive);
    const randomBecome = floorArray(SENTENCE_TREE.caseBecome);
    const sentenceArray = [SENTENCE_TREE.starter[randomStarter], 'you will', SENTENCE_TREE.verbs[randomVerb]]; //setting first three elements of the sentence
    
    const verb = sentenceArray[2]; //extracting the verb from the sentence array
    const pushFinals = (type, randomList) => {
        
        return sentenceArray.push(type[randomList]);
    }
    switch (verb){ 
        // depending on which verb was randomly selected one random "finisher" will be pushed
        case 'be': pushFinals(SENTENCE_TREE.caseBe, randomBe);
        break;

        case 'have':  pushFinals(SENTENCE_TREE.caseHave, randomHave);
        break;

        case 'make':  pushFinals(SENTENCE_TREE.caseMake, randomMake);
        break;

        case 'take':  pushFinals(SENTENCE_TREE.caseTake, randomTake);
        break;

        case 'lose':  pushFinals(SENTENCE_TREE.caseLose, randomLose);
        break;

        case 'give':  pushFinals(SENTENCE_TREE.caseGive, randomGive);
        break;

        case 'become':  pushFinals(SENTENCE_TREE.caseBecome, randomBecome);
        break;
    }
    
    let FINAL_STRING = sentenceArray.join(' '); //convert sentence array into a string
    

    document.getElementById("result").innerText = FINAL_STRING; // NÃO FUNCIONA IMPORTANDO OBJETO
    
    
    
    
}



console.log(sentence());