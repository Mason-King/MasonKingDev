import './App.css'

export default function App() {
  return (
	  <div className="container">
		<div className="left"></div>
		<div className="body">
			<div className="nav">
					<h1 className="name">Mason King</h1>
					<div className="navItems">
						<a href="#about">About Me</a>
						<a href="#experience">Experience</a>
						<a href="#work">My Work</a>
						<a href="#contact">Contact</a>
					</div>
			</div>
			<div className="banner">
				<h1 className="title">Hello, Im <span>Mason</span> </h1>
				<p className="subtitle">I am a freelance Developer.</p>
				<img className="me" src="../mason.png"></img>
			</div>
			<div className="about" id="about">
				<h1 className="sectionTitle">About Me</h1>
				<p>Hello, My name is Mason. I am currently 17 years old and a Junior in Highschool. I have been coding for roughly 3 years now, starting in Java. Most of my development knowledge roots from the SpigotAPI, a API used to create Minecraft plugins. I have also used many different languages. Throughout Higschool thus far, I have maintained a 3.5 GPA while enrolled in AP and advanced classes. After Highschool I plan to presue a carrer in Computer Networking.</p>				
			</div>
			<div className="experience" id="experience">
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
			<div className="work" id="work">
				<h1 className="sectionTitle">My Work</h1>
				<div className="workContainer">
						<div className="workCard">
							<img src="../proj1.png"></img>
							<h1 className="workTitle">Claims</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">Claims plugin is your basic claims plugin, with the ability to ban and kick players, as well as change visitors and trusted permissions.</p>
						</div>
						<div className="workCard">
							<img src="../proj2.png"></img>
							<h1 className="workTitle">Blackmarket</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">Blackmarket features a wondering NPC with a rotating shop. The NPC moves to locations predefined and changes its shop items every time it switches.</p>
						</div>
						<div className="workCard">
							<img src="../proj3.png"></img>
							<h1 className="workTitle">Custom Enchants</h1>
							<h1 className="workLang">Java</h1>
							<p className="description">This was a complete remake of all of the Archon Custom enchants. Featuring over 60 different enchants, tikerere, and scrolls.</p>
						</div>
				</div>
			</div>
			<div className="contact" id="contact">
				<h1 className="sectionTitle">Contact me</h1>
				<div className="cards">
				<div className="contactCard">
					<img src="../discord.png"></img>
					<h2>Mason King#9052</h2>
				</div>
				<div className="contactCard">
					<img src="../Mcm.png"></img>
					<h2>Mason.king</h2>
				</div>
				<div className="contactCard">
					<img src="../git.png"></img>
					<h2>Mason_king</h2>	
				</div>
				</div>
			</div>
	  	</div>
		<div className="right"></div>
	  </div>
  )
}