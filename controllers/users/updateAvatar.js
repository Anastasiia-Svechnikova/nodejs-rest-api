const fs = require('fs/promises');
const path = require('path')
const Jimp = require('jimp');
const User = require('../../models/user');



const resultDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const id = req.user.id;   
    const { path: tmpPath, originalname } = req.file;


    const fileName = `${id}${originalname}`
    const resultPath = path.join(resultDir, fileName)

    const image = await Jimp.read(tmpPath)
    image.resize(200,200, function(err){
        if (err) throw err;
    })
    .write(tmpPath);

    await fs.rename(tmpPath, resultPath)

    const avatarUrl = path.join('avatars', fileName)

    await User.findByIdAndUpdate(id, {avatarUrl}, { new: true })
    res.status(200).json({avatarURL:avatarUrl})
} 


module.exports = updateAvatar