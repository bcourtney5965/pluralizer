function pluralize(noun, number) {
	 if (number != 1 && noun != "sheep" && noun != "geese") {
		return "I have " + number + " " + noun + "s";
	} else {
		return "I have " + number + " " + noun;
	}
}
console.log(pluralize("pig", 3));
console.log(pluralize("sheep", 1));
console.log(pluralize("sheep", 2));
console.log(pluralize("geese", 1));
console.log(pluralize("geese", 2));
console.log(pluralize("dog", 1));