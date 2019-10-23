export var convertedString;

const accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
const accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";

export class StringUtils {
    constructor() {
    }

    //called by importing StringUtils and by using 'let convertedText = StringUtils.StringUtilsManager(text, true, false, true);' or just 'let convertedText = StringUtils.StringUtilsManager(text);' if everything is true.
    static StringUtilsManager(text, accentsTrueFalse = true, spacesTrueFalse = true, capsTrueFalse = true, dotsTrueFalse = true) {
        let convertedString = text;
        if (accentsTrueFalse) {
            convertedString = this.RemoveAccents(convertedString);
        }
        if (spacesTrueFalse) {
            convertedString = this.RemoveSpaces(convertedString);
        }
        if (capsTrueFalse) {
            convertedString = this.RemoveCaps(convertedString);
        }
        if (dotsTrueFalse) {
            convertedString = this.RemoveDots(convertedString);
        }
        return convertedString;
    }

    //called by importing StringUtils and by using 'let noAccentsText = StringUtils.RemoveAccents(text);
    static RemoveAccents(text) {
        let textLen = text.length;
        let i, x;
        let convertedString = text;
        convertedString = convertedString.split('');
        for (i = 0; i < textLen; i++) {
            if ((x = accents.indexOf(convertedString[i])) != -1) {
                convertedString[i] = accentsOut[x];
            }
        }
        convertedString = convertedString.join('');
        return convertedString;
    }

    //called by importing StringUtils and by using 'let noSpacesText = StringUtils.RemoveSpaces(text);
    static RemoveSpaces(text) {
        let convertedString = text;
        convertedString = convertedString.split(/\s+/g).join('_');
        return convertedString;
    }

    //called by importing StringUtils and by using 'let noCapsText = StringUtils.RemoveCaps(text);
    static RemoveCaps(text) {
        let convertedString = text;
        convertedString = convertedString.toLowerCase();
        return convertedString;
    }

    //called by importing StringUtils and by using 'let noSpacesText = StringUtils.RemoveSpaces(text);
    static RemoveDots(text) {
        let convertedString = text;
        convertedString = convertedString.split('.').join("");
        return convertedString;
    }

}