var allQuestions = [
  {id:1,q:"What types of cells are smaller?",opts:["Eukaryotic","Prokaryotic","Archaea","Protists"],ans:1,ch:"Ch 27"},
  {id:2,q:"What are the 3 most common shapes of prokaryotic cells?",opts:["Spheres (cocci), Rods (bacilli), Spirals","Cubes, Rods, Filaments","Spheres, Squares, Spirals","Rods, Discs, Helices"],ans:0,ch:"Ch 27"},
  {id:3,q:"What do bacterial cell walls contain?",opts:["Chitin","Cellulose","Peptidoglycan","Keratin"],ans:2,ch:"Ch 27"},
  {id:4,q:"What is peptidoglycan?",opts:["A lipid bilayer surrounding the cell","A network of sugar polymers cross-linked by polypeptides","A protein coat on the outer membrane","A chain of amino acids forming the capsule"],ans:1,ch:"Ch 27"},
  {id:5,q:"What do Archaea contain and what do they lack?",opts:["They contain peptidoglycan but lack polysaccharides","They contain cellulose but lack protein","They contain polysaccharides and protein but lack peptidoglycan","They contain chitin but lack lipids"],ans:2,ch:"Ch 27"},
  {id:6,q:"Gram-positive bacteria have _____ peptidoglycan and appear _____ in color.",opts:["Less; pink","Large amounts of; purple","Large amounts of; pink","Less; purple"],ans:1,ch:"Ch 27"},
  {id:7,q:"Why are Gram-negative bacteria more antibiotic resistant?",opts:["They have thicker peptidoglycan walls","They have an outer phospholipid membrane that blocks antibiotics","They reproduce faster than Gram-positive","They lack a cell wall entirely"],ans:1,ch:"Ch 27"},
  {id:8,q:"What do antibiotics target in bacterial cells?",opts:["The nucleus","Ribosomes only","Peptidoglycan, damaging bacterial cell walls","The plasma membrane lipids"],ans:2,ch:"Ch 27"},
  {id:9,q:"What is a capsule in prokaryotes?",opts:["A rigid cell wall made of chitin","A polysaccharide or protein layer that covers many prokaryotes","The inner membrane of the cell","A DNA-containing region"],ans:1,ch:"Ch 27"},
  {id:10,q:"What are fimbriae?",opts:["Long hairlike structures for DNA exchange","Whip-like tails for movement","Short hairlike structures that allow prokaryotes to stick to surfaces","Protein coats surrounding the cell"],ans:2,ch:"Ch 27"},
  {id:11,q:"What are pili?",opts:["Short structures for surface attachment","Hairlike structures longer than fimbriae that allow prokaryotes to exchange DNA","Flagella components for movement","Capsule proteins"],ans:1,ch:"Ch 27"},
  {id:12,q:"What are the three components of bacterial flagella?",opts:["Head, tail, sheath","Motor, hook, and filament","Base, stem, tip","Anchor, rod, whip"],ans:1,ch:"Ch 27"},
  {id:13,q:"A prokaryotic genome has _____ DNA than a eukaryotic genome.",opts:["More","The same amount of","Less","No"],ans:2,ch:"Ch 27"},
  {id:14,q:"How do prokaryotes reproduce?",opts:["Mitosis","Meiosis","Binary fission","Budding"],ans:2,ch:"Ch 27"},
  {id:15,q:"How often can binary fission occur?",opts:["Every 6-12 hours","Every 1-3 hours","Every 24 hours","Once a week"],ans:1,ch:"Ch 27"},
  {id:16,q:"What 3 factors contribute to prokaryotic genetic diversity?",opts:["Mitosis, meiosis, crossing over","Rapid reproduction, mutation, genetic recombination","Binary fission, budding, fragmentation","Transformation, translation, transcription"],ans:1,ch:"Ch 27"},
  {id:17,q:"What is transformation in prokaryotes?",opts:["Movement of genes between bacteria by bacteriophages","Genetic material transferred between prokaryotic cells directly","A prokaryotic cell takes up and incorporates foreign DNA from the surrounding environment","Changing the shape of a bacterial cell"],ans:2,ch:"Ch 27"},
  {id:18,q:"What is transduction?",opts:["Direct transfer of DNA between cells","The movement of genes between bacteria by bacteriophages","Uptake of foreign DNA from the environment","RNA to protein conversion"],ans:1,ch:"Ch 27"},
  {id:19,q:"What is the process of conjugation?",opts:["A cell takes up DNA from the environment","Genetic material is transferred between prokaryotic cells","Phages inject DNA into bacteria","Bacteria divide by binary fission"],ans:1,ch:"Ch 27"},
  {id:20,q:"Where does Escherichia coli reside, and is it normally pathogenic?",opts:["In the lungs; yes it is pathogenic","In the intestines of many mammals; not normally pathogenic","In the bloodstream; highly pathogenic","On the skin; mildly pathogenic"],ans:1,ch:"Ch 27"},
  {id:21,q:"Campylobacter causes:",opts:["Stomach ulcers","Lyme disease","Blood poisoning / stomach poisoning","Syphilis"],ans:2,ch:"Ch 27"},
  {id:22,q:"Helicobacter pylori causes:",opts:["Stomach ulcers","Blindness","Lyme disease","Botulism"],ans:0,ch:"Ch 27"},
  {id:23,q:"What are Chlamydias?",opts:["Free-living marine bacteria","Bacteria parasites that live within animal cells","Archaea found in extreme environments","Fungi that infect plants"],ans:1,ch:"Ch 27"},
  {id:24,q:"Chlamydia trachomatis causes:",opts:["Malaria and liver damage","Lyme disease and Bell's palsy","Blindness and nongonococcal urethritis (sexually transmitted)","Botulism and food poisoning"],ans:2,ch:"Ch 27"},
  {id:25,q:"Treponema pallidum causes _____ and Borrelia burgdorferi causes _____.",opts:["Lyme disease; syphilis","Syphilis; Lyme disease","Malaria; cholera","Cholera; tuberculosis"],ans:1,ch:"Ch 27"},
  {id:26,q:"Lyme disease can potentially cause:",opts:["Blindness","Bell's palsy","Stomach ulcers","Botulism"],ans:1,ch:"Ch 27"},
  {id:27,q:"Clostridium botulinum causes:",opts:["Syphilis","Lyme disease","Botulism (associated with canned food)","Walking pneumonia"],ans:2,ch:"Ch 27"},
  {id:28,q:"What are the smallest known cells?",opts:["E. coli","Chlamydia","Archaea","Mycoplasms"],ans:3,ch:"Ch 27"},
  {id:29,q:"What do chemoheterotrophic prokaryotes act as?",opts:["Producers","Decomposers","Parasites only","Autotrophs"],ans:1,ch:"Ch 27"},
  {id:30,q:"What is symbiosis?",opts:["Competition between two species","An ecological relationship in which two species live in close contact: a larger host and smaller symbiont","One organism killing another","A type of asexual reproduction"],ans:1,ch:"Ch 27"},
  {id:31,q:"What is mutualism?",opts:["One organism benefits, the other is harmed","Both symbiotic organisms benefit","One organism is killed","Neither organism is affected"],ans:1,ch:"Ch 27"},
  {id:32,q:"Protists are _____ and mostly _____.",opts:["Prokaryotes; multicellular","Eukaryotes; unicellular","Bacteria; colonial","Archaea; filamentous"],ans:1,ch:"Ch 27"},
  {id:33,q:"What are the four supergroups of eukaryotes?",opts:["Bacteria, Archaea, Protista, Fungi","Excavata, Archaeplastida, SAR, Unikonta","Animalia, Plantae, Fungi, Protista","Cocci, Bacilli, Spirilla, Vibrio"],ans:1,ch:"Ch 27"},
  {id:34,q:"What is endosymbiosis?",opts:["Two organisms competing for resources","When a eukaryotic cell engulfed a bacterium and kept it alive inside, becoming mitochondria or chloroplast","Bacteria exchanging DNA through pili","A type of parasitism"],ans:1,ch:"Ch 27"},
  {id:35,q:"During secondary endosymbiosis, red and green algae were ingested by:",opts:["Prokaryotic cells","Heterotrophic eukaryotes","Other algae","Fungi"],ans:1,ch:"Ch 27"},
  {id:36,q:"What are characteristics of dinoflagellates?",opts:["No flagella, found on land","2 flagella, found in marine and freshwater","1 flagellum, found in soil","3 flagella, found in glaciers"],ans:1,ch:"Ch 27"},
  {id:37,q:"The apicomplexan Plasmodium causes:",opts:["Cholera","Lyme disease","Malaria","Dysentery"],ans:2,ch:"Ch 27"},
  {id:38,q:"Rhizarians are:",opts:["Fungi","Bacteria","Amoebas","Plants"],ans:2,ch:"Ch 27"},
  {id:39,q:"Red algae get their color from:",opts:["Chlorophyll","Carotenoids","Phycoerythrin","Xanthophyll"],ans:2,ch:"Ch 27"},
  {id:40,q:"Entamoeba histolytica causes:",opts:["Malaria","Amebic dysentery","Lyme disease","Botulism"],ans:1,ch:"Ch 27"},
  {id:41,q:"What do fungal cell walls contain?",opts:["Peptidoglycan","Cellulose","Chitin","Keratin"],ans:2,ch:"Ch 31"},
  {id:42,q:"What are the most common body structures for fungi?",opts:["Multicellular filaments and single cells (yeasts)","Colonial clusters and biofilms","Spherical cocci and rods","Flagellated cells and cilia"],ans:0,ch:"Ch 31"},
  {id:43,q:"What is mycorrhizae?",opts:["A fungal infection in animals","Mutually beneficial relationships between fungi and plant roots","A type of fungal spore","Parasitic fungi on insects"],ans:1,ch:"Ch 31"},
  {id:44,q:"Mycorrhizal fungi colonize soils by the dispersal of haploid cells called:",opts:["Gametes","Conidia","Spores","Zygotes"],ans:2,ch:"Ch 31"},
  {id:45,q:"What do fungi use as a sexual calling/signaling system?",opts:["Bioluminescence","Pheromones","Flagella","Fimbriae"],ans:1,ch:"Ch 31"},
  {id:46,q:"Zygosporangia are resistant to:",opts:["Heat and UV light","Freezing and drying","Antibiotics","Acid and base"],ans:1,ch:"Ch 31"},
  {id:47,q:"Ascomycetes reproduce asexually by enormous numbers of asexual spores called:",opts:["Basidiospores","Zoospores","Conidia","Endospores"],ans:2,ch:"Ch 31"},
  {id:48,q:"Basidiomycetes include:",opts:["Bread molds and water molds","Mushrooms, puffballs, and shelf fungi","Only yeasts","Lichens and mosses"],ans:1,ch:"Ch 31"},
  {id:49,q:"Fungi interact with other organisms as:",opts:["Only parasites","Only decomposers","Decomposers, mutualists, and pathogens","Only mutualists"],ans:2,ch:"Ch 31"},
  {id:50,q:"A lichen is a symbiotic association between:",opts:["Two fungi species","A photosynthetic microorganism and a fungus","A plant and an animal","Two bacteria species"],ans:1,ch:"Ch 31"},
  {id:51,q:"The photosynthetic component in a lichen is:",opts:["Red algae or diatoms","Mosses or ferns","Green algae or cyanobacteria","Brown algae or dinoflagellates"],ans:2,ch:"Ch 31"},
  {id:52,q:"About 30% of known fungal species are:",opts:["Edible mushrooms","Parasites or pathogens, mostly on or in plants","Free-living marine organisms","Bioluminescent"],ans:1,ch:"Ch 31"},
  {id:53,q:"What is mycosis?",opts:["A type of mushroom","The general term for a fungal infection in animals","A fungal reproductive structure","A mutualistic relationship"],ans:1,ch:"Ch 31"},
  {id:54,q:"Ringworm and athlete's foot are examples of:",opts:["Bacterial infections","Viral infections","Human mycoses (fungal infections)","Parasitic worm infections"],ans:2,ch:"Ch 31"},
  {id:55,q:"Candida albicans causes:",opts:["Malaria","Yeast infections","Lyme disease","Botulism"],ans:1,ch:"Ch 31"},
  {id:56,q:"Fossil evidence indicates fungi formed _____ relationships with early land plants.",opts:["Parasitic","Competitive","Mutualistic","Predatory"],ans:2,ch:"Ch 31"},
  {id:57,q:"Chytrids can act as:",opts:["Only decomposers","Only parasites","Decomposers, parasites, or mutualists","Only mutualists"],ans:2,ch:"Ch 31"},
  {id:58,q:"The taproot develops from the primary root and prevents the plant from toppling. Lateral roots are responsible for:",opts:["Photosynthesis","Reproduction","Absorption","Gas exchange"],ans:2,ch:"Ch 35"},
  {id:59,q:"A stem consists of _____ (where leaves attach) and _____ (segments between them).",opts:["Roots and shoots","Nodes and internodes","Xylem and phloem","Pith and cortex"],ans:1,ch:"Ch 35"},
  {id:60,q:"In nonwoody plants, the dermal tissue system consists of:",opts:["The periderm","The cortex","The epidermis","The endodermis"],ans:2,ch:"Ch 35"},
  {id:61,q:"A waxy coating called the _____ helps prevent water loss from the epidermis.",opts:["Periderm","Cuticle","Cortex","Lignin"],ans:1,ch:"Ch 35"},
  {id:62,q:"In woody plants, the protective tissue that replaces the epidermis in older regions is called:",opts:["Cuticle","Cortex","Periderm","Pith"],ans:2,ch:"Ch 35"},
  {id:63,q:"Xylem conducts:",opts:["Sugars downward","Water and dissolved minerals upward from roots","Hormones laterally","Oxygen to all cells"],ans:1,ch:"Ch 35"},
  {id:64,q:"Phloem transports:",opts:["Water and minerals upward","Sugars from where they are made to where they are needed","Oxygen from leaves to roots","DNA between cells"],ans:1,ch:"Ch 35"},
  {id:65,q:"Ground tissue internal to vascular tissue is _____ ; external to vascular tissue is _____.",opts:["Cortex; pith","Pith; cortex","Xylem; phloem","Epidermis; periderm"],ans:1,ch:"Ch 35"},
  {id:66,q:"Apical meristems are located at the tips of roots and shoots and are responsible for:",opts:["Secondary growth (adding thickness)","Primary growth (elongating shoots and roots)","Producing flowers","Gas exchange"],ans:1,ch:"Ch 35"},
  {id:67,q:"Lateral meristems add _____ to woody plants, a process called _____.",opts:["Length; primary growth","Thickness; secondary growth","Leaves; foliation","Roots; radical growth"],ans:1,ch:"Ch 35"},
  {id:68,q:"What are the 3 zones of cells where growth occurs behind the root tip?",opts:["Zone of absorption, zone of transport, zone of storage","Zone of cell division, zone of elongation, zone of differentiation/maturation","Zone of mitosis, zone of meiosis, zone of fertilization","Zone of xylem, zone of phloem, zone of cambium"],ans:1,ch:"Ch 35"},
  {id:69,q:"The angiosperm life cycle is characterized by the 3 Fs:",opts:["Fungi, ferns, fruits","Flowers, double fertilization, and fruits","Flagella, fimbriae, fission","Fronds, fertilization, fragmentation"],ans:1,ch:"Ch 38"},
  {id:70,q:"What is a receptacle in a flower?",opts:["The pollen-producing structure","The part of the flower stem where all flower parts are attached","The female reproductive organ","The colorful petal"],ans:1,ch:"Ch 38"},
  {id:71,q:"The four floral organs are:",opts:["Roots, stems, leaves, flowers","Carpels, stamens, petals, and sepals","Xylem, phloem, pith, cortex","Ovule, seed, fruit, embryo"],ans:1,ch:"Ch 38"},
  {id:72,q:"A carpel has a long _____ with a _____ on which pollen may land.",opts:["Filament; anther","Style; stigma","Root; tip","Stem; node"],ans:1,ch:"Ch 38"},
  {id:73,q:"A stamen consists of a filament topped by a(n) _____ with pollen sacs.",opts:["Stigma","Ovary","Anther","Sepal"],ans:2,ch:"Ch 38"},
  {id:74,q:"In angiosperms, pollination is the transfer of pollen from:",opts:["Stigma to ovary","Anther to stigma","Root to shoot","Sepal to petal"],ans:1,ch:"Ch 38"},
  {id:75,q:"Double fertilization ensures that endosperm only develops in ovules containing:",opts:["Pollen grains","Fertilized eggs","Spores","Nectar"],ans:1,ch:"Ch 38"},
  {id:76,q:"After double fertilization, each ovule develops into a:",opts:["Fruit","Flower","Seed","Spore"],ans:2,ch:"Ch 38"},
  {id:77,q:"The ovary develops into a:",opts:["Seed","Root","Fruit enclosing the seed","Leaf"],ans:2,ch:"Ch 38"},
  {id:78,q:"Germination depends on imbibition, which is:",opts:["The release of spores","The uptake of water due to low water potential of the dry seed","Cell division in the embryo","Photosynthesis in the cotyledon"],ans:1,ch:"Ch 38"},
  {id:79,q:"Sexual reproduction in flowering plants results in offspring that are:",opts:["Genetically identical to parents","Genetically different from their parents","Clones","Haploid only"],ans:1,ch:"Ch 38"},
  {id:80,q:"Asexual reproduction results in:",opts:["Genetically diverse offspring","A clone of genetically identical organisms","Offspring with mutations","Hybrid organisms"],ans:1,ch:"Ch 38"}
];

// ===== STATE =====
var questions = [];
var answers = {};
var flagged = {};
var revealed = {};
var currentQ = 0;
var timeLeft = 3600;
var timerInterval = null;
var examSubmitted = false;
var autoAdvanceTimer = null;

// ===== DOM REFS =====
function $(sel) { return document.querySelector(sel); }
var startScreen = $("#startScreen");
var examScreen = $("#examScreen");
var resultsScreen = $("#resultsScreen");

// ===== UTILITIES =====
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function buildExam(pool, count) {
  var shuffled = shuffle(pool);
  var selected = shuffled.slice(0, count);
  var result = [];
  for (var s = 0; s < selected.length; s++) {
    var q = selected[s];
    var indices = [];
    for (var k = 0; k < q.opts.length; k++) { indices.push(k); }
    var shuffledIdx = shuffle(indices);
    var newOpts = [];
    for (var m = 0; m < shuffledIdx.length; m++) { newOpts.push(q.opts[shuffledIdx[m]]); }
    var newAns = shuffledIdx.indexOf(q.ans);
    result.push({id: q.id, q: q.q, opts: newOpts, ans: newAns, ch: q.ch});
  }
  return result;
}

function formatTime(secs) {
  var m = String(Math.floor(secs / 60));
  var s = String(secs % 60);
  if (m.length < 2) m = "0" + m;
  if (s.length < 2) s = "0" + s;
  return m + ":" + s;
}

function countAnswers() {
  var c = 0;
  for (var key in answers) {
    if (answers.hasOwnProperty(key)) c++;
  }
  return c;
}

// ===== SCREENS =====
function showScreen(screen) {
  startScreen.classList.add("hidden");
  examScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

// ===== TIMER =====
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timeLeft--;
    var timerEl = $("#timer");
    timerEl.textContent = formatTime(timeLeft);
    if (timeLeft < 300) { timerEl.classList.add("warning"); }
    else { timerEl.classList.remove("warning"); }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

// ===== QUESTION NAV GRID =====
function buildGrid() {
  var grid = $("#qGrid");
  grid.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var btn = document.createElement("button");
    btn.className = "q-grid-btn";
    btn.textContent = i + 1;
    btn.setAttribute("data-idx", i);
    btn.addEventListener("click", function() {
      clearTimeout(autoAdvanceTimer);
      currentQ = parseInt(this.getAttribute("data-idx"));
      renderQuestion();
    });
    grid.appendChild(btn);
  }
}

function updateGrid() {
  var btns = $("#qGrid").querySelectorAll(".q-grid-btn");
  for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.className = "q-grid-btn";
    if (i === currentQ) btn.classList.add("active");

    if (revealed[i] !== undefined) {
      if (answers[i] === questions[i].ans) { btn.classList.add("correct"); }
      else { btn.classList.add("wrong"); }
    } else if (answers[i] !== undefined) {
      btn.classList.add("answered");
    }

    var dot = btn.querySelector(".flag-dot");
    if (flagged[i]) {
      if (!dot) {
        dot = document.createElement("span");
        dot.className = "flag-dot";
        dot.textContent = "\uD83D\uDEA9";
        btn.appendChild(dot);
      }
    } else if (dot) {
      dot.remove();
    }
  }

  var btnSubmit = $("#btnSubmit");
  var answeredCount = countAnswers();
  if (examSubmitted) {
    btnSubmit.classList.add("hidden-btn");
  } else {
    btnSubmit.classList.remove("hidden-btn");
    if (answeredCount === questions.length) { btnSubmit.classList.add("ready"); }
    else { btnSubmit.classList.remove("ready"); }
  }

  $("#answeredCount").textContent = answeredCount + "/" + questions.length + " answered";
}

// ===== FIND NEXT UNANSWERED =====
function findNextUnanswered(from) {
  for (var i = from + 1; i < questions.length; i++) {
    if (answers[i] === undefined) return i;
  }
  for (var j = 0; j < from; j++) {
    if (answers[j] === undefined) return j;
  }
  return null;
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  var q = questions[currentQ];
  var isRevealed = revealed[currentQ] !== undefined;
  var isLocked = isRevealed || examSubmitted;

  $("#qChapter").textContent = q.ch;
  $("#qNumber").textContent = "Question " + (currentQ + 1) + " of " + questions.length;
  $("#qText").textContent = q.q;

  // Feedback banner
  var banner = document.getElementById("feedbackBanner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "feedbackBanner";
    var qCard = document.querySelector(".question-card");
    qCard.insertBefore(banner, $("#optionsContainer"));
  }

  if (isRevealed) {
    var wasCorrect = answers[currentQ] === q.ans;
    banner.style.display = "block";
    if (wasCorrect) {
      banner.className = "feedback-banner correct";
      banner.textContent = "Correct!";
    } else {
      banner.className = "feedback-banner wrong";
      banner.textContent = "Incorrect - see the correct answer highlighted in green below";
    }
  } else {
    banner.style.display = "none";
  }

  var container = $("#optionsContainer");
  container.innerHTML = "";
  var letters = ["A", "B", "C", "D"];

  for (var oi = 0; oi < q.opts.length; oi++) {
    (function(optIndex) {
      var opt = q.opts[optIndex];
      var btn = document.createElement("button");
      btn.className = "opt-btn";

      var selected = answers[currentQ] === optIndex;
      var isCorrectOpt = isLocked && optIndex === q.ans;
      var isWrongSel = isLocked && selected && optIndex !== q.ans;

      if (isLocked) {
        btn.classList.add("review-mode");
        if (isCorrectOpt) btn.classList.add("correct-opt");
        if (isWrongSel) btn.classList.add("wrong-sel");
      } else {
        if (selected) btn.classList.add("selected");
      }

      var circle = document.createElement("span");
      circle.className = "opt-circle";
      circle.textContent = letters[optIndex];

      var textNode = document.createTextNode(opt);

      btn.appendChild(circle);
      btn.appendChild(textNode);

      if (isCorrectOpt) {
        var ind = document.createElement("span");
        ind.className = "opt-indicator";
        ind.textContent = "\u2713";
        btn.appendChild(ind);
      }
      if (isWrongSel) {
        var ind2 = document.createElement("span");
        ind2.className = "opt-indicator";
        ind2.textContent = "\u2717";
        btn.appendChild(ind2);
      }

      if (!isLocked) {
        btn.addEventListener("click", function() {
          answers[currentQ] = optIndex;
          revealed[currentQ] = true;
          renderQuestion();
          updateGrid();

          clearTimeout(autoAdvanceTimer);
          if (!examSubmitted) {
            autoAdvanceTimer = setTimeout(function() {
              var next = findNextUnanswered(currentQ);
              if (next !== null) {
                currentQ = next;
                renderQuestion();
              }
            }, 1500);
          }
        });
      }

      container.appendChild(btn);
    })(oi);
  }

  // Nav buttons
  $("#btnPrev").disabled = (currentQ === 0);
  $("#btnNext").disabled = (currentQ === questions.length - 1);

  // Flag button
  var flagBtn = $("#btnFlag");
  if (examSubmitted) {
    flagBtn.style.display = "none";
  } else {
    flagBtn.style.display = "";
    if (flagged[currentQ]) {
      flagBtn.classList.add("flagged");
      flagBtn.textContent = "Flagged";
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.textContent = "Flag for Review";
    }
  }

  updateGrid();
}

// ===== SUBMIT =====
function submitExam() {
  clearInterval(timerInterval);
  clearTimeout(autoAdvanceTimer);
  examSubmitted = true;
  for (var i = 0; i < questions.length; i++) {
    revealed[i] = true;
  }
  showResultsScreen();
}

function showResultsScreen() {
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].ans) score++;
  }
  var pct = Math.round((score / questions.length) * 100);
  var passed = pct >= 70;

  $("#resultsEmoji").textContent = passed ? "\uD83C\uDF89" : "\uD83D\uDCDA";
  $("#resultsHeading").textContent = passed ? "Great Job!" : "Keep Studying!";
  $("#resultsSubtext").textContent = passed ? "You are on track for this exam." : "Review the missed topics below.";
  var pctEl = $("#resultsPct");
  pctEl.textContent = pct + "%";
  pctEl.className = "results-pct " + (passed ? "pass" : "fail");
  $("#resultsDetail").textContent = score + " / " + questions.length + " correct";

  // Chapter breakdown
  var chScores = {};
  for (var j = 0; j < questions.length; j++) {
    var ch = questions[j].ch;
    if (!chScores[ch]) { chScores[ch] = {t: 0, c: 0}; }
    chScores[ch].t++;
    if (answers[j] === questions[j].ans) chScores[ch].c++;
  }

  var breakdownEl = $("#chapterBreakdown");
  breakdownEl.innerHTML = "";
  var chKeys = Object.keys(chScores).sort();
  for (var k = 0; k < chKeys.length; k++) {
    var chName = chKeys[k];
    var data = chScores[chName];
    var p = Math.round((data.c / data.t) * 100);
    var colorClass = "red";
    if (p >= 70) colorClass = "green";
    else if (p >= 50) colorClass = "yellow";

    var row = document.createElement("div");
    row.className = "ch-row";

    var header = document.createElement("div");
    header.className = "ch-row-header";
    header.innerHTML = "<span>" + chName + "</span><span>" + data.c + "/" + data.t + " (" + p + "%)</span>";

    var barBg = document.createElement("div");
    barBg.className = "ch-bar-bg";

    var barFill = document.createElement("div");
    barFill.className = "ch-bar-fill " + colorClass;
    barFill.style.width = p + "%";

    barBg.appendChild(barFill);
    row.appendChild(header);
    row.appendChild(barBg);
    breakdownEl.appendChild(row);
  }

  // Missed questions
  var missed = [];
  for (var m = 0; m < questions.length; m++) {
    if (answers[m] !== questions[m].ans) {
      missed.push({q: questions[m], idx: m});
    }
  }

  $("#missedTitle").textContent = "Missed Questions (" + missed.length + ")";
  var missedList = $("#missedList");
  missedList.innerHTML = "";

  if (missed.length === 0) {
    $("#missedSection").classList.add("hidden");
  } else {
    $("#missedSection").classList.remove("hidden");
    for (var n = 0; n < missed.length; n++) {
      var mq = missed[n].q;
      var mi = missed[n].idx;
      var yourAnswer = (answers[mi] !== undefined) ? mq.opts[answers[mi]] : "No answer";

      var item = document.createElement("div");
      item.className = "missed-item";

      var qLine = document.createElement("p");
      qLine.className = "missed-q";
      qLine.innerHTML = "<strong>Q" + (mi + 1) + ":</strong> " + mq.q;

      var yoursLine = document.createElement("p");
      yoursLine.className = "missed-yours";
      yoursLine.textContent = "Your answer: " + yourAnswer;

      var correctLine = document.createElement("p");
      correctLine.className = "missed-correct";
      correctLine.textContent = "Correct: " + mq.opts[mq.ans];

      item.appendChild(qLine);
      item.appendChild(yoursLine);
      item.appendChild(correctLine);
      missedList.appendChild(item);
    }
  }

  showScreen(resultsScreen);
}

// ===== START EXAM =====
function startExam() {
  questions = buildExam(allQuestions, 50);
  answers = {};
  flagged = {};
  revealed = {};
  currentQ = 0;
  examSubmitted = false;
  timeLeft = 3600;
  clearTimeout(autoAdvanceTimer);

  showScreen(examScreen);
  buildGrid();
  renderQuestion();
  startTimer();
  $("#timer").textContent = formatTime(timeLeft);
  $("#timer").classList.remove("warning");
}

// ===== EVENT LISTENERS =====
$("#btnStart").addEventListener("click", startExam);

$("#btnPrev").addEventListener("click", function() {
  clearTimeout(autoAdvanceTimer);
  if (currentQ > 0) { currentQ--; renderQuestion(); }
});

$("#btnNext").addEventListener("click", function() {
  clearTimeout(autoAdvanceTimer);
  if (currentQ < questions.length - 1) { currentQ++; renderQuestion(); }
});

$("#btnFlag").addEventListener("click", function() {
  flagged[currentQ] = !flagged[currentQ];
  renderQuestion();
});

$("#btnSubmit").addEventListener("click", function() {
  var unanswered = questions.length - countAnswers();
  if (unanswered > 0) {
    if (!confirm("You have " + unanswered + " unanswered question(s). Submit anyway?")) return;
  }
  submitExam();
});

$("#btnReview").addEventListener("click", function() {
  currentQ = 0;
  showScreen(examScreen);
  $("#btnSubmit").classList.add("hidden-btn");
  renderQuestion();
});

$("#btnRetake").addEventListener("click", startExam);  {id:35,q:"During secondary endosymbiosis, red and green algae were ingested by:",opts:["Prokaryotic cells","Heterotrophic eukaryotes","Other algae","Fungi"],ans:1,ch:"Ch 27"},
  {id:36,q:"What are characteristics of dinoflagellates?",opts:["No flagella, found on land","2 flagella, found in marine and freshwater","1 flagellum, found in soil","3 flagella, found in glaciers"],ans:1,ch:"Ch 27"},
  {id:37,q:"The apicomplexan Plasmodium causes:",opts:["Cholera","Lyme disease","Malaria","Dysentery"],ans:2,ch:"Ch 27"},
  {id:38,q:"Rhizarians are:",opts:["Fungi","Bacteria","Amoebas","Plants"],ans:2,ch:"Ch 27"},
  {id:39,q:"Red algae get their color from:",opts:["Chlorophyll","Carotenoids","Phycoerythrin","Xanthophyll"],ans:2,ch:"Ch 27"},
  {id:40,q:"Entamoeba histolytica causes:",opts:["Malaria","Amebic dysentery","Lyme disease","Botulism"],ans:1,ch:"Ch 27"},
  {id:41,q:"What do fungal cell walls contain?",opts:["Peptidoglycan","Cellulose","Chitin","Keratin"],ans:2,ch:"Ch 31"},
  {id:42,q:"What are the most common body structures for fungi?",opts:["Multicellular filaments and single cells (yeasts)","Colonial clusters and biofilms","Spherical cocci and rods","Flagellated cells and cilia"],ans:0,ch:"Ch 31"},
  {id:43,q:"What is mycorrhizae?",opts:["A fungal infection in animals","Mutually beneficial relationships between fungi and plant roots","A type of fungal spore","Parasitic fungi on insects"],ans:1,ch:"Ch 31"},
  {id:44,q:"Mycorrhizal fungi colonize soils by the dispersal of haploid cells called:",opts:["Gametes","Conidia","Spores","Zygotes"],ans:2,ch:"Ch 31"},
  {id:45,q:"What do fungi use as a sexual calling/signaling system?",opts:["Bioluminescence","Pheromones","Flagella","Fimbriae"],ans:1,ch:"Ch 31"},
  {id:46,q:"Zygosporangia are resistant to:",opts:["Heat and UV light","Freezing and drying","Antibiotics","Acid and base"],ans:1,ch:"Ch 31"},
  {id:47,q:"Ascomycetes reproduce asexually by enormous numbers of asexual spores called:",opts:["Basidiospores","Zoospores","Conidia","Endospores"],ans:2,ch:"Ch 31"},
  {id:48,q:"Basidiomycetes include:",opts:["Bread molds and water molds","Mushrooms, puffballs, and shelf fungi","Only yeasts","Lichens and mosses"],ans:1,ch:"Ch 31"},
  {id:49,q:"Fungi interact with other organisms as:",opts:["Only parasites","Only decomposers","Decomposers, mutualists, and pathogens","Only mutualists"],ans:2,ch:"Ch 31"},
  {id:50,q:"A lichen is a symbiotic association between:",opts:["Two fungi species","A photosynthetic microorganism and a fungus","A plant and an animal","Two bacteria species"],ans:1,ch:"Ch 31"},
  {id:51,q:"The photosynthetic component in a lichen is:",opts:["Red algae or diatoms","Mosses or ferns","Green algae or cyanobacteria","Brown algae or dinoflagellates"],ans:2,ch:"Ch 31"},
  {id:52,q:"About 30% of known fungal species are:",opts:["Edible mushrooms","Parasites or pathogens, mostly on or in plants","Free-living marine organisms","Bioluminescent"],ans:1,ch:"Ch 31"},
  {id:53,q:"What is mycosis?",opts:["A type of mushroom","The general term for a fungal infection in animals","A fungal reproductive structure","A mutualistic relationship"],ans:1,ch:"Ch 31"},
  {id:54,q:"Ringworm and athlete's foot are examples of:",opts:["Bacterial infections","Viral infections","Human mycoses (fungal infections)","Parasitic worm infections"],ans:2,ch:"Ch 31"},
  {id:55,q:"Candida albicans causes:",opts:["Malaria","Yeast infections","Lyme disease","Botulism"],ans:1,ch:"Ch 31"},
  {id:56,q:"Fossil evidence indicates fungi formed _____ relationships with early land plants.",opts:["Parasitic","Competitive","Mutualistic","Predatory"],ans:2,ch:"Ch 31"},
  {id:57,q:"Chytrids can act as:",opts:["Only decomposers","Only parasites","Decomposers, parasites, or mutualists","Only mutualists"],ans:2,ch:"Ch 31"},
  {id:58,q:"The taproot develops from the primary root and prevents the plant from toppling. Lateral roots are responsible for:",opts:["Photosynthesis","Reproduction","Absorption","Gas exchange"],ans:2,ch:"Ch 35"},
  {id:59,q:"A stem consists of _____ (where leaves attach) and _____ (segments between them).",opts:["Roots and shoots","Nodes and internodes","Xylem and phloem","Pith and cortex"],ans:1,ch:"Ch 35"},
  {id:60,q:"In nonwoody plants, the dermal tissue system consists of:",opts:["The periderm","The cortex","The epidermis","The endodermis"],ans:2,ch:"Ch 35"},
  {id:61,q:"A waxy coating called the _____ helps prevent water loss from the epidermis.",opts:["Periderm","Cuticle","Cortex","Lignin"],ans:1,ch:"Ch 35"},
  {id:62,q:"In woody plants, the protective tissue that replaces the epidermis in older regions is called:",opts:["Cuticle","Cortex","Periderm","Pith"],ans:2,ch:"Ch 35"},
  {id:63,q:"Xylem conducts:",opts:["Sugars downward","Water and dissolved minerals upward from roots","Hormones laterally","Oxygen to all cells"],ans:1,ch:"Ch 35"},
  {id:64,q:"Phloem transports:",opts:["Water and minerals upward","Sugars from where they are made to where they are needed","Oxygen from leaves to roots","DNA between cells"],ans:1,ch:"Ch 35"},
  {id:65,q:"Ground tissue internal to vascular tissue is _____ ; external to vascular tissue is _____.",opts:["Cortex; pith","Pith; cortex","Xylem; phloem","Epidermis; periderm"],ans:1,ch:"Ch 35"},
  {id:66,q:"Apical meristems are located at the tips of roots and shoots and are responsible for:",opts:["Secondary growth (adding thickness)","Primary growth (elongating shoots and roots)","Producing flowers","Gas exchange"],ans:1,ch:"Ch 35"},
  {id:67,q:"Lateral meristems add _____ to woody plants, a process called _____.",opts:["Length; primary growth","Thickness; secondary growth","Leaves; foliation","Roots; radical growth"],ans:1,ch:"Ch 35"},
  {id:68,q:"What are the 3 zones of cells where growth occurs behind the root tip?",opts:["Zone of absorption, zone of transport, zone of storage","Zone of cell division, zone of elongation, zone of differentiation/maturation","Zone of mitosis, zone of meiosis, zone of fertilization","Zone of xylem, zone of phloem, zone of cambium"],ans:1,ch:"Ch 35"},
  {id:69,q:"The angiosperm life cycle is characterized by the '3 Fs':",opts:["Fungi, ferns, fruits","Flowers, double fertilization, and fruits","Flagella, fimbriae, fission","Fronds, fertilization, fragmentation"],ans:1,ch:"Ch 38"},
  {id:70,q:"What is a receptacle in a flower?",opts:["The pollen-producing structure","The part of the flower stem where all flower parts are attached","The female reproductive organ","The colorful petal"],ans:1,ch:"Ch 38"},
  {id:71,q:"The four floral organs are:",opts:["Roots, stems, leaves, flowers","Carpels, stamens, petals, and sepals","Xylem, phloem, pith, cortex","Ovule, seed, fruit, embryo"],ans:1,ch:"Ch 38"},
  {id:72,q:"A carpel has a long _____ with a _____ on which pollen may land.",opts:["Filament; anther","Style; stigma","Root; tip","Stem; node"],ans:1,ch:"Ch 38"},
  {id:73,q:"A stamen consists of a filament topped by a(n) _____ with pollen sacs.",opts:["Stigma","Ovary","Anther","Sepal"],ans:2,ch:"Ch 38"},
  {id:74,q:"In angiosperms, pollination is the transfer of pollen from:",opts:["Stigma to ovary","Anther to stigma","Root to shoot","Sepal to petal"],ans:1,ch:"Ch 38"},
  {id:75,q:"Double fertilization ensures that endosperm only develops in ovules containing:",opts:["Pollen grains","Fertilized eggs","Spores","Nectar"],ans:1,ch:"Ch 38"},
  {id:76,q:"After double fertilization, each ovule develops into a:",opts:["Fruit","Flower","Seed","Spore"],ans:2,ch:"Ch 38"},
  {id:77,q:"The ovary develops into a:",opts:["Seed","Root","Fruit enclosing the seed","Leaf"],ans:2,ch:"Ch 38"},
  {id:78,q:"Germination depends on imbibition, which is:",opts:["The release of spores","The uptake of water due to low water potential of the dry seed","Cell division in the embryo","Photosynthesis in the cotyledon"],ans:1,ch:"Ch 38"},
  {id:79,q:"Sexual reproduction in flowering plants results in offspring that are:",opts:["Genetically identical to parents","Genetically different from their parents","Clones","Haploid only"],ans:1,ch:"Ch 38"},
  {id:80,q:"Asexual reproduction results in:",opts:["Genetically diverse offspring","A clone of genetically identical organisms","Offspring with mutations","Hybrid organisms"],ans:1,ch:"Ch 38"},
];

// ===== STATE =====
let questions = [];
let answers = {};
let flagged = {};
let revealed = {};   // tracks which questions have been revealed
let currentQ = 0;
let timeLeft = 3600;
let timerInterval = null;
let examSubmitted = false;
let autoAdvanceTimer = null;

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const startScreen = $("#startScreen");
const examScreen = $("#examScreen");
const resultsScreen = $("#resultsScreen");

// ===== UTILITIES =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(pool, count) {
  const shuffled = shuffle(pool);
  const selected = shuffled.slice(0, count);
  return selected.map((q) => {
    const indices = q.opts.map((_, i) => i);
    const shuffledIdx = shuffle(indices);
    const newOpts = shuffledIdx.map((i) => q.opts[i]);
    const newAns = shuffledIdx.indexOf(q.ans);
    return { ...q, opts: newOpts, ans: newAns };
  });
}

function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// ===== SCREENS =====
function showScreen(screen) {
  startScreen.classList.add("hidden");
  examScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

// ===== TIMER =====
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = $("#timer");
    timerEl.textContent = formatTime(timeLeft);
    if (timeLeft < 300) timerEl.classList.add("warning");
    else timerEl.classList.remove("warning");
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

// ===== QUESTION NAV GRID =====
function buildGrid() {
  const grid = $("#qGrid");
  grid.innerHTML = "";
  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "q-grid-btn";
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      clearTimeout(autoAdvanceTimer);
      currentQ = i;
      renderQuestion();
    });
    grid.appendChild(btn);
  });
}

function updateGrid() {
  const btns = $("#qGrid").querySelectorAll(".q-grid-btn");
  btns.forEach((btn, i) => {
    btn.className = "q-grid-btn";
    if (i === currentQ) btn.classList.add("active");

    if (revealed[i] !== undefined) {
      // already answered and revealed
      if (answers[i] === questions[i].ans) btn.classList.add("correct");
      else btn.classList.add("wrong");
    } else if (answers[i] !== undefined) {
      btn.classList.add("answered");
    }

    // flag dot
    let dot = btn.querySelector(".flag-dot");
    if (flagged[i]) {
      if (!dot) {
        dot = document.createElement("span");
        dot.className = "flag-dot";
        dot.textContent = "🚩";
        btn.appendChild(dot);
      }
    } else if (dot) {
      dot.remove();
    }
  });

  // submit button state
  const btnSubmit = $("#btnSubmit");
  const answeredCount = Object.keys(answers).length;
  if (examSubmitted) {
    btnSubmit.classList.add("hidden-btn");
  } else {
    btnSubmit.classList.remove("hidden-btn");
    if (answeredCount === questions.length) btnSubmit.classList.add("ready");
    else btnSubmit.classList.remove("ready");
  }

  // answered counter
  $("#answeredCount").textContent = `${answeredCount}/${questions.length} answered`;
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = questions[currentQ];
  const isRevealed = revealed[currentQ] !== undefined;
  const isLocked = isRevealed || examSubmitted;

  $("#qChapter").textContent = q.ch;
  $("#qNumber").textContent = `Question ${currentQ + 1} of ${questions.length}`;
  $("#qText").textContent = q.q;

  // Show feedback banner if revealed
  let banner = document.getElementById("feedbackBanner");
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "feedbackBanner";
    const qCard = document.querySelector(".question-card");
    qCard.insertBefore(banner, $("#optionsContainer"));
  }

  if (isRevealed) {
    const wasCorrect = answers[currentQ] === q.ans;
    banner.style.display = "block";
    banner.className = wasCorrect ? "feedback-banner correct" : "feedback-banner wrong";
    banner.textContent = wasCorrect ? "✓ Correct!" : "✗ Incorrect — see the correct answer below";
  } else {
    banner.style.display = "none";
  }

  const container = $("#optionsContainer");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.opts.forEach((opt, oi) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";

    const selected = answers[currentQ] === oi;
    const isCorrectOpt = isLocked && oi === q.ans;
    const isWrongSel = isLocked && selected && oi !== q.ans;

    if (isLocked) {
      btn.classList.add("review-mode");
      if (isCorrectOpt) btn.classList.add("correct-opt");
      if (isWrongSel) btn.classList.add("wrong-sel");
    } else {
      if (selected) btn.classList.add("selected");
    }

    const circle = document.createElement("span");
    circle.className = "opt-circle";
    circle.textContent = letters[oi];

    const text = document.createTextNode(opt);

    btn.appendChild(circle);
    btn.appendChild(text);

    if (isCorrectOpt) {
      const ind = document.createElement("span");
      ind.className = "opt-indicator";
      ind.textContent = "✓";
      btn.appendChild(ind);
    }
    if (isWrongSel) {
      const ind = document.createElement("span");
      ind.className = "opt-indicator";
      ind.textContent = "✗";
      btn.appendChild(ind);
    }

    if (!isLocked) {
      btn.addEventListener("click", () => {
        // Lock in answer and reveal immediately
        answers[currentQ] = oi;
        revealed[currentQ] = true;
        renderQuestion();
        updateGrid();

        // Auto-advance to next unanswered question after 1.5s
        clearTimeout(autoAdvanceTimer);
        if (!examSubmitted) {
          autoAdvanceTimer = setTimeout(() => {
            const next = findNextUnanswered(currentQ);
            if (next !== null) {
              currentQ = next;
              renderQuestion();
            }
          }, 1500);
        }
      });
    }

    container.appendChild(btn);
  });

  // Navigation buttons
  $("#btnPrev").disabled = currentQ === 0;
  $("#btnNext").disabled = currentQ === questions.length - 1;

  // Flag button
  const flagBtn = $("#btnFlag");
  if (examSubmitted) {
    flagBtn.style.display = "none";
  } else {
    flagBtn.style.display = "";
    if (flagged[currentQ]) {
      flagBtn.classList.add("flagged");
      flagBtn.textContent = "🚩 Flagged";
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.textContent = "Flag for Review";
    }
  }

  updateGrid();
}

// Find next unanswered question after given index (wraps around)
function findNextUnanswered(from) {
  for (let i = from + 1; i < questions.length; i++) {
    if (answers[i] === undefined) return i;
  }
  for (let i = 0; i < from; i++) {
    if (answers[i] === undefined) return i;
  }
  return null; // all answered
}

// ===== SUBMIT =====
function submitExam() {
  clearInterval(timerInterval);
  clearTimeout(autoAdvanceTimer);
  examSubmitted = true;
  // Mark all as revealed
  questions.forEach((_, i) => { revealed[i] = true; });
  showResultsScreen();
}

function showResultsScreen() {
  const score = questions.reduce((s, q, i) => s + (answers[i] === q.ans ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;

  $("#resultsEmoji").textContent = passed ? "🎉" : "📚";
  $("#resultsHeading").textContent = passed ? "Great Job!" : "Keep Studying!";
  $("#resultsSubtext").textContent = passed ? "You're on track for this exam." : "Review the missed topics below.";
  const pctEl = $("#resultsPct");
  pctEl.textContent = `${pct}%`;
  pctEl.className = `results-pct ${passed ? "pass" : "fail"}`;
  $("#resultsDetail").textContent = `${score} / ${questions.length} correct`;

  // Chapter breakdown
  const chScores = {};
  questions.forEach((q, i) => {
    if (!chScores[q.ch]) chScores[q.ch] = { t: 0, c: 0 };
    chScores[q.ch].t++;
    if (answers[i] === q.ans) chScores[q.ch].c++;
  });

  const breakdownEl = $("#chapterBreakdown");
  breakdownEl.innerHTML = "";
  Object.keys(chScores).sort().forEach((ch) => {
    const { t, c } = chScores[ch];
    const p = Math.round((c / t) * 100);
    const colorClass = p >= 70 ? "green" : p >= 50 ? "yellow" : "red";
    breakdownEl.innerHTML += `
      <div class="ch-row">
        <div class="ch-row-header"><span>${ch}</span><span>${c}/${t} (${p}%)</span></div>
        <div class="ch-bar-bg"><div class="ch-bar-fill ${colorClass}" style="width:${p}%"></div></div>
      </div>`;
  });

  // Missed questions
  const missed = questions.map((q, i) => ({ q, i })).filter(({ q, i }) => answers[i] !== q.ans);
  $("#missedTitle").textContent = `Missed Questions (${missed.length})`;
  const missedList = $("#missedList");
  missedList.innerHTML = "";

  if (missed.length === 0) {
    $("#missedSection").classList.add("hidden");
  } else {
    $("#missedSection").classList.remove("hidden");
    missed.forEach(({ q, i }) => {
      const yourAnswer = answers[i] !== undefined ? q.opts[answers[i]] : "No answer";
      missedList.innerHTML += `
        <div class="missed-item">
          <p class="missed-q"><strong>Q${i + 1}:</strong> ${q.q}</p>
          <p class="missed-yours">Your answer: ${yourAnswer}</p>
          <p class="missed-correct">Correct: ${q.opts[q.ans]}</p>
        </div>`;
    });
  }

  showScreen(resultsScreen);
}

// ===== START EXAM =====
function startExam() {
  questions = buildExam(allQuestions, 50);
  answers = {};
  flagged = {};
  revealed = {};
  currentQ = 0;
  examSubmitted = false;
  timeLeft = 3600;
  clearTimeout(autoAdvanceTimer);

  showScreen(examScreen);
  buildGrid();
  renderQuestion();
  startTimer();
  $("#timer").textContent = formatTime(timeLeft);
  $("#timer").classList.remove("warning");
}

// ===== EVENT LISTENERS =====
$("#btnStart").addEventListener("click", startExam);

$("#btnPrev").addEventListener("click", () => {
  clearTimeout(autoAdvanceTimer);
  if (currentQ > 0) { currentQ--; renderQuestion(); }
});

$("#btnNext").addEventListener("click", () => {
  clearTimeout(autoAdvanceTimer);
  if (currentQ < questions.length - 1) { currentQ++; renderQuestion(); }
});

$("#btnFlag").addEventListener("click", () => {
  flagged[currentQ] = !flagged[currentQ];
  renderQuestion();
});

$("#btnSubmit").addEventListener("click", () => {
  const unanswered = questions.length - Object.keys(answers).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  submitExam();
});

$("#btnReview").addEventListener("click", () => {
  currentQ = 0;
  showScreen(examScreen);
  $("#btnSubmit").classList.add("hidden-btn");
  renderQuestion();
});

$("#btnRetake").addEventListener("click", startExam);  {id:33,q:"What are the four supergroups of eukaryotes?",opts:["Bacteria, Archaea, Protista, Fungi","Excavata, Archaeplastida, SAR, Unikonta","Animalia, Plantae, Fungi, Protista","Cocci, Bacilli, Spirilla, Vibrio"],ans:1,ch:"Ch 27"},
  {id:34,q:"What is endosymbiosis?",opts:["Two organisms competing for resources","When a eukaryotic cell engulfed a bacterium and kept it alive inside, becoming mitochondria or chloroplast","Bacteria exchanging DNA through pili","A type of parasitism"],ans:1,ch:"Ch 27"},
  {id:35,q:"During secondary endosymbiosis, red and green algae were ingested by:",opts:["Prokaryotic cells","Heterotrophic eukaryotes","Other algae","Fungi"],ans:1,ch:"Ch 27"},
  {id:36,q:"What are characteristics of dinoflagellates?",opts:["No flagella, found on land","2 flagella, found in marine and freshwater","1 flagellum, found in soil","3 flagella, found in glaciers"],ans:1,ch:"Ch 27"},
  {id:37,q:"The apicomplexan Plasmodium causes:",opts:["Cholera","Lyme disease","Malaria","Dysentery"],ans:2,ch:"Ch 27"},
  {id:38,q:"Rhizarians are:",opts:["Fungi","Bacteria","Amoebas","Plants"],ans:2,ch:"Ch 27"},
  {id:39,q:"Red algae get their color from:",opts:["Chlorophyll","Carotenoids","Phycoerythrin","Xanthophyll"],ans:2,ch:"Ch 27"},
  {id:40,q:"Entamoeba histolytica causes:",opts:["Malaria","Amebic dysentery","Lyme disease","Botulism"],ans:1,ch:"Ch 27"},
  // CHAPTER 31 — Fungi
  {id:41,q:"What do fungal cell walls contain?",opts:["Peptidoglycan","Cellulose","Chitin","Keratin"],ans:2,ch:"Ch 31"},
  {id:42,q:"What are the most common body structures for fungi?",opts:["Multicellular filaments and single cells (yeasts)","Colonial clusters and biofilms","Spherical cocci and rods","Flagellated cells and cilia"],ans:0,ch:"Ch 31"},
  {id:43,q:"What is mycorrhizae?",opts:["A fungal infection in animals","Mutually beneficial relationships between fungi and plant roots","A type of fungal spore","Parasitic fungi on insects"],ans:1,ch:"Ch 31"},
  {id:44,q:"Mycorrhizal fungi colonize soils by the dispersal of haploid cells called:",opts:["Gametes","Conidia","Spores","Zygotes"],ans:2,ch:"Ch 31"},
  {id:45,q:"What do fungi use as a sexual calling/signaling system?",opts:["Bioluminescence","Pheromones","Flagella","Fimbriae"],ans:1,ch:"Ch 31"},
  {id:46,q:"Zygosporangia are resistant to:",opts:["Heat and UV light","Freezing and drying","Antibiotics","Acid and base"],ans:1,ch:"Ch 31"},
  {id:47,q:"Ascomycetes reproduce asexually by enormous numbers of asexual spores called:",opts:["Basidiospores","Zoospores","Conidia","Endospores"],ans:2,ch:"Ch 31"},
  {id:48,q:"Basidiomycetes include:",opts:["Bread molds and water molds","Mushrooms, puffballs, and shelf fungi","Only yeasts","Lichens and mosses"],ans:1,ch:"Ch 31"},
  {id:49,q:"Fungi interact with other organisms as:",opts:["Only parasites","Only decomposers","Decomposers, mutualists, and pathogens","Only mutualists"],ans:2,ch:"Ch 31"},
  {id:50,q:"A lichen is a symbiotic association between:",opts:["Two fungi species","A photosynthetic microorganism and a fungus","A plant and an animal","Two bacteria species"],ans:1,ch:"Ch 31"},
  {id:51,q:"The photosynthetic component in a lichen is:",opts:["Red algae or diatoms","Mosses or ferns","Green algae or cyanobacteria","Brown algae or dinoflagellates"],ans:2,ch:"Ch 31"},
  {id:52,q:"About 30% of known fungal species are:",opts:["Edible mushrooms","Parasites or pathogens, mostly on or in plants","Free-living marine organisms","Bioluminescent"],ans:1,ch:"Ch 31"},
  {id:53,q:"What is mycosis?",opts:["A type of mushroom","The general term for a fungal infection in animals","A fungal reproductive structure","A mutualistic relationship"],ans:1,ch:"Ch 31"},
  {id:54,q:"Ringworm and athlete's foot are examples of:",opts:["Bacterial infections","Viral infections","Human mycoses (fungal infections)","Parasitic worm infections"],ans:2,ch:"Ch 31"},
  {id:55,q:"Candida albicans causes:",opts:["Malaria","Yeast infections","Lyme disease","Botulism"],ans:1,ch:"Ch 31"},
  {id:56,q:"Fossil evidence indicates fungi formed _____ relationships with early land plants.",opts:["Parasitic","Competitive","Mutualistic","Predatory"],ans:2,ch:"Ch 31"},
  {id:57,q:"Chytrids can act as:",opts:["Only decomposers","Only parasites","Decomposers, parasites, or mutualists","Only mutualists"],ans:2,ch:"Ch 31"},
  // CHAPTER 35 — Plant Structure
  {id:58,q:"The taproot develops from the primary root and prevents the plant from toppling. Lateral roots are responsible for:",opts:["Photosynthesis","Reproduction","Absorption","Gas exchange"],ans:2,ch:"Ch 35"},
  {id:59,q:"A stem consists of _____ (where leaves attach) and _____ (segments between them).",opts:["Roots and shoots","Nodes and internodes","Xylem and phloem","Pith and cortex"],ans:1,ch:"Ch 35"},
  {id:60,q:"In nonwoody plants, the dermal tissue system consists of:",opts:["The periderm","The cortex","The epidermis","The endodermis"],ans:2,ch:"Ch 35"},
  {id:61,q:"A waxy coating called the _____ helps prevent water loss from the epidermis.",opts:["Periderm","Cuticle","Cortex","Lignin"],ans:1,ch:"Ch 35"},
  {id:62,q:"In woody plants, the protective tissue that replaces the epidermis in older regions is called:",opts:["Cuticle","Cortex","Periderm","Pith"],ans:2,ch:"Ch 35"},
  {id:63,q:"Xylem conducts:",opts:["Sugars downward","Water and dissolved minerals upward from roots","Hormones laterally","Oxygen to all cells"],ans:1,ch:"Ch 35"},
  {id:64,q:"Phloem transports:",opts:["Water and minerals upward","Sugars from where they are made to where they are needed","Oxygen from leaves to roots","DNA between cells"],ans:1,ch:"Ch 35"},
  {id:65,q:"Ground tissue internal to vascular tissue is _____ ; external to vascular tissue is _____.",opts:["Cortex; pith","Pith; cortex","Xylem; phloem","Epidermis; periderm"],ans:1,ch:"Ch 35"},
  {id:66,q:"Apical meristems are located at the tips of roots and shoots and are responsible for:",opts:["Secondary growth (adding thickness)","Primary growth (elongating shoots and roots)","Producing flowers","Gas exchange"],ans:1,ch:"Ch 35"},
  {id:67,q:"Lateral meristems add _____ to woody plants, a process called _____.",opts:["Length; primary growth","Thickness; secondary growth","Leaves; foliation","Roots; radical growth"],ans:1,ch:"Ch 35"},
  {id:68,q:"What are the 3 zones of cells where growth occurs behind the root tip?",opts:["Zone of absorption, zone of transport, zone of storage","Zone of cell division, zone of elongation, zone of differentiation/maturation","Zone of mitosis, zone of meiosis, zone of fertilization","Zone of xylem, zone of phloem, zone of cambium"],ans:1,ch:"Ch 35"},
  // CHAPTER 38 — Angiosperms
  {id:69,q:"The angiosperm life cycle is characterized by the '3 Fs':",opts:["Fungi, ferns, fruits","Flowers, double fertilization, and fruits","Flagella, fimbriae, fission","Fronds, fertilization, fragmentation"],ans:1,ch:"Ch 38"},
  {id:70,q:"What is a receptacle in a flower?",opts:["The pollen-producing structure","The part of the flower stem where all flower parts are attached","The female reproductive organ","The colorful petal"],ans:1,ch:"Ch 38"},
  {id:71,q:"The four floral organs are:",opts:["Roots, stems, leaves, flowers","Carpels, stamens, petals, and sepals","Xylem, phloem, pith, cortex","Ovule, seed, fruit, embryo"],ans:1,ch:"Ch 38"},
  {id:72,q:"A carpel has a long _____ with a _____ on which pollen may land.",opts:["Filament; anther","Style; stigma","Root; tip","Stem; node"],ans:1,ch:"Ch 38"},
  {id:73,q:"A stamen consists of a filament topped by a(n) _____ with pollen sacs.",opts:["Stigma","Ovary","Anther","Sepal"],ans:2,ch:"Ch 38"},
  {id:74,q:"In angiosperms, pollination is the transfer of pollen from:",opts:["Stigma to ovary","Anther to stigma","Root to shoot","Sepal to petal"],ans:1,ch:"Ch 38"},
  {id:75,q:"Double fertilization ensures that endosperm only develops in ovules containing:",opts:["Pollen grains","Fertilized eggs","Spores","Nectar"],ans:1,ch:"Ch 38"},
  {id:76,q:"After double fertilization, each ovule develops into a:",opts:["Fruit","Flower","Seed","Spore"],ans:2,ch:"Ch 38"},
  {id:77,q:"The ovary develops into a:",opts:["Seed","Root","Fruit enclosing the seed","Leaf"],ans:2,ch:"Ch 38"},
  {id:78,q:"Germination depends on imbibition, which is:",opts:["The release of spores","The uptake of water due to low water potential of the dry seed","Cell division in the embryo","Photosynthesis in the cotyledon"],ans:1,ch:"Ch 38"},
  {id:79,q:"Sexual reproduction in flowering plants results in offspring that are:",opts:["Genetically identical to parents","Genetically different from their parents","Clones","Haploid only"],ans:1,ch:"Ch 38"},
  {id:80,q:"Asexual reproduction results in:",opts:["Genetically diverse offspring","A clone of genetically identical organisms","Offspring with mutations","Hybrid organisms"],ans:1,ch:"Ch 38"},
];

// ===== STATE =====
let questions = [];
let answers = {};
let flagged = {};
let currentQ = 0;
let timeLeft = 3600;
let timerInterval = null;
let examSubmitted = false;

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const startScreen = $("#startScreen");
const examScreen = $("#examScreen");
const resultsScreen = $("#resultsScreen");

// ===== UTILITIES =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(pool, count) {
  const shuffled = shuffle(pool);
  const selected = shuffled.slice(0, count);
  return selected.map((q) => {
    const indices = q.opts.map((_, i) => i);
    const shuffledIdx = shuffle(indices);
    const newOpts = shuffledIdx.map((i) => q.opts[i]);
    const newAns = shuffledIdx.indexOf(q.ans);
    return { ...q, opts: newOpts, ans: newAns };
  });
}

function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// ===== SCREENS =====
function showScreen(screen) {
  startScreen.classList.add("hidden");
  examScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

// ===== TIMER =====
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = $("#timer");
    timerEl.textContent = formatTime(timeLeft);
    if (timeLeft < 300) timerEl.classList.add("warning");
    else timerEl.classList.remove("warning");
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

// ===== QUESTION NAV GRID =====
function buildGrid() {
  const grid = $("#qGrid");
  grid.innerHTML = "";
  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "q-grid-btn";
    btn.textContent = i + 1;
    btn.addEventListener("click", () => { currentQ = i; renderQuestion(); });
    grid.appendChild(btn);
  });
}

function updateGrid() {
  const btns = $("#qGrid").querySelectorAll(".q-grid-btn");
  btns.forEach((btn, i) => {
    btn.className = "q-grid-btn";
    if (i === currentQ) btn.classList.add("active");
    if (examSubmitted) {
      if (answers[i] === questions[i].ans) btn.classList.add("correct");
      else if (answers[i] !== undefined) btn.classList.add("wrong");
    } else {
      if (answers[i] !== undefined) btn.classList.add("answered");
    }
    // flag dot
    let dot = btn.querySelector(".flag-dot");
    if (flagged[i]) {
      if (!dot) {
        dot = document.createElement("span");
        dot.className = "flag-dot";
        dot.textContent = "🚩";
        btn.appendChild(dot);
      }
    } else if (dot) {
      dot.remove();
    }
  });

  // submit button state
  const btnSubmit = $("#btnSubmit");
  const answeredCount = Object.keys(answers).length;
  if (examSubmitted) {
    btnSubmit.classList.add("hidden-btn");
  } else {
    btnSubmit.classList.remove("hidden-btn");
    if (answeredCount === questions.length) btnSubmit.classList.add("ready");
    else btnSubmit.classList.remove("ready");
  }

  // answered counter
  $("#answeredCount").textContent = `${answeredCount}/${questions.length} answered`;
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = questions[currentQ];
  $("#qChapter").textContent = q.ch;
  $("#qNumber").textContent = `Question ${currentQ + 1} of ${questions.length}`;
  $("#qText").textContent = q.q;

  const container = $("#optionsContainer");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.opts.forEach((opt, oi) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";

    const selected = answers[currentQ] === oi;
    const isCorrectOpt = examSubmitted && oi === q.ans;
    const isWrongSel = examSubmitted && selected && oi !== q.ans;

    if (examSubmitted) {
      btn.classList.add("review-mode");
      if (isCorrectOpt) btn.classList.add("correct-opt");
      if (isWrongSel) btn.classList.add("wrong-sel");
    } else {
      if (selected) btn.classList.add("selected");
    }

    const circle = document.createElement("span");
    circle.className = "opt-circle";
    circle.textContent = letters[oi];

    const text = document.createTextNode(opt);

    btn.appendChild(circle);
    btn.appendChild(text);

    if (isCorrectOpt) {
      const ind = document.createElement("span");
      ind.className = "opt-indicator";
      ind.textContent = "✓";
      btn.appendChild(ind);
    }
    if (isWrongSel) {
      const ind = document.createElement("span");
      ind.className = "opt-indicator";
      ind.textContent = "✗";
      btn.appendChild(ind);
    }

    if (!examSubmitted) {
      btn.addEventListener("click", () => {
        answers[currentQ] = oi;
        renderQuestion();
        updateGrid();
      });
    }

    container.appendChild(btn);
  });

  // Navigation buttons
  $("#btnPrev").disabled = currentQ === 0;
  $("#btnNext").disabled = currentQ === questions.length - 1;

  // Flag button
  const flagBtn = $("#btnFlag");
  if (examSubmitted) {
    flagBtn.style.display = "none";
  } else {
    flagBtn.style.display = "";
    if (flagged[currentQ]) {
      flagBtn.classList.add("flagged");
      flagBtn.textContent = "🚩 Flagged";
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.textContent = "Flag for Review";
    }
  }

  updateGrid();
}

// ===== SUBMIT =====
function submitExam() {
  clearInterval(timerInterval);
  examSubmitted = true;
  showResults();
}

function showResults() {
  const score = questions.reduce((s, q, i) => s + (answers[i] === q.ans ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;

  // Score card
  $("#resultsEmoji").textContent = passed ? "🎉" : "📚";
  $("#resultsHeading").textContent = passed ? "Great Job!" : "Keep Studying!";
  $("#resultsSubtext").textContent = passed ? "You're on track for this exam." : "Review the missed topics below.";
  const pctEl = $("#resultsPct");
  pctEl.textContent = `${pct}%`;
  pctEl.className = `results-pct ${passed ? "pass" : "fail"}`;
  $("#resultsDetail").textContent = `${score} / ${questions.length} correct`;

  // Chapter breakdown
  const chScores = {};
  questions.forEach((q, i) => {
    if (!chScores[q.ch]) chScores[q.ch] = { t: 0, c: 0 };
    chScores[q.ch].t++;
    if (answers[i] === q.ans) chScores[q.ch].c++;
  });

  const breakdownEl = $("#chapterBreakdown");
  breakdownEl.innerHTML = "";
  Object.keys(chScores).sort().forEach((ch) => {
    const { t, c } = chScores[ch];
    const p = Math.round((c / t) * 100);
    const colorClass = p >= 70 ? "green" : p >= 50 ? "yellow" : "red";
    breakdownEl.innerHTML += `
      <div class="ch-row">
        <div class="ch-row-header"><span>${ch}</span><span>${c}/${t} (${p}%)</span></div>
        <div class="ch-bar-bg"><div class="ch-bar-fill ${colorClass}" style="width:${p}%"></div></div>
      </div>`;
  });

  // Missed questions
  const missed = questions.map((q, i) => ({ q, i })).filter(({ q, i }) => answers[i] !== q.ans);
  $("#missedTitle").textContent = `Missed Questions (${missed.length})`;
  const missedList = $("#missedList");
  missedList.innerHTML = "";

  if (missed.length === 0) {
    $("#missedSection").classList.add("hidden");
  } else {
    $("#missedSection").classList.remove("hidden");
    missed.forEach(({ q, i }) => {
      const yourAnswer = answers[i] !== undefined ? q.opts[answers[i]] : "No answer";
      missedList.innerHTML += `
        <div class="missed-item">
          <p class="missed-q"><strong>Q${i + 1}:</strong> ${q.q}</p>
          <p class="missed-yours">Your answer: ${yourAnswer}</p>
          <p class="missed-correct">Correct: ${q.opts[q.ans]}</p>
        </div>`;
    });
  }

  showScreen(resultsScreen);
}

// ===== START EXAM =====
function startExam() {
  questions = buildExam(allQuestions, 50);
  answers = {};
  flagged = {};
  currentQ = 0;
  examSubmitted = false;
  timeLeft = 3600;

  showScreen(examScreen);
  buildGrid();
  renderQuestion();
  startTimer();
  $("#timer").textContent = formatTime(timeLeft);
  $("#timer").classList.remove("warning");
}

// ===== EVENT LISTENERS =====
$("#btnStart").addEventListener("click", startExam);
$("#btnPrev").addEventListener("click", () => { if (currentQ > 0) { currentQ--; renderQuestion(); } });
$("#btnNext").addEventListener("click", () => { if (currentQ < questions.length - 1) { currentQ++; renderQuestion(); } });
$("#btnFlag").addEventListener("click", () => {
  flagged[currentQ] = !flagged[currentQ];
  renderQuestion();
});
$("#btnSubmit").addEventListener("click", () => {
  const unanswered = questions.length - Object.keys(answers).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  submitExam();
});
$("#btnReview").addEventListener("click", () => {
  currentQ = 0;
  showScreen(examScreen);
  $("#btnSubmit").classList.add("hidden-btn");
  renderQuestion();
});
$("#btnRetake").addEventListener("click", startExam);
