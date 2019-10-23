import { StringUtils } from "../assets/js/class/StringUtils";

let assert = require('assert'),
    text = "TESTéè Unit.";

describe('StringUtils.', function() {
    describe('StringUtilsManager()', function() {
        it('Given text "TESTéè Unit" should return "testee_unit"', function() {
            assert.strictEqual(StringUtils.StringUtilsManager(text, true, true, true, true),"testee_unit");
        });
    });
    describe('RemoveAccents()', function() {
        it('Given text "TESTéè Unit" should return "TESTee Unit."', function() {
            assert.strictEqual(StringUtils.RemoveAccents(text),"TESTee Unit.");
        });
    });
    describe('StringUtilsManager()', function() {
        it('Given text "TESTéè Unit" should return "TESTéè_Unit."', function() {
            assert.strictEqual(StringUtils.RemoveSpaces(text),"TESTéè_Unit.");
        });
    });
    describe('StringUtilsManager()', function() {
        it('Given text "TESTéè Unit" should return "testéè unit."', function() {
            assert.strictEqual(StringUtils.RemoveCaps(text),"testéè unit.");
        });
    });
    describe('StringUtilsManager()', function() {
        it('Given text "TESTéè Unit" should return "TESTéè Unit"', function() {
            assert.strictEqual(StringUtils.RemoveDots(text),"TESTéè Unit");
        });
    });
});


