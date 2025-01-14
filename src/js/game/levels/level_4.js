import { Vector } from "../../core/vector";
import { Level } from "../level";

export class Level_4 extends Level {
    constructor() {
        super("level_4", 3);
    }

    getDimensions() {
        return new Vector(6, 6);
    }

    getTotalBuildingsNeeded() {
        let buildings = this.getBaseBuildingsNeeded();
        buildings.set("painter.mirrored", { count: 1 });
        buildings.set("balancer.default", { count: 2 });
        buildings.set("belt.default", { count: 3 });
        buildings.set("mixer.default", { count: 2 });
        buildings.set("balancer.splitter", { count: 1 });
        buildings.set("stacker.default", { count: 1 });

        return buildings;
    }

    setupLevel(root) {
        return [
            ["hub", new Vector(5, 3), "left", 0, 0, "default"],
            ["item_producer", new Vector(0, 1), "right", 0, 0, "default", "RuRuRuRu"],
            ["item_producer", new Vector(2, 5), "top", 0, 0, "default", "blue"],
            ["item_producer", new Vector(3, 5), "top", 0, 0, "default", "green"],
            ["item_producer", new Vector(4, 5), "top", 0, 0, "default", "red"],
        ];
    }
}
