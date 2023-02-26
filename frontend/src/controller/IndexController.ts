import { IndexModel } from "../model/IndexModel.js";
import { IndexView } from "../view/IndexView.js";


export class IndexController {
    public model: IndexModel;
    public view: IndexView;

    constructor(model: IndexModel, view: IndexView) {
        this.model = model;
        this.view = view;
        this.add_funtion_element();
    }

    add_funtion_element() {
        const button_start_algorithm = document.getElementById('start_button');
        button_start_algorithm?.addEventListener('click', () => {
            const ckeckbox =  Array.from(document.getElementsByClassName('checkbox_palms'));
            for (let element of ckeckbox){
                const checkbox_palms = element as HTMLInputElement;
                if (checkbox_palms.checked) {
                    this.model.add_facts_base(checkbox_palms.value);
                }
            }
            this.model.check_conjunct_conflict();
            if (this.model.is_disease) {
                this.view.disease_found(this.model.conjunct_conflict,this.model.facts_base,this.model.rules_used,this.model.get_disease());
                this.model.clear_all();
            }else{
                alert("Enfermedad no encontrada");
                this.model.clear_all();
            }
        });
    }

}