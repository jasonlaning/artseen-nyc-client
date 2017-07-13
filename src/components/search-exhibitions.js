const searchExhibitions = (searchTerms, exhibitions) => {

	let searchResults = [];
	searchTerms = searchTerms.replace(/[|&;$%@":“”<>()+,]/g, "").toLowerCase().match(/\S+/g);
	console.log('search terms: ', searchTerms);

	exhibitions.forEach(exhibition => {
		
			let strToSearch = `${exhibition.Name} ${exhibition.Venue.Name}`;
			exhibition.Media.forEach(medium => {
				strToSearch += ` ${medium.toLowerCase()} `;
			})
			let arrToSearch = strToSearch.replace(/[|&;$%@":“”<>()+,]/g, "").toLowerCase().match(/\S+/g);	
			let matchFound = false;
			let i = 0;
			while (!matchFound) {
				if (arrToSearch.indexOf(searchTerms[i]) !== -1) {
					searchResults.push(exhibition);
					matchFound = true;
				} else if (i === (searchTerms.length - 1)) {
					matchFound = true;
				} else {
					i++;
				}
			}
	})
	return searchResults;
}

export default searchExhibitions;