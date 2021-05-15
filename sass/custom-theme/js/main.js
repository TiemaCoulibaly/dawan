bootsrap.DropDown;
var dropdownElementList = [].slice.call(
	document.querySelectorAll(".dropdown-trigger")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
	return new bootstrap.Dropdown(dropdownToggleEl);
});
