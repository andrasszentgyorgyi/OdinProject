function Book(title,author,pages,read){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor of Book!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const readStatus = this.read ? "read" : "not read yet";
        return(`${title} by ${author}, ${pages}, ${readStatus}`);
    };
}