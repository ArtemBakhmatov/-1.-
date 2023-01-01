import { checkNumInputs } from "./checkNumInputs";

const changeModalState = (state) => {   // изменить состояние модели
    const windowForm = document.querySelectorAll('.balcon_icons_img'), // табы с окнами 
         windowWidth = document.querySelectorAll('#width'),            // Кнопка ширина
        windowHeight = document.querySelectorAll('#height'),           // Кнопка высота
          windowType = document.querySelectorAll('#view_type'),        // тег select
       windowProfile = document.querySelectorAll('.checkbox');         // инпуты с галочками

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) { // привязать Действие к Элементам
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if(elem.length > 1) {
                //     state[prop] = i;  // element.form - Элементы хранят ссылку на свою форму в свойстве form
                // } else {
                //     state[prop] = item.value;
                // }
                // console.log(state);
                switch(item.nodeName) { // nodeName - имя нашей ноды
                    case 'SPAN':
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                            console.log('checbox');
                        } else {
                            state[prop] = item.value;
                            console.log('input');
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        console.log('select');
                        break;
                };
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'type');
    
}; 

export {changeModalState};