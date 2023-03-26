"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const capitalize_1 = __importDefault(require("lodash/capitalize"));
const generate_1 = __importDefault(require("./generate"));
const generateUpdate = (props) => {
    const { outdir, entityName } = props;
    (0, generate_1.default)({
        templatePath: path_1.default.join(__dirname, "../templates/entity/update.hbs"),
        targetPath: path_1.default.join(outdir, entityName, "update.ts"),
        data: {
            entityName,
            entityInterface: (0, capitalize_1.default)(entityName),
        },
    });
};
exports.default = generateUpdate;
//# sourceMappingURL=generateUpdate.js.map