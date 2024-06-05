document.addEventListener("DOMContentLoaded", (event) => {
	// Retrieve countdown seconds
	// const secondsElement = document.getElementById("seconds");
	// let seconds = secondsElement.textContent;
	
	let seconds = 5;
	
	// Set destination page
	const refreshElement = document.getElementById("refresh");
	const searchParams = new URLSearchParams(document.location.search);
	const destinationPage = searchParams.get("page");
	refreshElement.content = `${seconds}; url=${destinationPage}`;

	// Trigger countdown
	setInterval(() => {
		seconds -= 1;
		secondsElement.textContent = seconds;
	}, 1000);
});
