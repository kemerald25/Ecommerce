const home = async (req, res, next) => {
    try {
        res.status(200).send({ msg: "Wellcome to Home ADitya" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const register = async (req, res, next) => {
    try {
        console.log(req.body);
        const data = req.body;
        res.status(200).json({ msg: data });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { home, register }