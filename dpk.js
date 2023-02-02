const crypto = require("crypto");
import { maxPartitionKeyLength, trivialPartitionKey } from "./Constants";
import { createhash } from "./utility";

exports.deterministicPartitionKey = (event) => {
	let candidate = trivialPartitionKey;

	if (event) {
		candidate = event?.partitionKey || JSON.stringify(event);
		candidate = JSON.stringify(candidate);
	}
	if (candidate.length > maxPartitionKeyLength) {
		candidate = createhash(candidate);
	}
	return candidate;

	//   if (event.partitionKey) {
	//     candidate = event.partitionKey;
	//   } else {
	//     const data = JSON.stringify(event);
	//     candidate = createhash(data);
	//   }
	// }

	// if (candidate) {
	//   if (typeof candidate !== "string") {
	//     candidate = JSON.stringify(candidate);
	//   }
	// } else {
	//   candidate = TRIVIAL_PARTITION_KEY;
	// }
	// if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
	//   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
	// }
};
