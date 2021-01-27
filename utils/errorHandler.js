export default (error, _req, res, _next) => {
    // Need better error handler

    console.log("Error Handler Called!!!");
    res.status(500).json({ status: false, error: error.message });
};
