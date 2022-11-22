import $ from 'jquery';

export class Mod1 {
    info() {
        const body = $('body');
        console.log(body);
    }
}

const mod1 = new Mod1();
export default mod1;
