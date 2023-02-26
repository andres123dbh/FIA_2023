export class IndexView {
    constructor() {
    }
    disease_found(conjunct_conflict, facts_base, rules_used, disease) {
        location.href = '/public/disease_found.html';
        console.log(conjunct_conflict);
        console.log(facts_base);
        console.log(rules_used);
        console.log(disease);
    }
}
