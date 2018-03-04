
module.exports = function player(request) {
    if (request.params.game == 'live') {
        return {
            mild: "?",
            moderate: "?",
            severe: "?",
            liveFeed: "display: block",
            pastLiveFeed: "display: none"
        }
    } else {
        return {
            mild: "34",
            moderate: "5",
            severe: "2",
            liveFeed: "display: none",
            pastLiveFeed: "display: block"
        }
    }
}