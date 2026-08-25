const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];



function compactFragments (arr) {  // this creates a new array to trim the undefined elements in the original array
    let defined = [];

    for (const element of arr) {
        if (element !== undefined) {
            defined.push(element);
        }
    }

    if (defined.length < arr.length) {
        console.log(`[COMPACTED] Removed ${arr.length - defined.length} undefined elements.`)
    }

    return defined
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arr) {   // this organizes by id order ascending
    const copy = [...arr];

    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy.length - 1; j++) {
            if (copy[j].id > copy[j+1].id) {
                let temp = copy[j];
                copy[j] = copy[j+1];
                copy[j+1] = temp;
            }
        }
    }
    return copy;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(arr) { // this removes any id duplicates.
    const seen = {};
    const result = [];

    arr.forEach((element) => {
        if (!seen.hasOwnProperty(element.id)) {
            seen[element.id] = true;
            result.push(element)
        } else {
            console.log(`[DEDUPED] Removed duplicate fragment with id: ${element.id}`)
        }
    })

    return result
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(arr) {    
    const counter = [];
    let previous = arr[0].id - 1;

    arr.forEach((element) => {
        if (element.id > previous + 1) {
            for (let missingId = previous + 1; missingId < element.id; missingId++) {
                counter.push({ id: missingId, text: "[...]" });
                console.log(`[FILLED] Added placeholder for id: ${missingId}`);
            }
        }
        counter.push(element);
        previous = element.id;
    })
    return counter 
}

const filledFragments = fillMissingFragments(dedupedFragments);


function assembleStory(arr) {
    return arr.map(element => element.text).join("\n");
}

console.log(assembleStory(filledFragments));