export const mockUser = {
	username: 'Demo',
	location: 'Brooklyn, NY',
	about: 'My aesthetic interests center around post-conceptual blah blah blah.',
	profilePicURL: '/blank-profile-pic.png',
	comments: [],
	favoriteUsers: ''
}

export const mockDiscussions = [
	{
		id: '123',
		title: '1Caida libre (Free fall)',
		artist: '1Miguel Calderon',
		gallery: 'Luhring Augustine Bushwick',
		address: '25 Knickerbocker Ave',
		openDate: 'July 22, 2017',
		closeDate: 'July 29, 2017',
		description: '1Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.',
		comments: [
			{
				id: '765',
				author: 'Jimbo',
				date: 'yesterday',
				text: 'Yeah this is really great, love it.'
			},
			{
				id: '766',
				author: 'Jimbo bob',
				date: 'last week',
				text: 'This is dumb, hate it.'
			}
		]
	},
	{
		id: '124',
		title: '2Caida libre (Free fall)',
		artist: '2Miguel Calderon',
		gallery: 'Luhring Augustine Bushwick',
		address: '25 Knickerbocker Ave',
		openDate: 'July 22, 2017',
		closeDate: 'July 29, 2017',
		description: '2Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.',
		comments: []
	},
	{
		id: '125',
		title: '3Caida libre (Free fall)',
		artist: '3Miguel Calderon',
		gallery: 'Luhring Augustine Bushwick',
		address: '25 Knickerbocker Ave',
		openDate: 'July 22, 2017',
		closeDate: 'July 29, 2017',
		description: '3Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.',
		comments: []
	}

]

export const mockCommunity = [
	{
		username: 'OzzyOsbourne',
		discussion: {
			id: '124',
			title: '2Caida libre (Free fall)',
			artist: '2Miguel Calderon',
			gallery: 'Luhring Augustine Bushwick',
			address: '25 Knickerbocker Ave',
			openDate: 'July 22, 2017',
			closeDate: 'July 29, 2017',
			description: '2Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.',
			comments: []
		},
		commentId: '765',
		date: '2 minutes ago',
		comment: 'I found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation'
	},
	{
		username: 'Jake the Snake',
		discussion: {
			id: '125',
			title: '3Caida libre (Free fall)',
			artist: '3Miguel Calderon',
			gallery: 'Luhring Augustine Bushwick',
			address: '25 Knickerbocker Ave',
			openDate: 'July 22, 2017',
			closeDate: 'July 29, 2017',
			description: '3Luhring Augustine is pleased to announce Caída libre (Free fall), an exhibition by Miguel Calderón, featuring a film and sculptural installation centered on the theme of falconry. This presentation in the gallery’s Bushwick location is organized in collaboration with kurimanzutto, Mexico City.',
			comments: []
		},
		commentId: '777',
		date: '2 hours ago',		
		comment: 'I still found that the ancient sport of hunting with falcons becomes a metaphor for the interdependence of man and animal in this Mexican artist’s film and sculptural installation'
	}
]