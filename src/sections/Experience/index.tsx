import "./Experience.scss";
import experienceList from "../../assets/experience.json";
import ExperienceEntry from "./ExperienceEntry";

const Experience = () => {
	return (
		<section className="experience">
			<h2>Work experience</h2>
			{experienceList.map((experience) => (
				<ExperienceEntry
					key={`${experience.dateStart}-${experience.company}`}
					{...experience}
				/>
			))}
			<article>
				<hgroup>
					<h3 className="color-accent">Microsoft</h3>
					<p>2018</p>
				</hgroup>
				<div className="employment-position">
					<h4>Software Development Engineer (Contract)</h4>
					<div className="employment-details">
						<hgroup>
							<h5>Azure API and user interface development</h5>
							<p className="supplemental-list">
								ASP.Net, C#, CSS, Javascript, HTML, SQL
							</p>
						</hgroup>
						<p>
							At Microsoft, I was focused on development work related the
							internal Azure API used to create internal subscriptions and
							registrations. I also developed an improved user interface for
							internal subscription tracking using the Kendo UI library.
						</p>
					</div>
				</div>
			</article>
			<article>
				<hgroup>
					<h3 className="color-accent">ReedHein and Associates</h3>
					<p>2017 – 2018</p>
				</hgroup>
				<div className="employment-position">
					<h4>Software Developer</h4>
					<div className="employment-details">
						<hgroup>
							<h5>Node module development</h5>
							<p className="supplemental-list">
								Javascript, Node.js, npm, GitHub
							</p>
						</hgroup>
						<p>
							Developed an open-source npm software package to assist with
							Salesforce DX development,
							<a
								href="https://www.npmjs.com/package/sfdx"
								rel="noreferrer"
								target="_blank"
							>
								sfdx
							</a>
							, which allows Salesforce DX features to be directly usable within
							Node projects. Also created an additional project that interacts
							with{" "}
							<a
								href="https://www.npmjs.com/package/sfdx"
								rel="noreferrer"
								target="_blank"
							>
								sfdx
							</a>{" "}
							via a UI in React, to make the functionality provided by
							Salesforce DX easier to use by non-developers.
						</p>
					</div>
				</div>
			</article>
			<details>
				<summary>
					<div className="summary-container">
						<p>See more</p>
					</div>
				</summary>
				<article>
					<hgroup>
						<h3 className="color-accent">The Advisory Board Company</h3>
						<p>2015 – 2017</p>
					</hgroup>
					<div className="employment-position">
						<h4>Software Engineer</h4>
						<div className="employment-details">
							<hgroup>
								<h5>Physician Alignment dashboard</h5>
								<p className="supplemental-list">
									Javascript, Node.js, npm, C#, ASP.net
								</p>
							</hgroup>
							<p>
								I helped to create a web app used by healthcare systems that
								used extensive Node.js / javascript / CSS / HTML on the front
								end to interact with SQL database structures through APIs
								written in C# and the ASP.Net framework. My work on this app was
								essentially full-stack development, as I worked on all parts of
								the app.
							</p>
							<hgroup>
								<h5>Physician Relationship Manager (CRM for healthcare)</h5>
								<p className="supplemental-list">
									Salesforce, HTML, Handlebars, CSS, Python, Java
								</p>
							</hgroup>
							<p>
								I started at The Advisory Board by working with the Salesforce
								platform to create Physician Relationship Management software
								for healthcare providers. This work also involved substantial
								front-end design and development using Salesforce technology
								including Apex, SOQL and Visualforce. Other technologies used
								included Javascript, CSS, HTML, as well as some C# / Asp.Net
								work for data interaction.
							</p>
						</div>
					</div>
				</article>
				<article>
					<hgroup>
						<h3 className="color-accent">Iowa State University</h3>
						<p>2013 – 2015</p>
					</hgroup>
					<div className="employment-position">
						<h4>Software Engineer</h4>
						<div className="employment-details">
							<hgroup>
								<h5>Iowa State University Computer Science Department</h5>
								<p className="supplemental-list">
									C, C++, R, Windows shell scripting
								</p>
							</hgroup>
							<p>
								We worked with physicians at the Mayo clinic (and beta programs
								at other institutions) to create, maintain and improve systems
								that provided real-time feedback during endoscopic examinations.
								I worked with two professors and several graduate students to
								implement image analysis procedures that related the movement of
								the inspection camera with measures of performance. Essentially,
								we created an enhanced version of the colonoscopy, which we
								showed through quantitative research increased physicians'
								ability to detect abnormalities in patients. My responsibilities
								included development of the web server that monitored remote
								systems (Apache Tomcat and Java), and remote systems
								configuration (Windows Services and Batch Scripting). The
								software we used was written in Java, and the real-time image
								processing was created using C (specifically OpenCV). I also did
								video creation using ffmpeg and programming video statistics
								using R.
							</p>
						</div>
					</div>
				</article>
			</details>
		</section>
	);
};

export default Experience;
