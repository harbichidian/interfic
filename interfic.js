$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

window.addEventListener("hashchange", function(e) {
	var newPage = $(location.hash).closest("template").content.cloneNode(true);
	
	var pageContainer = $("#page-container");
	pageContainer.innerHTML = "";
	pageContainer.appendChild(newPage);
	
	localStorage.lastPage = location.hash;
	history.replaceState(undefined, document.title, location.pathname);
});

window.addEventListener("DOMContentLoaded", function() {
	location.hash =
		localStorage.lastPage || 
		$("#page-container").getAttribute("page-start") ||
		"start";
});