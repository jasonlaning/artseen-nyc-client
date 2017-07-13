import moment from 'moment';

const searchExhibitions = (searchTerms, exhibitions) => {

	let searchResults = [];
	searchTerms = searchTerms.replace(/[|&;$%@":“”<>()+,]/g, "").toLowerCase().match(/\S+/g);
	console.log('search terms: ', searchTerms);

	exhibitions.forEach(exhibition => {

		if (moment(exhibition.DateStart[0]).isValid() && moment(exhibition.DateEnd[0]).isValid()) {	
			let strToSearch = `${exhibition.Name} ${exhibition.Venue.Name}`;
			exhibition.Media.forEach(medium => {
				strToSearch += ` ${medium.toLowerCase()} `;
			})
			exhibition.searchTerms = strToSearch.replace(/[|&;$%@":“”<>()+,]/g, "")
				.replace(undefined, '').toLowerCase().match(/\S+/g);
			let matchFound = false;
			let i = 0;
			while (!matchFound) {
				if (exhibition.searchTerms.indexOf(searchTerms[i]) !== -1) {
					searchResults.push(exhibition);
					matchFound = true;
				} else if (i === (searchTerms.length - 1)) {
					matchFound = true;
				} else {
					i++;
				}
			}
		}
	})
	return searchResults;
}

export default searchExhibitions;