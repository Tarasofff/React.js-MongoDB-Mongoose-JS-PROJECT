const NoteModel = require('../Schema')
const colors = require('colors/safe');

//Main class to control data
class DataController {

    //POST request from Web-site for validation and creation objects
    async postData(req, res) {
        const {_number: Number, _date_created: Created, _date_supplied: Supplied, _comment: Comment} = req

        const note = await NoteModel.findOne({data: req})
        if (note) {
            console.log(colors.underline("Record already exists: "), req)
            res.status(400).json({
                message: "Such a record already exists"
            })
        } else {
            const pattern = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/; //date validation
            if (Number === undefined || Number.length < 7 ||
                Created === undefined || pattern.test(Created) || Created === "" ||
                Supplied === undefined || pattern.test(Supplied) || Supplied === "" ||
                Comment === undefined || Comment.length < 10 || Comment.length > 160) {

                res.json({
                    message: "object cannot validation",
                    Background: `#f00`
                })
                console.log(colors.red("Invalid validation: "), req)
            } else {
                const notemodel = new NoteModel({
                    data: req
                })
                notemodel
                    .save()
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                res.status(201).json({
                    message: "SUCCESS POST",
                    createNote: notemodel,
                    Background: `#fff`,
                })
                console.log(colors.green("Validation success: "), req)
            }
        }
    }

    //DELETE request to delete data
    async deleteData(req, res) {
        const delnote = await NoteModel.findOne({data: req})
        if (!delnote) {
            console.log(colors.underline("DELETED EARLIER: "), req)
            res.status(404).json({
                message: "The object has already deleted earlier"
            })
        } else {
            await NoteModel.findOneAndDelete({data: req}, {}, (err, docs) => {
                if (err) {
                    console.log(colors.red("DELETE DATA ERROR: "), err)
                    res.status(500).json({
                        message: "There was an error to deleting the object",
                        deleted: req
                    })
                }
                res.status(200).json({
                    message: "SUCCESSFUL DELETE",
                    deleted: docs
                })
                console.log(colors.rainbow("OBJECT DELETED: "), docs)
            })
        }
    }

    // PUT request to updating data
    async updateData(req, res) {
        const {_number: updateNumber, _date_created: updateDateCreated, _date_supplied: updateDateSupplied, _comment: updateComment, _id: currentID} = req
        const updateNote = await NoteModel.findById({_id: currentID})
        if (!updateNote) {
            console.log(colors.underline("Cannot find updating object: "), req)
            res.status(404).json({
                message: "Cannot find this object",
                updateObject: req
            })
        } else {
            const pattern = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/; //date validation
            if (updateNumber === undefined || updateNumber.length < 7 ||
                updateDateCreated === undefined || pattern.test(updateDateCreated) || updateDateCreated === "" ||
                updateDateSupplied === undefined || pattern.test(updateDateSupplied) || updateDateSupplied === "" ||
                updateComment === undefined || updateComment.length < 10 || updateComment.length > 160) {

                res.json({
                    message: "object cannot validation",
                    Visibility: 'visible'
                })
                console.log(colors.red("Invalid validation: "), req)
            } else {
                await NoteModel.updateOne({_id: req._id}, {data: req}, {new: true}, (err, docs) => {
                    if (err) {
                        console.log(colors.red("There was an error to updating object "), err)
                        res.status(500).json({
                            message: "There was an error to updating object",
                            updateObject: updateNote
                        })
                    } else {
                        res.status(200).json({
                            message: "UPDATE SUCCESSFUL",
                            updateObject: docs,
                            Visibility: 'hidden'
                        })
                        console.log(colors.rainbow("UPDATE OBJECT: "), docs)
                    }
                })
            }

        }
    }

    //Get request to readable data
    async getData(req, res) {
        await NoteModel.find({}, (err, docs) => {
            if (err) {
                console.log(colors.red("FIND DATA ERROR: "), err)
                res.status(500).json({
                    message: "Cannot find documents",
                    document: docs
                })
            } else {
                if (docs.length === 0) {
                    res.json({
                        message: "Empty data",
                        Documents: docs
                    })
                } else {
                    res.status(200).send(docs)
                }
            }
        })

    }

    //Local method to visualisation all data in console
    get getAllData() {
        NoteModel.find({}, (err, docs) => {
            if (err) console.log(err)
            console.log(docs)
        })

    }
}

module.exports = new DataController()