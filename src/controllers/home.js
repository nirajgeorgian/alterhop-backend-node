export const home = (req, res) => {
	res.send({
		host: req.headers.host,
		message: 'API up and running.',
	})
}
