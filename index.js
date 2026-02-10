document.addEventListener("DOMContentLoaded", () => {
	const paragraph = document.getElementById("dynamic-paragraph");
	const changeTextButton = document.getElementById("change-text-btn");
	const addItemButton = document.getElementById("add-item-btn");
	const removeItemButton = document.getElementById("remove-item-btn");
	const list = document.getElementById("dynamic-list");
	const backgroundButtons = document.querySelectorAll(".bg-btn");

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

	if (removeItemButton && list) {
		removeItemButton.addEventListener("click", () => {
			const lastItem = list.lastElementChild;
			if (lastItem) {
				list.removeChild(lastItem);
				listCount = Math.max(0, listCount - 1);
			}
		});
	}

	if (backgroundButtons.length > 0) {
		backgroundButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const color = button.dataset.color;
				if (color) {
					document.body.style.backgroundColor = color;
				}
			});
		});
	}
});
