const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");
const promptSymbol = "portfolio@<span style='color:aqua' >umendra</span>:~ $ ";

let commandHistory = [];
let historyIndex = -1;

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = inputElement.value.trim();
    inputElement.value = "";

    if (command !== "") {
      displayOutput(
        promptSymbol + "<span style='color:#fff'>" + command + "</span>"
      );
      addToHistory(command);
      executeCommand(command);
    }

    historyIndex = -1;
    inputElement.focus();
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    showPreviousCommand();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    showNextCommand();
  }
});

function displayOutput(output, isCommand = false) {
  const outputLine = document.createElement("div");
  //   outputLine.textContent = output;
  outputLine.classList.add(isCommand ? "output-line" : "command-line");
  //   outputElement.appendChild(outputLine);
  outputLine.innerHTML = output;
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

function addToHistory(command) {
  commandHistory.unshift(command);
}

function showPreviousCommand() {
  if (historyIndex < commandHistory.length - 1) {
    historyIndex++;
    inputElement.value = commandHistory[historyIndex];
  }
}

function showNextCommand() {
  if (historyIndex >= 0) {
    historyIndex--;
    inputElement.value =
      historyIndex === -1 ? "" : commandHistory[historyIndex];
  }
}

function executeCommand(command) {
  const parts = command.split(" ");
  const commandName = parts[0];
  const args = parts.slice(1);

  switch (commandName) {
    case "about":
      displayOutput(
        `Hi, ✋ my name is Umendra, I'm currently third-year engineering student, pursuing B.Tech in Computer Science & Engineering. My mainly focus:
      - Web Development
      - Android Development
      - IoT Development
I have developed some projects on these domains. I keep up with the latest tech trends so that I can be part of making new and exciting things in the computer science world.
<b>I'm open to contribute in Open-Source Projects.</b> Feel free to contact me and we'll find out together - how to make your products awesome.`,
        true
      );
      break;
    case "banner":
      banner();
      break;
    case "echo":
      if (args.length > 0) {
        displayOutput(args.join(" "), true);
      } else {
        displayOutput("Usage: echo [text]", true);
      }
      break;
    case "date":
      const d = new Date();
      displayOutput(d, true);
      break;
    case "gui":
      openLink("https://fixwithumend.web.app");
      displayOutput("redirecting to GUI portfolio...", true);
      break;
    case "email":
      openLink("mailto:upardhi9@gmail.com");
      displayOutput("Email...", true);
      break;
    case "github":
      openLink("https://github.com/Umendra-Pardhi");
      displayOutput("redirecting to Github profile...", true);
      break;
    case "linkedin":
      openLink("https://www.linkedin.com/in/umendrapardhi");
      displayOutput("redirecting to Linkedin profile...", true);
      break;
    case "instagram":
      openLink("https://www.instagram.com/pardhiumendra/");
      displayOutput("redirecting to Instagram profile...", true);
      break;
    case "youtube":
      openLink("https://www.youtube.com/channel/UCDQkJ9PcjcD3H6jl0yS0VPQ");
      displayOutput("redirecting to Youtube...", true);
      break;
    case "skills":
      displayOutput(
        `
<b>      PYTHON          JAVA
      C/C++           ANDROID DEVELOPMENT(JAVA)
      REACT.JS        HTML+CSS
      JAVASCRIPT      PHP
      MYSQL/SQL       WORDPRESS/CMS
      FIREBASE</b>`,
        true
      );
      break;
    case "projects":
      displayOutput(
        `
<u>Android Projects:</u>
----------------------------------------------
1] Maths Formula App
   -collection of 1000+ basic maths formulas.
    <a  target='_blank' href='https://mathformula.web.app/'>Visit website</a>    <a  target='_blank' href='https://play.google.com/store/apps/details?id=com.umend.mathsformulas'>Get on Playstore</a>
----------------------------------------------
2] Parmatma ek Family app
   -This app is for parmatma ek community where user able to Share thoughts, photos, and upcomming program updates with the Parmatma Ek Community. 🎶 Online Music player also included.
         <a target='_blank' href='https://play.google.com/store/apps/details?id=parmatmaek.in'>Get on Playstore</a>
----------------------------------------------
3] EV station Locator
   -The EV Station Locator App is a user-friendly mobile application designed to help electric vehicle (EV) owners quickly find charging stations.
    <a  href='#'>Get on Playstore</a>
----------------------------------------------

<u>IoT Projects:</u>
----------------------------------------------
1] IoT based Security Alarm System 
   -This system consist of hardware and anddroid application. where Application receive sms from hardware and generate a notification and alert sound on the android device when someone will enter into the place where the hardware is deployed.
    <a  target='_blank' href='https://fixwithumend.web.app/project'>Know more</a>
----------------------------------------------
2] Fingerprint door lock system
    -A fingerprint door lock system that provides secure access control by recognizing and verifying fingerprints for entry.
----------------------------------------------

<u>Web Projects:</u>
----------------------------------------------
1] Weather app
    -This webapp is developed using ReactJs. A weather app that offers real-time weather forecasts, current conditions that help users to stay informed about weather conditions.
    <a  target='_blank' href='https://getweather.web.app/'>Visit website</a>
----------------------------------------------
----------------------------------------------
2] shree online service center
    -This website developed for client. Net Cafe, CSC center Website
    <a  target='_blank' href='https://net-cafe-preview.web.app/'>Visit website</a>
----------------------------------------------
----------------------------------------------
3] HTML editor
    -A live HTML editor that enables users to write, edit, and visualize HTML code in real-time, helping to streamline web development and design processes. 
    <a  target='_blank' href='https://livehtmleditor.web.app/'>Visit website</a>
----------------------------------------------
----------------------------------------------
4] Unit Converter
    -A land unit converter that simplifies the process of converting measurements between different units used for land area, such as square feet, acres, square meters, and hectares.
    <a  target='_blank' href='https://umend-app.web.app/'>Visit website</a>
----------------------------------------------
      `,
        true
      );
      break;
    case "resume":
      displayOutput("available soon...", true);
      break;
    case "contact":
      displayOutput(
        "Email:<a href='mailto:upardhi9@gmail.com' >upardhi9@gmail.com</a>",
        true
      );
      break;
    case "whoami":
      displayOutput("User", true);
      break;
    case "goto":
      if (args.length > 0) {
        const url = args[0];
        openLink(url);
        displayOutput("redirecting to linkedin...", true);
      } else {
        displayOutput("Usage: goto [url]", true);
      }
      break;
    case "clear":
      clearOutput();
      break;
    case "pp":
      const htmlContent =
        "<img width='150px' style='border-radius:10px' src='pp.png'/>";
      displayOutput(htmlContent);
      break;

    case "help":
      displayOutput(`<p style='color:white;margin-left:5px' >Welcome!  Available commands:
        
<b>    about  banner  date  echo  gui help
    email  github  linkedin  instagram  youtube
    skills  projects  resume contact
    whoami  clear  pp
</b>
    clear: clear terminal.
    Type 'gui' or <a href='https://fixwithumend.web.app' target='_blank'>click</a> here for simple user interface</p>`);
      break;
    default:
      displayOutput("Command not recognized: " + command, true);
  }
}

function openLink(url) {
  window.open(url, "_blank");
}

function clearOutput() {
  outputElement.textContent = "";
}

// Display initial prompt
// displayOutput(promptSymbol);

function banner() {
  displayOutput(
    `
        Welcome to my portfolio!

        ██╗   ██╗███╗   ███╗███████╗███╗   ██╗██████╗ ██████╗  █████╗     ██████╗  █████╗ ██████╗ ██████╗ ██╗  ██╗██╗
        ██║   ██║████╗ ████║██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║  ██║██║
        ██║   ██║██╔████╔██║█████╗  ██╔██╗ ██║██║  ██║██████╔╝███████║    ██████╔╝███████║██████╔╝██║  ██║███████║██║
        ██║   ██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║  ██║██╔══██╗██╔══██║    ██╔═══╝ ██╔══██║██╔══██╗██║  ██║██╔══██║██║
        ╚██████╔╝██║ ╚═╝ ██║███████╗██║ ╚████║██████╔╝██║  ██║██║  ██║    ██║     ██║  ██║██║  ██║██████╔╝██║  ██║██║
         ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝

        Type 'help' to see list of available commands...
        `,
    true
  );
}

// if (screen.width <= 768) {

// } else {
//     displayOutput(promptSymbol, false);
//   banner();
// }

const terminalContainer = document.getElementById("f");
terminalContainer.addEventListener("click", () => {
  inputElement.focus();
});
