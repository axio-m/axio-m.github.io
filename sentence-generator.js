const dictionary = {
    adjectives: [
        "colorless", "green", "silent", "transparent", "heavy", "liquid", "geometric", "fragile", "infinite", "vague", "digital", "elastic", "bitter", "atomic", "hidden", "wooden", "holographic", "velvet", "frozen", "sonic", "synthetic", "dusty", "glowing", "metallic", "coiled"
    ],
    nounsSingular: [
        "idea", "silence", "shadow", "concept", "whisper", "vacuum", "algorithm", "theory", "memory", "geometry", "rhythm", "gravity", "symmetry", "friction", "echo", "mirage", "paradox", "glitch", "structure", "texture", "entropy", "horizon", "frequency", "illusion"
    ],
    nounsPlural: [
        "ideas", "silences", "shadows", "concepts", "whispers", "vacuums", "algorithms", "theories", "memories", "geometries", "rhythms", "gravities", "symmetries", "frictions", "echoes", "mirages", "paradoxes", "glitches", "structures", "textures", "entropies", "horizons", "frequencies", "illusions"
    ],
    verbsSingular: [
        "sleeps", "dances", "melts", "shatters", "breathes", "flows", "accelerates", "collapses", "dissolves", "evaporates", "vibrates", "echoes", "navigates", "burns", "freezes", "explodes", "gravitates", "whispers", "coexists", "bends", "fades", "ascends", "descends", "hovers"
    ],
    verbsPlural: [
        "sleep", "dance", "melt", "shatter", "breathe", "flow", "accelerate", "collapse", "dissolve", "evaporate", "vibrate", "echo", "navigate", "burn", "freeze", "explode", "gravitate", "whisper", "coexist", "bend", "fade", "ascend", "descend", "hover"
    ],
    adverbs: [
        "furiously", "silently", "mathematically", "bitterly", "blindly", "lazily", "vertically", "instantly", "randomly", "logically", "patiently", "violently", "gracefully", "mechanically", "eternally", "abstractly", "subconsciously", "rigidly", "fluidly", "drastically", "intensely", "vaguely", "harmoniously", "abruptly"
    ],
    prepositions: [
        "through", "beyond", "beside", "beneath", "within", "across", "above", "under", "amidst", "toward"
    ]
};

function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function generate() {
    const isSingular = Math.random()>0.5;

    const adj1 = getRandom(dictionary.adjectives);
    let adj2 = getRandom(dictionary.adjectives);
    while (adj1 === adj2) {
        adj2 = getRandom(dictionary.adjectives);
    }

    const noun1 = isSingular ? getRandom(dictionary.nounsSingular) : getRandom(dictionary.nounsPlural);
    const noun2 = isSingular ? getRandom(dictionary.nounsSingular) : getRandom(dictionary.nounsPlural);
    const verb = isSingular ? getRandom(dictionary.verbsSingular) : getRandom(dictionary.verbsPlural);
    const adverb = getRandom(dictionary.adverbs);
    const preposition = getRandom(dictionary.prepositions);

    const patterns = [
        `${adj1} ${adj2} ${noun1} ${verb} ${adverb}.`,
        `The ${noun1} ${verb} ${preposition} the ${adj1} ${noun2}.`,
        `${adverb}, the ${adj1} ${noun1} ${verb} ${preposition} ${adj2} ${noun2}.`
    ];

    const rawSentence = getRandom(patterns);
    return rawSentence.charAt(0).toUpperCase() + rawSentence.slice(1);
}

// dom loaded
document.addEventListener('DOMContentLoaded', () => {
    const sentenceDisplay = document.getElementById('sentence');
    const generateBtn = document.getElementById('generateBtn');

    if (generateBtn && sentenceDisplay) {
        generateBtn.addEventListener('click', () => {
            sentenceDisplay.textContent = generate();
        });
    }
});