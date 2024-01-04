const ExperienceEntry = () => {
	return (
		<article>
			<hgroup>
				<h3 className="color-accent">Amazon Web Services (AWS)</h3>
				<p>2019 – Present</p>
			</hgroup>
			<div className="employment-position">
				<hgroup>
					<h4>Front-End Engineer</h4>
					<p>(Current position)</p>
				</hgroup>
				<div className="employment-details">
					<hgroup>
						<h5>IT Support contact resolution software development</h5>
						<p className="supplemental-list">
							React, Typescript, Node.js, npm, Sass / CSS, HTML, AWS, Redux,
							GraphQL
						</p>
					</hgroup>
					<p>
						I am currently responsible for the front end design and development
						on products used by IT Support Engineers (ITSEs) that support all
						Amazon employees (about 5000 regular users). The main product is a
						web application that incorporates many tools together for the sake
						of enabling ITSEs to have an efficient and centralized workflow.
					</p>
					<p>
						Additionally, I am leading the development of re-usable
						micro-frontends used in multiple Amazon software packages by
						multiple development teams. These are created and connected through
						Webpack's Federated Modules. Each implementation uses React
						lazy-loading, and the latest versions use custom web components and
						custom events to communicate with the host application.
					</p>
				</div>
				<hgroup>
					<h4>Software Development Engineer</h4>
				</hgroup>
				<div className="employment-details">
					<hgroup>
						<h5>AWS Support App in Slack</h5>
						<p className="supplemental-list">
							React, Javascript, Node.js, npm, CSS, HTML, AWS
						</p>
					</hgroup>
					<p>
						On the way to transitioning from a software engineer to specialize
						on the front-end, I was part of a newly-created team that created
						the AWS product that enables AWS customers to receive customer
						support in chat applications, the first instance being{" "}
						<a
							target="_blank"
							href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html"
							rel="noreferrer"
						>
							"AWS Support App in Slack"
						</a>
						. I created the AWS console application for this new product using
						React and Javascript. During the initial phases, I also designed the
						initial UX and created UI mockups for the console application as
						well as the user experience in Slack.
					</p>
				</div>
			</div>
		</article>
	);
};

export default ExperienceEntry;
