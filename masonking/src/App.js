import './App.css'

export default function App() {
  return (
	  <div className="container">
		<div className="left"></div>
		<div className="body">
			<div className="nav">
					<h1 className="name">Mason King</h1>
					<div className="navItems">
						<a href="#">About Me</a>
						<a href="#">Experience</a>
						<a href="#">My Work</a>
						<a href="#">Reviews</a>
						<a href="#">Contact</a>
					</div>
					<div class="hamburger">
						<div class="line1"></div>
            			<div class="line2"></div>
						<div class="line3"></div>
					</div>
			</div>
			<div className="banner">
				<h1 className="title">Hello, Im <span>Mason</span> </h1>
				<p className="subtitle">I am a freelance Developer.</p>
				<img className="me" src="/src/assets/mason.png"></img>
			</div>
			<div className="about">
				<h1 className="sectionTitle">About Me</h1>
				<p>Hello, My name is Mason. I am currently 17 years old and a Junior in Highschool. I have been coding for roughly 3 years now, starting in Java. Most of my development knowledge roots from the SpigotAPI, a API used to create Minecraft plugins. I have also used many different languages. Throughout Higschool thus far, I have maintained a 3.5 GPA while enrolled in AP and advanced classes. After Highschool I plan to presue a carrer in Computer Networking.</p>				
			</div>
			<div className="experience">
				<h1 className="sectionTitle">Experience</h1>
				<p>Throughout my time as a freelancer I have learned many skills. I have completed 30+ Minecraft plugins in the course of 2 years, aswell as many other personal projects.</p>
				<div className="skills">
					<div className="skill">
						<div className="skillBar">85%</div>
						<div className="java">Java</div>
					</div>
					<div className="skill">
						<div className="skillBar">65%</div>
						<div className="javascript">Javascript</div>
					</div>
					<div className="skill">
						<div className="skillBar">55%</div>
						<div className="html">HTML & CSS</div>
					</div>
					<div className="skill">
						<div className="skillBar">45%</div>
						<div className="python">Python</div>
					</div>
				</div>
			</div>
			<div className="work">
				<h1 className="sectionTitle">My Work</h1>
				<div className="workContainer">
						<div className="workCard">
							<img src="/src/assets/proj1.png"></img>
							<h1 className="workTitle">Claims</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">This is a sample plugin description, this will need to be edited at some point and time... Just a placeholder</p>
						</div>
						<div className="workCard">
							<img src="/src/assets/proj1.png"></img>
							<h1 className="workTitle">Claims</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">This is a sample plugin description, this will need to be edited at some point and time... Just a placeholder</p>
						</div>
						<div className="workCard">
							<img src="/src/assets/proj1.png"></img>
							<h1 className="workTitle">Claims</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">This is a sample plugin description, this will need to be edited at some point and time... Just a placeholder</p>
						</div>
				</div>
			</div>
	  	</div>
		<div className="right"></div>
	  </div>
  )
}

function hamburger() {
	var x = document.getElementById('navItems');
	if(x == null) return;
	if(x.className === "navItems") {
		x.className += " responsive";
	} else {
		x.className = "navItems";
	}
}