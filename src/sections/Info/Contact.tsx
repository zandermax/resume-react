import "./Contact.scss";

const Contact = () => {
	return (
		<article>
			<h2>Contact</h2>
			<ul id="contact-list">
				<li>
					<address>
						<a
							className="li-with-icon"
							href="mailto:zandermaxwell@hey.com"
							rel="noreferrer"
							target="_blank"
						>
							<p>
								zandermaxwell@hey.com
								<span className="contactLink-icon-email contact-icon" />
							</p>
						</a>
					</address>
				</li>
				<li>
					<span>
						<a
							className="li-with-icon"
							href="tel:+4915172534939"
							rel="noreferrer"
							target="_blank"
						>
							<p>
								+49 151 72534939
								<span className="contactLink-icon-phone contact-icon" />
							</p>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							className="li-with-icon"
							href="https://www.linkedin.com/in/zandermax"
							rel="noreferrer"
							target="_blank"
						>
							<p>
								linkedin.com/in/zandermax
								<span className="contactLink-icon-linkedin contact-icon" />
							</p>
						</a>
					</span>
				</li>
				<li>
					<span>
						<a
							className="li-with-icon"
							href="https://www.github.com/zandermax"
							rel="noreferrer"
							target="_blank"
						>
							<p className="contactLink-github">
								github.com/zandermax
								<span className="contactLink-icon-github contact-icon" />
							</p>
						</a>
					</span>
				</li>
			</ul>
		</article>
	);
};

export default Contact;
