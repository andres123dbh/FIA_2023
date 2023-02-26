import disease from "../db/data.js";
export class IndexModel {
    constructor() {
        this.rules = new Map();
        this.conjunct_conflict = [];
        this.facts_base = [];
        this.rules_used = [];
        this.is_disease = false;
        this.rules.set(1, [["A", "E"], "BA"]);
        this.rules.set(2, [["A", "F"], "BB"]);
        this.rules.set(3, [["B", "J"], "BD"]);
        this.rules.set(4, [["B", "CB"], "BE"]);
        this.rules.set(5, [["B", "CC"], "BF"]);
        this.rules.set(6, [["CA", "R"], "BH"]);
        this.rules.set(7, [["AY", "CD"], "BI"]);
        this.rules.set(8, [["AY", "V"], "BJ"]);
        this.rules.set(9, [["AZ", "CE"], "BM"]);
        this.rules.set(10, [["D", "CF"], "AJ"]);
        this.rules.set(11, [["AZ", "CG"], "BR"]);
        this.rules.set(12, [["D", "AX"], "BT"]);
        this.rules.set(13, [["C", "M"], "AY"]);
        this.rules.set(14, [["D", "M"], "AZ"]);
        this.rules.set(15, [["C", "Q"], "CA"]);
        this.rules.set(16, [["K", "M"], "CB"]);
        this.rules.set(17, [["L", "T"], "CC"]);
        this.rules.set(18, [["S", "U"], "CD"]);
        this.rules.set(19, [["AD", "AE"], "CE"]);
        this.rules.set(20, [["AN", "AO"], "CF"]);
        this.rules.set(21, [["AT", "AU"], "CG"]);
    }
    check_conjunct_conflict() {
        for (let entry of this.rules.entries()) {
            let number_variable_accepted = 0;
            for (let element of this.facts_base) {
                if (element == entry[1][0][0] || element == entry[1][0][1]) {
                    number_variable_accepted += 1;
                }
            }
            if (number_variable_accepted == 2) {
                if (this.conjunct_conflict.includes(entry[0]) == false && this.rules_used.includes(entry[0]) == false) {
                    this.add_conjunct_conflict(entry[0]);
                }
            }
        }
        this.conjunct_conflict = this.bubbleSort(this.conjunct_conflict);
        this.for_the_minor();
    }
    for_the_minor() {
        if (this.conjunct_conflict.length > 0) {
            let element = this.conjunct_conflict.shift();
            this.add_rules_used(element);
            let rule = this.rules.get(element);
            this.add_facts_base(rule[1]);
            if (this.check_if_disease()) {
                this.is_disease = true;
                return;
            }
            this.check_conjunct_conflict();
        }
        else {
            this.clear_all();
        }
    }
    check_if_disease() {
        for (let element of disease) {
            if (this.facts_base.includes(element.letter)) {
                return true;
            }
        }
        return false;
    }
    add_facts_base(disease) {
        this.facts_base.push(disease);
    }
    clear_all() {
        this.conjunct_conflict = [];
        this.facts_base = [];
        this.rules_used = [];
        this.is_disease = false;
    }
    add_conjunct_conflict(rule) {
        this.conjunct_conflict.push(rule);
    }
    add_rules_used(rule) {
        this.rules_used.push(rule);
    }
    bubbleSort(array) {
        array = array.slice(); // creates a copy of the array
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    }
    get_disease() {
        for (let element of disease) {
            if (element.letter == this.facts_base[this.facts_base.length - 1]) {
                return element;
            }
        }
        return null;
    }
}
