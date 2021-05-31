//Class for comfortable work with dynamic styles
export class ObjectControlStyles {

    //Server data validation
    static DataValidStyle(color) {
        document.getElementById("borders").style.backgroundColor = `${color}`
    }

    //Server update validation
    static DataUpdateValidStyle(visibility) {
        document.getElementById("UpdateValidation").style.visibility = `${visibility}`
    }

    //Disabling button from server
    static ButtonDisabledFromServerError() {
        document.getElementById('loading').className = 'loader'
        const buttonDisabled = document.getElementsByClassName('ActionButton')[0]
        buttonDisabled.disabled = 'true'
        buttonDisabled.style.backgroundColor = "#f00"
        buttonDisabled.textContent = 'Server Error'
        buttonDisabled.style.opacity = '0.5'
    }

    //Enabling button from server
    static ButtonEnabledFromServer() {
        document.getElementById('loading').className = ''
        const buttonEnabled = document.getElementsByClassName('ActionButton')[0]
        buttonEnabled.removeAttribute('disabled')
        buttonEnabled.style.backgroundColor = "#091aee"
        buttonEnabled.textContent = 'Add new'
        buttonEnabled.style.opacity = '1'
    }
}

