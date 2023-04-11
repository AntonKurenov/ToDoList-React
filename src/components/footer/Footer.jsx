import './footer.scss'

function Footer() {
	let time = new Date();

	return (
		<div className="footer">
			<div className="footer__content">
				<div className="footer__stats"></div>
				<div className="footer__time-and-date">{`${time.getHours()} : ${time.getMinutes()}`}</div>
			</div>
		</div>
	)
}

export default Footer;