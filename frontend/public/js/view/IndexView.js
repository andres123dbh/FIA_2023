export class IndexView {
    constructor() {
    }
    disease_found(conjunct_conflict, facts_base, rules_used, disease) {
        const div_son = document.getElementById("son");
        div_son.innerHTML = "";
        const title = document.createElement("h1");
        title.textContent = "Enfermedad Encontrada";
        const title_disease_info = document.createElement("h3");
        title_disease_info.textContent = "Enfermedad:";
        const disease_info = document.createElement("p");
        disease_info.textContent = disease.title;
        const title_healing = document.createElement("h3");
        title_healing.textContent = "Posible cura:";
        const healing = document.createElement("p");
        healing.innerHTML = disease.healing;
        healing.classList.add("healing_text");
        const title_rules = document.createElement("h3");
        title_rules.textContent = "Numero de Reglas Escogidas:";
        const rules = document.createElement("p");
        rules.textContent = rules_used.length.toString();
        const button = document.createElement("button");
        button.textContent = "Reiniciar";
        button.addEventListener('click', () => {
            window.location.reload();
        });
        button.classList.add("enf_button");
        div_son.appendChild(title);
        div_son.appendChild(title_disease_info);
        div_son.appendChild(disease_info);
        div_son.appendChild(title_healing);
        div_son.appendChild(healing);
        div_son.appendChild(title_rules);
        div_son.appendChild(rules);
        div_son.appendChild(button);
        console.log(conjunct_conflict);
        console.log(facts_base);
        console.log(rules_used);
        console.log(disease);
    }
}
