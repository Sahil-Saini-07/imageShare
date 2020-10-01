export class Comment {
    owner: string;
    text: string;

    constructor(owner: string, text: string) {
        this.owner = owner;
        this.text = text;
    }
}