import { createHash } from "crypto";

export const createhash = (input) =>
	createHash("sha3-512").update(output).digest("hex");
