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
    catch (uploadError) {
        res.json({ success: false, message: "song didn't " })
    }

}

const ListSong = async (req, res) => {

    try {
        const songdata = await songModel.find({});
        res.json({ success: true, song: songdata });
    }
    catch (err) {
        res.json({ success: true, message: "no data found" });
    }

}

module.exports = { AddSong, ListSong }