const translate = document.querySelector('.translate');

const profile = <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
    unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>;
//
function content(){
    ReactDOM.render(profile, document.querySelector('.boxp'));
    ReactDOM.render(profile, document.querySelector('.boxe'));
    ReactDOM.render(profile, document.querySelector('.boxed'));
    ReactDOM.render(profile, document.querySelector('.boxt'));
    ReactDOM.render(profile, document.querySelector('.boxc'));
}
function ruscontent() {
    ReactDOM.render(rusprofile, document.querySelector('.boxp'));
    ReactDOM.render(rusprofile, document.querySelector('.boxe'));
    ReactDOM.render(rusprofile, document.querySelector('.boxed'));
    ReactDOM.render(rusprofile, document.querySelector('.boxt'));
    ReactDOM.render(rusprofile, document.querySelector('.boxc'));
}
//

const rusprofile = <p class="text" id="rus">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." </p>;
window.onload = content();
translate.addEventListener('click', function () {
    if (!document.getElementById('rus')){
        ruscontent();
    }else{content();}
});