import {FrontAPI} from "../API/API";

//Class for comfortable work with objects
export class DataConstructor {

    //Creating and send objects
    static NoteObjectConstructor(number = "INV-", date_created, date_supplied, comment) {
        const pattern = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/; //date validation

        if (number === undefined || number.length < 7 ||
            date_created === undefined || pattern.test(date_created) || date_created === "" ||
            date_supplied === undefined || pattern.test(date_supplied) || date_supplied === "" ||
            comment === undefined || comment.length < 10 || comment.length > 160) {

            document.getElementById("borders").style.backgroundColor = "#f00"
        } else {
            document.getElementById("borders").style.backgroundColor = ""

            const Note = {
                _number: number,
                _date_created: date_created,
                _date_supplied: date_supplied,
                _comment: comment,
            }
            console.log('Create note object: ', Note)
            FrontAPI.postDataFunction(Note) //POST
        }
    }

    //Updating objects
    static NoteUpdateConstructor(updateNumber, updateDateCreated, updateDateSupplied, updateComment, current) {
        const pattern = /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/; //date validation

        if (updateNumber === undefined || updateNumber.length < 7 ||
            updateDateCreated === undefined || pattern.test(updateDateCreated) || updateDateCreated === "" ||
            updateDateSupplied === undefined || pattern.test(updateDateSupplied) || updateDateSupplied === "" ||
            updateComment === undefined || updateComment.length < 10 || updateComment.length > 160) {

            document.getElementById("UpdateValidation").style.visibility = 'visible'
        } else {
            document.getElementById("UpdateValidation").style.visibility = 'hidden'

            const newObject = {
                _number: updateNumber,
                _date_created: updateDateCreated,
                _date_supplied: updateDateSupplied,
                _comment: updateComment,
                _id: current._id
            }
            FrontAPI.updateDataFunction(newObject)
            console.log("Updated field relate to this object: ", current, '\n', "New fields: ", newObject)
        }
    }
}


