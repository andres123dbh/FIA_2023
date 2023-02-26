export class IndexView {
    constructor (){

    }

    public disease_found( conjunct_conflict:Array<number>,facts_base:Array<String>,rules_used:Array<number>,disease:Object|null){
        location.href = '/public/disease_found.html';
        console.log(conjunct_conflict);
        console.log(facts_base);
        console.log(rules_used);
        console.log(disease);
    }
}