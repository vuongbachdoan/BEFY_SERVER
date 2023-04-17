const { ZingMp3 } = require("zingmp3-api-full")

const musicController = {
    all: async (req, res) => {
        let data = await ZingMp3.getHome()
        return res.json({
            data: data?.data?.items?.filter(item => item.sectionType === 'banner')
        });
    },
    getSong: async (req, res) => {
        let data = await ZingMp3.getSong(req.params.id);
        return res.json({
            data: data.data
        })
    },
    allPlaylists: async (req, res) => {
        let data = await ZingMp3.getPlayList();
        return res.json({
            data: data
        })
    },
    getDetailPlaylist: async (playlistId) => {
        let data = await ZingMp3.getDetailPlaylist(playlistId);
        return res.json({
            data: data
        })
    },
    getPlayList: async (playlistId) => {
        let data = await ZingMp3.getPlayList(playlistId);
        return res.json({
            data: data
        })
    },
    allArtists: async (req, res) => {
        let data = await ZingMp3.getArtist();
        return res.json({
            data: data
        })
    },
    getArtist: async (artistId) => {
        let data = await ZingMp3.getArtist(artistId);
        return res.json({
            data: data
        })
    },
    getTopSong: async (req, res) => {
        let data = await ZingMp3.getNewReleaseChart();
        return res.json({
            data: data
        })
    }
}

module.exports = musicController;