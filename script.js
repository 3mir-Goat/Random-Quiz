
const SUPABASE_URL = "https://yourprojectid.supabase.co"; 
const SUPABASE_KEY = "your_anon_public_key";              
const TABLE_NAME = "scores";                              

async function sendScore(name, score) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": "Bearer " + SUPABASE_KEY
      },
      body: JSON.stringify({ name, score })
    });

    if (!response.ok) console.error("Send failed:", response.statusText);
  } catch (error) {
    console.error("Error:", error);
  }
}

const allQuestions = [
  { question: "What is the capital of France?", options: ["Paris","Rome","Berlin","Madrid","London"], correct: "Paris" },
  { question: "Which planet is closest to the Sun?", options: ["Venus","Mars","Mercury","Earth","Jupiter"], correct: "Mercury" },
  { question: "Who painted the Mona Lisa?", options: ["Da Vinci","Van Gogh","Picasso","Rembrandt","Michelangelo"], correct: "Da Vinci" },
  { question: "What is the largest mammal?", options: ["Blue Whale","Elephant","Giraffe","Hippo","Rhino"], correct: "Blue Whale" },
  { question: "What year did the Titanic sink?", options: ["1912","1905","1920","1898","1918"], correct: "1912" },
  { question: "Which gas do plants absorb?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen","Helium"], correct: "Carbon Dioxide" },
  { question: "In computing, what does 'CPU' stand for?", options: ["Central Processing Unit","Computer Public Unit","Control Processing Unit","Central Program Unit","Computer Processing Unit"], correct: "Central Processing Unit" },
  { question: "What is the main ingredient in guacamole?", options: ["Tomato","Avocado","Cucumber","Lettuce","Onion"], correct: "Avocado" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare","Tolstoy","Hemingway","Orwell","Austen"], correct: "Shakespeare" },
  { question: "How many continents are there?", options: ["5","6","7","8","9"], correct: "7" },
  { question: "Which element has the symbol 'O'?", options: ["Oxygen","Gold","Silver","Iron","Osmium"], correct: "Oxygen" },
  { question: "What is the currency of the UK?", options: ["Euro","Pound","Dollar","Franc","Krone"], correct: "Pound" },
  { question: "What organ pumps blood?", options: ["Lungs","Liver","Brain","Heart","Kidneys"], correct: "Heart" },
  { question: "Which ocean is the largest?", options: ["Atlantic","Pacific","Indian","Arctic","Southern"], correct: "Pacific" },
  { question: "What is H2O?", options: ["Water","Salt","Oxygen","Hydrogen","Helium"], correct: "Water" },
  { question: "Who discovered gravity?", options: ["Einstein","Newton","Galileo","Tesla","Darwin"], correct: "Newton" },
  { question: "What is the tallest mountain on Earth?", options: ["K2","Everest","Kangchenjunga","Makalu","Lhotse"], correct: "Everest" },
  { question: "How many players in a soccer team?", options: ["9","10","11","12","13"], correct: "11" },
  { question: "What color are bananas?", options: ["Red","Green","Blue","Yellow","Purple"], correct: "Yellow" },
  { question: "What language has the most native speakers?", options: ["English","Spanish","Mandarin","Hindi","Arabic"], correct: "Mandarin" },
  { question: "Which organ filters blood?", options: ["Heart","Kidney","Liver","Lungs","Stomach"], correct: "Kidney" },
{ question: "Which continent is Egypt in?", options: ["Asia","Africa","Europe","South America","Australia"], correct: "Africa" },
{ question: "Which is the fastest land animal?", options: ["Cheetah","Lion","Horse","Tiger","Leopard"], correct: "Cheetah" },
{ question: "What is 100 ÷ 5?", options: ["10","15","20","25","30"], correct: "20" },
{ question: "What color is a ripe tomato?", options: ["Red","Green","Yellow","Purple","Blue"], correct: "Red" },
{ question: "Which planet has rings?", options: ["Earth","Mars","Jupiter","Saturn","Venus"], correct: "Saturn" },
{ question: "What is the freezing point of water?", options: ["0°C","32°C","100°C","-10°C","-32°C"], correct: "0°C" },
{ question: "Who invented the light bulb?", options: ["Edison","Tesla","Newton","Galileo","Faraday"], correct: "Edison" },
{ question: "What is the capital of Germany?", options: ["Berlin","Munich","Hamburg","Frankfurt","Cologne"], correct: "Berlin" },
{ question: "Which animal lays eggs?", options: ["Dog","Cat","Chicken","Cow","Horse"], correct: "Chicken" },
{ question: "Which ocean is on the east coast of the USA?", options: ["Pacific","Atlantic","Indian","Arctic","Southern"], correct: "Atlantic" },
{ question: "What is 7 × 8?", options: ["54","56","58","60","62"], correct: "56" },
{ question: "What gas do humans exhale?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen","Helium"], correct: "Carbon Dioxide" },
{ question: "What is the main language of Brazil?", options: ["Spanish","Portuguese","French","English","German"], correct: "Portuguese" },
{ question: "Who wrote '1984'?", options: ["Orwell","Shakespeare","Tolstoy","Hemingway","Austen"], correct: "Orwell" },
{ question: "Which planet is largest?", options: ["Earth","Mars","Jupiter","Venus","Saturn"], correct: "Jupiter" },
{ question: "Which is a primary color?", options: ["Purple","Orange","Green","Red","Pink"], correct: "Red" },
{ question: "Which animal is known for carrying its young in a pouch?", options: ["Kangaroo","Elephant","Dog","Cat","Lion"], correct: "Kangaroo" },
{ question: "What is 9²?", options: ["81","72","90","99","79"], correct: "81" },
{ question: "Which is the largest desert?", options: ["Sahara","Gobi","Kalahari","Arabian","Mojave"], correct: "Sahara" },
{ question: "Which instrument has strings?", options: ["Flute","Piano","Guitar","Drums","Trumpet"], correct: "Guitar" },
{ question: "What is the chemical symbol for silver?", options: ["Ag","Au","Si","Pb","Sn"], correct: "Ag" },
{ question: "Which bird is known for mimicking sounds?", options: ["Parrot","Crow","Owl","Sparrow","Eagle"], correct: "Parrot" },
{ question: "What is the smallest continent?", options: ["Australia","Europe","Antarctica","South America","Asia"], correct: "Australia" },
{ question: "Which planet is farthest from the Sun?", options: ["Neptune","Mars","Jupiter","Earth","Saturn"], correct: "Neptune" },
{ question: "Which metal is liquid at room temperature?", options: ["Mercury","Gold","Iron","Aluminum","Copper"], correct: "Mercury" },
{ question: "Which gas do humans need to breathe?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen","Helium"], correct: "Oxygen" },
{ question: "Which country is known for the Great Wall?", options: ["China","Japan","India","Russia","Korea"], correct: "China" },
{ question: "Which fruit is yellow and curved?", options: ["Banana","Apple","Orange","Pear","Grapes"], correct: "Banana" },
{ question: "Which animal is known for its trunk?", options: ["Elephant","Rhino","Giraffe","Hippo","Bear"], correct: "Elephant" },
{ question: "What is 14 × 3?", options: ["42","44","40","36","38"], correct: "42" },
{ question: "Which planet is known for extreme winds?", options: ["Earth","Neptune","Mercury","Mars","Venus"], correct: "Neptune" },
{ question: "What is 50% of 200?", options: ["50","75","100","150","200"], correct: "100" },
{ question: "What is the most spoken language in the world?", options: ["English","Spanish","Mandarin","Hindi","Arabic"], correct: "Mandarin" },
{ question: "Which organ produces insulin?", options: ["Liver","Pancreas","Kidney","Heart","Lungs"], correct: "Pancreas" },
{ question: "Which element is required for combustion?", options: ["Oxygen","Hydrogen","Carbon","Nitrogen","Helium"], correct: "Oxygen" },
{ question: "Who painted the Starry Night?", options: ["Van Gogh","Da Vinci","Picasso","Rembrandt","Michelangelo"], correct: "Van Gogh" },
{ question: "Which planet is known as the Morning Star?", options: ["Venus","Mars","Jupiter","Mercury","Saturn"], correct: "Venus" },
{ question: "What is the largest internal organ?", options: ["Heart","Liver","Kidney","Lungs","Brain"], correct: "Liver" },
{ question: "Which is a mammal that lays eggs?", options: ["Platypus","Lion","Tiger","Elephant","Horse"], correct: "Platypus" },
{ question: "What is the square root of 144?", options: ["10","11","12","13","14"], correct: "12" },
{ question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Argon","Hydrogen"], correct: "Nitrogen" },
{ question: "Which is the smallest ocean?", options: ["Pacific","Atlantic","Indian","Arctic","Southern"], correct: "Arctic" },
{ question: "Which organ stores bile?", options: ["Liver","Gallbladder","Kidney","Pancreas","Stomach"], correct: "Gallbladder" },
{ question: "Which continent has the most countries?", options: ["Africa","Asia","Europe","South America","North America"], correct: "Africa" },
{ question: "Which planet is famous for its red color?", options: ["Mars","Venus","Earth","Jupiter","Saturn"], correct: "Mars" },
{ question: "Which is the fastest bird?", options: ["Falcon","Eagle","Ostrich","Sparrow","Crow"], correct: "Falcon" },
{ question: "Which is the smallest unit of life?", options: ["Atom","Molecule","Cell","Organ","Tissue"], correct: "Cell" },
{ question: "Which country uses the Yen?", options: ["China","Japan","South Korea","Thailand","India"], correct: "Japan" },
{ question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen","Shakespeare","Hemingway","Orwell","Tolstoy"], correct: "Jane Austen" },
{ question: "Which shape has 3 sides?", options: ["Triangle","Square","Circle","Rectangle","Pentagon"], correct: "Triangle" },
{ question: "Which is the largest planet in the solar system?", options: ["Earth","Mars","Jupiter","Saturn","Venus"], correct: "Jupiter" },
{ question: "What is 11 × 11?", options: ["111","121","131","141","151"], correct: "121" },
{ question: "Which animal is known for black-and-white stripes?", options: ["Tiger","Zebra","Leopard","Panda","Skunk"], correct: "Zebra" },
{ question: "Which metal is used in electrical wiring?", options: ["Aluminum","Copper","Gold","Silver","Iron"], correct: "Copper" },
{ question: "Which fruit is red and often used in pies?", options: ["Apple","Banana","Orange","Grapes","Pear"], correct: "Apple" },
{ question: "Which instrument is played by blowing air?", options: ["Guitar","Piano","Flute","Drums","Violin"], correct: "Flute" },
{ question: "Which is the largest planet by volume?", options: ["Earth","Saturn","Jupiter","Neptune","Uranus"], correct: "Jupiter" },
{ question: "Which country is famous for maple syrup?", options: ["USA","Canada","Germany","France","Italy"], correct: "Canada" }
];


function shuffleArray(array) {
  for (let i = array.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function pickRandomQuestions(allQuestions, num=10){
  const copy = [...allQuestions];
  shuffleArray(copy);
  return copy.slice(0, num);
}

-
document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = pickRandomQuestions(allQuestions, 10);
  const form = document.getElementById("quizForm");

  quizQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(p);

    q.options.forEach(option => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${index}`;
      radio.value = option;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      div.appendChild(label);
    });

    form.insertBefore(div, form.querySelector("button"));
  });

  
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("playerName").value || "Anonymous";

    let score = 0;
    quizQuestions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if(selected && selected.value === q.correct) score++;
    });

    sendScore(name, score);
    alert(`Thanks ${name}! Your score: ${score}/${quizQuestions.length}`);
  });
});
