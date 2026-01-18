// --- Word banks ---
const NORMAL_WORDS = [
"apple","banana","orange","grape","strawberry","watermelon","kiwi","blueberry","pineapple","mango",
"pear","peach","plum","apricot","cherry","fig","lime","lemon","coconut","papaya",
"avocado","melon","raspberry","blackberry","pomegranate","grapefruit","tangerine","nectarine","date","guava",
"passionfruit","dragonfruit","jackfruit","lychee","cantaloupe","honeydew","cranberry","currant","kumquat","persimmon",
"quince","olive","tomato","carrot","potato","broccoli","spinach","lettuce","kale","cabbage",
"cauliflower","celery","asparagus","zucchini","pumpkin","onion","garlic","pepper","chili","radish",
"turnip","beet","parsnip","eggplant","cucumber","squash","okra","leek","mushroom","basil",
"oregano","thyme","rosemary","parsley","cilantro","dill","mint","chive","sage","tarragon",
"bread","bagel","croissant","muffin","pancake","waffle","toast","biscuit","crackers","donut",
"cake","pie","brownie","cookie","tart","cupcake","pudding","jam","jelly","cheese",
"milk","yogurt","icecream","chocolate","butter","honey","sugar","salt","oil","vinegar",
"chair","table","sofa","bed","lamp","shelf","book","pen","pencil","notebook",
"computer","laptop","keyboard","mouse","monitor","printer","phone","tablet","camera","headphones",
"microphone","backpack","wallet","watch","glasses","umbrella","coat","hat","shoes","boots",
"socks","shirt","pants","dress","skirt","jacket","scarf","gloves","ring","necklace",
"car","bicycle","motorcycle","bus","train","plane","boat","ship","truck","scooter",
"road","street","avenue","highway","bridge","tunnel","park","garden","forest","mountain",
"river","lake","ocean","beach","desert","island","valley","hill","cave","cliff",
"tree","flower","grass","bush","leaf","branch","root","seed","fruit","stem",
"sun","moon","star","planet","cloud","rain","snow","storm","wind","fog",
"animal","dog","cat","bird","fish","lion","tiger","elephant","monkey","bear",
"wolf","rabbit","fox","deer","horse","cow","sheep","goat","chicken","duck",
"pig","mouse","rat","squirrel","owl","eagle","hawk","sparrow","peacock","frog",
"run","walk","jump","sit","stand","sleep","eat","drink","read","write",
"think","listen","talk","sing","dance","play","swim","drive","cook","clean",
"build","paint","draw","teach","learn","study","watch","smile","laugh","cry",
"happy","sad","angry","excited","tired","bored","scared","brave","curious","nervous",
"fast","slow","hot","cold","warm","cool","bright","dark","loud","quiet",
"soft","hard","heavy","light","round","square","long","short","tall","small",
"big","huge","tiny","thin","thick","wide","narrow","deep","shallow","smooth",
"rough","wet","dry","clean","dirty","new","old","fresh","stale","ancient",
"strong","weak","young","old","rich","poor","famous","hidden","lost","found",
"happy","sad","angry","funny","serious","kind","mean","friendly","rude","polite",
"dangerous","safe","easy","difficult","simple","complex","clear","confusing","bright","dull",
"beautiful","ugly","pretty","handsome","smart","stupid","wise","foolish","friendly","hostile",
"curious","lazy","active","quiet","noisy","peaceful","chaotic","organized","messy","clean",
"hot","cold","warm","cool","soft","hard","smooth","rough","light","dark",
"fast","slow","quick","steady","strong","weak","brave","cowardly","lucky","unlucky",
"happy","sad","angry","excited","tired","bored","hungry","thirsty","confident","shy",
"cloud","rain","snow","storm","fog","wind","thunder","lightning","sun","moon",
"star","planet","comet","meteor","asteroid","ocean","river","lake","pond","beach",
"forest","jungle","mountain","valley","hill","cave","desert","island","volcano","waterfall",
"rock","stone","sand","soil","mud","grass","leaf","flower","tree","branch"
];

const HARRY_POTTER_WORDS = [
"accio",
"alohomora",
"animagus",
"azkaban",
"bezoar",
"bellatrix",
"bertiebotts",
"boggart",
"book of spells",
"broomstick",
"buckbeak",
"butterbeer",
"cauldron",
"centaurs",
"chamber of secrets",
"chocolate frog",
"cloak of invisibility",
"cornish pixies",
"cruciatus",
"dementor",
"diagon alley",
"dirigible plum",
"dragon egg",
"dragon heartstring",
"dobby",
"dumbledore",
"elder wand",
"enchanted ceiling",
"expecto patronum",
"fawkes",
"felix felicis",
"flobberworm",
"fluffy",
"flying ford anglia",
"forbidden forest",
"firenze",
"firebolt",
"flesh eating slug",
"floo powder",
"foe glass",
"galleon",
"gillyweed",
"goblins",
"grawp",
"hedwig",
"hogwarts",
"honeydukes",
"horcrux",
"hufflepuff",
"hungarian horntail",
"invisibility cloak",
"jarvey",
"kappa",
"knight bus",
"knockturn alley",
"lacarnum inflamarae",
"leaky cauldron",
"leviosa",
"lumos",
"mandrake",
"marauders map",
"merlin",
"merpeople",
"metamorphmagus",
"mirror of erised",
"moaning myrtle",
"mokeskin pouch",
"moody",
"moonstone",
"nagini",
"nargles",
"niffler",
"nimbus 2000",
"norbert",
"obliviate",
"occamy",
"occlumency",
"omnioculars",
"ollivander",
"parseltongue",
"patronus",
"peeves",
"pensieve",
"percy",
"phoenix feather",
"piertotum locomotor",
"pigwidgeon",
"polyjuice potion",
"portkey",
"potions",
"prefects",
"professor mcgonagall",
"professor snape",
"protego",
"quaffle",
"quidditch",
"ravenclaw",
"remembrall",
"remus lupin",
"reparo",
"rictusempra",
"riddikulus",
"room of requirement",
"runes",
"spew",
"salazar slytherin",
"scabbers",
"scourgify",
"sectumsempra",
"severus snape",
"shrieking shack",
"sirius black",
"slughorn",
"sneakoscope",
"snitch",
"spellbook",
"spectrespecs",
"spoon",
"squib",
"stupefy",
"sweets",
"thestral",
"thickheaded potion",
"tom riddle",
"triwizard cup",
"triwizard tournament",
"troll",
"unforgivable curse",
"unicorn horn",
"voldemort",
"veritaserum",
"weasleys wizard wheezes",
"wand",
"wandlore",
"werewolf",
"wingardium leviosa",
"yule ball",
"yaxley",
"zonkos joke shop"
];

// --- DOM elements ---
const rope = document.getElementById("rope");
const input = document.getElementById("typingInput");
const result = document.getElementById("result");
const menu = document.getElementById("menu");
const startBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const wordsRow = document.getElementById("wordsRow");

// --- Lines for words ---
const currentLineEl = document.createElement("div");
currentLineEl.id = "currentLine";
const nextLineEl = document.createElement("div");
nextLineEl.id = "nextLine";
wordsRow.appendChild(currentLineEl);
wordsRow.appendChild(nextLineEl);

// --- Game state ---
let ropePercent = 50; 
let gameOver = false;
let computerInterval;
let typedWords = []; // words typed on current line
let lines = [];      // array of lines (each line is array of words)
const LINE_LENGTH = 10; // words per line

let currentDifficulty = "easy";
let currentWordSet = "normal";

const PLAYER_PULL = 3; // % per correct word
const DIFFICULTY_SETTINGS = {
  easy: { speed: 600, computerPull: 1.5 },
  hard: { speed: 300, computerPull: 3 }
};

// --- Helpers ---
function randomWord() {
  const bank = currentWordSet === "normal" ? NORMAL_WORDS : HARRY_POTTER_WORDS;
  return bank[Math.floor(Math.random() * bank.length)];
}

// --- Initialize first 2 lines ---
function initLines() {
  lines = [];
  typedWords = [];
  for (let i = 0; i < 2; i++) {
    const line = [];
    for (let j = 0; j < LINE_LENGTH; j++) line.push(randomWord());
    lines.push(line);
  }
  updateWords();
}

// --- Update word display with static lines ---
function updateWords() {
  const typed = input.value;

  // --- Shift lines if current line fully typed ---
  if (typedWords.length >= lines[0].length) {
    typedWords = []; // reset typedWords for new line
    lines.shift();   // remove first line
    // generate new line at bottom
    const newLine = [];
    for (let i = 0; i < LINE_LENGTH; i++) newLine.push(randomWord());
    lines.push(newLine);
    input.value = ""; // clear input
  }

  // --- Render current line ---
  currentLineEl.innerHTML = "";
  lines[0].forEach((word, idx) => {
    if (idx < typedWords.length) {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.className = "correct";
      currentLineEl.appendChild(span);
    } else if (idx === typedWords.length) {
      const container = document.createElement("span");
      let cursorAdded = false;
      for (let i = 0; i < word.length; i++) {
        if (!cursorAdded && i === typed.length) {
          const cursor = document.createElement("span");
          cursor.className = "cursor";
          container.appendChild(cursor);
          cursorAdded = true;
        }
        const letter = document.createElement("span");
        letter.className = i < typed.length ? (typed[i] === word[i] ? "correct" : "incorrect") : "remaining";
        letter.textContent = word[i];
        container.appendChild(letter);
      }
      if (!cursorAdded) {
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        container.appendChild(cursor);
      }
      container.appendChild(document.createTextNode(" "));
      currentLineEl.appendChild(container);
    } else {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.className = "remaining";
      currentLineEl.appendChild(span);
    }
  });

  // --- Render next line ---
  nextLineEl.innerHTML = "";
  lines[1].forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.className = "remaining";
    nextLineEl.appendChild(span);
  });

  // Scroll cursor into view
  const cursor = currentLineEl.querySelector(".cursor");
  if (cursor) cursor.scrollIntoView({ behavior: "smooth", inline: "nearest" });
}

function moveRope(amount) {
  ropePosition += amount;
  ropePosition = Math.max(0, Math.min(650, ropePosition));

  // Call our new visual updater
  updateVisuals();

  if (ropePosition === 0) endGame("Computer wins!");
  if (ropePosition === 650) endGame("You win!");
}

function updateVisuals() {
  // 1. Move the Clash Point
  clashPoint.style.left = ropePosition + "px";

  // 2. Define Offsets (MUST MATCH CSS 'left' and 'right' of beams)
  const leftWandOffset = 110;  // Matches CSS #beamLeft { left: 80px }
  const rightWandOffset = 110; // Matches CSS #beamRight { right: 80px }
  const containerWidth = 700; // Matches CSS #gameContainer { width: 700px }

  // 3. Calculate Left Beam Width
  // Distance from Left Wand -> Clash Point
  let leftWidth = ropePosition - leftWandOffset;
  if (leftWidth < 0) leftWidth = 0;
  beamLeft.style.width = leftWidth + "px";

  // 4. Calculate Right Beam Width
  // Distance from Right Wand -> Clash Point
  let rightWidth = (containerWidth - ropePosition) - rightWandOffset;
  if (rightWidth < 0) rightWidth = 0;
  beamRight.style.width = rightWidth + "px";
}

/* --- Player Input --- */
input.addEventListener("input", () => {
  if (gameOver) return;
  updateWords();
  if (input.value.endsWith(" ")) {
    const typedWord = input.value.trim();
    const nextWord = lines[0][typedWords.length];
    if (typedWord === nextWord) {
      typedWords.push(nextWord);
      moveRope(PLAYER_PULL);
    }
    input.value = "";
    updateWords();
  }
});

// --- Computer ---
function startComputer() {
  clearInterval(computerInterval);
  const settings = DIFFICULTY_SETTINGS[currentDifficulty];
  computerInterval = setInterval(() => {
    if (!gameOver) moveRope(-settings.computerPull);
  }, settings.speed);
}

// --- Game flow ---
function endGame(message) {
  gameOver = true;
  result.textContent = message;
  clearInterval(computerInterval);
  setTimeout(() => {
    menu.style.display = "block";
    gameContainer.style.display = "none";
    result.textContent = "";
  }, 1500);
}

// --- Start button ---
startBtn.addEventListener("click", () => {
  currentDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  currentWordSet = document.querySelector('input[name="wordset"]:checked').value;
  menu.style.display = "none";
  gameContainer.style.display = "flex";
  resetGame();
  input.focus();
});

// --- Reset game ---
function resetGame() {
  gameOver = false;
  ropePosition = 325;
  
  // Update the new visuals instead of rope.style.left
  updateVisuals(); 
  
  input.value = "";
  initLines();
  startComputer();
}
