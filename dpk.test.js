const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe("0");
	});
	it("add the input with adding any partition key", () => {
		const trivialKey = deterministicPartitionKey({ payload: "abc" });
		expect(trivialKey).toHaveLength(128);
	});
	it("Add the partition key for the event keyUp in the input", () => {
		const trivialKey = deterministicPartitionKey({ partitionKey: "keyUp" });
		expect(trivialKey).toBe("keyUp");
	});
});
