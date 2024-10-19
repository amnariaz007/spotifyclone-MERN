const { v2: cloudinary } = require('cloudinary');
const songModel = require('../models/songModel');

const AddSong = async (req, res) => {
    try {
        let { name, desc, album } = req.body;
        const audio = req.files.audio[0];
        const image = req.files.image[0];
        const audioUpload = await cloudinary.uploader.upload(audio.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
        const duration = `${Math.floor(audioUpload.duration) / 60}: ${Math.floor(audioUpload.duration % 60)} `

        const songdata = await songModel.create({
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        })
        await songdata.save()
        res.json({ success: true, message: "song added " })
    }
    catch (err) {
        console.error(err);
        res.json({ success: false, message: "song didn't get add " })
    }

}

const ListSong = async (req, res) => {

    try {
        const songdata = await songModel.find({});
        res.json({ success: true, song: songdata });
    }
    catch (err) {
        console.error(err);
        res.json({ success: true, message: "no data found" });
    }

}

const deleteSong = async (req, res) => {

    try {
        const id = req.body;
        await songModel.findOneAndDelete(id);

        res.status(200).json({ success: true, message: "song removed" });

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { AddSong, ListSong, deleteSong }