var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
	clientId: '6048941a948747dcbaf49e8a4aa39a54',
	clientSecret: 'f096f6ad3cc149d69c1b22c5b64dd6fe'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
	function(data) {
		console.log('The access token expires in ' + data.body.access_token);
		console.log('The access token is ' + data.body.access_token);

		// Save the access token so that it's used in future calls
		spotifyApi.setAccessToken(data.body.access_token);
	},
	function(err) {
		console.log(
			'Something went wrong when retrieving an access token',
			err.message
		);
	}
);

router.get('/', function(req, res) {
	spotifyApi.getAlbums(['1oA5gS57LrStSzavWwXZHx', '2VhEkjIRkcyETAwCrt6XR0',
		'7azo4rpSUh8nXgtonC6Pkq', '52smeiovut2Hhkja6x992D',
		'3T4tUhGYeRNVUGevb0wThu', '7LF4N7lvyDhrPBuCJ1rplJ',
		'6leYdBPs1XzfUgpc8xgeSi', '3RZxrS2dDZlbsYtMRM89v8', '1tuyae3OJleKl8rAY743Qa',
		'3NAMtgP845mM6cJjYDYy1g', '053rrmSCLKCIOJG9mw8XXR', '3Gef2xMe3ihEF1UILkiriu', '5MqnE5fKbjWn25aA091gd0',
		'5a3Je5YG4cYIS0Yg4ZoY01', '75tmDdVdpjSQwoEc0WjRug'
	],
		function(err, data) {
			if (err) throw err;
			var firstAlbumImage = data.body.albums[0].images[0].url;
			var secondAlbumImage = data.body.albums[1].images[0].url;
			var thirdAlbumImage = data.body.albums[2].images[0].url;
			var fourthAlbumImage = data.body.albums[3].images[2].url;
			var fifthAlbumImage = data.body.albums[4].images[0].url;
			var sixthAlbumImage = data.body.albums[5].images[0].url;
			var seventhAlbumImage = data.body.albums[6].images[0].url;
			var eigthAlbumImage = data.body.albums[7].images[0].url;
			var ninthAlbumImage = data.body.albums[8].images[0].url;
			var t1AlbumImage = data.body.albums[9].images[0].url;
			var t2AlbumImage = data.body.albums[10].images[0].url;
			var t3AlbumImage = data.body.albums[11].images[0].url;
			var t4AlbumImage = data.body.albums[12].images[0].url;
			var t5AlbumImage = data.body.albums[13].images[0].url;
			var t6AlbumImage = data.body.albums[14].images[0].url;
			var firstAlbumName = data.body.albums[0].name;
			var secondAlbumName = data.body.albums[1].name;
			var thirdAlbumName = data.body.albums[2].name;
			var fourthAlbumName = data.body.albums[3].name;
			var fifthAlbumName = data.body.albums[4].name;
			var sixthAlbumName = data.body.albums[5].name;
			var seventhAlbumName = data.body.albums[6].name;
			var eigthAlbumName = data.body.albums[7].name;
			var ninthAlbumName = data.body.albums[8].name;
			var t1AlbumName = data.body.albums[9].name;
			var t2AlbumName = data.body.albums[10].name;
			var t3AlbumName = data.body.albums[11].name;
			var t4AlbumName = data.body.albums[12].name;
			var t5AlbumName = data.body.albums[13].name;
			var t6AlbumName = data.body.albums[14].name;

			// get tracks in first album
			spotifyApi.getAlbumTracks('1oA5gS57LrStSzavWwXZHx', {
				limit: 1,
				offset: 1
			}, function(err, data) {
				if (err) throw err;
				var resultOne = data.body.items[0];
				// Get tracks in second album
				spotifyApi.getAlbumTracks('2VhEkjIRkcyETAwCrt6XR0', {
					limit: 1,
					offset: 1
				}, function(err, data) {
					if (err) throw err;
					var resultTwo = data.body.items[0];
					// Get tracks in third album
				spotifyApi.getAlbumTracks('7azo4rpSUh8nXgtonC6Pkq', {
					limit: 2,
					offset: 1
				}, function(err, data) {
					if (err) throw err;
					var resultThree = data.body.items[0];
						// Get tracks in fourth album
						spotifyApi.getAlbumTracks('52smeiovut2Hhkja6x992D', {
							limit: 1,
							offset: 1
						}, function(err, data) {
							if (err) throw err;
							var resultFour = data.body.items[0];
							// Get tracks in fifth album
							spotifyApi.getAlbumTracks('6cunQQ7YZisYOoiFu2ywIq', {
								limit: 1,
								offset: 3
							}, function(err, data) {
								if (err) throw err;
								var resultFive = data.body.items[0];
								// Get tracks in sixth album
								spotifyApi.getAlbumTracks('7LF4N7lvyDhrPBuCJ1rplJ', {
									limit: 1,
									offset: 1
								}, function(err, data) {
									if (err) throw err;
									var resultSix = data.body.items[0];
									// Get tracks in Seventh album
									spotifyApi.getAlbumTracks('6leYdBPs1XzfUgpc8xgeSi', {
										limit: 2,
										offset: 1
									}, function(err, data) {
										if (err) throw err;
										var resultSeven = data.body.items[1];
										// Get tracks in eigth album
										spotifyApi.getAlbumTracks('3RZxrS2dDZlbsYtMRM89v8', {
											limit: 1,
											offset: 1
										}, function(err, data) {
											if (err) throw err;
											var resultEigth = data.body.items[0];
											// Get tracks in ninth album
											spotifyApi.getAlbumTracks('1tuyae3OJleKl8rAY743Qa', {
												limit: 1,
												offset: 1
											}, function(err, data) {
												if (err) throw err;
												var resultNine = data.body.items[0];
												// Get tracks in tamil 1st album
												spotifyApi.getAlbumTracks('3NAMtgP845mM6cJjYDYy1g', {
													limit: 1,
													offset: 1
												}, function(err, data) {
													if (err) throw err;
													var resultt1 = data.body.items[0];
													// Get tracks in tamil 2nd album
													spotifyApi.getAlbumTracks('053rrmSCLKCIOJG9mw8XXR', {
														limit: 1,
														offset: 1
													}, function(err, data) {
														if (err) throw err;
														var resultt2 = data.body.items[0];
														// Get tracks in tamil 3rd album
														spotifyApi.getAlbumTracks('3Gef2xMe3ihEF1UILkiriu', {
															limit: 1,
															offset: 1
														}, function(err, data) {
															if (err) throw err;
															var resultt3 = data.body.items[0];
															// Get tracks in tamil 4th album
															spotifyApi.getAlbumTracks('5MqnE5fKbjWn25aA091gd0', {
																limit: 1,
																offset: 1
															}, function(err, data) {
																if (err) throw err;
																var resultt4 = data.body.items[0];
																// Get tracks in tamil 5th album
																spotifyApi.getAlbumTracks('5a3Je5YG4cYIS0Yg4ZoY01', {
																	limit: 1,
																	offset: 1
																}, function(err, data) {
																	if (err) throw err;
																	var resultt5 = data.body.items[0];
																	// Get tracks in tamil 6th album
																	spotifyApi.getAlbumTracks('75tmDdVdpjSQwoEc0WjRug', {
																		limit: 1,
																		offset: 1
																	}, function(err, data) {
																		if (err) throw err;
																		var resultt6 = data.body.items[0];
																		res.render('index', {
																			title: 'Music World',
																			style: 'index.css',
																			script: 'addToPlay.js',
																			firstAlbumImage: firstAlbumImage,
																			secondAlbumImage: secondAlbumImage,
																			thirdAlbumImage: thirdAlbumImage,
																			fourthAlbumImage: fourthAlbumImage,
																			fifthAlbumImage: fifthAlbumImage,
																			sixthAlbumImage: sixthAlbumImage,
																			seventhAlbumImage: seventhAlbumImage,
																			eigthAlbumImage: eigthAlbumImage,
																			ninthAlbumImage: ninthAlbumImage,
																			t1AlbumImage: t1AlbumImage,
																			t2AlbumImage: t2AlbumImage,
																			t3AlbumImage: t3AlbumImage,
																			t4AlbumImage: t4AlbumImage,
																			t5AlbumImage: t5AlbumImage,
																			t6AlbumImage: t6AlbumImage,
																			firstAlbumName: firstAlbumName,
																			secondAlbumName: secondAlbumName,
																			thirdAlbumName: thirdAlbumName,
																			fourthAlbumName: fourthAlbumName,
																			fifthAlbumName: fifthAlbumName,
																			sixthAlbumName: sixthAlbumName,
																			seventhAlbumName: seventhAlbumName,
																			eigthAlbumName: eigthAlbumName,
																			ninthAlbumName: ninthAlbumName,
																			t1AlbumName: t1AlbumName,
																			t2AlbumName: t2AlbumName,
																			t3AlbumName: t3AlbumName,
																			t4AlbumName: t4AlbumName,
																			t5AlbumName: t5AlbumName,
																			t6AlbumName: t6AlbumName,
																			audioOne: resultOne,
																			audioTwo: resultTwo,
																			audioThree: resultThree,
																			audioFour: resultFour,
																			audioFive: resultFive,
																			audioSix: resultSix,
																			audioSeven: resultSeven,
																			audioEigth: resultEigth,
																			audioNine: resultNine,
																			audiot1: resultt1,
																			audiot2: resultt2,
																			audiot3: resultt3,
																			audiot4: resultt4,
																			audiot5: resultt5,
																			audiot6: resultt6,
																			user: req.session.user,
																			username: req.session.username
																		});


																	});


																});


															});


														});


													});



												});
											});
										});
									});
								});
							});

						});
					});
				});
			});

		});
});

router.get('/search/:data', function(req, res) {
	console.log('search word' + req.params.data);
	spotifyApi.searchTracks(req.params.data)
		.then(function(data) {
			res.send(data.body.tracks.items);
		}, function(err) {
			console.error(err);
		});
});

module.exports = router;