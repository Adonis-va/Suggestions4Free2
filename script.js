document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category img");
    categories.forEach((img) => {
        img.style.opacity = "0"; 
        setTimeout(() => {
            img.style.transition = "opacity 1s ease-in-out";
            img.style.opacity = "1";
        }, 500);
    });
});
document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

const sportsData = [
    { 
        name: "Soccer", 
        description: "Players use their feet to dribble, pass, and shoot a ball into the opposing team's goal.\n\nWhy It's Interesting: Soccer is a globally loved sport, known for its fast pace, skillful footwork, and teamwork.\n\nHow to Start: Beginners can practice dribbling and passing with friends or join a local amateur club." 
    },
    { 
        name: "Basketball", 
        description: "Players bounce (dribble) the ball and aim to shoot it through the opponent's hoop for points.\n\nWhy It's Interesting: The sport is exciting due to its fast transitions, strategic teamwork, and impressive dunks.\n\nHow to Start: Start by practicing shooting and dribbling at a local court; community leagues are great entry points." 
    },
    { 
        name: "Tennis", 
        description: "Two or four players use rackets to hit a ball over a net, aiming to outscore the opponent.\n\nWhy It's Interesting: Tennis combines speed, precision, and mental strategy, making it a highly engaging sport.\n\nHow to Start: Rent a racket, practice hitting against a wall, or take beginner lessons at a local club." 
    },
    { 
        name: "Swimming", 
        description: "Competitors race through water using various strokes like freestyle, breaststroke, and backstroke.\n\nWhy It's Interesting: It's both relaxing and intense, offering full-body exercise while testing endurance.\n\nHow to Start: Beginners should practice floating and basic strokes in a pool before progressing to lap swimming." 
    },
    { 
        name: "Baseball", 
        description: "Players hit a pitched ball and run through bases to score runs while the opposing team fields.\n\nWhy It's Interesting: The combination of batting, fielding, and tactical plays makes it unpredictable and thrilling.\n\nHow to Start: Begin by practicing catching and throwing; batting cages and little league teams are ideal entry points." 
    },
    { 
        name: "Golf", 
        description: "Players use clubs to hit a small ball into holes spread across vast courses with as few strokes as possible.\n\nWhy It's Interesting: Golf requires patience, precision, and strategy, with scenic courses adding to the experience.\n\nHow to Start: Try hitting balls at a driving range before moving onto beginner-friendly golf courses." 
    },
    { 
        name: "Cycling", 
        description: "Riders compete in races or enjoy long-distance rides through different terrains.\n\nWhy It's Interesting: Whether sprinting or endurance cycling, it offers a mix of speed and scenic adventure.\n\nHow to Start: Start with a sturdy road or mountain bike and practice short rides before advancing to challenging routes." 
    },
    { 
        name: "Volleyball", 
        description: "Teams volley a ball over a net, trying to land it in the opponent’s side while preventing returns.\n\nWhy It's Interesting: High-energy jumps, spikes, and teamwork make volleyball fast-paced and intense.\n\nHow to Start: Join a casual beach or indoor volleyball game to learn basics like serving and bumping." 
    },
    { 
        name: "Boxing", 
        description: "Opponents fight within a ring using controlled punches while dodging and defending.\n\nWhy It's Interesting: Boxing demands agility, strategy, and discipline, making it one of the most physically demanding sports.\n\nHow to Start: Beginners should focus on basic punches and footwork at a boxing gym with a coach." 
    },
    { 
        name: "Track & Field", 
        description: "Athletes compete in sprinting, jumping, and throwing events, testing speed and technique.\n\nWhy It's Interesting: Each discipline challenges different physical attributes, offering both explosive action and technical finesse.\n\nHow to Start: Pick a specific event and practice fundamentals like sprinting, high jumps, or discus throws at an athletics center." 
    }
];
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.querySelector(".close-btn");

sportsData.forEach(sport => {
    const sportBox = document.createElement("div");
    sportBox.classList.add("sport-box");
    sportBox.textContent = sport.name;

    sportBox.addEventListener("click", () => {
        popupTitle.textContent = sport.name;
        popupDescription.textContent = sport.description;
        popup.style.display = "flex";
    });

    sportsContainer.appendChild(sportBox);
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    popup.style.display = "none";
});

sportsData.forEach(sport => {
    const sportBox = document.createElement("div");
    sportBox.classList.add("sport-box");
    sportBox.textContent = sport.name;

    sportBox.addEventListener("click", () => {
        popup.style.display = "flex";
        popupTitle.textContent = sport.name;
        popupDescription.textContent = sport.description;
    });

    sportsContainer.appendChild(sportBox);
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

