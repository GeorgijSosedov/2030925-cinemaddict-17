import AbstractView from "../framework/view/abstract-view";


const createNoFilmTemplate = () => (
`<p class="film__no-tasks">
Click «ADD NEW TASK» in menu to create your first task
</p>`
);
export default class NoFilmView extends AbstractView {

get template() {
    return createNoFilmTemplate();
};

};