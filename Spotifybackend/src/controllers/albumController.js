const { v2: cloudinary } = require('cloudinary');
const albumModel = require('../models/albumModel')


const addAlbum = async (req, res) => {

    try {
        let { name, desc, bgColor } = req.body;
        const image = req.files.image[0];
        console.log("Image path:", image.path);
        const imageUpload = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
        console.log("Image uploaded:", imageUpload);

        console.log(name, bgColor, desc, imageUpload);

        const albumdata = await albumModel.create({
            name,
            desc,
            image: imageUpload.secure_url,
            bgColor,
        })
        await albumdata.save()
        res.json({ success: true, message: "album created " })
    }
    catch (err) {
        console.error(err);
        res.json({ success: false, message: "song didn't get created " })
    }



}

const listAlbum = async (req, res) => {

    try {
        const albumdata = await albumModel.find({});
        res.json({ success: true, album: albumdata });
    }
    catch (err) {
        console.error(err);
        res.json({ success: true, message: "no data found" });
    }

}

const deleteAlbum = async (req, res) => {


    try {
        const id = req.body.id;
        await albumModel.findOneAndDelete(id);

        res.status(200).json({ success: true, message: "album removed" });

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { addAlbum, listAlbum, deleteAlbum }


