import { Container, Row, Col } from "reactstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
function Footer() {
	return (
		<footer>
			<Container fluid={true}>
				<Row>
					<Col sm="12" md="4">
						<h2>Contact Us</h2>
						<ul className="list-unstyled">
							<li>
								<FontAwesomeIcon icon={faPhone} />
								+880 01334567865
							</li>
							<li>
								<a
									href="https://gmail.com"
									style={{ color: "white" }}
								>
									<FontAwesomeIcon icon={faEnvelope} />{" "}
									contact.service@gmail.com
								</a>
							</li>
						</ul>
					</Col>

					<Col sm="12" md="4">
						<h2>Address</h2>
						<p>House NO. 123/257</p>
						<p>Greater Road</p>
						<p>Dhaka</p>
					</Col>
					<Col sm="12" md="4">
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://facebook.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://twitter.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://linkedin.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://github.com"
							fgColor="white"
						/>
					</Col>
				</Row>
				<Row>
					<Col sm="12">
						<p>©Copyright 2022 || Hospital Management System</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
export default Footer;
