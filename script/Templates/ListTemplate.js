export const listTemplate = (toDo , LINE , DONE) => {
    return `<li class="item">
    <i class="fa ${DONE} co" job="complete"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete"></i>
    </li>
    `;
}