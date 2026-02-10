document.addEventListener("DOMContentLoaded", () => {
	const paragraph = document.getElementById("dynamic-paragraph");
	const changeTextButton = document.getElementById("change-text-btn");
	const addItemButton = document.getElementById("add-item-btn");
	const list = document.getElementById("dynamic-list");

	let listCount = 0;

	if (changeTextButton && paragraph) {
		changeTextButton.addEventListener("click", () => {
			paragraph.textContent = "The paragraph text has been updated using JavaScript!";
		});
	}

	if (addItemButton && list) {
		addItemButton.addEventListener("click", () => {
			listCount += 1;
			const listItem = document.createElement("li");
			listItem.textContent = `List item ${listCount}`;
			list.appendChild(listItem);
		});
	}
});
