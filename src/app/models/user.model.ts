export class User {

    constructor(   
        public email: string,
        public name: string,
        public password?: string,
        public google?: boolean,
        public img?: string,
        public rol?: string,
        public uid?: string,     
    ){}
}