/**
 * @typedef {import("../application").Application} Application
 */

export class GameAnalyticsInterface {
    constructor(app) {
        /** @type {Application} */
        this.app = app;
    }

    /**
     * Initializes the analytics
     * @returns {Promise<void>}
     */
    initialize() {
        abstract;
        return Promise.reject();
    }

    /**
     * Handles a new game which was started
     */
    handleGameStarted() {}

    /**
     * Handles a resumed game
     */
    handleGameResumed() {}

    /**
     * Handles the given level completed
     * @param {number} level
     */
    handleLevelCompleted(level) {}
}
