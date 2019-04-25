function toggleSubSection(id) {
	let week = document.getElementById(id);
	let topics = week.querySelectorAll('.subSection');
	if (topics) {
		for (const topic of topics) {
			topic.classList.toggle('hidden')
		}
	}
	let chevron = week.querySelector('.chevron');
	if (chevron) {
		chevron.classList.toggle('rotate-down');
	}
}

export default toggleSubSection;