function toggleResourceLinks(id, i) {
	let resources = document.getElementById(id)
		.querySelectorAll('.resourceLink');
		console.log(id)
	if (resources.length) {
		resources[i].classList.toggle('hidden');
	}
	let topics = document.getElementById(id)
		.querySelectorAll('.subSection')
	if (topics[i]) {
		topics[i].querySelector('.chevron')
			.classList.toggle('rotate-down')
	}
}

export default toggleResourceLinks