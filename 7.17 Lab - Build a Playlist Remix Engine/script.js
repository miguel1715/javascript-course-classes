const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) {
    return []
  };

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push({...arr[i][j], source: [i, j]})
    }
  }
  return result
}

function scoreTracks(arr) {
  return arr.map((track) => {
    return {...track, score: track.votes * 10 - Math.abs(track.bpm - 120)}
  });
}

function dedupeTracks(arr) {
  const seen = {};

  return arr.filter((track) => {
    if (!seen.hasOwnProperty(track.trackId)) {
      seen[track.trackId] = true;
      return true;
    }  else {
      return false;
    }
  })
}

function enforceArtistQuota(arr, nmb) {
  const count = {};

  return arr.filter((track) => {
    if (!count.hasOwnProperty(track.artist)) {
      count[track.artist] = 1;
      return true;
    } else if (count.hasOwnProperty(track.artist) && count[track.artist] < nmb) {
      count[track.artist] += 1;
      return true;
    } else {
      return false;
    }
  })
}

function buildSchedule(arr) {

}

function remixPlaylist(arr, maxNumb) {
 
}